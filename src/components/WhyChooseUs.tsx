import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Users, BookOpen, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ y: -5, boxShadow: "0 10px 30px -15px rgba(0,0,0,0.2)" }}
      className="bg-white rounded-xl overflow-hidden border border-gray-100 transition-all duration-300"
    >
      <div className="p-6">
        <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-50 to-purple-50 mb-4">
          {icon}
        </div>
        <h3 className="text-xl font-display font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const WhyChooseUs = () => {
  const features = [
    {
      title: "Academic Rigor",
      description:
        "The foundation for making learning happen for all at Avenues is the innovative methods of teaching and learning.",
      icon: <BookOpen className="h-10 w-10 text-white" />,
      gradient: "bg-gradient-to-br from-blue-500 to-blue-600",
    },
    {
      title: "ICSE Curriculum",
      description:
        "Introducing new CISCE integrated curriculum from pre-school to class 10. Curriculum is comprehensive for the modern times.",
      icon: <Users className="h-10 w-10 text-white" />,
      gradient: "bg-gradient-to-br from-red-500 to-red-600",
    },
    {
      title: "Personality in the Making",
      description:
        "We at Avenues believe every child has infinite potential. We focus on nurturing the personality of the child to ignite their minds to the infinite possibilities of life.",
      icon: <Award className="h-10 w-10 text-white" />,
      gradient: "bg-gradient-to-br from-yellow-500 to-yellow-600",
    },
    {
      title: "Center for Humanness",
      description:
        "The Centre focuses on research and training in understanding and appreciation of the human possibilities and cultural values.",
      icon: <Star className="h-10 w-10 text-white" />,
      gradient: "bg-gradient-to-br from-green-500 to-green-600",
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="pt-4 pb-12 sm:pt-6 sm:pb-16 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-4"
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-school-blue-dark to-school-blue">Why Avenues</span> Is The Right Choice
          </h2>
          <p className="text-gray-600 text-base sm:text-lg">
            Avenues is committed to providing exceptional education that prepares students for a bright future through holistic development.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className={`rounded-xl shadow-md p-5 sm:p-6 flex flex-col items-center text-center ${feature.gradient}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-3">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-white">{feature.title}</h3>
              <p className="text-white text-xs sm:text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center mt-8 sm:mt-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-school-orange opacity-10 rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-school-green opacity-10 rounded-full"></div>
            <img
              src="/uploads/hero4.jpg"
              alt="Happy students at Avenues"
              className="rounded-lg shadow-xl relative z-10"
            />
            <div className="absolute -bottom-5 -right-5 bg-white p-4 rounded-lg shadow-lg z-20">
              <div className="flex items-center">
                <div className="bg-school-green text-white p-2 rounded-full mr-3">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Trusted by</p>
                  <p className="text-lg font-bold text-gray-800">500+ Families</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl font-display font-semibold mb-6 text-school-blue-dark">
              The Avenues Difference
            </h3>
            <ul className="space-y-5">
              {[
                {
                  title: "Comprehensive Curriculum",
                  desc: "Balancing academic excellence with creative and physical development",
                  color: "text-school-orange"
                },
                {
                  title: "Safe Learning Environment",
                  desc: "Creating spaces where children feel secure to explore and grow",
                  color: "text-school-green"
                },
                {
                  title: "Individual Attention",
                  desc: "Small class sizes ensure personalized learning experience",
                  color: "text-school-blue"
                },
                {
                  title: "Future-Ready Skills",
                  desc: "Focus on critical thinking, communication, and digital literacy",
                  color: "text-school-red"
                }
              ].map((item, index) => (
                <motion.li
                  className="flex items-start bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className={`${item.color} p-2 rounded-full mr-4 flex-shrink-0`}>
                    <CheckCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-gray-800">{item.title}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;