import React, { useState, useEffect } from 'react';
import { Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navItems = [
  "Home", "About", "Services", "Panchkarma", "Disease Info", "Facilities", "Gallery", "Doctors", "Testimonials"
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent py-5'}`}>
      
      {/* Scrolling Top Bar (Appears only on scroll) */}
      <AnimatePresence>
        {scrolled && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="w-full bg-primary-500 text-white overflow-hidden flex items-center"
          >
            <div className="py-2 flex whitespace-nowrap overflow-hidden w-full">
              <motion.div 
                animate={{ x: ["0%", "-50%"] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 15 }}
                className="flex gap-12 px-6 items-center w-max cursor-pointer"
              >
                {/* First Set */}
                <a href="#doctors" className="hover:text-primary-100 font-semibold flex items-center gap-2 tracking-wide uppercase text-sm">👨‍⚕️ Expert Doctors</a>
                <span className="text-primary-300">✦</span>
                <a href="tel:+917607131682" className="hover:text-primary-100 font-semibold flex items-center gap-2 tracking-wide uppercase text-sm">📞 Call Now: 7607131682</a>
                <span className="text-primary-300">✦</span>
                <a href="#about" className="hover:text-primary-100 font-semibold flex items-center gap-2 tracking-wide uppercase text-sm">🏥 About Kalash Chikitsalaya</a>
                <span className="text-primary-300">✦</span>
                
                {/* Second Set (Duplicate for seamless loop) */}
                <a href="#doctors" className="hover:text-primary-100 font-semibold flex items-center gap-2 tracking-wide uppercase text-sm">👨‍⚕️ Expert Doctors</a>
                <span className="text-primary-300">✦</span>
                <a href="tel:+917607131682" className="hover:text-primary-100 font-semibold flex items-center gap-2 tracking-wide uppercase text-sm">📞 Call Now: 7607131682</a>
                <span className="text-primary-300">✦</span>
                <a href="#about" className="hover:text-primary-100 font-semibold flex items-center gap-2 tracking-wide uppercase text-sm">🏥 About Kalash Chikitsalaya</a>
                <span className="text-primary-300">✦</span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className={`container-custom flex items-center justify-between ${scrolled ? 'py-3' : ''}`}>
        {/* Logo */}
        <div 
          onClick={() => window.location.href = "/"}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img 
            src="/Images/KalashLogo.png" 
            alt="Kalash Chikitsalaya Logo" 
            className="w-10 h-10 sm:w-16 sm:h-16 object-contain rounded-full shadow-sm bg-white"
          />
          <div className="flex flex-col">
            <span className="text-sm sm:text-xl font-bold text-gray-900 leading-tight">Kalash Chikitsalaya</span>
            <span className="text-[10px] sm:text-sm font-medium text-gray-600 leading-tight">सुश्रुत क्षारकर्म एवं पंचकर्म रिसर्च सेन्टर</span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium text-gray-700 hover:text-primary-500 transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-4">
          <button className="text-gray-600 hover:text-primary-500 transition-colors">
            <Search size={20} />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden text-gray-800 p-2 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div 
        className={`lg:hidden fixed inset-0 top-[60px] md:top-[70px] bg-white z-30 transition-all duration-300 ease-in-out ${isOpen ? 'translate-x-0 opacity-100 visible' : 'translate-x-full opacity-0 invisible pointer-events-none'}`}
      >
        <div className="flex flex-col h-full px-6 py-8 gap-6 overflow-y-auto">
          {navItems.map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-2xl font-semibold text-gray-800 border-b border-gray-100 pb-4 hover:text-primary-500 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <div className="mt-8 flex flex-col gap-4">
            <button 
              onClick={() => {
                setIsOpen(false);
                window.dispatchEvent(new CustomEvent('openCallModal'));
              }}
              className="btn-primary w-full text-center"
            >
              Book Appointment
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
