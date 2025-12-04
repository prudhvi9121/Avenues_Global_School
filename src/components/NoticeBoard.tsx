import React, { useEffect, useState } from 'react';
import { db } from '../firebase/config';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";

interface Notice {
  title: string;
  createdAt: Date;
}

const NoticeBoard = () => {
  const [notices, setNotices] = useState<Notice[]>([]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const navigate = useNavigate();

  const bgColors = [
    'bg-blue-600',
    'bg-red-600',
    'bg-orange-500',
    'bg-green-500',
    'bg-cyan-600',
    'bg-yellow-500',
    'bg-indigo-700'
  ];

  useEffect(() => {
    const fetchNotices = async () => {
      try {
        const q = query(collection(db, 'notices'), orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);
        const noticesData: Notice[] = querySnapshot.docs.map(doc => ({
          title: doc.data().title,
          createdAt: doc.data().createdAt?.toDate()
        }));
        setNotices(noticesData);
      } catch (error) {
        console.error('Error fetching notices:', error);
      }
    };

    fetchNotices();
  }, []);

  // Calculate navbar height dynamically
  useEffect(() => {
    const calculateNavbarHeight = () => {
      const navbar = document.querySelector('header');
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight);
      }
    };

    // Initial calculation
    calculateNavbarHeight();

    // Recalculate on window resize
    window.addEventListener('resize', calculateNavbarHeight);
    
    // Cleanup
    return () => window.removeEventListener('resize', calculateNavbarHeight);
  }, []);

  const handleNoticeClick = () => {
    navigate('/news?section=NoticeBoard&Alerts');
  };

  return (
    <div 
      className="bg-white/80 backdrop-blur-sm py-1 sm:py-1.5 shadow-md sticky z-[45]" 
      style={{ top: `${navbarHeight}px` }}
    >
      <div className="max-w-[95rem] mx-auto">
        <div className="overflow-hidden w-full">
          <div className="flex whitespace-nowrap animate-marquee notice-marquee">
            {[...notices, ...notices].map((notice, index) => (
              <span
                key={index}
                className={`inline-block px-2 sm:px-4 py-1 text-white cursor-pointer hover:animate-none transition-transform duration-200 relative ${
                  bgColors[index % bgColors.length]
                } border-r border-white/20 text-[11px] sm:text-sm`}
                onClick={handleNoticeClick}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {notice.title}
                
                {/* Tooltip - positioned below the notice */}
                {hoveredIndex === index && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-gray-800 text-white text-xs rounded whitespace-nowrap z-50 animate-fade-in">
                    Click to Read More
                    {/* Tooltip arrow pointing up */}
                    <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-b-4 border-transparent border-b-gray-800"></div>
                  </div>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
        
        @keyframes fade-in {
          0% {
            opacity: 0;
            transform: translate(-50%, 5px);
          }
          100% {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        
        .animate-fade-in {
          animation: fade-in 0.2s ease-out forwards;
        }
        
        @media (max-width: 640px) {
          .animate-marquee {
            animation-duration: 15s !important;
          }
        }
      `}</style>
    </div>
  );
};

export default NoticeBoard;