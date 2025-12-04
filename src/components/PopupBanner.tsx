import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface PopupBannerProps {
  isVisible: boolean;
  onClose: () => void;
}

const PopupBanner: React.FC<PopupBannerProps> = ({ isVisible, onClose }) => {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
          className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50 bg-white shadow-xl rounded-xl p-6 max-w-2xl w-[90%] mx-auto"
        >
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-gray-800 mb-3">Welcome to Avenues The Global School!</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Discover our world-class education programs and facilities. Join us in nurturing tomorrow's leaders.
              </p>
            </div>
            <button
              onClick={onClose}
              className="flex-shrink-0 p-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
              aria-label="Close banner"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PopupBanner; 