import React, { useEffect, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Clock, Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { collection, query, orderBy, limit, onSnapshot } from 'firebase/firestore';
import { db } from '../config/firebase';

interface Event {
  id: string;
  title: string;
  date: string;
  description: string;
  mainImage: string;
}

const NewsSection = () => {
  const [news, setNews] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLatestNews = () => {
      const q = query(collection(db, 'events'), orderBy('createdAt', 'desc'), limit(3));

      const unsubscribe = onSnapshot(q, (snapshot) => {
        const latestNews = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        })) as Event[];
        setNews(latestNews);
        setLoading(false);
      });

      return () => unsubscribe();
    };

    fetchLatestNews();
  }, []);

  const formatDate = (dateString: string) => {
    try {
      return new Date(dateString).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    } catch {
      return dateString;
    }
  };

  const truncateText = (text: string, maxLength: number = 120) => {
    if (text.length <= maxLength) return text;
    return text.substr(0, maxLength) + '...';
  };

  const colorVariants = [
    { bg: 'bg-gradient-to-br from-red-500 to-red-600', accent: 'text-red-500', border: 'border-red-200', hover: 'hover:border-red-300' },
    { bg: 'bg-gradient-to-br from-orange-500 to-orange-600', accent: 'text-orange-500', border: 'border-orange-200', hover: 'hover:border-orange-300' },
    { bg: 'bg-gradient-to-br from-green-500 to-green-600', accent: 'text-green-500', border: 'border-green-200', hover: 'hover:border-green-300' },
    { bg: 'bg-gradient-to-br from-blue-500 to-blue-600', accent: 'text-blue-500', border: 'border-blue-200', hover: 'hover:border-blue-300' }
  ];

  if (loading) {
    return (
      <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded w-64 mx-auto mb-4"></div>
              <div className="h-4 bg-gray-200 rounded w-96 mx-auto"></div>
            </div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 rounded-t-xl h-48 mb-4"></div>
                <div className="space-y-3">
                  <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                  <div className="h-4 bg-gray-200 rounded w-full"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-500 via-orange-500 via-green-500 to-blue-500 bg-clip-text text-transparent mb-4">
            <Eye className="w-6 h-6 text-gray-600" />
            <span className="text-sm font-semibold tracking-wider uppercase">Latest Updates</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Explore Blogs And News
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Stay informed with our latest articles, insights, and breaking news
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {news.map((item, index) => {
            const colorVariant = colorVariants[index % colorVariants.length];
            
            return (
              <Card 
                key={item.id} 
                className={`group overflow-hidden border-2 ${colorVariant.border} ${colorVariant.hover} transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 bg-white`}
              >
                <div className="relative overflow-hidden">
                  <div className={`absolute inset-0 ${colorVariant.bg} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
                  <img
                    src={item.mainImage}
                    alt={item.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src = `data:image/svg+xml;base64,${btoa(`
                        <svg width="400" height="200" xmlns="http://www.w3.org/2000/svg">
                          <rect width="100%" height="100%" fill="#f3f4f6"/>
                          <text x="50%" y="50%" text-anchor="middle" dy=".3em" fill="#9ca3af" font-family="Arial, sans-serif" font-size="16">No Image Available</text>
                        </svg>
                      `)}`;
                    }}
                  />
                  <div className="absolute top-4 right-4">
                    <div className={`${colorVariant.bg} text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg`}>
                      Featured
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Calendar className={`w-4 h-4 ${colorVariant.accent}`} />
                    <span className="text-sm text-gray-500 font-medium">
                      {formatDate(item.date)}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-gray-700 transition-colors">
                    {item.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {truncateText(item.description)}
                  </p>
                  
                  <Button 
                    onClick={() => navigate(`/news/${item.id}/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`)}
                    variant="outline"
                    className={`w-full group/btn border-2 ${colorVariant.border} ${colorVariant.hover} text-gray-700 hover:text-white transition-all duration-300 font-semibold`}
                    style={{
                      backgroundColor: 'transparent'
                    }}
                    onMouseEnter={(e) => {
                      const bgClass = colorVariant.bg.replace('bg-gradient-to-br', '');
                      e.currentTarget.style.background = `linear-gradient(to bottom right, ${bgClass.includes('red') ? '#ef4444' : bgClass.includes('orange') ? '#f97316' : bgClass.includes('green') ? '#22c55e' : '#3b82f6'}, ${bgClass.includes('red') ? '#dc2626' : bgClass.includes('orange') ? '#ea580c' : bgClass.includes('green') ? '#16a34a' : '#2563eb'})`;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                    }}
                  >
                    <span className="flex items-center justify-center gap-2">
                      Read More
                      <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </span>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <Button 
            onClick={() => navigate('/news')}
            className="bg-gradient-to-r from-red-500 via-orange-500 via-green-500 to-blue-500 hover:from-red-600 hover:via-orange-600 hover:via-green-600 hover:to-blue-600 text-white px-8 py-3 rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            <span className="flex items-center gap-2">
              View All News
              <ArrowRight className="w-5 h-5" />
            </span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;