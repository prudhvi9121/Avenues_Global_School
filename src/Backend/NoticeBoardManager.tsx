import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Typography,
  IconButton,
  Grid,
  CircularProgress,
} from '@mui/material';
import { Add as AddIcon, Edit as EditIcon, Delete as DeleteIcon, Visibility as ViewIcon } from '@mui/icons-material';
import { db } from '../firebase/config';
import { collection, addDoc, getDocs, deleteDoc, doc, updateDoc, serverTimestamp } from 'firebase/firestore';
import { cloudName, uploadPreset } from '../config/cloudinary';

interface Notice {
  id: string; 
  title: string;
  description?: string;
  fileUrl?: string;
  fileName?: string;
  fileType?: string;
  createdAt: Date;
}

const NoticeBoardManager = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [editingNotice, setEditingNotice] = useState<Notice | null>(null);
  const [viewFile, setViewFile] = useState<{ url: string; type: string } | null>(null);

  useEffect(() => {
    fetchNotices();
  }, []);

  const fetchNotices = async () => {
    try {
      const querySnapshot = await getDocs(collection(db, 'notices'));
      const noticesData = querySnapshot.docs.map(doc => {
        const data = doc.data();
        return {
          id: doc.id,
          ...data,
          createdAt: data.createdAt?.toDate?.() || new Date(0),
        };
      }) as Notice[];
      setNotices(noticesData.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime()));
    } catch (error) {
      console.error('Error fetching notices:', error);
    }
  };

  const handleOpen = (notice?: Notice) => {
    if (notice) {
      setEditingNotice(notice);
      setTitle(notice.title);
      setDescription(notice.description || '');
    } else {
      setEditingNotice(null);
      setTitle('');
      setDescription('');
      setFile(null);
    }
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setEditingNotice(null);
    setTitle('');
    setDescription('');
    setFile(null);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!title) return;

    setLoading(true);
    try {
      let fileUrl = editingNotice?.fileUrl || '';
      let fileName = editingNotice?.fileName || '';
      let fileType = editingNotice?.fileType || '';

      if (file) {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('upload_preset', uploadPreset);

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${cloudName}/auto/upload`,
          {
            method: 'POST',
            body: formData,
          }
        );

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error?.message || `Upload failed with status: ${response.status}`);
        }

        const data = await response.json();

        fileUrl = data.secure_url;
        fileName = data.original_filename + '.' + data.format;
        fileType = data.resource_type + '/' + data.format;
      }

      const noticeData: Omit<Notice, 'id'> = {
        title,
        description: description || '',
        fileUrl,
        fileName,
        fileType,
        createdAt: editingNotice?.createdAt || serverTimestamp(),
      };

      if (editingNotice) {
        await updateDoc(doc(db, 'notices', editingNotice.id), noticeData);
      } else {
        await addDoc(collection(db, 'notices'), noticeData);
      }

      handleClose();
      fetchNotices();
    } catch (error) {
      console.error('Error saving notice:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (notice: Notice) => {
    if (window.confirm('Are you sure you want to delete this notice?')) {
      try {
        await deleteDoc(doc(db, 'notices', notice.id));
        fetchNotices();
      } catch (error) {
        console.error('Error deleting notice:', error);
      }
    }
  };

  const handleViewFile = (notice: Notice) => {
    setViewFile({ url: notice.fileUrl, type: notice.fileType });
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Typography variant="h5" component="h2">
          Notice Board
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpen()}
          sx={{ bgcolor: '#1a73e8', '&:hover': { bgcolor: '#1557b0' } }}
        >
          Add Notice
        </Button>
      </Box>

      <Grid container spacing={3}>
        {notices.map((notice) => (
          <Grid item xs={12} sm={6} md={4} key={notice.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {notice.title}
                </Typography>
                {notice.description && (
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {notice.description}
                  </Typography>
                )}
                {notice.fileName && (
                  <Typography variant="body2" color="text.secondary" gutterBottom>
                    {notice.fileName}
                  </Typography>
                )}
                <Typography variant="caption" color="text.secondary">
                  {notice.createdAt.toLocaleString()}
                </Typography>
              </CardContent>
              <Box sx={{ p: 2, pt: 0, display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                {notice.fileUrl && (
                  <IconButton onClick={() => handleViewFile(notice)} color="primary">
                    <ViewIcon />
                  </IconButton>
                )}
                <IconButton onClick={() => handleOpen(notice)} color="primary">
                  <EditIcon />
                </IconButton>
                <IconButton onClick={() => handleDelete(notice)} color="error">
                  <DeleteIcon />
                </IconButton>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>{editingNotice ? 'Edit Notice' : 'Add Notice'}</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            fullWidth
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            margin="dense"
            label="Description"
            fullWidth
            multiline
            minRows={2}
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            sx={{ mb: 2 }}
          />
          <input
            accept="image/*,.pdf"
            style={{ display: 'none' }}
            id="file-upload"
            type="file"
            onChange={handleFileChange}
          />
          <label htmlFor="file-upload">
            <Button
              variant="outlined"
              component="span"
              startIcon={<AddIcon />}
              fullWidth
            >
              {file ? file.name : (editingNotice?.fileName ? editingNotice.fileName : 'Upload File (Image/PDF)')}
            </Button>
          </label>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={handleSubmit}
            variant="contained"
            disabled={loading || !title}
            sx={{ bgcolor: '#1a73e8', '&:hover': { bgcolor: '#1557b0' } }}
          >
            {loading ? <CircularProgress size={24} /> : 'Save'}
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog
        open={Boolean(viewFile)}
        onClose={() => setViewFile(null)}
        maxWidth="md"
        fullWidth
      >
        {viewFile && (
          <DialogContent>
            {viewFile.type.startsWith('image/') ? (
              <img
                src={viewFile.url}
                alt="Notice"
                style={{ width: '100%', height: 'auto' }}
              />
            ) : (
              <iframe
                src={viewFile.url}
                style={{ width: '100%', height: '80vh' }}
                title="Notice PDF"
              />
            )}
          </DialogContent>
        )}
      </Dialog>
    </Box>
  );
};

export default NoticeBoardManager;