import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const CentreForHumanness = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header */}
      <Navigation />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-[75rem]">
        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent"
        >
          Centre for Humanness
        </motion.h1>

        {/* Introduction Text */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16 bg-white rounded-2xl p-8 md:p-9 shadow-lg border border-gray-100"
        >
          <p className="text-purple-600 text-lg leading-relaxed mb-6 font-medium">
            The Centre focuses on research and training in understanding and appreciation of 
            the variety of human and cultural values and how they relate to personal 
            development and Social development.
          </p>

          <h2 className="text-teal-600 text-2xl font-semibold mb-6">
            How to implement global ideas in a local context and make an impact?
          </h2>

          <div className="space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Schools are places for nurturing human potential. At Avenues we believe that it is our responsibility to make the young 
              minds understand "What does it mean to be Human?"
            </p>

            <p className="text-gray-700 leading-relaxed">
              We humans have developed into a global interconnected community with many social challenges, it's important for the 
              educators to innovate and evolve new systems, frameworks and strategies to nurture the young minds to thrive and 
              live a fulfilling life. At Avenues we have committed our time and resources for continuous professional research and 
              development. All the teachers participate in research and continuously develop their professional skills. Even students are 
              required to participate in various research projects part of their academic works.
            </p>

            <p className="text-gray-700 leading-relaxed font-medium">
              Some of the ideas we are exploring at Centre for Humanness are presented below.
            </p>
          </div>
        </motion.div>

        {/* Section: Contextualising global ideas */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="md:w-1/2">
              <h2 className="text-teal-600 text-2xl font-semibold mb-6">
                Contextualising global ideas and frameworks to local needs
              </h2>

              <h3 className="text-gray-800 text-xl font-medium mb-4">The OECD Learning Compass 2030</h3>
              
              <p className="text-gray-700 leading-relaxed">
                The OECD Learning Compass 2030 is an evolving learning framework that sets out an aspirational vision for the 
                future of education. It provides points of orientation towards the future we want: individual and collective well-
                being. The metaphor of a learning compass was adapted to emphasise the need for students to learn to navigate by 
                themselves through unfamiliar contexts.
              </p>
            </div>

            <div className="md:w-1/2 bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <iframe
                className="w-full h-[400px]"
                src="https://www.youtube.com/embed/M3u1AL_aZjI"
                title="OECD Future of Education and Skills 2030"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* Section: Ideas for educating children */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100"
        >
          <h2 className="text-teal-600 text-2xl font-semibold mb-8">Ideas for educating children</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <iframe 
                className="w-full h-[250px]"
                src="https://www.youtube.com/embed/qH1HCYy1NTc"
                title="Education in India"
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <iframe 
                className="w-full h-[250px]"
                src="https://www.youtube.com/embed/Urj92QCsKiE"
                title="Prepare Yourself and Child"
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <iframe 
                className="w-full h-[250px]"
                src="https://www.youtube.com/embed/qIlUIW-3JHQ"
                title="Jack Ma & Elon Musk on Education"
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <iframe 
                className="w-full h-[250px]"
                src="https://www.youtube.com/embed/Fw1Fc_y_2Ek"
                title="Interesting Story of Our Education"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* Section: Education for life */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100"
        >
          <h2 className="text-teal-600 text-2xl font-semibold mb-8">Education for life</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <iframe 
                className="w-full h-[250px]"
                src="https://www.youtube.com/embed/HndV87XpkWg"
                title="What's Education For?"
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <iframe 
                className="w-full h-[250px]"
                src="https://www.youtube.com/embed/XfyC0o88zfM"
                title="Social and Emotional Learning"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* Section: Yoga & Meditation */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100"
        >
          <h2 className="text-teal-600 text-2xl font-semibold mb-8">Yoga & Meditation part of education system</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <iframe 
                className="w-full h-[250px]"
                src="https://www.youtube.com/embed/vRFyoxdDbFY"
                title="Spirituality and Yoga in Education"
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <iframe 
                className="w-full h-[250px]"
                src="https://www.youtube.com/embed/_8kV4FHSdNA"
                title="Is Yoga Good for You?"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.div>

        {/* Section: Inspiring teachers */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-2xl p-8 md:p-10 shadow-lg border border-gray-100"
        >
          <h2 className="text-teal-600 text-2xl font-semibold mb-8">Inspiring teachers</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <iframe 
                className="w-full h-[250px]"
                src="https://www.youtube.com/embed/QZGIBivIj4A"
                title="Value of Teachers"
                allowFullScreen
              ></iframe>
            </div>
            <div className="bg-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
              <iframe 
                className="w-full h-[250px]"
                src="https://www.youtube.com/embed/omf9mPTHP9M"
                title="How Do Teachers Change Lives?"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default CentreForHumanness;