import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Add this import
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, Play, Bell, AlertTriangle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { collection, onSnapshot, orderBy, query, limit, where } from 'firebase/firestore';
import { db } from '../config/firebase';
import { toast } from 'react-toastify';
import NoticeBoard from './Notices';


interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  mainImage: string;
  additionalImages: string[];
  youtubeLink?: string;
  createdAt?: string;
  updatedAt?: string;
  createdBy?: string;
}

// Enhanced Loading Card Component
const LoadingCard = ({ index }) => (
  <div className={`bg-white rounded-lg shadow-md overflow-hidden animate-pulse`} 
       style={{ animationDelay: `${index * 100}ms` }}>
    <div className="h-48 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer"></div>
    <div className="p-6">
      <div className="flex items-center mb-3 space-x-4">
        <div className="h-3 bg-gray-200 rounded-full w-24"></div>
        <div className="h-3 bg-gray-200 rounded-full w-16"></div>
      </div>
      <div className="space-y-3">
        <div className="h-5 bg-gray-200 rounded w-full"></div>
        <div className="h-5 bg-gray-200 rounded w-3/4"></div>
        <div className="h-4 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-gray-200 rounded w-5/6"></div>
        <div className="h-4 bg-gray-200 rounded w-2/3"></div>
      </div>
      <div className="flex items-center justify-between mt-4">
        <div className="h-4 bg-gray-200 rounded w-20"></div>
        <div className="h-8 bg-gray-200 rounded w-16"></div>
      </div>
    </div>
  </div>
);

const NewsItem = ({ event, delay }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setIsLoaded(true), delay);
  }, [delay]);
  
  const defaultImage = "https://images.unsplash.com/photo-1564210350581-5a5f8b01f7d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
  
  const truncateText = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch (error) {
      return dateString;
    }
  };

  // Create URL-friendly slug from title
  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleReadMore = () => {
    const slug = createSlug(event.title);
    navigate(`/news/${event.id}/${slug}`);
  };

  // Color variants for enhanced visual appeal
  const colorVariants = [
    { border: 'border-red-200', accent: 'text-red-500', hover: 'hover:border-red-300' },
    { border: 'border-orange-200', accent: 'text-orange-500', hover: 'hover:border-orange-300' },
    { border: 'border-green-200', accent: 'text-green-500', hover: 'hover:border-green-300' },
    { border: 'border-blue-200', accent: 'text-blue-500', hover: 'hover:border-blue-300' }
  ];
  
  const colorIndex = Math.abs(event.id.split('').reduce((a, b) => a + b.charCodeAt(0), 0)) % colorVariants.length;
  const colorVariant = colorVariants[colorIndex];
  
  return (
    <div className={`bg-white rounded-lg shadow-md overflow-hidden border-2 ${colorVariant.border} ${colorVariant.hover} transition-all duration-500 transform hover:-translate-y-2 hover:shadow-xl ${isLoaded ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-95'}`}>
      <div className="h-48 overflow-hidden relative group">
        <img 
          src={event.mainImage || defaultImage} 
          alt={event.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src = defaultImage;
          }}
        />
        {event.youtubeLink && (
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-white rounded-full p-3 transform transition-transform duration-300 group-hover:scale-110">
              <Play className="h-6 w-6 text-red-600" />
            </div>
          </div>
        )}
        <div className="absolute top-4 right-4">
          <div className="bg-white bg-opacity-90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700 shadow-lg">
            Featured
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 mb-3">
          <div className="flex items-center mr-4">
            <Calendar className={`h-3.5 w-3.5 ${colorVariant.accent} mr-1`} />
            <span className="font-medium">{formatDate(event.date)}</span>
          </div>
          {event.createdBy && (
            <div className="flex items-center">
              <User className="h-3.5 w-3.5 text-gray-400 mr-1" />
              <span>Admin</span>
            </div>
          )}
        </div>
        <h3 className="text-xl font-bold mb-3 text-gray-800 line-clamp-2 group-hover:text-gray-600 transition-colors">
          {event.title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {truncateText(event.description)}
        </p>
        <div className="flex items-center justify-between">
          <Button 
            variant="outline" 
            className={`border-2 ${colorVariant.border} ${colorVariant.hover} text-gray-700 hover:text-white transition-all duration-300 font-semibold group/btn`}
            onClick={handleReadMore}
          >
            <span className="flex items-center gap-2">
              Read More 
              <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </span>
          </Button>
          {event.youtubeLink && (
            <Button 
              variant="outline" 
              size="sm"
              className="text-red-600 border-red-200 hover:bg-red-50 hover:border-red-300 transition-all duration-300"
              onClick={() => window.open(event.youtubeLink, '_blank')}
            >
              <Play className="h-3 w-3 mr-1" />
              Watch
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const News = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const fetchEvents = () => {
      try {
        const eventsQuery = query(
          collection(db, 'events'),
          orderBy('createdAt', 'desc')
        );

        const unsubscribe = onSnapshot(eventsQuery, (snapshot) => {
          const eventsList = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          })) as Event[];
          
          setEvents(eventsList);
          setTotalPages(Math.ceil(eventsList.length / itemsPerPage));
          setLoading(false);
        }, (error) => {
          console.error('Error fetching events:', error);
          toast.error('Failed to load events');
          setLoading(false);
        });

        return unsubscribe;
      } catch (error) {
        console.error('Error setting up events listener:', error);
        toast.error('Failed to setup events listener');
        setLoading(false);
      }
    };

    const unsubscribe = fetchEvents();
    
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  useEffect(() => {
    const fetchUpcomingEvents = () => {
      try {
        const currentDate = new Date().toISOString().split('T')[0];
        
        const upcomingQuery = query(
          collection(db, 'events'),
          where('date', '>=', currentDate),
          orderBy('date', 'asc'),
          limit(3)
        );

        const unsubscribe = onSnapshot(upcomingQuery, (snapshot) => {
          const eventsList = snapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data()
          })) as Event[];
          
          setUpcomingEvents(eventsList);
        }, (error) => {
          console.error('Error fetching upcoming events:', error);
        });

        return unsubscribe;
      } catch (error) {
        console.error('Error setting up upcoming events listener:', error);
      }
    };

    const unsubscribe = fetchUpcomingEvents();
    
    return () => {
      if (unsubscribe) {
        unsubscribe();
      }
    };
  }, []);

  // Get current page items
  const getCurrentPageItems = () => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return events.slice(startIndex, endIndex);
  };

  // Pagination controls
  const PaginationControls = () => {
    const pages = [];
    const maxVisiblePages = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisiblePages / 2));
    let endPage = Math.min(totalPages, startPage + maxVisiblePages - 1);

    if (endPage - startPage + 1 < maxVisiblePages) {
      startPage = Math.max(1, endPage - maxVisiblePages + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`px-4 py-2 rounded-lg transition-all duration-300 ${
            currentPage === i
              ? 'bg-gradient-to-r from-red-500 via-orange-500 to-blue-500 text-white shadow-lg'
              : 'bg-white text-gray-700 hover:bg-gray-50'
          }`}
        >
          {i}
        </button>
      );
    }

    return (
      <div className="flex items-center justify-center space-x-2 mt-8">

        <button
          onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 rounded-lg bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        >
          Previous
        </button>
        {startPage > 1 && (
          <>
            <button
              onClick={() => setCurrentPage(1)}
              className="px-4 py-2 rounded-lg bg-white text-gray-700 hover:bg-gray-50 transition-all duration-300"
            >
              1
            </button>
            {startPage > 2 && <span className="text-gray-500">...</span>}
          </>
        )}
        {pages}
        {endPage < totalPages && (
          <>
            {endPage < totalPages - 1 && <span className="text-gray-500">...</span>}
            <button
              onClick={() => setCurrentPage(totalPages)}
              className="px-4 py-2 rounded-lg bg-white text-gray-700 hover:bg-gray-50 transition-all duration-300"
            >
              {totalPages}
            </button>
          </>
        )}
        <button
          onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 rounded-lg bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
        >
          Next
        </button>
      </div>
    );
  };

  return (
    <div>
      <Helmet>
        <title>News & Events - Avenues The Global School</title>
        <meta name="description" content="Stay updated with the latest news, events, and activities at Avenues The Global School." />
        <meta name="keywords" content="school news, school events, education updates, student achievements" />
      </Helmet>
      
      <Navigation />
      
      <div className="bg-gradient-to-b from-blue-50 via-white to-gray-50">
        <div className="container mx-auto px-4 py-16">
          {/* Header loads immediately */}
          <div className="text-center mb-16">
            <h1 className={`text-5xl font-display font-bold mb-4 text-school-blue-dark transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              News & Events
            </h1>
            <p className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              Stay updated with the latest happenings, achievements, and upcoming events at Avenues.
            </p>
          </div>
          
          {/* News Cards Section - Shows loading animation while data loads */}
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[...Array(8)].map((_, index) => (
                <LoadingCard key={index} index={index} />
              ))}
            </div>
          ) : events.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {getCurrentPageItems().map((event, index) => (
                  <NewsItem 
                    key={event.id} 
                    event={event}
                    delay={index * 150} 
                  />
                ))}
              </div>
              <PaginationControls />
            </>
          ) : (
            <div className="text-center py-12 transition-all duration-700">
              <div className="bg-white rounded-lg shadow-md p-8 max-w-md mx-auto border-2 border-gray-200">
                <div className="text-gray-400 mb-4">
                  <Calendar className="h-16 w-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No Events Yet</h3>
                <p className="text-gray-500">Check back soon for upcoming events and news!</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <Footer />
      
      {/* Add custom styles for shimmer effect */}
      <style>
        {`
          @keyframes shimmer {
            0% {
              background-position: -200% 0;
            }
            100% {
              background-position: 200% 0;
            }
          }
          .animate-shimmer {
            animation: shimmer 2s infinite linear;
          }
        `}
      </style>
    </div>
  );
};

export default News;