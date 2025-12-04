import React from 'react';
import { Facebook, Instagram, Twitter, Youtube, Linkedin } from 'lucide-react';
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa6';

const SocialMediaIcons = () => {
  const socialLinks = [
    {
      icon: <FaFacebook className="w-4 h-4 sm:w-5 sm:h-5" />,
      url: "https://www.facebook.com/avenuestheglobalschool/",
      label: "Facebook"
    },
    {
      icon: <FaInstagram className="w-4 h-4 sm:w-5 sm:h-5" />,
      url: "https://www.instagram.com/avenuesschool/",
      label: "Instagram"
    },
    {
      icon: <FaYoutube className="w-4 h-4 sm:w-5 sm:h-5" />,
      url: "https://www.youtube.com/channel/UCJLi0Pqd8SxZnr5YXXucKYA",
      label: "YouTube"
    },

  ];

  return (
    <div className="fixed right-0 sm:right-auto sm:left-0 top-1/2 -translate-y-1/2 z-30 sm:z-50">
      <div className="flex flex-col gap-1 sm:gap-1 bg-gradient-to-b from-purple-700 to-purple-500 backdrop-blur-sm p-0.5 sm:p-1 rounded-l-lg sm:rounded-l-none sm:rounded-r-lg shadow-lg border ">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 sm:p-1.5 text-white hover:text-purple-100 hover:bg-purple-600/50 rounded-lg transition-all duration-300 group"
            aria-label={social.label}
          >
            <div className="relative">
              {/* Decreased icon size */}
              {React.cloneElement(social.icon, { className: "w-3.5 h-3.5 sm:w-4 sm:h-4" })}
              <span className="absolute right-full sm:right-auto sm:left-full mr-2 sm:mr-0 sm:ml-2 top-1/2 -translate-y-1/2 bg-gradient-to-r from-purple-800 to-purple-600 text-white text-[10px] sm:text-xs px-1.5 sm:px-2 py-0.5 sm:py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden sm:block">
                {social.label}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialMediaIcons;