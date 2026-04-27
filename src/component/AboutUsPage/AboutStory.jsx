import React from 'react';
import { Waves } from 'lucide-react';

const AboutStory = () => {
  return (
    <section className="py-16 md:py-24 max-w-[1200px] mx-auto px-6 md:px-12 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div>
          <h4 className="text-[#8a4e15] font-bold uppercase tracking-[0.2em] text-sm md:text-base mb-4">
            Our History
          </h4>
          <h2 className="text-3xl md:text-4xl font-serif text-[#001f3f] leading-tight mb-6">
            A Three-Generation Legacy on the Carolina Coast
          </h2>
          <div className="space-y-4 text-gray-700 font-light text-lg leading-relaxed">
            <p>
              Constructed in 1948, when there was only one other cottage on Club Colony Drive, The Exum Beach Cottage is a family home steeped in history. Restored after Hurricane Hazel in 1954 and extensively renovated in 2022, the cottage beautifully balances its historic charm with upscale modern luxury.
            </p>
            <p>
              Each generation has added their own photographs, books, and original works of art, giving the cottage its deeply unique character. Located directly on the beachfront and surrounded by a garden of native plants, dune grasses, and herbs, it is the ultimate coastal sanctuary.
            </p>
          </div>
        </div>
        
        <div className="bg-[#001f3f] p-10 md:p-14 rounded-2xl shadow-xl text-center relative overflow-hidden">
          <Waves className="absolute -top-10 -right-10 w-48 h-48 text-white opacity-5" />
          <h3 className="text-2xl md:text-3xl font-serif italic text-white leading-relaxed relative z-10">
            "The warmth and charm of a traditional NC beach cottage, complemented by upscale modern amenities."
          </h3>
        </div>
      </div>
    </section>
  );
};

export default AboutStory;