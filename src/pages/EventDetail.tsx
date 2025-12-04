import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowLeft, Play, Share2, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';
import { toast } from 'react-toastify';

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

export const EventDetail: React.FC = () => {
  const { id, slug } = useParams<{ id: string; slug: string }>();
  const navigate = useNavigate();
  const [event, setEvent] = useState<Event | null>(null);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchEvent = async () => {
      if (!id) {
        toast.error('Invalid event ID');
        navigate('/news');
        return;
      }

      try {
        const eventDoc = await getDoc(doc(db, 'events', id));
        
        if (eventDoc.exists()) {
          const eventData = { id: eventDoc.id, ...eventDoc.data() } as Event;
          setEvent(eventData);
          
          // Verify the slug matches (optional - for SEO purposes)
          const expectedSlug = createSlug(eventData.title);
          if (slug !== expectedSlug) {
            // Redirect to correct URL with proper slug
            navigate(`/news/${id}/${expectedSlug}`, { replace: true });
          }
        } else {
          toast.error('Event not found');
          navigate('/news');
        }
      } catch (error) {
        console.error('Error fetching event:', error);
        toast.error('Failed to load event');
        navigate('/news');
      } finally {
        setLoading(false);
        setTimeout(() => setIsLoaded(true), 100);
      }
    };

    fetchEvent();
  }, [id, slug, navigate]);

  const createSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
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

  const formatTime = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      });
    } catch (error) {
      return dateString;
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: event?.title,
      text: event?.description,
      url: window.location.href,
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        // Fallback: copy to clipboard
        await navigator.clipboard.writeText(window.location.href);
        toast.success('Link copied to clipboard!');
      }
    } catch (error) {
      console.error('Error sharing:', error);
      // Fallback: copy to clipboard
      try {
        await navigator.clipboard.writeText(window.location.href);
        toast.success('Link copied to clipboard!');
      } catch (clipboardError) {
        toast.error('Failed to share or copy link');
      }
    }
  };

  const defaultImage = "https://images.unsplash.com/photo-1564210350581-5a5f8b01f7d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-school-blue"></div>
          <p className="mt-4 text-gray-600">Loading event...</p>
        </div>
      </div>
    );
  }

  if (!event) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-700 mb-4">Event Not Found</h2>
          <Button onClick={() => navigate('/news')} className="bg-school-blue hover:bg-school-blue-dark">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to News
          </Button>
        </div>
      </div>
    );
  }

  const allImages = [event.mainImage, ...event.additionalImages].filter(Boolean);

  return (
    <div>
      <Helmet>
        <title>{event.title} - Avenues The Global School</title>
        <meta name="description" content={event.description} />
        <meta property="og:title" content={event.title} />
        <meta property="og:description" content={event.description} />
        <meta property="og:image" content={event.mainImage || defaultImage} />
        <meta property="og:url" content={window.location.href} />
      </Helmet>
      
      <Navigation />
      
      <div className="bg-gradient-to-b from-blue-50 to-white min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Back Button */}
          <div className={`mb-8 transition-all duration-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Button 
              variant="outline" 
              onClick={() => navigate('/news')}
              className="flex items-center hover:bg-school-blue hover:text-white transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to News & Events
            </Button>
          </div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className={`mb-8 transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-school-blue-dark leading-tight">
                {event.title}
              </h1>
              
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-6">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-school-orange mr-2" />
                  <span className="font-medium">{formatDate(event.date)}</span>
                </div>
                {event.createdBy && (
                  <div className="flex items-center">
                    <User className="h-5 w-5 text-school-blue mr-2" />
                    <span>By Admin</span>
                  </div>
                )}
                {event.createdAt && (
                  <div className="flex items-center">
                    <Clock className="h-5 w-5 text-gray-400 mr-2" />
                    <span className="text-sm">Published {formatTime(event.createdAt)}</span>
                  </div>
                )}
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleShare}
                  className="ml-auto flex items-center"
                >
                  <Share2 className="h-4 w-4 mr-1" />
                  Share
                </Button>
              </div>
            </div>

            {/* Main Image */}
            <div className={`mb-8 transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative overflow-hidden rounded-xl shadow-lg group">
                <img
                  src={allImages[selectedImage] || defaultImage}
                  alt={event.title}
                  className="w-full h-96 md:h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = defaultImage;
                  }}
                />
                {event.youtubeLink && (
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button
                      className="bg-red-600 hover:bg-red-700 text-white"
                      onClick={() => window.open(event.youtubeLink, '_blank')}
                    >
                      <Play className="mr-2 h-5 w-5" />
                      Watch Video
                    </Button>
                  </div>
                )}
              </div>
              
              {/* Additional Images Thumbnail Gallery */}
              {allImages.length > 1 && (
                <div className="flex gap-2 mt-4 overflow-x-auto pb-2">
                  {allImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                        selectedImage === index 
                          ? 'border-school-blue shadow-md' 
                          : 'border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      <img
                        src={image}
                        alt={`${event.title} - Image ${index + 1}`}
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = defaultImage;
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Content */}
            <div className={`bg-white rounded-xl shadow-sm p-8 mb-8 transition-all duration-700 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="prose max-w-none">
                <div className="text-lg text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {event.description}
                </div>
              </div>
            </div>

            {/* YouTube Video */}
            {event.youtubeLink && (
              <div className={`mb-8 transition-all duration-700 delay-400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-2xl font-bold mb-4 text-school-blue-dark">Watch Event Video</h3>
                  <div className="aspect-video rounded-lg overflow-hidden">
                    <iframe
                      src={event.youtubeLink.replace('watch?v=', 'embed/')}
                      title={event.title}
                      className="w-full h-full"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Call to Action */}
            <div className={`text-center transition-all duration-700 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="bg-gradient-to-r from-school-blue to-school-green rounded-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
                <p className="text-blue-100 mb-6">
                  Don't miss out on future events and news from Avenues The Global School.
                </p>
                <Button 
                  variant="secondary" 
                  onClick={() => navigate('/news')}
                  className="bg-white text-school-blue hover:bg-gray-100"
                >
                  View More Events
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

// Default export
const EventDetailPage = EventDetail;
export default EventDetailPage;