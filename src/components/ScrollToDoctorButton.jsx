import React, { useState, useEffect } from 'react';
import { Stethoscope } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrollToDoctorButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Watch for body overflow changes (standard for modals in this project)
    const observer = new MutationObserver(() => {
      setIsModalOpen(document.body.style.overflow === 'hidden');
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['style'] });
    window.addEventListener('scroll', toggleVisibility);
    
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
      observer.disconnect();
    };
  }, []);

  const scrollToDoctors = () => {
    const section = document.getElementById('doctors');
    if (section) {
      const yOffset = -80; 
      const y = section.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {(isVisible && !isModalOpen) && (
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            x: 0, 
            scale: 1,
            y: [0, -4, 0]
          }}
          exit={{ opacity: 0, x: 100, scale: 0.8 }}
          transition={{ 
            type: 'spring', 
            stiffness: 200, 
            damping: 20,
            y: {
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut"
            }
          }}
          className="fixed top-20 right-4 md:right-8 md:top-24 z-[900]"
        >
          <motion.div 
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.4, 0.2] 
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 2 
            }}
            className="absolute inset-0 bg-red-400 rounded-full blur-lg"
          ></motion.div>
          
          <motion.button
            onClick={scrollToDoctors}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              scale: [1, 1.03, 1],
            }}
            transition={{
              scale: {
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut"
              }
            }}
            className="relative group flex items-center justify-center bg-gradient-to-r from-[#FF4D4D] via-[#FF8C00] to-[#FF4D4D] text-white shadow-[0_8px_30px_rgba(255,77,77,0.4)] hover:shadow-[0_12px_40px_rgba(255,77,77,0.6)] px-4 py-2.5 md:px-5 md:py-3 rounded-full transition-shadow duration-300 border border-white/20 overflow-hidden"
            aria-label="Book Appointment"
          >
            <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:animate-shimmer"></div>
            
            <div className="relative flex items-center">
              <div className="mr-2 bg-white/20 p-1 rounded-full">
                <Stethoscope size={16} className="text-white" />
              </div>
              <span className="font-extrabold text-[10px] md:text-xs tracking-tight whitespace-nowrap drop-shadow-md uppercase italic">
                Our Doctors
              </span>
            </div>

            <span className="absolute top-1 right-3 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-300 shadow-sm border border-red-500"></span>
            </span>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollToDoctorButton;
