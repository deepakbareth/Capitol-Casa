import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const ContactInfo = () => {
  return (
    <div className="lg:col-span-2 flex flex-col gap-8">
      <div className="bg-[#001f3f] text-white p-10 rounded-2xl shadow-xl h-full relative overflow-hidden group">
        {/* Decorative background element */}
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-3xl transition-transform duration-700 group-hover:scale-150"></div>
        
        <h3 className="text-3xl font-serif italic mb-8 relative z-10">Contact Details</h3>
        
        <div className="space-y-8 relative z-10">
          
          {/* Host Info */}
          <div>
            <h5 className="text-[#8a4e15] font-bold tracking-widest uppercase text-xs mb-1">Your Host</h5>
            <p className="text-xl font-light">Steve Exum</p>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-[#faf4e1]" />
            </div>
            <div>
              <h5 className="text-[#8a4e15] font-bold tracking-widest uppercase text-xs mb-1">Email Us</h5>
              <a href="mailto:booking@exumbeach.com" className="text-lg font-light hover:text-[#8a4e15] transition-colors">
                booking@exumbeach.com
              </a>
            </div>
          </div>

          {/* Phone */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <Phone className="w-5 h-5 text-[#faf4e1]" />
            </div>
            <div>
              <h5 className="text-[#8a4e15] font-bold tracking-widest uppercase text-xs mb-1">Call Us</h5>
              <a href="tel:+1234567890" className="text-lg font-light hover:text-[#8a4e15] transition-colors">
                (111) 111-111
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-[#faf4e1]" />
            </div>
            <div>
              <h5 className="text-[#8a4e15] font-bold tracking-widest uppercase text-xs mb-1">Location</h5>
              <p className="text-lg font-light leading-relaxed">
                Atlantic Beach, North Carolina
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactInfo;