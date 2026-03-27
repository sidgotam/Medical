import React from 'react';
import { Phone, AlertCircle } from 'lucide-react';

const Banner = () => {
  return (
    <div className="bg-primary-500 text-white w-full py-2 px-4 shadow-sm z-50 relative">
      <div className="container-custom flex flex-col sm:flex-row items-center justify-between text-sm md:text-base font-medium">
        <div className="flex items-center gap-2 mb-1 sm:mb-0">
          <AlertCircle size={18} className="animate-pulse" />
          <span>24/7 Emergency Medical Support - Call Now</span>
        </div>
        <a href="tel:+917607131682" className="flex items-center gap-2 hover:text-white/90 transition-colors bg-white/10 px-3 py-1 rounded-full">
          <Phone size={16} />
          <span>+91 7607131682</span>
        </a>
      </div>
    </div>
  );
};

export default Banner;
