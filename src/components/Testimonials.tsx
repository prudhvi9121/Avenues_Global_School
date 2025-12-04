
import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Testimonials = () => {
  const [current, setCurrent] = useState(0);
  
  const testimonials = [
    {
      quote: "Avenues has provided my child with an exceptional learning environment where they are both challenged and supported. The teachers truly care about each student's growth.",
      author: "Jessica P.",
      relation: "Parent of Primary Student",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
      quote: "The teachers go above and beyond to ensure each student receives personalized attention and guidance. My son has grown academically and socially since joining Avenues.",
      author: "Rajesh K.",
      relation: "Parent of Secondary Student",
      rating: 5,
      image: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
      quote: "My children have flourished academically and socially since joining Avenues The Global School. The school's approach to education is truly holistic.",
      author: "Michelle T.",
      relation: "Parent of Two Students",
      rating: 5,
      image: "https://randomuser.me/api/portraits/women/63.jpg"
    }
  ];

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            What <span className="text-school-blue">Parents</span> Say About Us
          </h2>
          <p className="text-gray-600 text-lg">
            Hear what our community has to say about their experience at Avenues The Global School
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-10 relative"
            >
              {/* Decorative elements */}
              <div className="absolute top-0 left-0 transform -translate-x-4 -translate-y-4">
                <div className="text-school-orange text-6xl opacity-20">"</div>
              </div>
              <div className="absolute bottom-0 right-0 transform translate-x-4 translate-y-4">
                <div className="text-school-blue text-6xl opacity-20">"</div>
              </div>
              
              <div className="grid md:grid-cols-4 gap-8 items-center">
                <div className="md:col-span-1">
                  <div className="flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mb-4">
                      <img 
                        src={testimonials[current].image} 
                        alt={testimonials[current].author} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex mb-2">
                      {[...Array(testimonials[current].rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="md:col-span-3">
                  <blockquote className="text-gray-700 text-lg italic mb-6 relative z-10">
                    {testimonials[current].quote}
                  </blockquote>
                  <div>
                    <p className="font-display font-semibold text-lg">{testimonials[current].author}</p>
                    <p className="text-school-blue">{testimonials[current].relation}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-2">
            <button 
              onClick={prev} 
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${current === index ? 'bg-school-blue' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={next} 
              className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gray-50 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
