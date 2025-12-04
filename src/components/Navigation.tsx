import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import SchoolLogo from './SchoolLogo';
import { Menu, X, Mail, ChevronDown } from 'lucide-react';
import { FaGlobe, FaPhone, FaMap, FaBell } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { IoMail } from "react-icons/io5";
import NoticeBoard from './NoticeBoard';




import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { WebStories, YouTube } from '@mui/icons-material';

const Navigation = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (item: string) => {
    setActiveDropdown(activeDropdown === item ? null : item);
  };

  const navItems = [
    {
      label: 'Home',
      href: '/'
    },
    {
      label: 'About Us',
      href: '/about',
      children: [
        { label: 'Our Story', href: '/about#story' },
        { label: 'Our Mission', href: '/our-mission' },
        { label: 'Our Faculty', href: '/about#team' }
      ]
    },
    {
      label: 'Academics',
      href: '/academics/pre-primary-childrens-house/',
      children: [
        { label: "Pre-Primary", href: '/academics/pre-primary-childrens-house/' },
        { label: 'Primary School', href: '/academics/Primary-School' },
        { label: 'Upper Primary', href: '/academics/Upper-Primary' },
        { label: 'Secondary school', href: '/academics/Secondary-school' }
      ]
    },
    {
      label: 'News & Events',
      href: '/news'
    },
    {
      label: 'Centre for Humanness',
      href: '/centre-for-Humanness'
    },
    {
      label: 'Contact',
      href: '/contact'
    },
  ];

  return (
    <header className={`bg-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'shadow-md' : 'shadow-sm'}`}>
      {/* Top Bar with Contact Info and Social Icons */}
      <div className="bg-gradient-to-r from-purple-800 to-purple-600 text-white py-2">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-4 text-sm overflow-x-auto flex-shrink min-w-0">
            <div className="flex items-center flex-shrink-0">
              <a href="https://maps.app.goo.gl/if5oYKUVcdwZNKUk8" target="_blank" rel="noopener noreferrer" className="flex items-center text-white hover:text-yellow-300">
                <FaMapMarkerAlt className="h-4 w-4" />
                <span className="hidden md:inline ml-1">Rajahmundry</span>
              </a>
            </div>

            <div className="flex items-center flex-shrink-0">
              <a href="tel:+917997043399" className="flex items-center text-white hover:text-yellow-300">
                <FaPhone className="h-4 w-4" />
                <span className="hidden md:inline ml-1">+91 7997043399</span>
              </a>
            </div>

            <div className="flex items-center flex-shrink-0">
              <a href="mailto:avenuesglobalschool@gmail.com" className="flex items-center text-white hover:text-yellow-300">
                <IoMail className="h-4 w-4" />

                <span className="hidden md:inline ml-1">avenuesglobalschool@gmail.com</span>
              </a>
            </div>
          </div>
          <div className="flex items-center space-2 flex-shrink-0">
            <a
              href="/notice-board"
              className="flex items-center text-white hover:text-yellow-300 transition-colors text-sm mr-4"
            >
              <FaBell className="h-4 w-4 mr-2" />
              <span className="hidden md:inline ml-1">Alerts</span>
            </a>
            <a
              href="http://avenues.nexterp.in"
              target='__blank'
              className="flex items-center text-white hover:text-yellow-300 transition-colors text-sm"
            >
              <FaGlobe className="h-4 w-4 mr-2" />
              <span className="hidden md:inline ml-1">Parent/Staff Login</span>
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-3 py-3">
        <div className="flex justify-between items-center">
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="flex items-center"
            >
              <img
                src='/uploads/logo1.png'
                alt="Avenues Logo"
                className="h-14 w-auto object-contain md:h-16 lg:h-20"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <div key={index} className="relative group" onMouseEnter={() => handleDropdownToggle(item.label)} onMouseLeave={() => handleDropdownToggle(null)}>
                <Link
                  to={item.href}
                  className="font-medium text-gray-700 hover:text-school-blue px-4 py-2 rounded-md transition-colors flex items-center"
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                  )}
                </Link>

                {item.children && (
                  <AnimatePresence>
                    {activeDropdown === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-gradient-to-r from-purple-600 to-purple-800 ring-1 ring-black ring-opacity-5 z-50"
                      >
                        <div className="py-1">
                          {item.children.map((child, childIndex) => (
                            <Link
                              key={childIndex}
                              to={child.href}
                              className="block px-4 py-2 text-sm text-white hover:bg-purple-700 hover:text-white"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
            <div className="ml-4">
              <Button onClick={() => navigate('/admissions')} className="bg-gradient-to-r from-school-orange to-school-red hover:from-school-red hover:to-school-orange text-white transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg rounded-full px-6">
                Admission
              </Button>
            </div>
          </nav>


          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md bg-gray-50 hover:bg-gray-100 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white shadow-lg overflow-hidden"
          >
            <nav className="flex flex-col px-4 py-2">
              {navItems.map((item, index) => (
                <React.Fragment key={index}>
                  <Link
                    to={item.href}
                    className="font-medium text-gray-700 hover:text-school-blue py-3 border-b border-gray-100 flex justify-between items-center"
                    onClick={() => item.children ? handleDropdownToggle(item.label) : setIsMenuOpen(false)}
                  >
                    {item.label}
                    {item.children && (
                      <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === item.label ? 'rotate-180' : ''}`} />
                    )}
                  </Link>

                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="bg-gray-50 px-4 py-2 mb-2"
                    >
                      {item.children.map((child, childIndex) => (
                        <Link
                          key={childIndex}
                          to={child.href}
                          className="block py-2 text-sm text-gray-600 hover:text-school-blue"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </React.Fragment>
              ))}
              <div className="py-4">
                <Button className="bg-gradient-to-r from-school-orange to-school-red hover:from-school-red hover:to-school-orange text-white w-full rounded-full">
                  Apply Now
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navigation;