import { motion } from 'framer-motion';

interface LoadingAnimationProps {
  isLoading: boolean;
}

const LoadingAnimation = ({ isLoading }: LoadingAnimationProps) => {
  if (!isLoading) return null;

  const letters = ['A', 'V', 'E', 'N', 'U', 'E', 'S'];
  const colors = [
    '#e32020', // Red for A
    '#f18721', // Orange for V
    '#00833e', // Green for E
    '#6cb33f', // Light Green for N
    '#4195d1', // Light Blue for U
    '#406ab4', // Blue for E
    '#4195d1', // Light Blue for S
  ];

  const containerVariants = {
    hidden: { opacity: 0, gap: '0.5rem', scale: 1 },
    visible: {
      opacity: 1,
      gap: 0,
      scale: 0.95,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.05,
        gap: { delay: 0.8, duration: 0.2 },
        scale: { delay: 0.8, duration: 0.3 }
      },
    },
  };

  const letterVariants = {
    hidden: { y: 50, opacity: 0, scale: 0.5 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 12,
        mass: 0.8,
        bounce: 0.6,
        duration: 0.4
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 200,
        damping: 20,
        mass: 0.8,
        delay: 0.6,
        duration: 0.5
      },
    },
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[1000] p-4">
      <div className="flex flex-col items-center space-y-3 sm:space-y-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-1 sm:gap-2 md:gap-4 flex-wrap justify-center"
        >
          {letters.map((letter, index) => (
            <div key={index} className="flex items-center">
              <motion.div
                variants={letterVariants}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 flex items-center justify-center text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white"
                style={{ backgroundColor: colors[index] }}
              >
                {letter}
              </motion.div>
            </div>
          ))}
        </motion.div>
        <motion.div
          variants={textVariants}
          initial="hidden"
          animate="visible"
          className="text-gray-600 text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-center"
        >
          THE GLOBAL SCHOOL
        </motion.div>
      </div>
    </div>
  );
};

export default LoadingAnimation;