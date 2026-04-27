import React from 'react';
import { DoorClosed, Bath, Users, Maximize } from 'lucide-react';
import roomImg from '../../assets/images/h4.jpg'; // Update with your actual image path

const PropertySpecs = () => {
  // Thinner stroke weights on the icons create a more elegant, minimalist look
  const specs = [
    { label: '5 Bedrooms', icon: <DoorClosed className="w-6 h-6" strokeWidth={1.5} /> },
    { label: '3 Bathrooms', icon: <Bath className="w-6 h-6" strokeWidth={1.5} /> },
    { label: 'Sleeps 16', icon: <Users className="w-6 h-6" strokeWidth={1.5} /> },
    { label: '2600 sq. ft.', icon: <Maximize className="w-6 h-6" strokeWidth={1.5} /> },
  ];

  return (
    <section className="bg-stone-50 py-20 lg:py-32 font-sans relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Main Background Image Container */}
        <div className="w-full lg:w-4/5 ml-auto relative group">
          {/* Subtle decorative offset shadow box */}
          <div className="absolute inset-0 -translate-x-4 translate-y-4 lg:-translate-x-8 lg:translate-y-8 bg-stone-200 rounded-[2rem] -z-10 transition-transform duration-700 group-hover:translate-x-0 group-hover:translate-y-0"></div>
          
          <img 
            src={roomImg} 
            alt="Interior comfortable design" 
            className="w-full h-[400px] lg:h-[500px] object-cover rounded-[2rem] shadow-lg"
          />
        </div>

        {/* Premium Floating Card with Glassmorphism */}
        <div className="bg-yellow/25 md:bg-white/85 backdrop-blur-md p-10 lg:p-16 rounded-[2rem] shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)] border border-white relative -mt-32 mx-4 lg:mx-0 lg:absolute lg:bottom-16 lg:left-8 lg:w-[640px] z-10 transition-all duration-500 hover:shadow-[0_40px_70px_-15px_rgba(0,0,0,0.12)]">
          
          {/* Styled Eyebrow text with a decorative line */}
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className=" h-px w-4 md:w-12 bg-stone-400"></div>
            <p className="text-[10px] md:text-sm font-bold tracking-[0.2em] text-stone-500 uppercase">
              Property Overview
            </p>
            <div className="h-px w-4 md:w-12 bg-stone-400"></div>
          </div>
          
          {/* Refined Typography combining bold and light italic text */}
          <h2 className="text-2xl lg:text-5xl text-center font-semibold text-gray-900 leading-[1.15] mb-2 md:mb-8 tracking-tight">
            We have Created a <br className="hidden md:block"/> <span className="italic text-stone-500 font-light">Comfortable</span> Space
          </h2>

          {/* Elevated Grid Layout for Specs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 gap-x-8 pt-8 border-t border-stone-100">
            {specs.map((spec, index) => (
              <div key={index} className="flex items-center gap-5 group ">
                
                {/* Interactive Icon Wrapper */}
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-stone-50 border border-stone-100 text-stone-600 transition-all duration-500  shadow-md">
                  {spec.icon}
                </div>
                
                {/* Text Label */}
                <span className="text-lg font-medium text-gray-700 transition-colors duration-300 group-hover:text-stone-900">
                  {spec.label}
                </span>
                
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default PropertySpecs;