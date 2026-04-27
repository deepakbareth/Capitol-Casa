import React from 'react';
import { BedDouble, ShieldCheck } from 'lucide-react';

const AboutDetails = () => {
  return (
    <section className="py-16 bg-[#001f3f] text-white">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Sleeping Arrangements */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <BedDouble className="text-[#8a4e15] w-8 h-8" />
              <h3 className="text-2xl font-serif italic">Sleeping Arrangements</h3>
            </div>
            <p className="text-gray-300 font-light mb-4">
              The cottage features 5 bedrooms, 3 baths, and 9 total beds to comfortably sleep 12 guests:
            </p>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-3 text-sm font-medium text-gray-100">
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#8a4e15]"></span> 1 King Bed</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#8a4e15]"></span> 4 Queen Beds</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#8a4e15]"></span> 1 Double Bed</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#8a4e15]"></span> 1 Top Bunk</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#8a4e15]"></span> 1 Trundle Twin</li>
              <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-[#8a4e15]"></span> 1 Rolling Twin Cot</li>
            </ul>
          </div>

          {/* Booking Policies */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <ShieldCheck className="text-[#8a4e15] w-8 h-8" />
              <h3 className="text-2xl font-serif italic">Need to Know</h3>
            </div>
            <ul className="space-y-4 text-gray-300 font-light text-sm md:text-base">
              <li className="border-b border-gray-700 pb-3">
                <strong className="text-white">Summer Bookings:</strong> Available for week-long bookings only during the summer months (Sunday to Sunday).
              </li>
              <li className="border-b border-gray-700 pb-3">
                <strong className="text-white">Linens & Towels:</strong> Available for $25 per bed.
              </li>
              <li className="border-b border-gray-700 pb-3">
                <strong className="text-white">Security:</strong> The property is equipped with exterior Ring cameras for your security.
              </li>
              <li className="text-[#faf4e1] font-bold">
                Our prices include all fees. No hidden fees.
              </li>
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutDetails;