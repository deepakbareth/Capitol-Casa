import React from 'react';
import { Award, Globe, Quote } from 'lucide-react';
// Import the host image here. Adjust the path as needed for your project.
import hostImg from '../../assets/owner.png';

const AboutHost = () => {
  return (
    <section className="py-20 md:py-32 bg-[#fafaf9] relative overflow-hidden">

      {/* Decorative Background Element */}

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-8 relative z-10">

        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24">

          {/* === LEFT COLUMN: The Host Card (Sticky) === */}
          <div className="w-full lg:w-1/3 shrink-0">
            <div className="sticky top-28 bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col items-center text-center">

              {/* Host Image with offset ring */}
              <div className="relative mb-6">
                {/* <div className="absolute inset-0 rounded-full border-2 border-[#8b5a2b] translate-x-2 translate-y-2 opacity-50"></div> */}
                <img
                  src={hostImg}
                  alt="Kristen Flance"
                  className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white shadow-md z-10"
                />
              </div>

              <h2 className="text-xl font-bold uppercase tracking-widest text-gray-400 mb-2 text-[11px]">
                About the host
              </h2>
              <h3 className="text-2xl md:text-3xl font-serif text-gray-900 mb-8">
                Hosted by<br /><p className="text-[#8b5a2b]">Kristen Flance</p>
              </h3>

              <div className="w-12 h-[1px] bg-gray-200 mb-8"></div>

              {/* Host Meta Data (Badges) */}
              <div className="w-full space-y-6 text-left">

                {/* Premier Host Badge */}
                <div className="flex items-start gap-4 p-4 rounded-2xl bg-blue-50/50 border border-blue-100/50">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-[#1a5b82]">
                    <Award strokeWidth={2} className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">Premier Host</h4>
                    <p className="text-xs text-gray-600 leading-relaxed font-medium">
                      They consistently provide great experiences for their guests
                    </p>
                  </div>
                </div>

                {/* Languages Badge */}
                <div className="flex items-center gap-4 px-4">
                  <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center shrink-0 text-gray-500">
                    <Globe strokeWidth={2} className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Languages</h4>
                    <p className="text-sm text-gray-600">English</p>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* === RIGHT COLUMN: The Story (Rich Text) === */}
          <div className="w-full lg:w-2/3 py-4 lg:py-10">

            {/* Main Bio with Editorial Quote Icon */}
            <div className="relative mb-16">
              <Quote className="absolute -top-6 -left-8 w-16 h-16 text-gray-100 -rotate-12 z-0 hidden md:block" />
              <p className="relative z-10 text-[18px] md:text-[20px] text-gray-700 leading-relaxed font-light first-letter:text-5xl first-letter:font-serif first-letter:text-[#8b5a2b] first-letter:mr-1 first-letter:float-left">
                Owners Kristen and Steve Flance are long-time residents and active citizens of Santa Fe. Kristen spent 30 years representing the state magazine, New Mexico Magazine, as the Santa Fe, Central and Northern New Mexico advertising representative, with her small staff. Also provided interior decorating for high end resorts. Steve has volunteered for many community organizations including serving as Chairman of the Board of the New Mexico Finance Authority for 8 years, and has developed residential communities and resorts in Santa Fe for many years. We know New Mexico well and enjoy sharing our knowledge of Santa Fe and the state with our guests.
              </p>
            </div>

            <div className="space-y-12">
              {/* Section 1: Why they chose this property */}
              <div className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-[1px] bg-[#8b5a2b]"></div>
                  <h4 className="text-xl md:text-2xl font-serif text-gray-900">
                    Why they chose this property
                  </h4>
                </div>
                <p className="text-[17px] text-gray-600 leading-relaxed font-light pl-0 md:pl-12">
                  Capitol Casa's great location downtown is unbeatable. Being next door to our office, when it came on the market in 2002 as a previously operated vacation home, we decided we could make it an even better place to stay. Close to the Capitol, Plaza and Canyon Road, the legal commercial zoning, the house's large size and excellent condition, all make it an ideal vacation home and wonderful place for visitors to stay. Kristen furnished the home with original art, antiques, historic collectibles from Santa Fe and the Southwest that are appropriate to the age of the house which was built in 1924. Historic Santa Fe ambience.
                </p>
              </div>

              {/* Section 2: What makes this property unique */}
              <div className="group">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-8 h-[1px] bg-[#8b5a2b] "></div>
                  <h4 className="text-xl md:text-2xl font-serif text-gray-900">
                    What makes this property unique
                  </h4>
                </div>
                <p className="text-[17px] text-gray-600 leading-relaxed font-light pl-0 md:pl-12">
                  Everyone loves the downtown location and being able to walk back and forth from the house to restaurants and events, galleries and stores, and meetings at the State Capitol. Walk a block to Kaune's Market to pick up sandwiches and groceries and fine wine, and to the food trucks across the street from the market. With off-street and covered parking, plus more free parking on-street, you will be free from parking problems. The narrow, quiet street is just three blocks long--no traffic noise will disturb you. Fine art, tasteful furnishings, luxury amenities and immaculate housekeeping welcome you to this five-star home. Private walled garden offers the hot tub, chimenea fire pot, shaded outdoor dining table under ancient catalpa tree, and lots of seating. With plenty of places to sit and chat, firm beds with luxurious bedding, the big expandable oak dining table, the home is comfortable and fun for gatherings large and small.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHost;