import React from 'react';
import { 
  Sun, 
  CloudSun, 
  Cloud, 
  Mail, 
  Phone, 
  FileText, 

  MessageCircle 
} from 'lucide-react';
import bgimg from '../../assets/images/h4.jpg';
import logo from '../../assets/logo.png';


const ContactBanner = () => {
  return (
    // Background Image with deep navy/ocean overlay
  <section 
  className="relative bg-cover bg-center py-16 md:py-20"
  style={{ 
    backgroundImage: `url(${bgimg})` 
  }}
>
  {/* Add backdrop-blur-sm (or -md for more blur) to this overlay! */}
  <div className="absolute inset-0 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 md:px-12 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-0">
          
          {/* ==========================================
              COLUMN 1: WEATHER 
              ========================================== */}
          <div className="flex flex-col items-center justify-center lg:border-r border-white/20 lg:pr-8">
            
            <div className="flex items-center gap-6 mb-8">
              <div className="text-right">
                <h4 className="text-white font-bold tracking-widest uppercase text-sm leading-tight">
                  Santa Fe<br /> NM 
                </h4>
              </div>
              <div className="flex items-center gap-4">
                <CloudSun className="w-14 h-14 text-white drop-shadow-md" strokeWidth={1.5} />
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-white">72°F</span>
                  <span className="text-white/80 text-sm font-light">Partly cloudy</span>
                </div>
              </div>
            </div>

            {/* 3-Day Forecast */}
            <div className="flex justify-between items-center w-full max-w-[280px] px-4">
              <div className="flex flex-col items-center gap-2">
                <span className="text-white/90 text-sm font-medium">Mon</span>
                <CloudSun className="w-6 h-6 text-white" strokeWidth={1.5} />
                <div className="flex flex-col items-center text-xs">
                  <span className="text-[#eab308] font-bold">75°F</span>
                  <span className="text-white/70">62°F</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-white/90 text-sm font-medium">Tue</span>
                <Sun className="w-6 h-6 text-[#eab308]" strokeWidth={1.5} />
                <div className="flex flex-col items-center text-xs">
                  <span className="text-[#eab308] font-bold">78°F</span>
                  <span className="text-white/70">65°F</span>
                </div>
              </div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-white/90 text-sm font-medium">Wed</span>
                <Cloud className="w-6 h-6 text-white" strokeWidth={1.5} />
                <div className="flex flex-col items-center text-xs">
                  <span className="text-[#eab308] font-bold">71°F</span>
                  <span className="text-white/70">60°F</span>
                </div>
              </div>
            </div>

          </div>

          {/* ==========================================
              COLUMN 2: BRAND & SOCIALS
              ========================================== */}
          <div className="flex flex-col items-center justify-center lg:border-r border-white/20 lg:px-8 py-4 lg:py-0">
            
            {/* Logo */}
            <div className="flex flex-col items-center gap-2 mb-6">
             <img src={logo} alt="logo"className='w-30 h-25 rounded-xl' />
              <span className="text-2xl font-bold tracking-[0.2em] text-white uppercase mt-2">
                Capitol<span className="font-light">Casa</span>
              </span>
              <span className="text-white/70 tracking-widest uppercase text-xs">Santa Fe, NM </span>
            </div>

            <div className="w-24 h-[1px] bg-white/30 mb-6"></div>

            {/* Socials */}
            <h5 className="text-white font-bold tracking-[0.15em] uppercase text-sm mb-4">
              Follow Us
            </h5>
        

          </div>

          {/* ==========================================
              COLUMN 3: CONTACT & BUTTONS
              ========================================== */}
          <div className="flex flex-col items-center lg:items-start justify-center lg:pl-16">
            
            <ul className="space-y-4 mb-8 text-white/90 text-sm md:text-base font-light">
             
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 opacity-80" strokeWidth={1.5} />
                <a href="mailto:stay@capitolcasa.com" className="hover:text-white transition-colors">Capitolcasa@gmail.com</a>
              </li>
              <li className="flex items-center gap-3 pt-2">
                <Phone className="w-5 h-5 opacity-80" strokeWidth={1.5} />
                <a href="tel:+13109806850" className="text-lg font-medium hover:text-white transition-colors">+1 (505) 660 7652​</a>
              </li>
            </ul>

            <div className="w-full max-w-[280px] space-y-3">
           

              {/* WhatsApp Button */}
              <button className="w-full bg-[#1da871] hover:bg-[#158f5e] text-white py-3 px-4 rounded flex items-center justify-center gap-2 text-sm font-medium transition-colors shadow-lg">
                <MessageCircle className="w-4 h-4" />
                Message us on WhatsApp
              </button>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactBanner;