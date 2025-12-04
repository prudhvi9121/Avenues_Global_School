
import React, { useEffect, useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import SEO from '../components/SEO';

const Academics = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Generate random colored circles for background
  const circles = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    size: Math.random() * 100 + 50,
    x: Math.random() * 100,
    y: Math.random() * 100,
    color: [
      'rgba(255, 99, 132, 0.1)',
      'rgba(54, 162, 235, 0.1)',
      'rgba(255, 206, 86, 0.1)',
      'rgba(75, 192, 192, 0.1)',
      'rgba(153, 102, 255, 0.1)',
      'rgba(255, 159, 64, 0.1)',
    ][Math.floor(Math.random() * 6)],
  }));

  return (
    <div className="relative overflow-hidden">
      <SEO
        title="Academics"
        description="Explore our academic programs, curriculum, and educational approach at Avenues The Global School."
        keywords="academics, curriculum, education, CISCE, preschool, primary school"
        canonicalUrl="/academics"
      />
      
      {/* Background Circles */}
      {circles.map((circle) => (
        <div
          key={circle.id}
          className="absolute rounded-full -z-10"
          style={{
            width: `${circle.size}px`,
            height: `${circle.size}px`,
            left: `${circle.x}%`,
            top: `${circle.y}%`,
            backgroundColor: circle.color,
          }}
        />
      ))}
      
      <Navigation />
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <motion.h1 
          className="text-5xl font-display font-bold text-center mb-8 text-school-blue-dark"
          initial={{ opacity: 0, y: -20 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          Academic Programs
        </motion.h1>
        
        <motion.p 
          className="text-xl text-center text-gray-600 mb-16 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          At Avenues The Global School, we offer a comprehensive curriculum designed to nurture young minds and prepare them for future success.
        </motion.p>
        
        {/* CISCE Preschool Curriculum Section */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-16 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-8">
              <h2 className="text-3xl font-display font-bold text-school-green mb-6">
                CISCE Preschool Curriculum
              </h2>
              <motion.p 
                className="text-gray-700 mb-4"
                initial={{ opacity: 0 }}
                animate={isLoaded ? { opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.4 }}
              >
                Early Childhood Education (ECE) marks the initial step on the educational ladder, serving as a pivotal stage that lays the groundwork for lifelong learning and holistic development. The preschool curriculum encompasses activities, games, and experiences meticulously planned and developed by teachers to enhance the competence of young children.
              </motion.p>
              <motion.p 
                className="text-gray-700 mb-6"
                initial={{ opacity: 0 }}
                animate={isLoaded ? { opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.5 }}
              >
                Upon entering preschool, children bring with them a diverse range of knowledge, abilities, values, experiences, and attitudes shaped within the contexts of their families and social environments. A high-quality CISCE ECE curriculum offers opportunities for young learners to explore these constructs in a developmentally appropriate manner.
              </motion.p>
              
              <h3 className="text-xl font-display font-bold text-school-blue mb-4">
                Principles of Early Learning at Avenues:
              </h3>
              <motion.ul 
                className="space-y-2 text-gray-700"
                initial={{ opacity: 0 }}
                animate={isLoaded ? { opacity: 1 } : {}}
                transition={{ duration: 0.7, delay: 0.6 }}
              >
                <li className="flex items-start">
                  <span className="text-school-orange font-bold mr-2">•</span>
                  <span>Play as the foundation for learning</span>
                </li>
                <li className="flex items-start">
                  <span className="text-school-orange font-bold mr-2">•</span>
                  <span>Art as the cornerstone of education</span>
                </li>
                <li className="flex items-start">
                  <span className="text-school-orange font-bold mr-2">•</span>
                  <span>Recognition of the distinctive aspects of children's cognition</span>
                </li>
                <li className="flex items-start">
                  <span className="text-school-orange font-bold mr-2">•</span>
                  <span>Integration of basic literacy and numeracy with cultural elements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-school-orange font-bold mr-2">•</span>
                  <span>Balancing formal and informal interactions</span>
                </li>
                <li className="flex items-start">
                  <span className="text-school-orange font-bold mr-2">•</span>
                  <span>Encouraging both familiarity and challenges within everyday routines</span>
                </li>
                <li className="flex items-start">
                  <span className="text-school-orange font-bold mr-2">•</span>
                  <span>Prioritization of experiential learning over mere expertise</span>
                </li>
                <li className="flex items-start">
                  <span className="text-school-orange font-bold mr-2">•</span>
                  <span>Developmentally appropriate practice and flexibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-school-orange font-bold mr-2">•</span>
                  <span>Embracing developmentally appropriate practices with flexibility</span>
                </li>
                <li className="flex items-start">
                  <span className="text-school-orange font-bold mr-2">•</span>
                  <span>Utilization of local materials, arts, and knowledge</span>
                </li>
                <li className="flex items-start">
                  <span className="text-school-orange font-bold mr-2">•</span>
                  <span>Integration of health and well-being through healthy habits</span>
                </li>
              </motion.ul>
            </div>
            
            <div className="grid grid-rows-2 gap-4 p-4">
              <div className="overflow-hidden rounded-lg h-80">
                <img 
                  src="/student-pictures/Prechool-Teacher-Students.png" 
                  alt="Preschool teacher with students" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="overflow-hidden rounded-lg h-70">
                <img 
                  src="/student-pictures/preschool-students-activity.png" 
                  alt="Preschool students engaged in activity" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Learning Areas Section */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-16 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          <div className="p-8">
            <h2 className="text-3xl font-display font-bold text-school-blue mb-6">
              Learning Areas / Domains of Development
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <motion.ul 
                  className="space-y-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.8 }}
                >
                  <li className="flex items-start">
                    <span className="text-school-green text-xl font-bold mr-3">•</span>
                    <div>
                      <h3 className="text-xl font-display font-semibold text-school-green">Personal, Social and Emotional development</h3>
                      <p className="text-gray-600 mt-1">Building self-awareness, confidence, and positive relationships with peers and adults.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-school-orange text-xl font-bold mr-3">•</span>
                    <div>
                      <h3 className="text-xl font-display font-semibold text-school-orange">Physical well-being and Motor Development</h3>
                      <p className="text-gray-600 mt-1">Developing gross and fine motor skills through play and structured activities.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-school-blue text-xl font-bold mr-3">•</span>
                    <div>
                      <h3 className="text-xl font-display font-semibold text-school-blue">Language and Communication</h3>
                      <p className="text-gray-600 mt-1">Fostering listening, speaking, pre-reading, and pre-writing skills.</p>
                    </div>
                  </li>
                </motion.ul>
              </div>
              
              <div>
                <motion.ul 
                  className="space-y-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.7, delay: 0.9 }}
                >
                  <li className="flex items-start">
                    <span className="text-purple-600 text-xl font-bold mr-3">•</span>
                    <div>
                      <h3 className="text-xl font-display font-semibold text-purple-600">Cognitive Development</h3>
                      <p className="text-gray-600 mt-1">Developing problem-solving skills, logical thinking, and numeracy concepts.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-600 text-xl font-bold mr-3">•</span>
                    <div>
                      <h3 className="text-xl font-display font-semibold text-red-600">Creative and Aesthetic Development</h3>
                      <p className="text-gray-600 mt-1">Encouraging self-expression through art, music, dance, and imaginative play.</p>
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="text-teal-600 text-xl font-bold mr-3">•</span>
                    <div>
                      <h3 className="text-xl font-display font-semibold text-teal-600">Environmental Awareness</h3>
                      <p className="text-gray-600 mt-1">Developing an understanding of the natural world and environmental responsibility.</p>
                    </div>
                  </li>
                </motion.ul>
              </div>
            </div>
            
            <div className="mt-8 overflow-hidden rounded-lg h-64">
              <img 
                src="/student-pictures/preschool-group.jpg" 
                alt="Preschool students in a group activity" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>
        
        {/* Upper Primary Level Curriculum Section */}
        <motion.div 
          className="bg-white rounded-xl shadow-lg overflow-hidden mb-16 relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={isLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 1.5 }}
        >
          <div className="p-8">
            <h2 className="text-3xl font-display font-bold text-school-blue-dark mb-6">
              Curriculum for the Upper Primary Level (Classes VI-VIII)
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <motion.p 
                  className="text-gray-700 mb-4"
                  initial={{ opacity: 0 }}
                  animate={isLoaded ? { opacity: 1 } : {}}
                  transition={{ duration: 0.7, delay: 1.6 }}
                >
                  The curriculum for the Upper Primary Stage covers English, Hindi (Second Language), Mathematics, Physics, Chemistry, Biology (under Science), History & Civics, Geography (under the subject History, Civics & Geography), Computer Studies and Arts Education.
                </motion.p>
                
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isLoaded ? { opacity: 1 } : {}}
                  transition={{ duration: 0.7, delay: 1.7 }}
                >
                  <h3 className="text-xl font-display font-semibold text-school-blue mb-2">English</h3>
                  <p className="text-gray-700 mb-4">
                    Being the medium of instruction (first language) the focus of English language learning at this stage is on oral and written expression, in a creative manner. This would help develop a sense of appreciation and critical vision for different forms of literature among children. The emphasis of Second Language learning at this stage is to hone the skills and develop an interest in the language and literature.
                  </p>
                  
                  <h3 className="text-xl font-display font-semibold text-school-green mb-2">Mathematics</h3>
                  <p className="text-gray-700 mb-4">
                    The focus of Mathematics learning at this stage is to consolidate and expand the learning through problem solving techniques.
                  </p>
                </motion.div>
              </div>
              
              <div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={isLoaded ? { opacity: 1 } : {}}
                  transition={{ duration: 0.7, delay: 1.8 }}
                >
                  <h3 className="text-xl font-display font-semibold text-purple-600 mb-2">Science</h3>
                  <p className="text-gray-700 mb-4">
                    Science at this stage branches out into Physics, Chemistry and Biology, so as to help children understand the issues and concerns of these areas. In Social Studies, two core areas, History & Civics and Geography, have been identified. Computer Studies curriculum focuses on acquisition of knowledge and skills in ICT so as to enable students to operate hardware, software applications and technology to access and utilize information.
                  </p>
                  
                  <h3 className="text-xl font-display font-semibold text-red-600 mb-2">Arts Education</h3>
                  <p className="text-gray-700 mb-4">
                    The emphasis of Arts Education at this stage is on development of creative expression and expression through visual art forms. Arts Education follows a theme based approach in the curriculum, wherein efforts have been made to provide suggestions for integration of Arts Education with other curriculum areas.
                  </p>
                </motion.div>
                
                <div className="mt-6 overflow-hidden rounded-lg h-64">
                  <img 
                    src="/student-pictures/upper-primary-classroom.jpg" 
                    alt="Upper primary students in classroom" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Interdisciplinary Learning Approach */}
            <motion.div 
              className="mt-8 p-6 bg-gray-50 rounded-lg border-l-4 border-school-green"
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 1.9 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <h3 className="text-2xl font-display font-bold text-school-green mb-4">
                    Interdisciplinary Learning
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Our Upper Primary School provides a framework of academic challenge that encourages students to explore real-world concepts and issues, challenge assumptions, think critically and acquire skills that they will need to apply throughout their educational and future professional journeys.
                  </p>
                  <p className="text-gray-700">
                    The strength of our program stems from the belief that learning is more meaningful when students are provided opportunities to explore concepts through the lens of different subject areas. This is called interdisciplinary learning and it is a hallmark of our approach. It is also the key to teasing out our students' innate creativity by providing them multiple avenues to approach problem-solving. We teach for the understanding of real-life concepts rather than the simple regurgitation of knowledge.
                  </p>
                </div>
                <div className="overflow-hidden rounded-lg h-72 order-1 md:order-2">
                  <img 
                    src="/student-pictures/interdisciplinary-learning.jpg" 
                    alt="Students engaged in interdisciplinary learning" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
        
      </div>
      
      <Footer />
    </div>
  );
};

export default Academics;
