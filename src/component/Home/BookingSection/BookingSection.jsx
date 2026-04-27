import React from 'react';

import { 
  Bath,
  WashingMachine,
   Microwave,   
  PawPrint, 
  Wind, 
  Snowflake, 
  Shirt, 
  Waves,      // New icon for Ocean view
  Wifi,       // New icon for WiFi
  Droplets,   // New icon for Pool
  ChevronRight, 
  Calendar, 
  User, 
  Info ,
  Fan
} from 'lucide-react';
import { BookingDate } from './BookingDate';

const BookingSection = () => {
 const amenities = [
  { 
    name: 'Hot tub', 
    icon: (
      <div className="flex items-center gap-1">
        <Bath className="w-5 h-5 md:w-6 md:h-6 text-[#54371b]" strokeWidth={1.5} />
        <Info className="w-3.5 h-3.5 text-gray-500" />
      </div>
    )
  },
  { 
    name: 'Kitchen', 
    icon: <Microwave className="w-5 h-5 md:w-6 md:h-6 text-[#54371b]" strokeWidth={1.5} /> 
  },
  { 
    name: 'Washer', 
    icon: <WashingMachine className="w-5 h-5 md:w-6 md:h-6 text-[#54371b]" strokeWidth={1.5} /> 
  },
  { 
  name: 'Dryer', 
  icon: <Fan className="w-5 h-5 md:w-6 md:h-6 text-[#54371b]" strokeWidth={1.5} /> 
},
  { 
    name: 'Pet friendly', 
    icon: <PawPrint className="w-5 h-5 md:w-6 md:h-6 text-[#54371b]" strokeWidth={1.5} /> 
  },
  { 
    name: 'Free WiFi', 
    icon: <Wifi className="w-5 h-5 md:w-6 md:h-6 text-[#54371b]" strokeWidth={1.5} /> 
  },
];
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        
        {/* === LEFT COLUMN: AMENITIES === */}
        <div className="lg:col-span-7">
        
           <h2 className="text-3xl md:text-5xl font-serif italic text-gray-900 pb-8 leading-tight">
              Popular Amenities
            </h2>
          
          {/* MOBILE GRID FIX: Changed to `grid-cols-2` so it always stays side-by-side */}
          <ul className="grid grid-cols-2 gap-y-6 gap-x-2 md:gap-x-8">
            {amenities.map((item, index) => (
              <li key={index} className="flex items-center gap-2 md:gap-4 text-gray-800 text-sm sm:text-base md:text-lg">
                <div className="shrink-0 flex items-center justify-center">
                  {item.icon}
                </div>
                <div className="flex items-center gap-1 md:gap-2">
                  <span className="truncate">{item.name}</span>
                  {/* The small info icon next to Pet Friendly */}
                  {item.hasInfo && (
                    <Info className="w-3 h-3 md:w-4 md:h-4 text-gray-500 cursor-pointer hover:text-gray-800 shrink-0" strokeWidth={2} />
                  )}
                </div>
              </li>
            ))}
          </ul>

          <button className="mt-8 text-[#8a4e15] font-medium hover:text-slate-500 cursor-pointer transition-colors flex items-center gap-1 text-base md:text-lg">
            See all <ChevronRight className="w-5 h-5 mt-0.5" strokeWidth={2} />
          </button>
        </div>

        {/* === RIGHT COLUMN: BOOKING WIDGET === */}
        <div className="lg:col-span-5">
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100">
            
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Select dates for prices
            </h3>

            {/* Dates Row */}
            <BookingDate />
            
          </div>
        </div>

      </div>
    </section>
  );
};

export default BookingSection;