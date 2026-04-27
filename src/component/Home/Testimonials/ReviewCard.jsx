import { Star, Quote } from 'lucide-react';

// ==========================================
// 1. CHILD COMPONENT: The individual card
// ==========================================
const ReviewCard = ({ name, text }) => {
  return (
    <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-10 rounded-2xl flex flex-col justify-between h-full transition-transform duration-500 hover:-translate-y-2">
      
      {/* Top: Quote Icon & Text */}
      <div>
        <Quote className="w-10 h-10 text-[#8a4e15] opacity-80 mb-6" strokeWidth={1.5} />
        <p className="text-white/90 font-light text-base md:text-lg leading-relaxed mb-8">
          "{text}"
        </p>
      </div>
      
      {/* Bottom: Name & Stars */}
      <div className="flex items-center justify-between border-t border-white/10 pt-6 mt-auto">
        <span className="text-white font-medium tracking-wider uppercase text-sm">
          {name}
        </span>
        <div className="flex gap-1">
          {/* Renders 5 solid stars */}
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-[#eab308] fill-[#eab308]" />
          ))}
        </div>
      </div>

    </div>
  );
};

export default ReviewCard;