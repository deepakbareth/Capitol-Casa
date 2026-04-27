import React from 'react';
import { ExternalLink } from 'lucide-react';

const Neighborhood = () => {
  return (
    <section className="py-16 md:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* === LEFT COLUMN: TEXT CONTENT === */}
        <div className="flex flex-col space-y-6 lg:pr-8">
          
          <h2 className="text-3xl md:text-5xl font-serif italic text-gray-900 leading-tight mb-2">
            About the neighborhood
          </h2>
          
          <h3 className="text-xl md:text-2xl font-bold text-gray-900">
            Atlantic Beach
          </h3>
          
          <p className="text-base md:text-lg text-gray-600 font-light leading-relaxed">
            Located in Atlantic Beach, this cottage is on the beach. Fort Macon State Park and Beaufort Historic Site are local landmarks, and some of the area's activities can be experienced at Anchorage Marina and Triple S Marina. North Carolina Aquarium at Pine Knoll Shores and North Carolina Maritime Museum are also worth visiting. Kayaking, scuba diving, and snorkeling offer great chances to get out on the surrounding water, or you can seek out an adventure with ecotours nearby.
          </p>

          <div className="pt-4">
            <a 
              href="#" 
              className="inline-flex items-center gap-2 text-[#8a4e15] font-medium hover:text-slate-500 transition-colors text-base"
            >
              View more Cottages in Atlantic Beach 
              <ExternalLink className="w-4 h-4 mb-0.5" strokeWidth={2} />
            </a>
          </div>
        </div>

        {/* === RIGHT COLUMN: MAP CARD === */}
        <div className="rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-200 overflow-hidden flex flex-col bg-white">
          
          {/* Interactive Google Map Embed */}
          <div className="w-full h-[300px] md:h-[400px] bg-gray-100 relative">
            <iframe 
              title="Atlantic Beach Map"
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              loading="lazy" 
              allowFullScreen 
              referrerPolicy="no-referrer-when-downgrade"
              src="https://maps.google.com/maps?q=Atlantic%20Beach,%20NC&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0"
            ></iframe>
          </div>

          {/* Map Footer Information */}
          <div className="p-5 md:p-6 flex flex-col">
            {/* <span className="text-gray-900 font-medium text-base mb-1">
              Atlantic Beach, NC
            </span> */}
            <a 
              href="https://maps.google.com/?q=Atlantic+Beach,+NC" 
              target="_blank" 
              rel="noreferrer"
              className="text-[#8a4e15] hover:text-slate-500 text-sm font-medium transition-colors"
            >
              View in a map
            </a>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Neighborhood;