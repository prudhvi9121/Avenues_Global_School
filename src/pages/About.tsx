import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';


const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    const hash = window.location.hash;
  if (hash) {
    // Small delay to ensure DOM is ready and animations complete
    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth', 
          block: 'start' 
        });
      }
    }, 500); // Longer delay to account for your animations
  }
  }, []);

  return (
    <div>
      <Helmet>
        <title>About Us - Avenues The Global School</title>
        <meta name="description" content="Learn about Avenues The Global School - our history, mission, vision, and values." />
        <meta name="keywords" content="Avenues, global school, school history, education mission, school values" />
      </Helmet>
      <Navigation />

      {/* Our Story Section */}
      <motion.section
        className="py-16 bg-gradient-to-br from-purple-50 to-pink-50"
        initial={{ opacity: 0, y: 50 }}
        animate={isLoaded ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.1 }}
      >
        <div id='story' className="container mx-auto px-4">
          <motion.h2
            className="text-4xl font-display font-bold text-center mb-12 text-purple-800"
            initial={{ opacity: 0, y: 30 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Our Story
          </motion.h2>

          {/* Message from Dr. Srinivas Cherukuri */}
          <div id="srinivas-message" className="bg-white rounded-xl shadow-lg overflow-hidden mb-12 md:mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-1 overflow-hidden">
                <img
                  src="Faculty/Dr.Srinivas_Cherukuri.jpeg"
                  alt="Dr.Srinivas_Cherukuri"
                  className="w-full h-64 md:h-full object-cover object-top"
                />
              </div>
              <div className="md:col-span-2 p-6 md:p-8">
                <motion.h3
                  className="text-2xl font-display font-bold text-purple-700 mb-4"
                  initial={{ opacity: 0, x: -40 }}
                  animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  A Message from the Director
                </motion.h3>
                <motion.p
                  className="text-gray-700 mb-4 text-justify"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  At Avenues The Global School, education is a journey of nurturing values, shaping character, and inspiring excellence in every child. As Director, I am deeply proud of our vision: to create a vibrant, inclusive environment where young minds are empowered to think critically, act responsibly, and lead with confidence. Every Avenian is encouraged to embrace learning with curiosity, compassion, and courage.
                </motion.p>
                <motion.p
                  className="text-gray-700 mb-4 text-justify"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  Our passionate educators, thoughtfully crafted curriculum, and value-driven culture work in harmony to ensure every child grows not only academically, but also socially, emotionally, and ethically. We strive to equip our students with global perspectives while staying rooted in our cherished cultural ethos.
                </motion.p>
                <motion.p
                  className="text-gray-700 mb-4 text-justify"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  We are more than a school; we are a community where every child matters, every voice is heard, and every success is celebrated. With the unwavering support of our parents and well-wishers, we continue our journey of transforming education—one child at a time.
                </motion.p>
                <motion.p
                  className="text-gray-700 mb-6 text-justify"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.7 }}
                >
                  Thank you for trusting Avenues The Global School. The future belongs to our children, and we are committed to shaping it with purpose, integrity, and vision.
                </motion.p>
                <motion.p
                  className="font-semibold text-purple-700"
                  initial={{ opacity: 0, x: 40 }}
                  animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.8 }}
                >
                  Warm regards,<br />
                  Dr. Srinivas Cherukuri<br />
                  Director
                </motion.p>
              </div>
            </div>
          </div>
          {/* Message from Bala Chandra M */}
          {/* <div id="bala-message" className="bg-white rounded-xl shadow-lg overflow-hidden mb-12 md:mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-2 p-6 md:p-8">
                <motion.h3
                  className="text-2xl font-display font-bold text-orange-700 mb-4"
                  initial={{ opacity: 0, x: -40 }}
                  animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  A Message from the Director
                </motion.h3>
                <motion.p
                  className="text-gray-700 mb-4 text-justify"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  Dear Parents, Well-wishers, and Members of the Community,
                  At Avenues The Global School, our mission is to build a foundation of learning that lasts a lifetime. As one of the Directors, I am honoured to be part of this inspiring journey—shaping young minds and fostering a culture of excellence, integrity, and innovation.
                </motion.p>
                <motion.p
                  className="text-gray-700 mb-4 text-justify"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  We envision a school where every child is seen, heard, and valued. Our aim is to nurture not just scholars, but individuals of strong character—independent in thought, collaborative in action, and compassionate in spirit.
                </motion.p>
                <motion.p
                  className="text-gray-700 mb-6 text-justify"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  Our approach blends tradition with modern educational practices. We uphold academic rigour, promote creativity, and encourage social responsibility. Every initiative, every lesson, and every interaction is designed to support the holistic growth of our students.
                </motion.p>
                <motion.p
                  className="font-semibold text-orange-700"
                  initial={{ opacity: 0, x: 40 }}
                  animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.7 }}
                >
                  With best wishes,<br />
                  Bala Chandra M<br />
                  Director
                </motion.p>
              </div>
              <div className="md:col-span-1 overflow-hidden">
                <img
                  src="/Faculty/bala-chandra-m.jpeg"
                  alt="Bala Chandra M"
                  className="w-full h-64 md:h-full object-cover object-top"
                />
              </div>
            </div>
          </div> */}

          {/* Message from Mrs. Latha Devaguptapu */}
          <div id='latha-message' className="bg-white rounded-xl shadow-lg overflow-hidden mb-12 md:mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              <div className="md:col-span-1 overflow-hidden">
                <img
                  src="Faculty/Mrs.Latha_Devaguptapu.jpeg"
                  alt="Mrs.Latha_Devaguptapux"
                  className="w-full h-64 md:h-full object-cover object-top"
                />
              </div>
              <div className="md:col-span-2 p-6 md:p-8 order-2 md:order-1">
                <motion.h3
                  className="text-2xl font-display font-bold text-green-700 mb-4"
                  initial={{ opacity: 0, x: -40 }}
                  animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  A Message from the Academic Director
                </motion.h3>
                <motion.p
                  className="text-gray-700 mb-4 text-justify"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.4 }}
                >
                  Greetings from Avenues The Global School. As the Academic Director, it brings me immense joy to witness the vibrant learning environment we have cultivated—a place where each child’s potential is recognised, respected, and nurtured with care.
                </motion.p>
                <motion.p
                  className="text-gray-700 mb-4 text-justify"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  At Avenues, we are committed to academic excellence with a heart. Our teaching practices go beyond textbooks—they inspire creativity, encourage inquiry, and build resilience in every learner. We focus on developing 21st-century skills while instilling timeless values that prepare our students to thrive in a rapidly changing world.
                </motion.p>
                <motion.p
                  className="text-gray-700 mb-6 text-justify"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.6 }}
                >
                  Learning at Avenues is joyful, meaningful, and transformative. We strive to ensure our students not only excel in examinations but also emerge as confident, empathetic, and socially responsible individuals. Our teachers play a vital role in this journey, acting as mentors who guide, support, and inspire with dedication and passion.
                </motion.p>
                <motion.p
                  className="font-semibold text-green-700"
                  initial={{ opacity: 0, x: 40 }}
                  animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.7 }}
                >
                  Warm regards,<br />
                  Mrs. Latha Devaguptapu<br />
                  Academic Director
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* The rest of the content follows */}
      <div className="bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 pt-16 pb-24">
          <h1 className={`text-5xl font-display font-bold text-center mb-4 text-school-blue-dark transition-all duration-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            About Our School
          </h1>
          <p className={`text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto transition-all duration-700 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Shaping young minds to create a brighter tomorrow through comprehensive education and values.
          </p>

          {/* Empowering Future Leaders Section */}
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="overflow-hidden">
                <img
                  src="/student-pictures/graduation-students.jpg"
                  alt="Teacher with students in classroom"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h2 className="text-3xl font-display font-bold text-school-blue-dark mb-4">
                  Empowering Future Leaders
                </h2>
                <p className="text-gray-700 mb-4">
                  At Avenues, we believe in empowering students to define success on their
                  own terms. Through nurturing their love for learning, expanding their sense of
                  responsibility, and honing their critical thinking abilities, we prepare them for
                  a future that's yet to be imagined.
                </p>
                <p className="text-gray-700">
                  Our holistic approach to education focuses on developing well-rounded
                  individuals who are not only academically proficient but also emotionally
                  intelligent and socially responsible. We create learning environments that
                  foster curiosity, creativity, and critical thinking skills essential for navigating
                  an increasingly complex world.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Child-Centered Education Section */}
          <motion.div
            className="bg-white rounded-xl shadow-lg overflow-hidden mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isLoaded ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-8 flex flex-col justify-center order-2 md:order-1">
                <h2 className="text-3xl font-display font-bold text-school-green mb-4">
                  Child-Centered Education
                </h2>
                <p className="text-gray-700 mb-4">
                  Our educational approach combines the robust CBSE curriculum framework
                  with innovative teaching methods that ignite passion for learning. We focus
                  on developing global citizens who understand and respect diverse
                  perspectives.
                </p>
                <p className="text-gray-700">
                  At Avenues, we believe that education should be tailored to each child's
                  unique abilities and interests. Our teachers serve as facilitators who guide
                  students through personalized learning journeys, encouraging them to take
                  ownership of their education and develop a lifelong love for learning. This
                  approach helps students build confidence, resilience, and the ability to adapt
                  to an ever-changing world.
                </p>
              </div>
              <div className="overflow-hidden order-1 md:order-2">
                <img
                  src="/student-pictures/family-celebrating-graduation.jpg"
                  alt="Students playing outdoors"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Our Mission Section */}
          {/* <div className={`transition-all duration-700 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="bg-white p-10 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <h2 className="text-3xl font-display font-bold text-center text-school-green mb-8">Our Mission</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-school-green mb-2">Mission</h3>
                  <p className="text-gray-700">
                    At Avenues, our mission is to provide a nurturing and stimulating environment where
                    children can develop intellectually, emotionally, and socially. We believe in fostering
                    creativity, critical thinking, and a lifelong love of learning.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-school-orange mb-2">Vision</h3>
                  <p className="text-gray-700">
                    To be recognized as a center of educational excellence, inspiring and empowering our students
                    to become global citizens who contribute positively to society through their knowledge,
                    skills, and compassion.
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-school-blue mb-2">Values</h3>
                  <ul className="text-gray-700 space-y-2">
                    <li className="flex items-start">
                      <span className="text-school-green font-bold mr-2">•</span>
                      <span>Excellence in all endeavors</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-green font-bold mr-2">•</span>
                      <span>Respect for diversity and inclusivity</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-green font-bold mr-2">•</span>
                      <span>Integrity and ethical conduct</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-green font-bold mr-2">•</span>
                      <span>Innovation and adaptability</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-green font-bold mr-2">•</span>
                      <span>Social responsibility</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-school-red mb-2">History</h3>
                  <p className="text-gray-700">
                    Founded in 2005, Avenues began with a vision to transform education. From its humble
                    beginnings with just 50 students, we have grown into a prestigious institution recognized
                    for academic excellence and holistic development.
                  </p>
                </div>
              </div>
            </div>
          </div> */}
          {/* Photo Gallery Section */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.6 }}
          >
            <h2 className="text-3xl font-display font-bold text-center text-school-blue-dark mb-8">
              Life at Avenues
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <img
                  src="/student-pictures/graduation-one-child.jpg"
                  alt="Students in a group"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <img
                  src="/student-pictures/students-hugging.jpg"
                  alt="Student in library"
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <img
                  src="/student-pictures/child-balloons.jpg"
                  alt="Classroom activity"
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Approaches to Learning Section */}
          <motion.div
            className="mt-24 bg-gray-50 py-16 px-6 rounded-2xl"
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.8 }}
          >
            <h2 className="text-4xl font-display font-bold text-center text-green-700 mb-4">
              Approaches to Learning
            </h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
              The Approaches to learning are lifelong learning opportunities and create a platform
              for understanding the world around us, creating our own thoughts, ideas, and
              opinions, challenging the status quo, or extending the thinking of others.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Communication Skills */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/student-pictures/communication-skills.png"
                    alt="Students playing outdoors"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-school-blue mb-3">
                    Communication Skills
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-school-blue mr-2">•</span>
                      <span>Reading, writing, oral language proficiency</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-blue mr-2">•</span>
                      <span>Effective information gathering</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Research Skills */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/student-pictures/Research-Skills.png"
                    alt="Teacher with students in classroom"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-school-green mb-3">
                    Research Skills
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-school-green mr-2">•</span>
                      <span>Information literacy and interpretation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-green mr-2">•</span>
                      <span>Media engagement and utilization</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Social Skills */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/student-pictures/gradutaion-mother.jpg"
                    alt="Students in a group"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-school-orange mb-3">
                    Social Skills
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-school-orange mr-2">•</span>
                      <span>Effective collaboration techniques</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-orange mr-2">•</span>
                      <span>Interpersonal relationship building</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              {/* Thinking Skills */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/student-pictures/Thinking-skills.png"
                    alt="Classroom activity"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-purple-600 mb-3">
                    Thinking Skills
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Critical and creative thinking</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-600 mr-2">•</span>
                      <span>Knowledge transfer across contexts</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Self-Management Skills */}
              <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                <div className="h-48 overflow-hidden">
                  <img
                    src="/student-pictures/graduation-students.jpg"
                    alt="Student in library"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-display font-bold text-red-600 mb-3">
                    Self-Management Skills
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Time and task management</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-600 mr-2">•</span>
                      <span>Emotional regulation and reflection</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
