import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, BookOpen, Users, Award, Lightbulb, Globe } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
// ... imports remain unchanged

const OurMission = () => {
    const [isLoaded, setIsLoaded] = useState(false);
  
    useEffect(() => {
      setIsLoaded(true);
    }, []);
  
    const cardVariants = {
      hidden: { opacity: 0, y: 50 },
      visible: { opacity: 1, y: 0 }
    };
  
    const iconVariants = {
      hidden: { scale: 0, rotate: -180 },
      visible: { scale: 1, rotate: 0 }
    };
  
    const values = [
      { text: "Excellence in all endeavors", icon: Award },
      { text: "Respect for diversity and inclusivity", icon: Users },
      { text: "Integrity and ethical conduct", icon: Heart },
      { text: "Innovation and adaptability", icon: Lightbulb },
      { text: "Social responsibility", icon: Globe }
    ];
  
    return (
      <div>
        <Navigation />
        <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-pink-50">
          <motion.section
            className="py-20 px-4"
            initial={{ opacity: 0 }}
            animate={isLoaded ? { opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="container mx-auto max-w-6xl">
              {/* Heading */}
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: -30 }}
                animate={isLoaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h1 className="text-5xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600 mb-6">
                  Our Foundation
                </h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Discover the core principles, vision, and values that drive Avenues The Global School 
                  in shaping tomorrow's leaders and innovators.
                </p>
              </motion.div>
  
              {/* 3 Cards in 1 Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                {/* Mission */}
                {/* Vision */}
                {/* Values */}
                {[{
                  title: "Our Mission",
                  icon: Target,
                  bg: "from-green-500 to-emerald-600",
                  text: "At Avenues, our mission is to provide a nurturing and stimulating environment where children can develop intellectually, emotionally, and socially. We believe in fostering creativity, critical thinking, and a lifelong love of learning."
                }, {
                  title: "Our Vision",
                  icon: Eye,
                  bg: "from-orange-500 to-red-500",
                  text: "To be recognized as a center of educational excellence, inspiring and empowering our students to become global citizens who contribute positively to society through their knowledge, skills, and compassion."
                }, {
                  title: "Our Values",
                  icon: Heart,
                  bg: "from-blue-600 to-purple-600",
                  text: "",
                  isValues: true
                }].map((card, index) => (
                  <motion.div
                    key={index}
                    variants={cardVariants}
                    initial="hidden"
                    animate={isLoaded ? "visible" : "hidden"}
                    transition={{ duration: 0.8, delay: 0.3 + index * 0.2 }}
                  >
                    <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 h-full">
                      <div className={`bg-gradient-to-r ${card.bg} p-6`}>
                        <div className="flex items-center justify-center mb-3">
                          <motion.div
                            variants={iconVariants}
                            initial="hidden"
                            animate={isLoaded ? "visible" : "hidden"}
                            transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                            className="bg-white/20 rounded-full p-3"
                          >
                            <card.icon className="w-8 h-8 text-white" />
                          </motion.div>
                        </div>
                        <h2 className="text-2xl font-display font-bold text-white text-center">
                          {card.title}
                        </h2>
                      </div>
                      <div className="p-6">
                        {card.isValues ? (
                          <div className="space-y-3">
                            {values.map((value, idx) => {
                              const IconComponent = value.icon;
                              return (
                                <motion.div
                                  key={idx}
                                  className="flex items-center p-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg hover:from-blue-100 hover:to-purple-100 transition-all duration-300"
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={isLoaded ? { opacity: 1, x: 0 } : {}}
                                  transition={{ duration: 0.6, delay: 1.1 + (idx * 0.1) }}
                                >
                                  <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2 mr-3">
                                    <IconComponent className="w-4 h-4 text-white" />
                                  </div>
                                  <span className="text-gray-700 text-sm font-medium">{value.text}</span>
                                </motion.div>
                              );
                            })}
                          </div>
                        ) : (
                          <motion.p
                            className="text-gray-700 leading-relaxed text-center"
                            initial={{ opacity: 0 }}
                            animate={isLoaded ? { opacity: 1 } : {}}
                            transition={{ duration: 0.8, delay: 0.7 }}
                          >
                            {card.text}
                          </motion.p>
                        )}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
  
              {/* Our History Full Width */}
              <motion.div
                variants={cardVariants}
                initial="hidden"
                animate={isLoaded ? "visible" : "hidden"}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                  <div className="bg-gradient-to-r from-pink-500 to-rose-500 p-6">
                    <div className="flex items-center justify-center mb-3">
                      <motion.div
                        variants={iconVariants}
                        initial="hidden"
                        animate={isLoaded ? "visible" : "hidden"}
                        transition={{ duration: 0.6, delay: 1.3 }}
                        className="bg-white/20 rounded-full p-3"
                      >
                        <BookOpen className="w-8 h-8 text-white" />
                      </motion.div>
                    </div>
                    <h2 className="text-2xl font-display font-bold text-white text-center">
                      Our History
                    </h2>
                  </div>
                  <div className="p-6">
                    <motion.p
                      className="text-gray-700 leading-relaxed space-y-4"
                      initial={{ opacity: 0 }}
                      animate={isLoaded ? { opacity: 1 } : {}}
                      transition={{ duration: 0.8, delay: 1.5 }}
                    >
                      <strong className="block text-xl mb-4 text-pink-600">Avenues The Global School – A Legacy of Excellence Rooted in Vision</strong>
                      An enduring legacy of excellence is always built upon a strong foundation. In 2017, the visionary leaders of the Lorven Educational Society laid the cornerstone of Avenues The Global School, with a clear and unwavering commitment to redefining quality education.
                      <br /><br />
                      Guided by a mission to nurture young minds and shape responsible global citizens, the school has grown into a beacon of knowledge, discipline, and innovation. Founded on the principles of holistic development, academic rigour, and character building, Avenues The Global School has become a name synonymous with educational excellence in the region.
                      <br /><br />
                      The school follows a co-educational, English-medium curriculum, with a strong emphasis on both scholastic and co-scholastic development. Our academic framework is designed to blend traditional values with modern pedagogical approaches, ensuring that students receive not just knowledge but the wisdom to apply it meaningfully in life.
                      <br /><br />
                      At the helm of this institution is a highly accomplished academician with profound expertise and decades of experience in the field of education. Under this able leadership, the school has flourished into a nurturing and dynamic learning environment that empowers students to excel academically, think critically, and lead with integrity.
                      <br /><br />
                      Avenues The Global School is more than just a place of learning — it is a vibrant community where students are inspired to discover their unique strengths, celebrate diversity, and develop the confidence to meet the challenges of a rapidly changing world.
                      <br /><br />
                      With state-of-the-art facilities, a committed faculty, and a values-driven philosophy, the school continues its journey towards educational distinction, preparing every Avenian to step into the future with knowledge, compassion, and courage.
                      <br /><br />
                      Avenues The Global School is affiliated with the Council for the Indian School Certificate Examinations (CISCE), a nationally and internationally renowned private board of school education in India.
                      <br /><br />
                      The CISCE is known for its comprehensive, balanced, and rigorous curriculum that emphasises strong language skills, analytical thinking, and a wide range of subject choices. It conducts two major examinations:
                      <ul className="list-disc list-inside mt-4 text-left ml-6">
                        <li><strong>ICSE (Class 10):</strong> Emphasizes detailed, in-depth syllabus across academics, languages, and creative disciplines.</li>
                        <li><strong>ISC (Class 12):</strong> Prepares students for higher education in India and abroad with emphasis on English, Maths, Science, Commerce, Humanities, and more.</li>
                      </ul>
                      <br />
                      Affiliation with CISCE ensures a curriculum that promotes academic excellence, co-curricular growth, and values-based education, enabling students to excel not only in examinations but also in life.
                    </motion.p>
                  </div>
                </div>
              </motion.div>
  
            </div>
          </motion.section>
        </div>
        <Footer />
      </div>
    );
  };
  
  export default OurMission;
  