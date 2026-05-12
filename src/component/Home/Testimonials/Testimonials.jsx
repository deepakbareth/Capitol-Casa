import React from 'react';
import ReviewCard from './ReviewCard';
import { NavLink } from 'react-router-dom'; // FIXED: Changed Link to NavLink

// ==========================================
// 2. PARENT COMPONENT: The main layout section
// ==========================================
const Testimonials = () => {

  // Data Array (Easy to update or fetch from an API later)
  const reviews = [
    {
      name: "mary ann r.",
      text: "Very nice, plenty of room Kristen very accommodating Thank yoi"
    },
    {
      name: "Susan H.",
      text: "Charming, comfortable home. Lovely gathering areas. Convenient, walkable location."
    },
    {
      name: "Jennifer C.",
      text: "This is an ideal location. Walking distance to everything. We brought teenagers and they loved the basement lounge room."
    }
  ];

  return (
    <section className="py-14 md:py-24 bg-[#001f3f]">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-8">

        {/* Section Header */}
        <div className=" mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-serif italic  text-center text-gray-100 leading-tight">
            Testimonials
          </h2>

        </div>

        {/* Grid Container for the Child Components 
          - 1 column on mobile
          - 3 columns on desktop
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

          {/* Mapping over the data to render the Child component dynamically */}
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              text={review.text}
            />
          ))}

        </div>

        <div className="mt-12 md:mt-16 flex justify-center">
          <NavLink
            to="/capitolcasa/reviews"
            end
            className="px-10 py-3.5 bg-[#8a4e15] text-white rounded-full font-bold uppercase tracking-[0.15em] text-sm shadow-md hover:shadow-lg hover:bg-[#724012] transition-all duration-300 transform hover:-translate-y-1"
          >
            More Reviews
          </NavLink>
        </div>


      </div>
    </section>
  );
};

export default Testimonials;