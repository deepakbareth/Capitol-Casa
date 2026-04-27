import React, { useState } from 'react';
import { Star, Quote } from 'lucide-react';
// Import your freshly created data array!
import { reviewsData } from '../../data/reviews'; 
// Import a background image for the banner
import bannerImg from '../../assets/galleryImages/g30.png'; 

const ReviewsPage = () => {
  const totalReviews = reviewsData.length;
  const CHARACTER_LIMIT = 150; // Limit before cutting off text
  
  // State for "Load More" pagination
  const [visibleCount, setVisibleCount] = useState(9);
  
  // === NEW: State to track which specific reviews are expanded ===
  const [expandedReviews, setExpandedReviews] = useState({});

  const displayedReviews = reviewsData.slice(0, visibleCount);

  const loadMoreReviews = () => {
    setVisibleCount((prevCount) => prevCount + 9);
  };

  // === NEW: Toggle function for the "Read More" button ===
  const toggleReview = (id) => {
    setExpandedReviews((prev) => ({
      ...prev,
      [id]: !prev[id] // Flips between true (expanded) and false (collapsed)
    }));
  };

  return (
    <main className="min-h-screen bg-[#faf4e1]">
      
      <style>
        {`
          @keyframes slideFadeIn {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>

      {/* === HERO BANNER === */}
       {/* === HERO BANNER === */}
            {/* Added pt-24 so it sits right under your fixed Navbar without being hidden */}
            <div 
              className="relative w-full h-[35vh] md:h-[65vh] min-h-[300px] flex items-center bg-cover bg-center pt-24"
              style={{ backgroundImage: `url(${bannerImg})` }}
            >
              {/* Dark gradient overlay so the white text pops */}
              <div className="absolute inset-0 bg-black/40 bg-gradient-to-r from-black/60 to-transparent"></div>
              
              {/* Text Container aligned to the left like your screenshot */}
              <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 lg:px-8">
               {/* === HEADER === */}
              <div className="flex flex-col items-center mb-16">
              
                <h1 className="text-4xl md:text-6xl font-serif italic text-gray-100 leading-tight text-center">
                  Exum Cottage Reviews
                </h1>
              </div>
              </div>
            </div>
      
                 <h1 className="text-3xl md:text-6xl font-serif italic pt-8 text-gray-700 leading-tight text-center">
           Our Reviews
                </h1>

      {/* === MAIN CONTENT === */}
      <section className="py-16 md:py-24 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-8">

        {/* === FLEXBOX REVIEWS GRID === */}
        <div className="flex flex-wrap justify-center gap-6">
          
          {displayedReviews.map((review, index) => {
            // === NEW: Text Truncation Logic ===
            const isLongReview = review.text.length > CHARACTER_LIMIT;
            const isExpanded = expandedReviews[review.id];
            
            // If it's long AND not expanded, cut it off. Otherwise, show full text.
            const displayText = isLongReview && !isExpanded 
              ? review.text.substring(0, CHARACTER_LIMIT) + "..." 
              : review.text;

            return (
              <div 
                key={review.id} 
                style={{
                  animation: `slideFadeIn 0.6s ease-out ${(index % 9) * 0.1}s both`
                }}
                className="w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)] bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100 group relative overflow-hidden flex flex-col"
              >
                <Quote className="absolute -top-4 -right-4 w-24 h-24 text-[#faf4e1] opacity-60 rotate-12 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6" />
                
                <div className="relative z-10 flex flex-col h-full">
                  
                  {/* Guest Info */}
                  <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100">
                    <div className="w-12 h-12 bg-[#001f3f] rounded-full flex items-center justify-center text-white font-serif italic text-xl shadow-inner shrink-0">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 tracking-wider text-sm">{review.name}</h4>
                      <span className="text-xs text-gray-500 font-medium uppercase tracking-widest block mt-1">
                        Verified Guest • {review.date}
                      </span>
                    </div>
                  </div>

                  {/* Review Text with "Read More" logic */}
                  <p className="text-gray-700 font-light text-lg leading-relaxed mb-6 italic flex-grow">
                    "{displayText}"
                    
                    {/* Only show the button if the text is actually long enough to need it */}
                    {isLongReview && (
                      <button 
                        onClick={() => toggleReview(review.id)}
                        className="ml-2 text-[#8a4e15] font-bold text-sm uppercase tracking-widest hover:underline focus:outline-none not-italic inline-block transition-colors"
                      >
                        {isExpanded ? "Show Less" : "Read More"}
                      </button>
                    )}
                  </p>

                  {/* Stars */}
                  <div className="flex gap-1 pt-6 border-t border-gray-100 mt-auto">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#8a4e15] text-[#8a4e15]" />
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

        {/* === MORE REVIEWS BUTTON === */}
        {visibleCount < totalReviews && (
          <div className="flex justify-center mt-16">
            <button 
              onClick={loadMoreReviews}
              className="cursor-pointer px-5 py-3 bg-[#8a4e15] text-white rounded-full font-bold uppercase tracking-widest text-sm hover:bg-[#8a4e15] shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              More Reviews
            </button>
          </div>
        )}

      </section>
    </main>
  );
};

export default ReviewsPage;