import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const UpperPrimary = () => {
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
          Upper Primary
        </motion.h1>

        {/* Hero Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16 relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg"
        >
          <iframe
            src="/banner/upperprimaryschool.mp4"
            title="Upper Primary School Overview"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </motion.div>

        {/* Introduction */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16 bg-white rounded-2xl p-8 md:p-9 shadow-lg border border-gray-100"
        >
          <p className="text-gray-700 leading-relaxed mb-6">
            "Our learning is centered around big concepts that inspire thought and action with a focus on intellectual, emotional, and social growth."
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Your child will spend their day learning from multiple teachers who are passionate about their unique subject areas. Behind the scenes, our team of educators work together to find synergies between the subjects to create an interdisciplinary, coherent, and challenging curriculum.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            Our learning is centered around big concepts that inspire thought and action with a focus on intellectual, emotional, and social growth. The approach in Upper Primary School is guided by a desire to honor our students' need for independence by empowering them to be their own advocates, to engage with teachers directly, to take ownership in their academic work, to solve their own problems, to provide support to each other, to transition between rooms and buildings on their own, and to choose their own cocurricular classes.
          </p>
          <p className="text-gray-700 leading-relaxed">
            A hallmark of our program is the emphasis we place on teaching students how to learn. We focus on teaching students the skills and strategies that promote growth and competence. When our Upper Primary Schoolers move on to their respective Secondary Schools after Grade 8, they are not only recognized for their academic work, but they are praised for their mature emotional intelligence. Our students are organized, articulate and they advocate for themselves – exactly what they need to navigate the high school years and beyond.
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
            Curriculum for the Upper Primary Level (Classes VI-VIII)
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The curriculum for the Upper Primary Stage covers English, Hindi (Second Language), Mathematics, Physics, Chemistry, Biology (under Science), History & Civics, Geography (under the subject History, Civics & Geography), Computer Studies and Arts Education.
          </p>

          <div className="space-y-6">
            <div>
              <h3 className="text-gray-800 text-xl font-medium mb-3">Language Education</h3>
              <p className="text-gray-700 leading-relaxed">
                Being the medium of instruction (first language) the focus of English language learning at this stage is on oral and written expression, in a creative manner. This would help develop a sense of appreciation and critical vision for different forms of literature among children. The emphasis of Second Language learning at this stage is to hone the skills and develop an interest in the language and literature.
              </p>
            </div>

            <div>
              <h3 className="text-gray-800 text-xl font-medium mb-3">Mathematics</h3>
              <p className="text-gray-700 leading-relaxed">
                The focus of Mathematics learning at this stage is to consolidate and expand the learning through problem solving techniques.
              </p>
            </div>

            <div>
              <h3 className="text-gray-800 text-xl font-medium mb-3">Science & Social Studies</h3>
              <p className="text-gray-700 leading-relaxed">
                Science at this stage branches out into Physics, Chemistry and Biology, so as to help children understand the issues and concerns of these areas. In Social Studies, two core areas, History & Civics and Geography, have been identified.
              </p>
            </div>

            <div>
              <h3 className="text-gray-800 text-xl font-medium mb-3">Technology & Arts</h3>
              <p className="text-gray-700 leading-relaxed">
                Computer Studies curriculum focuses on acquisition of knowledge and skills in ICT so as to enable students to use common software applications and technology to access and utilize information. The emphasis of Arts Education at this stage is on development of creative expression and expression through visual art forms. Arts Education follows a theme based approach in this curriculum, wherein efforts have been made to provide suggestions for integration of Arts Education with other curriculum areas.
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
            Our Upper Primary School provides a framework of academic challenge that encourages students to explore real-world concepts and issues, challenge assumptions, think critically and acquire skills that they will need to apply throughout their educational and future professional journeys.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The strength of our program stems from the belief that learning is more meaningful when students are provided opportunities to explore concepts through the lens of different subject areas. This is called interdisciplinary learning and it is a hallmark of our approach. It is also the key to teasing out our students' innate creativity by providing them multiple avenues to approach problem-solving. We teach for the understanding of real-life concepts rather than the simple regurgitation of knowledge.
          </p>
        </motion.div>

        {/* Personality Development Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-2xl p-8 md:p-9 shadow-lg border border-gray-100"
        >
          <h2 className="text-purple-600 text-2xl font-semibold mb-6">
            Personality in the Making
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Another strength of the academic program in our Upper Primary School is that teaching extends far beyond the content and concepts in a given subject area. We invest time to integrate the teaching of key skills that help our students become better learners as well as better people. They include critical-thinking, reflection, organization, collaboration, affective, information literacy, communication, transfer, creative thinking, and media literacy skills.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            We facilitate student learning in a variety of areas such as how they manage time and tasks effectively, how they work with others, how they manage their state of mind and how they use language to communicate. These also help students become more aware of the learning process and understand their strengths and challenges as learners.
          </p>
          <p className="text-gray-700 leading-relaxed">
            In addition to the academic classes, your child will benefit greatly from our Life Skills program "HAPPLE" where they are provided time once a week to discuss topics relevant to navigating adolescence. We value the development of the whole child and want to ensure that students lead balanced lives in and out of school, so students are provided time to learn about the importance of healthy relationships and personal wellness.
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
          <p className="text-gray-700 leading-relaxed mb-6">
            We know that learning is more meaningful when students can make connections across subject areas so we've structured our cocurricular classes to complement the programming of our academic day. We also recognize that camaraderie and being part of a team are both important parts of a Upper Primary schooler's life so we've purposely designed this program in a way that celebrates students' diverse interests and encourages new friendships.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Your child will be required to choose from a selection of activities and clubs. Each of these activities are enriching experiences that bring real-life meaning to their learning, and are a great opportunity for our students to explore new interests or develop existing ones.
          </p>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default UpperPrimary; 