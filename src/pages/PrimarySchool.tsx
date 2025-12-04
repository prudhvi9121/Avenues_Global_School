import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const PrimarySchool = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Navigation />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-[75rem]">
        {/* Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-800 mb-8 text-center bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent"
        >
          Primary School
        </motion.h1>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16 relative w-full rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src="/banner/primaryschool-main.png"
            alt="Pre-Primary Children's House"
            className="w-full h-auto object-contain"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </motion.div>

        {/* Introduction */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16 bg-white rounded-2xl p-8 md:p-9 shadow-lg border border-gray-100"
        >
          <p className="text-gray-700 leading-relaxed mb-6">
            The Primary School classrooms are vibrant and nurturing environments for learning. We believe that students learn best when they are empowered and feel ownership in their classrooms.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Primary School is an exciting time, filled with the anticipation of meeting new teachers, exploring new subject areas, going on field trips, participating in student assemblies, experimenting with educational technologies, delving into thematic units of inquiry, and forging new friendships.
          </p>
          <p className="text-gray-700 leading-relaxed">
            In our Primary School classrooms, students care deeply about what they learn. They have a voice in their classrooms, posing questions of interest to them and bringing their individual strengths to the learning process. Through inquiry and exploration, our program engages students in their learning while continuing to build their fundamental skills in all subject areas. We firmly believe that students learn best when they are empowered and feel ownership in their classrooms. This fosters a joy for learning and a passion for education, which is why Avenues students love coming to school.
          </p>
        </motion.div>

        {/* Curriculum Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-2xl p-8 md:p-9 shadow-lg border border-gray-100"
        >
          <h2 className="text-purple-600 text-2xl font-semibold mb-6">
            Curriculum for Primary Level (Class I-V)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            At the primary stage, subject areas include English, Hindi (Second Language), Mathematics, Environmental Studies (EVS), Science, Social Studies, Computer Studies, and Arts Education.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-gray-800 text-xl font-medium mb-3">Language Education</h3>
              <p className="text-gray-700 leading-relaxed">
                English is treated as the primary language, taking into account multilingualism as a valuable learning resource. Hindi is one of the Second Languages up to the elementary stage (I – VIII). The teaching-learning of languages aims to provide language as a tool to structure thought processes and to explore different realms of knowledge and imagination.
              </p>
            </div>

            <div>
              <h3 className="text-gray-800 text-xl font-medium mb-3">Mathematics</h3>
              <p className="text-gray-700 leading-relaxed">
                Mathematics focuses on reasoning and conceptual understanding at every stage. The approach facilitates hands-on experiences and enables children to link Mathematics with everyday life experiences.
              </p>
            </div>

            <div>
              <h3 className="text-gray-800 text-xl font-medium mb-3">Environmental Studies & Science</h3>
              <p className="text-gray-700 leading-relaxed">
                The Environmental Studies (EVS) curriculum (Classes I-II) is presented as an integrated curricular area following a thematic approach. The focus is on learning about the environment, through the environment, and for the environment. In Classes III-V, Science and Social Studies are core areas, with a multi-disciplinary approach emphasizing various themes identified from different disciplines.
              </p>
            </div>

            <div>
              <h3 className="text-gray-800 text-xl font-medium mb-3">Technology & Arts</h3>
              <p className="text-gray-700 leading-relaxed">
                Computer Studies, another core area at this stage, is developed with a focus on the use of technology in education. The curriculum for Arts Education at the primary level follows a theme-based approach, providing opportunities for creative expression, appreciation, and collaboration.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Academics Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-2xl p-8 md:p-9 shadow-lg border border-gray-100"
        >
          <h2 className="text-purple-600 text-2xl font-semibold mb-6">
            Academics
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our approach to planning and structuring the CISCE Primary curriculum at Avenues is why our students love to learn. We believe that students learn best when they can see connections to big ideas, draw their own conclusions, construct meaning through inquiry, and take risks.
          </p>
          <p className="text-gray-700 leading-relaxed">
            To this end, we create conceptually based Theme Units of Inquiry that allow students to contextualize their learning, make connections to other ideas, and inquire into the world around them. Students develop knowledge and understanding of significant concepts underpinned by traditional subjects like math, reading, writing, social studies, and science, all tied to broader concepts to make learning more meaningful.
          </p>
        </motion.div>

        {/* Co-curriculars Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-2xl p-8 md:p-9 shadow-lg border border-gray-100"
        >
          <h2 className="text-purple-600 text-2xl font-semibold mb-6">
            Co-curriculars and Clubs
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Students participate in a variety of school activities where they can learn from both Avenues teachers and highly skilled external instructors. As a student-centered school, Avenues encourages students to join and participate in a range of activities beyond the school day. These activities aim to provide enriching experiences that build on individual interests and extend learning beyond the classroom.
          </p>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default PrimarySchool; 