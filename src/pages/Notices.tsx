import React, { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Bell, AlertTriangle } from 'lucide-react';

interface Notice {
  id: string;
  title: string;
  description: string;
  fileUrl?: string;  // Cloudinary URL
  fileName?: string;
  fileType?: string;
  createdAt: Date;
}

const NoticeSection = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [selectedNotice, setSelectedNotice] = useState<Notice | null>(null);

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const q = query(collection(db, 'notices'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const noticesData: Notice[] = querySnapshot.docs.map(doc => {
          const data = doc.data();
          return {
            id: doc.id,
            title: data.title,
            description: data.description || '',
            fileUrl: data.fileUrl || '',
            fileName: data.fileName || '',
            fileType: data.fileType || '',
            createdAt: data.createdAt?.toDate?.() || new Date(),
          };
        });
        setNotices(noticesData);
      } catch (error) {
        console.error('Error fetching notices:', error);
      }
    };

    fetchNotices();
  }, []);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const formatDateMobile = (date: Date) => {
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <>
    <Navigation />
    <section className="mt-2 xs:mt-3 sm:mt-6 md:mt-8 lg:mt-10 px-1 xs:px-2 sm:px-4 md:px-6 lg:px-8">
      {/* Title Section */}
      <div className="bg-gradient-to-r from-amber-50 via-orange-50 to-red-50 py-16 mb-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <Bell className="h-8 w-8 text-amber-600 mr-3" />
              <h2 className="text-4xl text-school-blue-dark font-display font-bold text-gray-800">
                NoticeBoard & Alerts
              </h2>
              <AlertTriangle className="h-8 w-8 text-red-500 ml-3" />
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Important announcements, notices, and alerts for students, parents, and staff.
            </p>
          </div>
        </div>
      </div>

      {/* Notice List Container */}
      <div className="bg-white rounded-lg xs:rounded-xl shadow-md xs:shadow-lg border border-gray-100 overflow-hidden">
        {/* Table Header - Hidden on mobile and tablet */}
        <div className="hidden lg:block bg-gradient-to-r from-gray-50 to-gray-100 border-b border-gray-200">
          <div className="grid grid-cols-12 gap-4 px-4 xl:px-6 py-3 xl:py-4">
            <div className="col-span-6 text-xs xl:text-sm font-semibold text-gray-700 uppercase tracking-wider text-center">
              Notice Title
            </div>
            <div className="col-span-2 text-xs xl:text-sm font-semibold text-gray-700 uppercase tracking-wider text-center">
              Media
            </div>
            <div className="col-span-2 text-xs xl:text-sm font-semibold text-gray-700 uppercase tracking-wider text-center">
              Date
            </div>
            <div className="col-span-2 text-xs xl:text-sm font-semibold text-gray-700 uppercase tracking-wider text-center">
              Action
            </div>
          </div>
        </div>

        {/* Table Body */}
        <div className="max-h-[calc(100vh-140px)] xs:max-h-[calc(100vh-160px)] sm:max-h-[calc(100vh-180px)] md:max-h-[calc(100vh-200px)] lg:max-h-[400px] xl:max-h-[500px] overflow-y-auto scrollbar-thin scrollbar-track-gray-100 scrollbar-thumb-gray-300 hover:scrollbar-thumb-gray-400">
          {notices.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-6 xs:py-8 sm:py-10 md:py-12 text-gray-500">
              <div className="w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gray-100 rounded-full flex items-center justify-center mb-2 xs:mb-3 sm:mb-4">
                <svg className="w-5 h-5 xs:w-6 xs:h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <p className="text-sm xs:text-base sm:text-lg font-medium text-center px-4">No notices available</p>
              <p className="text-xs xs:text-sm text-center px-4 mt-1">Check back later for updates</p>
            </div>
          ) : (
            notices.map((notice, index) => (
              <div
                key={notice.id}
                className="block lg:grid lg:grid-cols-12 lg:gap-4 p-2 xs:p-3 sm:p-4 md:p-5 lg:px-4 lg:py-4 xl:px-6 xl:py-4 border-b border-gray-50 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 active:bg-gradient-to-r active:from-blue-100 active:to-purple-100 transition-all duration-200 cursor-pointer group touch-manipulation"
                onClick={() => setSelectedNotice(notice)}
              >
                {/* Mobile & Tablet Layout (xs to md) */}
                <div className="block lg:hidden space-y-2 xs:space-y-3">
                  {/* Title Section */}
                  <div className="space-y-1 xs:space-y-2">
                    <h3 className="text-gray-900 font-medium text-sm xs:text-base sm:text-lg md:text-xl leading-tight line-clamp-2 group-hover:text-blue-700 group-active:text-blue-800 transition-colors pr-2">
                      {notice.title}
                    </h3>
                    {notice.description && (
                      <p className="text-gray-500 text-xs xs:text-sm sm:text-base leading-relaxed line-clamp-2 xs:line-clamp-3">
                        {notice.description}
                      </p>
                    )}
                  </div>

                  {/* Bottom Row: Media, Date, Action */}
                  <div className="flex items-center justify-between gap-2 xs:gap-3">
                    {/* Left side: Media and Date */}
                    <div className="flex items-center gap-2 xs:gap-3 min-w-0 flex-1">
                      {/* Media indicators */}
                      <div className="flex gap-1 xs:gap-2">
                        {notice.fileUrl && notice.fileType?.startsWith('image/') && (
                          <span className="inline-flex items-center px-1.5 xs:px-2 py-0.5 xs:py-1 rounded text-xs bg-green-100 text-green-700 whitespace-nowrap">
                            <svg className="w-2.5 h-2.5 xs:w-3 xs:h-3 mr-0.5 xs:mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            <span className="hidden xs:inline">Image</span>
                            <span className="xs:hidden">IMG</span>
                          </span>
                        )}
                        {notice.fileUrl && notice.fileType?.includes('pdf') && (
                          <span className="inline-flex items-center px-1.5 xs:px-2 py-0.5 xs:py-1 rounded text-xs bg-red-100 text-red-700 whitespace-nowrap">
                            <svg className="w-2.5 h-2.5 xs:w-3 xs:h-3 mr-0.5 xs:mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            <span className="hidden xs:inline">PDF</span>
                            <span className="xs:hidden">PDF</span>
                          </span>
                        )}
                      </div>
                      
                      {/* Date */}
                      <div className="text-xs xs:text-sm text-gray-500 truncate">
                        <span className="xs:hidden">{formatDateMobile(notice.createdAt)}</span>
                        <span className="hidden xs:inline">{formatDate(notice.createdAt)}</span>
                      </div>
                    </div>

                    {/* Action Button */}
                    <button 
                      className="inline-flex items-center px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 sm:py-2 rounded-md xs:rounded-lg text-xs xs:text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 active:bg-blue-200 hover:text-blue-700 active:text-blue-800 transition-all duration-200 touch-manipulation flex-shrink-0"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedNotice(notice);
                      }}
                    >
                      <svg className="w-3 h-3 xs:w-4 xs:h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      <span className="hidden xs:inline">View</span>
                      <span className="xs:hidden">•••</span>
                    </button>
                  </div>
                </div>

                {/* Desktop Layout (lg+) - Hidden on mobile/tablet */}
                <>
                  {/* Title Column */}
                  <div className="hidden lg:block col-span-6">
                    <h3 className="text-gray-900 font-medium text-sm xl:text-base 2xl:text-lg line-clamp-2 group-hover:text-blue-700 transition-colors">
                      {notice.title}
                    </h3>
                    {notice.description && (
                      <p className="text-gray-500 text-xs xl:text-sm 2xl:text-base mt-1 line-clamp-1">
                        {notice.description}
                      </p>
                    )}
                  </div>

                  {/* Media Column */}
                  <div className="hidden lg:flex col-span-2 items-center justify-center space-x-2">
                    {notice.fileUrl && notice.fileType?.startsWith('image/') && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-green-100 text-green-700">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Image
                      </span>
                    )}
                    {notice.fileUrl && notice.fileType?.includes('pdf') && (
                      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs bg-red-100 text-red-700">
                        <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                        </svg>
                        PDF
                      </span>
                    )}
                  </div>

                  {/* Date Column */}
                  <div className="hidden lg:flex col-span-2 items-center justify-center">
                    <div className="text-center">
                      <div className="text-xs xl:text-sm font-medium text-gray-900">
                        {formatDate(notice.createdAt)}
                      </div>
                      <div className="text-xs text-gray-500">
                        {notice.createdAt.toLocaleTimeString('en-US', { 
                          hour: '2-digit', 
                          minute: '2-digit' 
                        })}
                      </div>
                    </div>
                  </div>

                  {/* Action Column */}
                  <div className="hidden lg:flex col-span-2 items-center justify-center">
                    <button 
                      className="inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium text-blue-600 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 transition-all duration-200 group-hover:shadow-md touch-manipulation"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedNotice(notice);
                      }}
                    >
                      <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                      View
                    </button>
                  </div>
                </>
              </div>
            ))
          )}
        </div>
      </div>

      {/* Enhanced Modal */}
      {selectedNotice && (
        <div className="fixed inset-0 bg-black/50 xs:bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-1 xs:p-2 sm:p-3 md:p-4">
          <div className="bg-white rounded-lg xs:rounded-xl sm:rounded-2xl shadow-xl xs:shadow-2xl w-full max-w-xs xs:max-w-sm sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl max-h-[98vh] xs:max-h-[95vh] sm:max-h-[92vh] md:max-h-[90vh] overflow-hidden">
            {/* Modal Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-2 xs:px-3 sm:px-4 md:px-6 py-2 xs:py-3 sm:py-4 text-white sticky top-0 z-10">
              <div className="flex items-center justify-between gap-2">
                <h3 className="text-sm xs:text-base sm:text-lg md:text-xl font-bold truncate pr-2">
                  {selectedNotice.title}
                </h3>
                <button
                  onClick={() => setSelectedNotice(null)}
                  className="flex-shrink-0 w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 hover:bg-white/30 active:bg-white/40 flex items-center justify-center transition-colors touch-manipulation"
                >
                  <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="mt-1 xs:mt-2 text-blue-100 text-xs xs:text-sm">
                Published on {formatDate(selectedNotice.createdAt)} at{' '}
                {selectedNotice.createdAt.toLocaleTimeString('en-US', { 
                  hour: '2-digit', 
                  minute: '2-digit' 
                })}
              </div>
            </div>

            {/* Modal Body */}
            <div className="overflow-y-auto" style={{ maxHeight: 'calc(98vh - 70px)' }}>
              {/* Content Grid */}
              <div className="grid grid-cols-1 xl:grid-cols-2 gap-2 xs:gap-3 sm:gap-4 md:gap-6 p-2 xs:p-3 sm:p-4 md:p-6">
                {/* Description Section */}
                <div className="space-y-2 xs:space-y-3 sm:space-y-4 md:space-y-6 order-1">
                  <div>
                    <h4 className="text-xs xs:text-sm font-semibold text-gray-700 uppercase tracking-wider mb-1 xs:mb-2 sm:mb-3">
                      Description
                    </h4>
                    <p className="text-gray-700 leading-relaxed whitespace-pre-wrap text-xs xs:text-sm sm:text-base md:text-base">
                      {selectedNotice.description}
                    </p>
                  </div>
                </div>

                {/* Attachments Section */}
                <div className="order-2 xl:order-2">
                  {selectedNotice.fileUrl && (
                    <div>
                      <h4 className="text-xs xs:text-sm font-semibold text-gray-700 uppercase tracking-wider mb-1 xs:mb-2 sm:mb-3">
                        Attachment
                      </h4>
                      {selectedNotice.fileType?.startsWith('image/') ? (
                        <div className="rounded-lg xs:rounded-xl overflow-hidden shadow-md xs:shadow-lg">
                          <img
                            src={selectedNotice.fileUrl}
                            alt={selectedNotice.fileName || "Notice attachment"}
                            className="w-full h-auto max-h-48 xs:max-h-64 sm:max-h-80 md:max-h-96 object-contain bg-gray-50"
                            loading="lazy"
                          />
                        </div>
                      ) : selectedNotice.fileType?.includes('pdf') && (
                        <div className="bg-gray-50 rounded-lg xs:rounded-xl p-2 xs:p-3 sm:p-4">
                          <a
                            href={selectedNotice.fileUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center p-2 xs:p-3 sm:p-4 bg-red-50 hover:bg-red-100 active:bg-red-200 text-red-700 rounded-lg xs:rounded-xl transition-colors group touch-manipulation"
                          >
                            <svg className="w-4 h-4 xs:w-5 xs:h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mr-1 xs:mr-2 sm:mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                            </svg>
                            <div className="min-w-0 flex-1">
                              <p className="font-medium text-xs xs:text-sm sm:text-base md:text-lg truncate">View PDF Document</p>
                              <p className="text-xs xs:text-sm text-red-600 truncate">{selectedNotice.fileName || 'Download PDF'}</p>
                            </div>
                            <svg className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 ml-1 xs:ml-2 sm:ml-4 group-hover:translate-x-1 transition-transform flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
    <Footer />
    </>
  );
};

export default NoticeSection;