import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#faf4e1] pt-16 pb-8 border-t border-gray-200 shadow-[0_-10px_20px_-5px_rgba(0,0,0,0.1)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12">

          {/* Column 1: Mini Map Widget */}
          <div className="w-full">
            <div className="rounded-xl shadow-md border border-gray-200 overflow-hidden flex flex-col bg-white">
              {/* Interactive Google Map Embed - Updated for Capitol Casa, Santa Fe */}
              <div className="w-full h-[200px] bg-gray-100 relative">
                <iframe
                  title="Capitol Casa Santa Fe Map"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src="https://maps.google.com/maps?q=New+Mexico+State+Capitol,+Santa+Fe,+NM&t=&z=14&ie=UTF8&iwloc=&output=embed"
                  className="absolute inset-0"
                ></iframe>
              </div>

              {/* Map Footer Information */}
              <div className="p-4 bg-white flex flex-col items-start">
                <h3 className="text-[17px] font-medium text-gray-900 mb-0.5">
                  Santa Fe, NM
                </h3>
                <a
                  href="https://www.google.com/maps/place/Santa+Fe,+NM"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#0a58ca] hover:underline text-[15px] inline-flex items-center"
                >
                  View in a map
                  <svg
                    className="w-4 h-4 ml-0.5 mt-[2px]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Explore */}
          <div className="lg:pl-8">
            <h4 className="text-lg font-serif italic text-gray-900 mb-5">Explore</h4>
            <ul className="space-y-3 text-base font-light text-gray-700">
              <li><NavLink to="/capitolcasa/" className="hover:text-[#54371b] hover:underline underline-offset-4 transition-all">Home</NavLink></li>
              <li><NavLink to="/capitolcasa/the-host" className="hover:text-[#54371b] hover:underline underline-offset-4 transition-all">The Host</NavLink></li>
              <li><NavLink to="/capitolcasa/#micasa" className="hover:text-[#54371b] hover:underline underline-offset-4 transition-all">Mi Casa</NavLink></li>
              <li><NavLink to="/capitolcasa/gallery" className="hover:text-[#54371b] hover:underline underline-offset-4 transition-all">Gallery</NavLink></li>
              <li><NavLink to="/capitolcasa/reviews" className="hover:text-[#54371b] hover:underline underline-offset-4 transition-all">Reviews</NavLink></li>
            </ul>
          </div>

          {/* Column 3: Policies */}
          <div>
            <h4 className="text-lg font-serif italic text-gray-900 mb-5">Policies</h4>
            <ul className="space-y-3 text-base font-light text-gray-700">
              <li><a href="#terms" className="hover:text-[#54371b] hover:underline underline-offset-4 transition-all">Terms & Conditions</a></li>
              <li><a href="#privacy" className="hover:text-[#54371b] hover:underline underline-offset-4 transition-all">Privacy Policy</a></li>
              <li><a href="#rules" className="hover:text-[#54371b] hover:underline underline-offset-4 transition-all">House Rules</a></li>
              <li><a href="#cancellation" className="hover:text-[#54371b] hover:underline underline-offset-4 transition-all">Cancellation Policy</a></li>
              <li><a href="#faq" className="hover:text-[#54371b] hover:underline underline-offset-4 transition-all">FAQ</a></li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="text-lg font-serif italic text-gray-900 mb-5">Get in Touch</h4>
            <ul className="space-y-4 text-base font-light text-gray-700">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#54371b] mt-0.5 shrink-0" strokeWidth={2} />
                <span>Santa Fe, NM
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#54371b] shrink-0" strokeWidth={2} />
                <a href="tel:5056607652​" className="hover:text-[#54371b] transition-colors">+1 (505) 660 7652​</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#54371b] shrink-0" strokeWidth={2} />
                <p className="hover:text-[#54371b] transition-colors">Capitolcasa@gmail.com</p>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright & Credits */}
        <div className="pt-6 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 font-light text-center md:text-left">
            © {currentYear} capitol casa. All rights reserved.
          </p>
          <div className="text-sm text-gray-500 font-light flex items-center gap-1">
            <span>Powered by</span>
            <a
              href="https://premiumbusinesswebsites.com"
              target="_blank"
              rel="noreferrer"
              className="text-[#1654ea] hover:text-[#54371b] font-medium transition-colors ml-1"
            >
              premiumbusinesswebsites.com
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;