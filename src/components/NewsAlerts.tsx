import React, { useState, useEffect } from 'react';
import { Bell, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from 'framer-motion';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '../config/firebase';

interface Alert {
  id: string;
  title: string;
  content: string;
  date: string;
  priority: 'high' | 'medium' | 'low';
}

const NewsAlerts: React.FC = () => {
  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [currentAlert, setCurrentAlert] = useState<number>(0);
  const [dismissed, setDismissed] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const alertsQuery = query(
          collection(db, 'alerts'),
          orderBy('priority', 'desc'),
          orderBy('date', 'desc'),
          limit(5)
        );
        
        const querySnapshot = await getDocs(alertsQuery);
        const alertsList: Alert[] = [];
        
        querySnapshot.forEach((doc) => {
          alertsList.push({ id: doc.id, ...doc.data() } as Alert);
        });
        
        setAlerts(alertsList);
      } catch (error) {
        console.error('Error fetching alerts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchAlerts();
  }, []);

  useEffect(() => {
    if (alerts.length > 1) {
      const interval = setInterval(() => {
        setCurrentAlert((prev) => (prev + 1) % alerts.length);
      }, 5000);
      
      return () => clearInterval(interval);
    }
  }, [alerts.length]);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 border-red-500 text-red-800';
      case 'medium':
        return 'bg-amber-100 border-amber-500 text-amber-800';
      case 'low':
      default:
        return 'bg-blue-100 border-blue-500 text-blue-800';
    }
  };

  if (loading || alerts.length === 0 || dismissed) {
    return null;
  }

  return (
    <div className="w-full max-w-4xl mx-auto mb-12">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`rounded-lg border-l-4 p-4 shadow-md ${getPriorityColor(alerts[currentAlert].priority)}`}
        >
          <div className="flex items-start">
            <div className="flex-shrink-0 mr-3">
              <Bell className="h-5 w-5" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <p className="font-medium">{alerts[currentAlert].title}</p>
                <Button
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8 p-0"
                  onClick={() => setDismissed(true)}
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-sm mt-1">{alerts[currentAlert].content}</p>
              <div className="mt-2 flex items-center justify-between">
                <span className="text-xs">
                  {new Date(alerts[currentAlert].date).toLocaleDateString()}
                </span>
                {alerts.length > 1 && (
                  <div className="flex space-x-1">
                    {alerts.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentAlert(index)}
                        className={`h-2 w-2 rounded-full ${
                          currentAlert === index ? 'bg-current' : 'bg-current opacity-30'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default NewsAlerts;