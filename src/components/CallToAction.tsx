import React from 'react';
import { Button } from "@/components/ui/button";
import { GraduationCap, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const CallToAction = () => {
  const navigate = useNavigate();
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-purple-600 opacity-95 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-400 opacity-10 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-400 opacity-10 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <motion.div 
              className="md:col-span-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-4 leading-tight">
                Join Our Academic Community
              </h2>
              <p className="text-purple-100 text-lg md:text-xl mb-0 leading-relaxed">
                Enrollment for the next academic year is now open. Secure your child's place at Avenues and be part of our journey towards excellence.
              </p>
            </motion.div>
            
            <motion.div 
              className="md:col-span-4 flex justify-end"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <Button 
                onClick={() => navigate('/admissions')}
                size="lg" 
                className="bg-white text-purple-800 hover:bg-purple-50 transition-all duration-300 rounded-full px-8 py-6 shadow-lg hover:shadow-xl transform hover:-translate-y-1 font-semibold text-lg"
              >
                <GraduationCap className="mr-2 h-6 w-6" /> Apply Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </div>
          
          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mt-16">
            {[
              { label: "Application Deadline", value: "May 30, 2025" },
              { label: "Classes Begin", value: "Aug 15, 2025" },
              { label: "Available Seats", value: "Limited" },
              { label: "Financial Aid", value: "Available" }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index + 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-purple-300/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-1"
              >
                <p className="text-purple-200 text-sm uppercase tracking-wider mb-2 font-medium">{item.label}</p>
                <p className="text-white font-display text-2xl font-bold">{item.value}</p>
              </motion.div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
