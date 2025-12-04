import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from 'react-router-dom';

const Faculty = () => {
  const navigate = useNavigate();

  const teachers = [
    {
      name: "Dr. Srinivas Cherukuri",
      position: "Director",
      color: "bg-red-500",
      gradient: "from-red-400 to-red-600",
      imageUrl: "Faculty/Dr.Srinivas_Cherukuri.jpeg",
      messageId: "srinivas-message"
    },
    {
      name: "Mrs. Latha Devaguptapu",
      position: "Academic Director",
      color: "bg-green-500",
      gradient: "from-green-400 to-green-600",
      imageUrl: "Faculty/Mrs.Latha_Devaguptapu.jpeg",
      messageId: "latha-message"
    }
  ];

  const handleRedirect = (messageId: string) => {
    navigate(`/about#${messageId}`);
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">Management</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-400 to-orange-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="flex justify-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-6xl">
            {teachers.map((teacher, index) => (
              <Card 
                key={index} 
                className="group relative overflow-hidden bg-white shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border-0 rounded-2xl cursor-pointer"
                onClick={() => handleRedirect(teacher.messageId)}
              >
                {/* Animated gradient border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${teacher.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>
                <div className="relative bg-white m-1 rounded-xl overflow-hidden">
                  
                  {/* Profile Image Area with Gradient Overlay */}
                  <div className="relative h-64 bg-gradient-to-br from-gray-200 to-gray-300 overflow-hidden">
                    {/* Decorative elements */}
                    <div className={`absolute -top-4 -right-4 w-24 h-24 ${teacher.color} opacity-20 rounded-full blur-xl`}></div>
                    <div className={`absolute -bottom-6 -left-6 w-32 h-32 ${teacher.color} opacity-10 rounded-full blur-xl`}></div>
                    
                    {/* Display image if imageUrl exists, otherwise show initials */}
                    {teacher.imageUrl ? (
                      <img
                        src={teacher.imageUrl}
                        alt={`${teacher.name}'s photo`}
                        className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-24 h-24 ${teacher.color} rounded-full opacity-30 flex items-center justify-center`}>
                          <span className="text-white text-3xl font-bold">
                            {teacher.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                      </div>
                    )}
                    
                    {/* Gradient overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-t ${teacher.gradient} opacity-0 group-hover:opacity-30 transition-opacity duration-500`}></div>
                  </div>

                  {/* Content */}
                  <CardContent className="p-8 text-center relative">
                    {/* Color accent line */}
                    <div className={`w-16 h-1 ${teacher.color} mx-auto mb-6 rounded-full group-hover:w-24 transition-all duration-500`}></div>
                    
                    <h3 className="font-bold text-2xl mb-3 text-gray-800 group-hover:text-gray-900 transition-colors">
                      {teacher.name}
                    </h3>
                    <p className={`text-lg font-medium ${teacher.color.replace('bg-', 'text-')} mb-2`}>
                      {teacher.position}
                    </p>
                    <p className="text-gray-500 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      Click to learn more →
                    </p>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faculty;