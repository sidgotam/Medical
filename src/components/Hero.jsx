import React, { useState, useEffect } from 'react';
import { ChevronRight, Calendar, Phone, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  {
    id: 1,
    badge: "",
    titleLine1: "",
    titleLine2: "",
    subtitle: "",
    image: "/hero/id1.png",
    btn1Icon: <Phone size={18} />,
    btn1Text: "Call Now",
  },
  {
    id: 2,
    badge: "",
    titleLine1: "",
    titleLine2: "",
    subtitle: "",
    image: "/hero/id2.png",
    btn1Icon: <Phone size={18} />,
    btn1Text: "Call Now",
  },
  {
    id: 3,
    badge: "समय : -",
    titleLine1: "सोमवार से शुक्रवार प्रातः 9 बजे तक एवं सायंकाल 5 बजे से 9 बजे तक",
    titleLine2: "शनिवार एवं रविवार : प्रातः 10 बजे से सायं 8 बजे तक",
    subtitle: "Time: Monday to Friday – 9:00 AM onwards & 5:00 PM to 9:00 PM | Saturday & Sunday – 10:00 AM to 8:00 PM",
    image: "/gallery/image1.jpg",
    btn1Icon: <Phone size={18} />,
    btn1Text: "Call Now: +91 7607131682",
    btn2Text: "WhatsApp Now"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showCallNumbers, setShowCallNumbers] = useState(false);
  const touchStartX = React.useRef(null);
  const touchEndX = React.useRef(null);
  const isDragging = React.useRef(false);
  const swipeOccurred = React.useRef(false);

  useEffect(() => {
    setShowCallNumbers(false);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(timer);
  }, [currentSlide]);

  const minSwipeDistance = 50;

  const handleDragStart = (clientX) => {
    isDragging.current = true;
    swipeOccurred.current = false;
    touchEndX.current = null;
    touchStartX.current = clientX;
  };

  const handleDragMove = (clientX) => {
    if (!isDragging.current) return;
    touchEndX.current = clientX;
  };

  const handleDragEnd = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    if (touchStartX.current === null || touchEndX.current === null) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > minSwipeDistance) {
      swipeOccurred.current = true;
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    } else if (distance < -minSwipeDistance) {
      swipeOccurred.current = true;
      setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    }
  };

  const onTouchStart = (e) => handleDragStart(e.targetTouches[0].clientX);
  const onTouchMove = (e) => handleDragMove(e.targetTouches[0].clientX);
  const onTouchEnd = handleDragEnd;

  const onMouseDown = (e) => handleDragStart(e.clientX);
  const onMouseMove = (e) => handleDragMove(e.clientX);
  const onMouseUp = handleDragEnd;
  const onMouseLeave = handleDragEnd;

  const handleSlideClick = (id) => {
    if (id === 1) {
      window.dispatchEvent(new CustomEvent('openDoctorProfile', { detail: 0 }));
    } else if (id === 2) {
      window.dispatchEvent(new CustomEvent('openDoctorProfile', { detail: 1 }));
    } else if (id === 3) {
      window.open('https://wa.me/919450878415', '_blank');
    } else {
      document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const slide = slides[currentSlide];

  const fadeVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1 } },
    exit: { opacity: 0, transition: { duration: 1 } },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section 
      id="home" 
      className="relative w-full min-h-[auto] md:min-h-[500px] flex flex-col items-center justify-start overflow-hidden mt-0 cursor-pointer pt-4 md:pt-[2vw] pb-8 md:pb-[4vw] bg-gray-50/30 touch-pan-y"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
    >
      <div className="container-custom relative z-20 w-full flex flex-col items-center justify-center">
        
        {/* Hero Slider */}
        <div 
          className="relative w-full max-w-[1200px] aspect-[16/9] md:aspect-[16/7] bg-white rounded-3xl md:rounded-[2.5vw] shadow-2xl overflow-hidden border border-gray-100 group mx-auto" 
          onClick={(e) => {
            if (swipeOccurred.current) {
              e.preventDefault();
              e.stopPropagation();
              swipeOccurred.current = false;
              return;
            }
            handleSlideClick(slide.id);
          }}
        >
          {/* Background Image Slider Fully Spread */}
          <div className="absolute inset-0 z-0 bg-gray-900 pointer-events-none">
            <AnimatePresence mode="popLayout">
              <motion.img 
                key={slide.id}
                src={slide.image} 
                alt="Hospital Background" 
                className="absolute inset-0 w-full h-full object-cover object-top sm:object-center transition-transform duration-1000 group-hover:scale-105"
                variants={fadeVariants}
                initial="initial"
                animate="animate"
                exit="exit"
              />
            </AnimatePresence>
            
            {/* Minimal readable gradient if using text-less poster */}
            {(!slide.titleLine1 && !slide.subtitle) ? null : (
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/50 to-transparent z-10"></div>
            )}
          </div>

          <div className="relative z-20 w-full h-full flex flex-col items-start justify-center p-3 sm:p-10 md:p-[4vw] pointer-events-none">
            <AnimatePresence mode="wait">
              <motion.div 
                key={slide.id}
                className="w-full max-w-[95%] sm:max-w-[85%] flex flex-col items-start h-full"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
              >
                {slide.badge && (
                  <motion.div variants={itemVariants} className="inline-block px-2 py-0.5 sm:px-3 sm:py-1 md:px-[1.5vw] md:py-[0.5vw] rounded-full bg-primary-50 text-primary-600 font-semibold text-[10px] sm:text-xs md:text-[1.2vw] mb-2 sm:mb-4 md:mb-[1.5vw] border border-primary-100 shadow-sm backdrop-blur-sm pointer-events-auto uppercase tracking-wider">
                    {slide.badge}
                  </motion.div>
                )}
                
                {slide.titleLine1 && (
                  <motion.h1 
                    variants={itemVariants} 
                    className="font-extrabold text-gray-900 leading-[1.2] tracking-tight mb-2 sm:mb-4 md:mb-[1.5vw] drop-shadow-sm pointer-events-auto text-sm sm:text-4xl md:text-[3.5vw]"
                  >
                    {slide.titleLine1} <br className="hidden sm:block" />
                    <span className="text-primary-600 bg-white/40 px-1 py-0.5 sm:px-2 sm:py-1 md:px-[0.5vw] rounded sm:rounded-lg md:rounded-[0.5vw] backdrop-blur-sm leading-tight inline-block mt-1 sm:mt-2 md:mt-[0.5vw] text-xs sm:text-2xl md:text-[2.8vw]">
                      {slide.titleLine2}
                    </span>
                  </motion.h1>
                )}
                
                {slide.subtitle && (
                  <motion.p variants={itemVariants} className="text-[10px] sm:text-base md:text-[1.6vw] mb-2 sm:mb-6 md:mb-[2vw] max-w-full sm:max-w-[85%] leading-tight text-gray-700 font-medium drop-shadow-sm bg-white/70 sm:bg-white/40 p-1.5 sm:p-3 sm:p-[1vw] rounded sm:rounded-xl sm:rounded-[1vw] backdrop-blur-sm shadow-sm block pointer-events-auto">
                    {slide.subtitle}
                  </motion.p>
                )}

                {/* Spacer to push buttons down since text is now in image */}
                <div className="flex-grow min-h-[3vw]"></div>
                
                <motion.div variants={itemVariants} className="flex flex-row flex-wrap sm:flex-nowrap gap-2 sm:gap-[1.5vw] w-auto pointer-events-auto mt-2 sm:mt-4">
                  
                  <button 
                    className="btn-primary flex flex-none items-center justify-center gap-1.5 sm:gap-[0.8vw] text-[10px] sm:text-[1.5vw] px-3 sm:px-[2.5vw] py-1.5 sm:py-[1vw] rounded sm:rounded-[1.2vw] shadow-xl hover:shadow-2xl active:scale-95 transition-all w-auto whitespace-nowrap min-w-max"
                    onClick={(e) => { 
                      e.stopPropagation(); 
                      if (slide.btn1Text.includes("Book") || slide.btn1Text.includes("Call")) {
                        window.dispatchEvent(new CustomEvent('openCallModal'));
                      } else {
                        handleSlideClick(slide.id); 
                      }
                    }}
                  >
                    {React.cloneElement(slide.btn1Icon, { className: "w-3 h-3 sm:w-[1.8vw] sm:h-[1.8vw] shrink-0" })}
                    <span>{slide.btn1Text}</span>
                  </button>

                  {slide.btn2Text && (
                    <button 
                      className="btn-secondary flex flex-none items-center justify-center gap-1.5 sm:gap-[0.8vw] group text-[10px] sm:text-[1.5vw] px-3 sm:px-[2.5vw] py-1.5 sm:py-[1vw] rounded sm:rounded-[1.2vw] shadow-md hover:shadow-lg active:scale-95 transition-all w-auto whitespace-nowrap min-w-max"
                      onClick={(e) => { e.stopPropagation(); handleSlideClick(slide.id); }}
                    >
                      {slide.btn2Text === "WhatsApp Now" ? (
                        <MessageSquare size={20} className="w-3 h-3 sm:w-[1.5vw] sm:h-[1.5vw] text-green-500 group-hover:scale-110 transition-transform shrink-0" />
                      ) : (
                        <ChevronRight className="w-3 h-3 sm:w-[1.5vw] sm:h-[1.5vw] text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-transform shrink-0" />
                      )}
                      <span>{slide.btn2Text}</span>
                    </button>
                  )}
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Controls Inside Fixed Card */}
          <div className="absolute bottom-[2vw] right-[2vw] flex items-center gap-[1vw] z-30 pointer-events-auto">
            {slides.map((_, idx) => (
              <button 
                key={idx}
                onClick={(e) => { e.stopPropagation(); setCurrentSlide(idx); }}
                className={`h-3 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-primary-500 w-8 md:w-[3vw]' : 'bg-white/30 hover:bg-white w-3'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
