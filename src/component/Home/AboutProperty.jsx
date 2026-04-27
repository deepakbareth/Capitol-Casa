import React, { useState } from 'react';
// Import an image for the right side. Replace with an actual property image.
import propertyImg from '../../assets/images/h4.jpg';
import {
  Umbrella,
  Microwave,
  Soup,
  Flower,
  Utensils
} from 'lucide-react';

const AboutProperty = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Amenities data updated for capitol casa's specific offerings
  const amenities = [
    {
      name: 'Deck or patio',
      icon: <Umbrella className="w-6 h-6" strokeWidth={1.5} />
    },
    {
      name: 'Kitchen',
      icon: <Microwave className="w-6 h-6" strokeWidth={1.5} />
    },
    {
      name: 'Kitchenette',
      icon: <Soup className="w-6 h-6" strokeWidth={1.5} />
    },
    {
      name: 'Outdoor play area',
      icon: <Flower className="w-6 h-6" strokeWidth={1.5} />
    },
    {
      name: 'Dining area',
      icon: <Utensils className="w-6 h-6" strokeWidth={1.5} />
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-white" >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">

        {/* === LEFT COLUMN: TEXT CONTENT === */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-8">

          {/* Modern Heading Area */}
          <div className="space-y-3">
            <h4 className="text-[#8a4e15] font-bold uppercase tracking-[0.2em] text-xl">About this property</h4>
            <h2 className="text-3xl md:text-5xl font-serif italic text-gray-900 leading-tight">
              Capitol Casa
            </h2>
            <p className="text-lg md:text-xl font-medium text-gray-600">
              Santa Fe, NM
            </p>
          </div>

          {/* Text Content */}
          <div className="prose prose-lg text-gray-600 text-[18px] leading-relaxed max-w-none font-light">
            <p>
              Walk everywhere in the Historic Downtown area! Capitol Casa is located on a quiet residential street just three blocks long--less than a 5-minute walk to the Plaza and to Canyon Road. The historic 1920's adobe home has fresh furnishings, fine linens, original art and neat antiques in cohesive, tasteful decor reflecting the region. Its perfect location is 1/2 block from the State Capitol with its extensive art collection by New Mexico's many fine artists and sculptors.  </p>

            {/* EXPANDABLE CONTENT */}
            <div className={`transition-all duration-700 ease-in-out overflow-hidden ${isExpanded ? 'max-h-[3000px] opacity-100 mt-4' : 'max-h-0 opacity-0'}`}>

            <p className="mt-4">
              Families and friends love it! Private outdoor luxury hot tub seats 7. Shady walled garden and patio with tables and seating for up to 16. Capitol Casa has been in operation as a fine vacation rental home since 2003. Featured in the May 2006 Old House Journal and the November 2008 Frommers Budget Travel. Consistent top ratings!
            </p>
            
              <p>
                You'll love walking 5 minutes (3/10 mile) down Old Santa Fe Trail to the historic Plaza; or 5 minutes to Canyon Road; or strolling to museums, galleries, restaurants, sightseeing, shopping. Pop home to drop off your finds, and walk to explore another area. Well-stocked Kaune's Market is just around the block, and a variety of food trucks are across the street from the market. Ski 1/2 hour up the mountain, or take the kids to the playgrounds down the street. Come home and relax under the blue Santa Fe sky in the bubbling hot tub with waterfall!
              </p>
              <p className="mt-4">

                Gather on the big front porch and then walk to dinner at one of Santa Fe's many fine restaurants, or cook up a feast in the fully equipped kitchen. Barbecue on the gas grill and dine outside in the private walled garden or at the oak dining table which expands to seat large groups. The kitchen is fully equipped with spices, cooking utensils, many appliances, and service for 18. Complete bar glasses, tablecloths, cloth napkins, and placemats are provided, and you can set a lovely table with colorful china, placemats, napkins, table cloths and serving pieces.
              </p>


              <p>
                Built in the 1920's, the carefully updated adobe house is beautifully furnished with a tasteful mix of antiques, top grain leather sofas and chairs, original art by New Mexico artists and Southwest artifacts. Richly colored Oriental rugs brighten the oak floors throughout. Hand plastered tinted walls and a big fireplace add ambiance. Firewood is supplied for cozy winter days, and air conditioning cools the house in the summer. Large open living room/dining room with two leather sofas, two leather swivel chairs, big oak dining table with extension leafs, drop leaf table. Enjoy elegant, luxurious hand-pressed fine 100% cotton sheets and cases, down and down-alternative pillows and pressed 100% cotton duvets on firm beds. Robes and plenty of 100% cotton towels supplied. Immaculate professional housekeeping satisfies even the most particular guests.
              </p>

              <p className="mt-4">
                Capitol Casa is approximately 2,600 square feet, plus the front porch with old-fashioned glider, antique bench, and patio chairs where groups can enjoy conversations outdoors. Flowers and trees adorn the front and back yards. The walled garden patio has plenty of cushioned seating for up to 18, large sun umbrella, dining table under a huge shade tree, morning sun and a view to the mountains. The big luxury outdoor hot tub has a cover lifter for easy access and a waterfall for fun. Night lighting on the patio and the chimenea firepot make it fun for evenings outdoors.
              </p>
              <p className="mt-4">

                The main level offers 3 bedrooms and 2 full bathrooms, with high ceilings and ceiling fans. On the lower level are 2 bedrooms, one large and one small, and a full bathroom. Everyone loves the double-sized large bedroom/den/viewing room with a big TV. Large casement windows in window wells meet code for firesafe egress. Nicely separated from the main level bedrooms, different generations can have separation. People with trouble walking should stay on the main level, as should very tall people.          </p>
              <p className="mt-4">

                The house is well supplied to make your stay pleasant, three TVs with streaming, stereos including bluetooth players, music CDs, and DVDs. High speed internet works throughout the house. Laundry room has full size washer and dryer, iron, ironing board, steamer. Two pack 'n plays and two roll-away twins are available, plus a high chair. Hypo-allergenic detergent, dish and hand soaps, bath gel, shampoo & conditioner, and lotion are provided. Hairdryers in each bathroom.          </p>
              <p className="mt-4">

                Children are welcome. Toys, books, puzzles and games are supplied. Take our basketballs to the hoops at the extensive school playgrounds in the next block, where children can also play on a variety of structures for all ages.         </p>
              <p className="mt-4">

                Carport and off-street parking for 3 cars on-site, 4 more free spots on the quiet street in front of the house.
              </p>

              <p>Accommodations:</p>
              <p className="mt-4">

                5 bedrooms, 3 full bathrooms. Five couples can have king beds in their own rooms. With children staying in their parents king rooms, up to 10 adults and 6 kids will be in rollaway beds (2) or pack 'n plays (2) or in the (4) twins in the large bedroom. Or singles can have two xl twin beds in two rooms (4), six twins in the large bedroom (6), a king bed with room for a rollaway twin in the master (2), and a king bed in the front bedroom (1), for 13 singles.       </p>

              <p>Main Level:</p>
              <p className="mt-4">

                1. Master Bedroom: California King bed, en suite bathroom with double sinks, jetted tub with grab bars, walk-in closet, T.V. Roll-away twin and Pack 'n Play will fit.
                2. Front Bedroom has California King bed, large windows, next to second full bathroom with separate walk-in shower and tub, grab bars. Pack 'n Play will fit.
                3. Back Bedroom with choice of King or 2 xl Twin beds, Glass doors to garden patio.        </p>
              <p className="mt-4">

                Professional housekeepers will set up the optional beds to meet your mix of couples and singles and children, with 2 weeks advance notice of final head count. Bed choices required 2 weeks ahead of arrival. Several tables will meet your needs for office space.   </p>
              <p className="mt-4">

                This is a historic house with intimate rooms, not grand spaces. Should your group need more space, an elegant B & B right across the street has 5 rooms. Advance reservations recommended.     </p>
              <p className="mt-4">

                All rooms meet code for firesafe egress, with either doors or large windows big enough for firemen to enter and for guests to exit safely in an emergency. Remodeled daylight basement level has two bedrooms, each with large windows in window wells of correct size meeting code for fire-safe egress.
              </p>
              <p className="mt-4">

                Flashlights, fire extinguishers, smoke and carbon monoxide detectors are installed throughout the house. First aid kits supplied in all bathrooms + kitchen. New self-condensing, sealed heating and hot water system without open pilot lights. Inspected and licensed by the Fire Department and City of Santa Fe. Air conditioning units are in each room, along with ceiling fans on the main level.   </p>
              <p>ADDITIONAL INFORMATION:</p>
              <p className="mt-4">

                *Regular Rate covers up to 8 people, applies to children ages
                1 and up.
                For more than 8 people, $50 per person per nt. rent required. Plus extra person cleaning fee of $60 pp.
                *Holiday Rates: Christmas & New Year weeks: 7 nt minimum, $1,000 per nt. Extra pp $100 nt.
                *Thanksgiving week: $850 per nt. Extra pp $75 nt.  </p>
              <p className="mt-4">
                Long Term Rentals of 30 nights minimum are offered at discount.
                * Rates for long term stays are subject to change according to season and size of group.
                *Low Season: Long term 25% discount Jan, Feb, Mar. ($525 night)
                *High Season: 10% discount April, May, June, July, Aug, Sept. ($630night)
                *$1,000 refundable Security/Damage Deposit.
                *Weekly cleaning required at guest's expense.
                *Taxes are not required for stays of 30 nights or more.
              </p>
              <p className="mt-4">

                * Children are welcome. High chair, 2 Pack 'n Play cribs, umbrella stroller, baby gate for bottom of stairs provided. Door closes at top of stairs. Toys, games, books. Playground in next block.
                * Pets: House-trained, well-behaved dogs are welcome with signed Pet Permission Form accepting our Pooch Policies.
                $100 per dog per week or shorter stay, plus $1,000 pet damage deposit.
                * Sorry, no cats due to guests' allergies.

              </p>
              <p className="mt-4">
                * Rental Agreement on VRBO is accepted upon booking by guest. The owner will send the Rental Agreement closer to arrival time which must be signed. This is to ensure that the guest is familiar with the policies.
                * Cancellation policy: Bookings via VRBO must follow the cancellation policies outlined therein on the booking estimate. Extenuating circumstances such as death, serious illness/injury will be considered for date change or refund. Trip insurance required for pre-existing conditions.
                * No Smoking and No Vaping inside; smokers may use the covered front porch or back patio away from open doors and windows.
                * Sorry, we don't accept groups of people aged 25 and under.
                Children with parents or relatives are welcome.
                * Renters must provide final head count with bed choices for rooms with options by two weeks prior to arrival.
                * Renters arriving with more guests than contracted must pay for the extra guests. If the group has too many people, some must leave, or the whole group must leave. Refund will not be given if the group is too large and departs.
                * Our Commercial BCD zoning allows unlimited legal rentals, unlike rentals in residential zoned neighborhoods.</p>
              <p className="mt-2 font-bold text-[#8a4e15]">
                Our prices include all fees. No hidden fees.
              </p>
            </div>
          </div>

          {/* See More / See Less Button */}
          <div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="group inline-flex items-center gap-2 text-[#8a4e15] font-bold uppercase tracking-wider text-sm hover:text-slate-600 cursor-pointer transition-colors"
            >
              {isExpanded ? 'See Less' : 'See More'}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              >
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* === RIGHT COLUMN: IMAGE & AMENITIES OVERLAY === */}
        <div className="lg:col-span-5 relative rounded-3xl overflow-hidden shadow-2xl h-[500px] group lg:sticky lg:top-24">

          {/* Background Image */}
          <img
            src={propertyImg}
            alt="capitol casa Property"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
          />

          {/* Blur & Dark Overlay */}
          <div className="absolute inset-0 bg-black/40 backdrop-blur-[2.5px] transition-all duration-500 group-hover:backdrop-blur-[2.5px]" />

          {/* Amenities Content inside the image */}
          <div className="absolute inset-0 flex flex-col justify-center p-8 md:p-12 text-white z-10">
            <ul className="space-y-4">
              {amenities.map((item, index) => (
                <li key={index} className="flex items-center gap-5 group/item">
                  {/* Glassmorphism Icon Box */}
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-lg border border-white/20 flex items-center justify-center text-white transition-all group-hover/item:bg-white group-hover/item:text-[#8a4e15]">
                    {item.icon}
                  </div>
                  <span className="text-lg font-light tracking-wide">{item.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProperty;