import React from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { motion } from 'framer-motion';

const SecondarySchool = () => {
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
          Secondary School
        </motion.h1>

        {/* Hero Video */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-16 relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg"
        >
          <iframe
            src="/banner/ICSE_Curriculum.mp4"
            title="Secondary School Overview"
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
          <h2 className="text-purple-600 text-2xl font-semibold mb-6">
            Indian Certificate Of Secondary Education (ICSE) Examination
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Students are prepared to take the ICSE Board exam, with Class IX serving as a foundation year for appearing in the Class X ICSE Examination.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Council for the Indian School Certificate Examinations was established in 1958 by the University of Cambridge Local Examinations Syndicate with the assistance of the Inter-State Board for Anglo-Indian Education. It is registered under the Societies Registration Act No. XXI of 1860.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Indian Certificate of Secondary Education has been designed to provide an examination in a course of general education, in accordance with the recommendations of the New Education Policy 1986, through the medium of English. Private candidates are not permitted to appear for this examination.
          </p>
          <p className="text-gray-700 leading-relaxed">
            While it is sometimes believed that obtaining high grades in the ICSE board is arduous due to the density of content and the extensive syllabus, the skill of a well-qualified teaching body and a well-researched teaching methodology adopted by a school play crucial roles. A significant part of ensuring our students' success lies with the school, where teachers provide the guidance, support, and inputs they need. At Avenues, we create an environment that nurtures learning, provides infrastructure, and fosters an atmosphere that boosts students' confidence, increases their thirst for knowledge, and prepares them to excel in Board Exams, utilizing their potential to the fullest and achieving success.
          </p>
        </motion.div>

        {/* Advantages Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-2xl p-8 md:p-9 shadow-lg border border-gray-100"
        >
          <h2 className="text-purple-600 text-2xl font-semibold mb-6">
            Advantages of ICSE Syllabus
          </h2>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <p className="text-gray-700 leading-relaxed">
                Every subject taught in ICSE is covered in detail, providing students with thorough knowledge for better understanding
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <p className="text-gray-700 leading-relaxed">
                The certificate provided by the ICSE board is accepted worldwide, enabling students to enroll in foreign institutions for further studies
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <p className="text-gray-700 leading-relaxed">
                Students studying under the ICSE curriculum gain a comprehensive understanding of the English language
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <p className="text-gray-700 leading-relaxed">
                Studying under the ICSE syllabus helps develop management skills, preparing students for success in management fields
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <p className="text-gray-700 leading-relaxed">
                The syllabus enhances students' analytical skills by providing practical knowledge of the subjects they study
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <p className="text-gray-700 leading-relaxed">
                With an ICSE background, students can enter scholarship exams for studying abroad, showcasing their competence in international settings
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <p className="text-gray-700 leading-relaxed">
                Students studying in the ICSE board are well-prepared to excel in exams like TOEFL due to their strong command of the English language
              </p>
            </li>
          </ul>
        </motion.div>

        {/* CISCE Features Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-2xl p-8 md:p-9 shadow-lg border border-gray-100"
        >
          <h2 className="text-purple-600 text-2xl font-semibold mb-6">
            CISCE Unique Features And Areas Of Excellence
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Council believes in maintaining high academic standards to ensure students excel in every sphere of life. It emphasizes the development and assessment of higher-order thinking skills and creativity, alongside nurturing soft virtues such as empathy, community service, gender equality, and environmental awareness.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The Council is actively involved in studying areas of concern in education to provide new insights, dispel myths, and provoke new responses to deliver more effective teaching-learning provisions.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The carefully planned academic curriculum ensures that students enjoy their school years through learning and discovery, acquiring a sound understanding of concepts.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            The curriculum is challenging and on par with other international curricula, with continual review and incorporation of changes as needed. Students taking the ISC examinations are well-equipped to excel in various competitive examinations.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Recognizing the need for hands-on training and "learning by doing," the Council has made it mandatory for students at ICSE levels to opt for an application-based subject, with 50% weightage given to theory marks and 50% to practicals.
          </p>
        </motion.div>

        {/* Stress Reduction Measures */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 bg-white rounded-2xl p-8 md:p-9 shadow-lg border border-gray-100"
        >
          <h2 className="text-purple-600 text-2xl font-semibold mb-6">
            Stress Reduction Measures
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            In recent years, the Council has introduced measures to reduce stress during examinations:
          </p>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <p className="text-gray-700 leading-relaxed">
                Continuous and Comprehensive Evaluation (CCE) is promoted at the junior and middle levels, with compulsory provision of internal assessment to give due weightage to CCE, even at the secondary level
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <p className="text-gray-700 leading-relaxed">
                Flexibility in the choice of subjects at the secondary level helps integrate learning with abilities and talents, reducing stress
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <p className="text-gray-700 leading-relaxed">
                Students weak in Mathematics/Science can opt for other subjects to alleviate the stress of failure
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <p className="text-gray-700 leading-relaxed">
                The Council offers a variety of subjects from which students can choose based on their aptitude and ability
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <p className="text-gray-700 leading-relaxed">
                Skill-based subjects have been introduced to make the curriculum more holistic and comprehensive
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <p className="text-gray-700 leading-relaxed">
                Internal Assessment components provide stress-free learning opportunities
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-purple-600 mr-2">•</span>
              <p className="text-gray-700 leading-relaxed">
                Choice of Application-based subjects further reduces stress, particularly in handling Group III subjects
              </p>
            </li>
          </ul>
          <p className="text-gray-700 leading-relaxed mt-6">
            These measures aim to ensure that students have a well-rounded educational experience and are equipped to excel in their academic pursuits.
          </p>
        </motion.div>
      </div>

      <Footer />
    </div>
  );
};

export default SecondarySchool; 