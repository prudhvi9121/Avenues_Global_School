import React, { useState, useEffect } from 'react';
import {
  Box,
  Typography,
  Chip,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import {
  DataGrid,
  GridToolbarContainer,
  GridToolbarExport,
  GridToolbarFilterButton,
  GridToolbarColumnsButton,
  GridRenderCellParams,
} from '@mui/x-data-grid';
import {
  Visibility,
  CheckCircle,
  Cancel,
  Delete,
} from '@mui/icons-material';
import { collection, getDocs, updateDoc, doc, deleteDoc, Timestamp } from 'firebase/firestore';
import { db } from '../config/firebase';
import { toast } from 'react-toastify';

// Admission interface update: timestamp is now string (formatted date)
interface Admission {
  id: string;
  studentName: string;
  email: string;
  phone: string;
  grade: string;
  status: 'pending' | 'reviewed';  // Changed status options
  timestamp: string;
  dob?: string;
  gender?: string;
  address?: string;
}

interface DetailItemProps {
  label: string;
  value: string | undefined;
}

// Helper function: converts Firestore Timestamp to dd/mm/yyyy string
function convertTimestamp(timestamp: Timestamp | undefined): string {
  if (!timestamp) return 'N/A';
  const date = timestamp.toDate();
  const dd = date.getDate().toString().padStart(2, '0');
  const mm = (date.getMonth() + 1).toString().padStart(2, '0');
  const yyyy = date.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

const AdmissionsManager: React.FC = () => {
  const [admissions, setAdmissions] = useState<Admission[]>([]);
  const [selectedAdmission, setSelectedAdmission] = useState<Admission | null>(null);
  const [open, setOpen] = useState<boolean>(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState<boolean>(false);
  const [admissionToDelete, setAdmissionToDelete] = useState<Admission | null>(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [loading, setLoading] = useState<boolean>(true);

  const fetchAdmissions = async (): Promise<void> => {
    try {
      const admissionsCollection = collection(db, 'admissions');
      const admissionsSnapshot = await getDocs(admissionsCollection);
      const admissionsList = admissionsSnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          // convert timestamp once here to string in dd/mm/yyyy format
          timestamp: convertTimestamp(data.timestamp),
        };
      }) as Admission[];
      setAdmissions(admissionsList);
      console.log('Fetched admissions:', admissionsList);
    } catch (error) {
      console.error('Error fetching admissions:', error);
      toast.error('Failed to fetch admissions');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAdmissions();
  }, []);

  const handleViewDetails = (params: GridRenderCellParams): void => {
    setSelectedAdmission(params.row as Admission);
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
    setSelectedAdmission(null);
  };

  const handleStatusUpdate = async (admissionId: string, newStatus: 'pending' | 'reviewed'): Promise<void> => {
    try {
      const admissionRef = doc(db, 'admissions', admissionId);
      await updateDoc(admissionRef, { status: newStatus });
      toast.success(`Application ${newStatus} successfully`);
      fetchAdmissions();
      setOpen(false);
    } catch (error) {
      console.error('Error updating admission status:', error);
      toast.error('Failed to update application status');
    }
  };

  const handleDeleteClick = (params: GridRenderCellParams): void => {
    setAdmissionToDelete(params.row as Admission);
    setDeleteDialogOpen(true);
  };

  const handleDeleteConfirm = async (): Promise<void> => {
    if (!admissionToDelete) return;

    try {
      const admissionRef = doc(db, 'admissions', admissionToDelete.id);
      await deleteDoc(admissionRef);
      toast.success('Application deleted successfully');
      fetchAdmissions();
    } catch (error) {
      console.error('Error deleting admission:', error);
      toast.error('Failed to delete application');
    } finally {
      setDeleteDialogOpen(false);
      setAdmissionToDelete(null);
    }
  };

  const handleDeleteCancel = (): void => {
    setDeleteDialogOpen(false);
    setAdmissionToDelete(null);
  };

  const getStatusChipColor = (status: string): 'warning' | 'success' | 'default' => {
    switch (status) {
      case 'pending': return 'warning';
      case 'reviewed': return 'success';
      default: return 'default';
    }
  };

  const getStatusChip = (params: GridRenderCellParams): JSX.Element => (
    <Chip
      label={params.value || 'pending'}
      color={getStatusChipColor(params.value as string)}
      size="small"
      sx={{ fontWeight: 500 }}
    />
  );

  const actionButtons = (params: GridRenderCellParams): JSX.Element => (
    <Box sx={{ display: 'flex', gap: 1 }}>
      <IconButton
        size="small"
        onClick={() => handleViewDetails(params)}
        color="info"
        sx={{ '&:hover': { backgroundColor: theme.palette.info.light } }}
      >
        <Visibility fontSize="small" />
      </IconButton>
      {params.row.status === 'pending' && (
        <IconButton
          size="small"
          onClick={() => handleStatusUpdate(params.id as string, 'reviewed')}
          color="success"
          sx={{ '&:hover': { backgroundColor: theme.palette.success.light } }}
        >
          <CheckCircle fontSize="small" />
        </IconButton>
      )}
      <IconButton
        size="small"
        onClick={() => handleDeleteClick(params)}
        color="error"
        sx={{ '&:hover': { backgroundColor: theme.palette.error.light } }}
      >
        <Delete fontSize="small" />
      </IconButton>
    </Box>
  );

  const columns = [
    { field: 'studentName', headerName: 'Student Name', flex: 1, minWidth: 150 },
    { field: 'email', headerName: 'Email', flex: 1, minWidth: 200, hide: isMobile },
    { field: 'phone', headerName: 'Phone', flex: 1, minWidth: 130, hide: isMobile },
    { field: 'grade', headerName: 'Grade', flex: 1, minWidth: 120 },
    { field: 'status', headerName: 'Status', flex: 1, minWidth: 120, renderCell: getStatusChip },
    {
      field: 'timestamp',
      headerName: 'Date',
      flex: 1,
      minWidth: 120,
      hide: isMobile,
    },
    { field: 'actions', headerName: 'Actions', flex: 1, minWidth: 180, renderCell: actionButtons, sortable: false, filterable: false },
  ];

  const CustomToolbar: React.FC = () => (
    <GridToolbarContainer>
      <GridToolbarColumnsButton />
      <GridToolbarFilterButton />
      <GridToolbarExport />
    </GridToolbarContainer>
  );

  return (
    <Box sx={{
      height: '80vh',
      width: '100%',
      p: { xs: 1, sm: 2 },
      bgcolor: 'background.paper',
      borderRadius: 2,
    }}>
      <Typography variant="h5" gutterBottom sx={{ mb: 2, fontWeight: 600 }}>
        Admission Applications
      </Typography>

      <DataGrid
        rows={admissions}
        columns={columns}
        loading={loading}
        pageSizeOptions={[5, 10, 25]}
        initialState={{
          pagination: { paginationModel: { pageSize: 10, page: 0 } },
        }}
        slots={{ toolbar: CustomToolbar }}
        sx={{
          border: 'none',
          '& .MuiDataGrid-cell': { borderBottom: `1px solid ${theme.palette.divider}` },
          '& .MuiDataGrid-columnHeaders': {
            bgcolor: theme.palette.grey[100],
            borderBottom: `2px solid ${theme.palette.divider}`,
          },
        }}
        disableRowSelectionOnClick
      />

      {/* Details Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{ sx: { borderRadius: 3, boxShadow: theme.shadows[4] } }}
      >
        <DialogTitle sx={{ bgcolor: theme.palette.grey[100], fontWeight: 600 }}>
          Application Details
        </DialogTitle>
        <DialogContent dividers sx={{ p: 3 }}>
          {selectedAdmission && (
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 4 }}>
              <Box sx={{ flex: 1 }}>
                <DetailItem label="Student Name" value={selectedAdmission.studentName} />
                <DetailItem label="Email" value={selectedAdmission.email} />
                <DetailItem label="Grade" value={selectedAdmission.grade} />
                <DetailItem label="Date of Birth" value={selectedAdmission.dob} />
                <DetailItem label="Gender" value={selectedAdmission.gender} />
                <DetailItem label="Application Date" value={selectedAdmission.timestamp} />
                <DetailItem label="Status" value={selectedAdmission.status} />
              </Box>
              <Box sx={{ flex: 1 }}>
                <DetailItem label="Phone" value={selectedAdmission.phone} />
                <DetailItem label="Address" value={selectedAdmission.address} />
              </Box>
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ px: 3, py: 2 }}>
          {selectedAdmission?.status === 'pending' && (
            <Button
              variant="contained"
              color="success"
              onClick={() => handleStatusUpdate(selectedAdmission.id, 'reviewed')}
            >
              Mark as Reviewed
            </Button>
          )}
          <Button onClick={handleClose} color="inherit">
            Close
          </Button>
        </DialogActions>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteDialogOpen}
        onClose={handleDeleteCancel}
      >
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          Are you sure you want to delete this application?
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCancel} color="inherit">
            Cancel
          </Button>
          <Button onClick={handleDeleteConfirm} color="error" variant="contained">
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

const DetailItem: React.FC<DetailItemProps> = ({ label, value }) => (
  <Box sx={{ mb: 1 }}>
    <Typography variant="body2" sx={{ fontWeight: 500 }}>
      {label}:
    </Typography>
    <Typography variant="body2" color="text.secondary">
      {value || 'N/A'}
    </Typography>
  </Box>
);

export default AdmissionsManager;
