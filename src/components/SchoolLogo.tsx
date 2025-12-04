import React from 'react';

const SchoolLogo = ({ className }: { className?: string }) => {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      <div className="flex">
        <div className="bg-school-red p-1.5 text-white font-bold w-8 flex items-center justify-center">
          <span className="text-lg">A</span>
        </div>
        <div className="bg-school-orange p-1.5 text-white font-bold w-8 flex items-center justify-center">
          <span className="text-lg">V</span>
        </div>
        <div className="bg-school-green-dark p-1.5 text-white font-bold w-8 flex items-center justify-center">
          <span className="text-lg">E</span>
        </div>
        <div className="bg-school-green p-1.5 text-white font-bold w-8 flex items-center justify-center">
          <span className="text-lg">N</span>
        </div>
        <div className="bg-school-green-light p-1.5 text-white font-bold w-8 flex items-center justify-center">
          <span className="text-lg">U</span>
        </div>
        <div className="bg-school-blue-dark p-1.5 text-white font-bold w-8 flex items-center justify-center">
          <span className="text-lg">E</span>
        </div>
        <div className="bg-school-blue p-1.5 text-white font-bold w-8 flex items-center justify-center">
          <span className="text-lg">S</span>
        </div>
      </div>
      <div className="text-school-gray text-xs font-semibold mt-0.5">THE GLOBAL SCHOOL</div>
    </div>
  );
};

export default SchoolLogo;
