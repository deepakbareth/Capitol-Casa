import React from 'react';
import { Map, Coffee, Music } from 'lucide-react';

const AboutFloorPlan = () => {
  return (
    <section className="py-16 md:py-24 max-w-[1200px] mx-auto px-6 md:px-12 lg:px-8">
      <div className="text-center mb-16">
        <h4 className="text-[#8a4e15] font-bold uppercase tracking-[0.2em] text-sm mb-4">
          A Look Inside
        </h4>
        <h2 className="text-3xl md:text-5xl font-serif italic text-[#001f3f]">
          Three Levels of Coastal Comfort
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Level 1 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#8a4e15]/20 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-[#001f3f] rounded-full flex items-center justify-center text-white mb-6">
            <Map className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-serif text-[#001f3f] mb-4">First Level</h3>
          <p className="text-gray-600 font-light leading-relaxed mb-4">
            Enter through the "Chart Room," featuring maps of local terrain, guidebooks, and a cozy sitting area. 
          </p>
          <ul className="text-sm text-gray-700 font-medium space-y-2">
            <li>• Ground-level bunk room</li>
            <li>• Private en-suite bath</li>
            <li>• Direct access to outdoor shower</li>
          </ul>
        </div>

        {/* Level 2 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#8a4e15]/20 hover:shadow-xl transition-shadow relative">
          <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-[#8a4e15] text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
            Main Living
          </div>
          <div className="w-12 h-12 bg-[#001f3f] rounded-full flex items-center justify-center text-white mb-6">
            <Coffee className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-serif text-[#001f3f] mb-4">Second Floor</h3>
          <p className="text-gray-600 font-light leading-relaxed mb-4">
            The heart of the home, featuring an open-concept living and dining room alongside a fully updated, well-equipped kitchen.
          </p>
          <ul className="text-sm text-gray-700 font-medium space-y-2">
            <li>• 3 thematically decorated bedrooms</li>
            <li>• 1 shared full bathroom</li>
            <li>• Front porch with rocking chairs</li>
          </ul>
        </div>

        {/* Level 3 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-[#8a4e15]/20 hover:shadow-xl transition-shadow">
          <div className="w-12 h-12 bg-[#001f3f] rounded-full flex items-center justify-center text-white mb-6">
            <Music className="w-6 h-6" />
          </div>
          <h3 className="text-2xl font-serif text-[#001f3f] mb-4">Third Floor</h3>
          <p className="text-gray-600 font-light leading-relaxed mb-4">
            A spectacular master suite designed for romantic getaways, boasting panoramic ocean views and eclectic mid-century decor.
          </p>
          <ul className="text-sm text-gray-700 font-medium space-y-2">
            <li>• Coffee and wine bar</li>
            <li>• Surround-sound stereo system</li>
            <li>• Spacious en-suite bath</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AboutFloorPlan;