import React from 'react';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from 'lucide-react';
import { FaFacebook, FaInstagram, FaSquareInstagram, FaYoutube } from 'react-icons/fa6';

const ContactInformation = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 md:p-8">
      <h2 className="text-xl sm:text-2xl font-display font-bold text-school-blue mb-4 sm:mb-6">Contact Information</h2>

      <div className="space-y-4 sm:space-y-6">
        <div className="flex items-start">
          <div className="bg-school-blue/10 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
            <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-school-blue" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Our Location</h3>
            <p className="text-gray-600 text-sm sm:text-base">Rajahmundry, Andhra Pradesh, IN</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-school-green/10 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
            <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-school-green" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Phone Number</h3>
            <p className="text-gray-600 text-sm sm:text-base">+91 7997043399</p>
            {/* <p className="text-gray-600">+1 (987) 654-3210</p> */}
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-school-orange/10 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
            <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-school-orange" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Email Address</h3>
            <p className="text-gray-600 text-sm sm:text-base break-words">avenuesglobalschool@gmail.com</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="bg-school-red/10 p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
            <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-school-red" />
          </div>
          <div>
            <h3 className="font-semibold text-gray-800 text-sm sm:text-base">Office Hours</h3>
            <p className="text-gray-600 text-sm sm:text-base">Monday - Friday: 8:00 AM - 4:00 PM</p>
            <p className="text-gray-600 text-sm sm:text-base">Saturday: 9:00 AM - 12:00 PM</p>
          </div>
        </div>
      </div>

      <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-gray-100">
        <h3 className="font-semibold text-gray-800 text-sm sm:text-base mb-3">Follow Us On</h3>
        <div className="flex space-x-3 sm:space-x-4">
          <a href="https://www.facebook.com/avenuestheglobalschool/" className="bg-school-blue-dark text-white p-1.5 sm:p-2 rounded-full hover:bg-school-orange transition-colors">
            <FaFacebook className="h-4 w-4 sm:h-5 sm:w-5" />
          </a>
          <a href="https://www.instagram.com/avenuesschool/" className="bg-school-blue-dark text-white p-1.5 sm:p-2 rounded-full hover:bg-school-orange transition-colors">
            <FaInstagram className="h-4 w-4 sm:h-5 sm:w-5" />
          </a>
          <a href="https://www.youtube.com/channel/UCJLi0Pqd8SxZnr5YXXucKYA" className="bg-school-blue-dark text-white p-1.5 sm:p-2 rounded-full hover:bg-school-orange transition-colors">
            <FaYoutube className="h-4 w-4 sm:h-5 sm:w-5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInformation;
