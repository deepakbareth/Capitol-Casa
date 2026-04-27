import React from 'react';
import { Sun, Car, Wifi, Umbrella } from 'lucide-react';

const AboutAmenities = () => {
  return (
    <section className="py-16 bg-white border-y border-gray-100">
      <div className="max-w-[1200px] mx-auto px-6 md:px-12 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-serif text-[#001f3f]">Modern Eco-Luxury</h2>
          <p className="text-gray-500 mt-3">Comfortably sleeps 12 with everything you need for the perfect stay.</p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="flex flex-col items-center text-center p-6 bg-[#faf4e1]/50 rounded-xl">
            <Sun className="w-10 h-10 text-[#8a4e15] mb-4" />
            <h4 className="font-bold text-[#001f3f] mb-2">Solar Powered</h4>
            <p className="text-sm text-gray-600 font-light">Full solar array with battery back-up</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-[#faf4e1]/50 rounded-xl">
            <Car className="w-10 h-10 text-[#8a4e15] mb-4" />
            <h4 className="font-bold text-[#001f3f] mb-2">EV Friendly</h4>
            <p className="text-sm text-gray-600 font-light">On-site EV charger with Tesla adapter</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-[#faf4e1]/50 rounded-xl">
            <Wifi className="w-10 h-10 text-[#8a4e15] mb-4" />
            <h4 className="font-bold text-[#001f3f] mb-2">Connected</h4>
            <p className="text-sm text-gray-600 font-light">High-speed WiFi & 4 flat-screen TVs</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 bg-[#faf4e1]/50 rounded-xl">
            <Umbrella className="w-10 h-10 text-[#8a4e15] mb-4" />
            <h4 className="font-bold text-[#001f3f] mb-2">Beach Ready</h4>
            <p className="text-sm text-gray-600 font-light">Chairs, floats, bikes & outdoor grill</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAmenities;