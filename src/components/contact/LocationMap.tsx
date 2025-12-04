
import React, { useState } from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const LocationMap = () => {
  const [activeTab, setActiveTab] = useState('map');
  
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
      <div className="flex border-b border-gray-100">
        <button 
          className={`flex-1 py-3 px-4 text-center font-medium text-sm transition-colors ${activeTab === 'map' ? 'text-school-blue border-b-2 border-school-blue' : 'text-gray-500 hover:text-gray-800'}`}
          onClick={() => setActiveTab('map')}
        >
          Map View
        </button>
        <button 
          className={`flex-1 py-3 px-4 text-center font-medium text-sm transition-colors ${activeTab === 'directions' ? 'text-school-blue border-b-2 border-school-blue' : 'text-gray-500 hover:text-gray-800'}`}
          onClick={() => setActiveTab('directions')}
        >
          Get Directions
        </button>
      </div>
      
      {activeTab === 'map' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3815.4387878468815!2d81.78317807492552!3d17.002133883820814!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a37a18bc30e9113%3A0xf7d0feacac37b66!2sAvenues%20The%20Global%20School!5e0!3m2!1sen!2sin!4v1746779465524!5m2!1sen!2sin" 
            width="100%" 
            height="400" 
            style={{ border: 0 }} 
            allowFullScreen={true} 
            loading="lazy"
            title="School Location"
            className="w-full"
          ></iframe>
        </motion.div>
      )}
      
      {activeTab === 'directions' && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="p-6"
        >
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Avenues The Global School</h3>
            <p className="text-gray-600 mb-4">Our campus is conveniently located and easily accessible by various modes of transportation.</p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-school-red mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-800">Address</p>
                  <p className="text-gray-600">Rajahmundry, Andhra Pradesh, IN</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-school-green mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-800">Contact</p>
                  <p className="text-gray-600">+91 7997043399</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-school-blue mr-3 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium text-gray-800">Office Hours</p>
                  <p className="text-gray-600">Monday to Friday: 8:00 AM - 4:00 PM</p>
                  <p className="text-gray-600">Saturday: 9:00 AM - 12:00 PM</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-2">By Public Transport</h4>
              <p className="text-gray-600 text-sm">Take the Central Line to Oxford Circus, then a 10-minute walk to our campus.</p>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <h4 className="font-medium text-gray-800 mb-2">By Car</h4>
              <p className="text-gray-600 text-sm">Parking available on campus for visitors. Please register at the security desk.</p>
            </div>
          </div> */}
        </motion.div>
      )}
    </div>
  );
};

export default LocationMap;
