import React from 'react';
import SchoolLogo from './SchoolLogo';
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa6';

const FooterSection = ({
  title,
  color,
  children,
}: {
  title: string;
  color: string;
  children: React.ReactNode;
}) => (
  <div>
    <h3
      className={`font-display font-semibold text-lg mb-6 text-gray-800 relative pb-3`}
    >
      {title}
      <span
        className={`absolute bottom-0 left-0 w-10 h-1 bg-${color}`}
        style={{ content: "''" }}
      />
    </h3>
    <ul className="space-y-3">{children}</ul>
  </div>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-50 to-white pt-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-purple-400 opacity-5 rounded-full transform -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-400 opacity-5 rounded-full transform translate-x-1/2 translate-y-1/2" />

      <div className="container mx-auto max-w-screen-xl px-4 relative z-10">
        {/* Main Footer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16 mb-16">
          {/* Logo & Socials */}
          <div>
            <Link to="/">
              <img
                src='/uploads/logo3.png'
                alt="Avenues Logo"
                className="h-20 w-auto object-contain md:h-24 lg:h-28"
              />
            </Link>
            <p className="text-gray-600 mb-8 text-sm sm:text-base leading-relaxed">
              Avenues is dedicated to providing quality education that nurtures young minds and prepares them for future success through holistic development.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/avenuestheglobalschool/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <FaFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/avenuesschool/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCJLi0Pqd8SxZnr5YXXucKYA"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center hover:bg-purple-600 hover:text-white transition-all duration-300 transform hover:scale-110"
              >
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <FooterSection title="Quick Links" color="purple-600">
            {[
              { label: 'About Us', href: '/about' },
              // { label: 'Academics', href: '/academics' },
              { label: 'Admissions', href: '/admissions' },
              { label: 'News & Events', href: '/news' },
              { label: 'Contact', href: '/contact' },
            ].map((link, i) => (
              <li key={i}>
                <Link
                  to={link.href}
                  className="text-gray-600 hover:text-purple-600 transition-colors flex items-center group"
                >
                  <ArrowRight className="mr-2 h-4 w-4 text-purple-400 group-hover:text-purple-600 transition-colors" />
                  {link.label}
                </Link>
              </li>
            ))}
          </FooterSection>

          {/* Programs */}
          <FooterSection title="Programs" color="purple-600">
            {[
              { label: "Pre-Primary Children's House", href: '/academics/pre-primary-childrens-house' },
              { label: 'Primary School', href: '/academics/Primary-School' },
              { label: 'Upper Primary', href: '/academics/Upper-Primary' },
              { label: 'Secondary School', href: '/academics/Secondary-school' },

            ].map((link, i) => (
              <li key={i}>
                <Link
                  to={link.href}
                  className="text-gray-600 hover:text-purple-600 transition-colors flex items-center group"
                >
                  <Check className="mr-2 h-4 w-4 text-purple-400 group-hover:text-purple-600 transition-colors" />
                  {link.label}
                </Link>
              </li>
            ))}
          </FooterSection>

          {/* Contact Info */}
          <FooterSection title="Contact Us" color="purple-600">
            <li className="flex items-start text-sm">
              <a
                href="https://maps.app.goo.gl/if5oYKUVcdwZNKUk8"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start text-gray-600 hover:text-purple-600 transition-colors group"
              >
                <MapPin className="h-5 w-5 text-purple-400 mr-3 mt-1 group-hover:text-purple-600 transition-colors" />
                Rajahmundry, Andhra Pradesh, IN
              </a>
            </li>
            <li className="flex items-center text-sm">
              <a
                href="tel:+917997043399"
                className="flex items-center text-gray-600 hover:text-purple-600 transition-colors group"
              >
                <Phone className="h-5 w-5 text-purple-400 mr-3 group-hover:text-purple-600 transition-colors" />
                +91 7997043399
              </a>
            </li>
            <li className="flex items-center text-sm">
              <a
                href="mailto:avenuesglobalschool@gmail.com"
                className="flex items-center text-gray-600 hover:text-purple-600 transition-colors group"
              >
                <Mail className="h-5 w-5 text-purple-400 mr-3 group-hover:text-purple-600 transition-colors" />
                avenuesglobalschool@gmail.com
              </a>
            </li>
          </FooterSection>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-200 pt-8 pb-12 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Avenues The Global School. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-purple-600 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
