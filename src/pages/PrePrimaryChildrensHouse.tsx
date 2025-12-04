import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const PrePrimaryChildrensHouse = () => {
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
          Pre-Primary Children's House
        </motion.h1>

        {/* Hero Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16 relative w-full rounded-2xl overflow-hidden shadow-lg"
        >
          <img
            src="/banner/Preschool-main.jpg"
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
          <h2 className="text-purple-600 text-2xl font-semibold mb-6">
            CISCE Preschool Curriculum
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Early Childhood Education (ECE) marks the initial step on the educational ladder, serving as a pivotal stage that lays the groundwork for lifelong learning and holistic development. The preschool curriculum encompasses activities, games, and experiences meticulously planned and developed by teachers to enhance the competence of young children. Upon entering preschool, children bring with them a diverse range of knowledge, abilities, values, experiences, and attitudes shaped within the contexts of their families and social environments. A high-quality CISCE ECE curriculum offers opportunities for young learners to explore these constructs in a developmentally appropriate manner.
          </p>
        </motion.div>

        {/* Principles Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-2xl p-8 md:p-9 shadow-lg border border-gray-100"
        >
          <h2 className="text-purple-600 text-2xl font-semibold mb-6">
            Principles of Early Learning at Avenues
          </h2>
          <ul className="grid md:grid-cols-2 gap-4">
            {[
              "Play as the foundation for learning",
              "Art as the cornerstone of education",
              "Recognition of the distinctive aspects of children's cognition",
              "Integration of basic literacy and numeracy with cultural elements",
              "Balancing formal and informal interactions",
              "Encountering both familiarity and challenges within everyday routines",
              "Prioritization of experiential learning over mere expertise",
              "Developmentally appropriate practice and flexibility",
              "Embracing developmentally appropriate practices with flexibility",
              "Utilization of local materials, arts, and knowledge",
              "Integration of health and well-being through healthy habits"
            ].map((principle, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-purple-500 mt-1">•</span>
                <span className="text-gray-700">{principle}</span>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Learning Areas Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-2xl p-8 md:p-9 shadow-lg border border-gray-100"
        >
          <h2 className="text-purple-600 text-2xl font-semibold mb-6">
            Learning Areas / Domains of Development
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-2">
                {[
                  "Personal, Social and Emotional development",
                  "Physical well-being and Motor Development",
                  "Cognitive Development",
                  "Language and Literacy Development",
                  "Arts and Creative Development",
                  "Technology (Computer Play)"
                ].map((area, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span className="text-gray-700">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-gray-800 font-medium mb-3">Language and Literacy Development includes:</h3>
              <ul className="space-y-2">
                {[
                  "Listening",
                  "Speaking",
                  "Reading Readiness",
                  "Writing Readiness"
                ].map((item, index) => (
                  <li key={index} className="flex items-start space-x-2">
                    <span className="text-purple-500 mt-1">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Pedagogy Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-2xl p-8 md:p-9 shadow-lg border border-gray-100"
        >
          <h2 className="text-purple-600 text-2xl font-semibold mb-6">
            Pedagogy – How learning happens at Avenues?
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Young children come to preschool with boundless curiosity and a voracious capacity to learn. They possess immense interest in their immediate surroundings and learn about their world through observation, exploration, discovery, experimentation, and investigation into how things work and why certain events occur in specific ways. Each child is unique and has different strengths, interests, and needs.
          </p>
          <p className="text-gray-700 leading-relaxed mb-8">
            Children will be provided with plenty of opportunities to play, both freely and with guidance. They will be exposed to concrete objects, hands-on experiences, sensory stimulation, and developmentally appropriate activities.
          </p>

          <h3 className="text-gray-800 text-xl font-semibold mb-4">
            Pedagogical Processes at Avenues:
          </h3>
          <ul className="space-y-3">
            {[
              "Age and developmentally appropriate play and activities tailored to meet the needs, interests, and abilities of young children.",
              "Based on planned experiences and activities targeting all developmental areas/domains.",
              "Flexible to accommodate the diverse needs and individual differences among children.",
              "Aligned with the curriculum of Classes I and II of primary school.",
              "Enriched with teacher-initiated group work and freely chosen play activities.",
              "Designed to provide feedback and reflect on children's work/performance during activities.",
              "Aimed at promoting adult-child interactions that involve open-ended questioning to stimulate young children's thinking.",
              "Designed to involve parents and families to ensure young children thrive in an ECE program.",
              "Linked with positive learning outcomes for young children."
            ].map((process, index) => (
              <li key={index} className="flex items-start space-x-2">
                <span className="text-purple-500 mt-1">•</span>
                <span className="text-gray-700">{process}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default PrePrimaryChildrensHouse; 