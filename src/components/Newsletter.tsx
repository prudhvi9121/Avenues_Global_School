
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Newsletter = () => {
  return (
    <section className="py-12 bg-school-orange bg-opacity-20">
      <div className="container mx-auto px-4">
        <div className="bg-school-orange text-white rounded-lg p-8 md:p-12 max-w-4xl mx-auto relative overflow-hidden shadow-lg">
          <div className="relative z-10">
            <h2 className="text-2xl md:text-3xl font-display font-semibold mb-4 text-center">
              Subscribe To Our Newsletter For Daily Updates
            </h2>
            <p className="text-center text-orange-100 mb-8">
              Stay informed about school events, educational resources, and important announcements
            </p>
            <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white text-gray-800 border-none"
              />
              <Button className="bg-white text-school-orange hover:bg-orange-100 whitespace-nowrap">
                Subscribe Now
              </Button>
            </div>
          </div>
          
          <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500 opacity-20 rounded-full transform translate-x-1/3 -translate-y-1/3"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-orange-500 opacity-20 rounded-full transform -translate-x-1/3 translate-y-1/3"></div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
