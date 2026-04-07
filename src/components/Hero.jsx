import React, { useState, useEffect } from 'react';
import { ChevronRight, Calendar, Phone, MessageSquare, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const slides = [
  //    {
  //   id: 1,
  //   badge: "समय : -",
  //   //its formatiing should be smaller to avoid overlapping
  //   titleLine1: "सोमवार से शुक्रवार प्रातः 9 बजे तक एवं सायंकाल 5 बजे से 9 बजे तक",
  //   titleLine2: "शनिवार एवं रविवार : प्रातः 10 बजे से सायं 8 बजे तक",
  //   subtitle: "Time: Monday to Friday – 9:00 AM onwards & 5:00 PM to 9:00 PM | Saturday & Sunday – 10:00 AM to 8:00 PM",
  //   image: "/gallery/image1.jpg",
  //   btn1Icon: <Phone size={18} />,
  //   btn1Text: "Call Now: +91 7607131682",
  //   btn2Text: "WhatsApp Now"
  // }

  {
    id: 0,
    isCustomIntro: true,
    badge: "",
    titleLine1: "",
    titleLine2: "",
    subtitle: "",
    image: "",
    btn1Icon: <Phone size={14} />,
    btn1Text: "Book Appointment",
  },
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
    //its formatiing should be smaller to avoid overlapping
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
          className="relative w-full max-w-[1200px] aspect-[3/2] bg-white rounded-[2rem] md:rounded-[2.5vw] shadow-2xl overflow-hidden border border-gray-100 group mx-auto transition-all duration-500" 
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
          <div className="absolute inset-0 z-0 bg-primary-50 sm:bg-gray-900 pointer-events-none">
            <AnimatePresence mode="popLayout">
              {!slide.isCustomIntro ? (
                <motion.img 
                  key={slide.id}
                  src={slide.image} 
                  alt="Hospital Background" 
                  className="absolute inset-0 w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105"
                  variants={fadeVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                />
              ) : (
                <motion.div
                  key="custom-bg"
                  className="absolute inset-0 w-full h-full bg-gradient-to-br from-white via-primary-50/50 to-primary-100/40 pointer-events-none"
                  variants={fadeVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                   {/* Decorative background elements */}
                   <div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-primary-200/20 blur-3xl"></div>
                   <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-blue-200/20 blur-3xl"></div>
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Minimal readable gradient if using text-less poster */}
            {(!slide.titleLine1 && !slide.subtitle && !slide.isCustomIntro) ? null : (
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/50 to-transparent z-10 pointer-events-none"></div>
            )}
          </div>

          <div className="relative z-20 w-full h-full flex flex-col items-start justify-center p-2 sm:p-6 lg:p-[4vw] pointer-events-none">
            <AnimatePresence mode="wait">
              {slide.isCustomIntro ? (
                <motion.div
                  key="custom-intro"
                  className="w-full h-full flex flex-col items-center justify-evenly sm:justify-center pointer-events-auto overflow-hidden sm:overflow-visible gap-0 sm:gap-4 md:gap-6 lg:gap-0 py-1 sm:py-0"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {/* Top Header Row with Logos */}
                  <div className="w-full flex flex-col items-center mt-1 sm:mt-0 sm:mb-2 md:mb-4 pt-1 lg:pt-4 shrink-0">
                      <div className="w-full flex items-start justify-between px-2 sm:px-4 md:px-8 mb-0.5 sm:mb-2">
                          
                          {/* Left: Kalash Logo */}
                          <motion.div variants={itemVariants} className="w-[35px] h-[35px] sm:w-[75px] sm:h-[75px] md:w-[100px] md:h-[100px] lg:w-[125px] lg:h-[125px] shrink-0 bg-white/60 p-0.5 sm:p-2 rounded-lg sm:rounded-2xl shadow-sm border border-white/80">
                              <img src="/Images/KalashLogo.png" alt="Kalash Logo" className="w-full h-full object-contain hover:scale-110 transition-transform duration-300" />
                          </motion.div>
                          
                          {/* Center: Text Headers */}
                          <motion.div variants={itemVariants} className="text-center flex-1 px-1 sm:px-4 flex flex-col justify-start items-center">
                              <h1 className="text-[14px] sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-primary-600 drop-shadow-sm mb-0.5 sm:mb-2 leading-tight">
                                  कलश चिकित्सालय
                              </h1>
                              <h2 className="text-[7px] sm:text-xs md:text-lg lg:text-xl font-bold text-gray-800 bg-white/70 backdrop-blur-md px-1 sm:px-4 py-[1px] sm:py-1.5 rounded-full inline-block shadow-sm">
                                  सुश्रुत क्षारकर्म एवं पंचकर्म रिसर्च सेन्टर
                              </h2>
                          </motion.div>
                          
                          {/* Right: Clinic Photo */}
                          <motion.div variants={itemVariants} className="w-[35px] h-[35px] sm:w-[75px] sm:h-[75px] md:w-[100px] md:h-[100px] lg:w-[125px] lg:h-[125px] shrink-0 bg-white/60 p-0.5 sm:p-1.5 rounded-lg sm:rounded-2xl shadow-sm border border-white/80 overflow-hidden">
                              <img src="/gallery/clinic.jpg" alt="Clinic photo" className="w-full h-full object-cover rounded-sm sm:rounded-xl hover:scale-110 transition-transform duration-300" />
                          </motion.div>
                          
                      </div>

                      {/* Address placed safely below the Title so it spans nicely without squishing */}
                      <motion.div variants={itemVariants} className="w-full px-1 sm:px-0 text-center flex flex-col items-center gap-0.5 sm:gap-2">
                          <p className="text-[7.5px] sm:text-xs md:text-base text-gray-900 bg-white/60 backdrop-blur-md px-1.5 py-1 sm:px-4 sm:py-2 rounded-md sm:rounded-lg mx-auto w-full max-w-[98%] sm:max-w-[90%] md:max-w-[80%] font-semibold shadow-sm border border-white leading-[1.1] sm:leading-snug">
                              <MapPin className="inline-block mb-0.5 text-primary-600 mr-0.5 w-2 h-2 sm:w-3.5 sm:h-3.5" />
                              हॉस्पिटल-डी-100 बुद्ध विहार पार्ट-बी, एम.आई.जी. निकट सिद्धि विनायक ट्रेडर्स मेन देवरिया बाईपास रोड, तारामण्डल, गोरखपुर-273016
                          </p>
                          <div className="flex flex-row items-center justify-center gap-2 sm:gap-6 text-gray-900 bg-white/60 backdrop-blur-md px-2 py-0.5 sm:px-6 sm:py-2 rounded-full font-bold text-[8px] sm:text-sm md:text-base border border-white shadow-sm">
                              <a href="tel:+919450878415" className="flex items-center gap-0.5 sm:gap-1 hover:text-primary-600 transition-colors">
                                  <Phone className="text-primary-600 w-2 h-2 sm:w-4 sm:h-4" />
                                  <span>9450878415</span>
                              </a>
                              <div className="w-[1px] h-2 sm:w-[1.5px] sm:h-3 bg-gray-400"></div>
                              <a href="tel:+918052262605" className="flex items-center gap-0.5 sm:gap-1 hover:text-primary-600 transition-colors">
                                  <Phone className="text-primary-600 w-2 h-2 sm:w-4 sm:h-4" />
                                  <span>05514000536, 7607131682</span>
                              </a>
                          </div>
                      </motion.div>
                  </div>

                  {/* Details & Images Row */}
                  <div className="flex flex-col md:flex-row w-full items-center justify-center gap-1 sm:gap-4 md:gap-8 flex-1 mt-0 sm:mt-0 shrink lg:shrink-0">
                      
                      {/* Left - Dr S K Ojha (Desktop) */}
                      <motion.div variants={itemVariants} className="flex-1 text-center md:text-right hidden md:flex flex-col justify-center bg-white/40 p-4 rounded-2xl backdrop-blur-sm border border-white mx-2 md:mx-0 shadow-sm max-w-full md:max-w-[30%] order-2 md:order-1">
                          <h3 className="text-xl md:text-[1.8vw] lg:text-3xl font-extrabold text-gray-900 mb-1 lg:mb-2">डा० एस० के० ओझा</h3>
                          <p className="text-primary-600 font-bold text-sm md:text-[1.1vw] lg:text-lg mb-2">गुद (मलद्वार) रोग विशेषज्ञ</p>
                          <p className="text-gray-700 text-[10px] md:text-[0.8vw] lg:text-xs font-semibold leading-tight mb-2">(Consultant Proctologist & KsharSutra Surgeon)</p>
                          <p className="text-gray-600 text-[10px] md:text-[0.7vw] lg:text-[11px] leading-relaxed">बी.ए.एम.एस., पी.जी. डिप. के.के. (क्षारकर्म)<br/>शल्यतन्त्र विभाग, आई.एम.एस. बी.एच.यू., वाराणसी</p>
                      </motion.div>

                      {/* Center - Two Doctors Image */}
                      <motion.div variants={itemVariants} className="flex flex-col items-center justify-center relative shrink-0 w-full md:w-auto h-auto order-1 md:order-2">
                          {/* The two doctor pictures */}
                          <div className="relative flex items-center justify-center w-[140px] h-[85px] sm:w-[260px] sm:h-[180px] md:w-[320px] md:h-[220px] mx-auto mt-1 sm:mt-0">
                              {/* Background subtle glow */}
                              <div className="absolute inset-0 bg-primary-400/20 rounded-full blur-3xl z-0"></div>
                              
                              {/* Dr SK Ojha Image (Left) */}
                              <div className="absolute left-[5%] md:left-[0%] w-[70px] h-[70px] sm:w-[140px] sm:h-[140px] md:w-[190px] md:h-[190px] rounded-full border-2 sm:border-[3px] md:border-4 border-white shadow-2xl overflow-hidden z-20 hover:z-30 hover:-translate-y-2 hover:scale-105 transition-all duration-300">
                                  <img src="/Dr S K Ojha/profile.jpeg" alt="Dr S K Ojha" className="w-full h-full object-cover object-top" />
                              </div>
                              {/* Dr Savita Image (Right) */}
                              <div className="absolute right-[5%] md:right-[0%] top-[10%] sm:top-[15%] w-[60px] h-[60px] sm:w-[130px] sm:h-[130px] md:w-[170px] md:h-[170px] rounded-full border-2 sm:border-[3px] md:border-4 border-white shadow-xl overflow-hidden z-10 hover:z-30 hover:-translate-y-2 hover:scale-105 transition-all duration-300">
                                  <img src="/Dr Savita/profile.jpeg" alt="Dr Savita Ojha" className="w-full h-full object-cover object-top" />
                              </div>
                          </div>
                          
                          {/* Mobile Only Details shown below images stacked in a row */}
                          <div className="flex justify-center gap-1 sm:gap-4 w-full px-2 mt-1 sm:mt-6 md:hidden">
                              <div className="text-center w-1/2 bg-white/70 backdrop-blur-sm rounded-lg sm:rounded-xl p-1 sm:p-3 shadow-sm border border-white">
                                  <h3 className="text-[10px] sm:text-sm font-extrabold text-gray-900 mb-0.5">डा० एस० के० ओझा</h3>
                                  <p className="text-[8px] sm:text-[11px] text-primary-600 font-bold leading-tight line-clamp-1">गुद रोग विशेषज्ञ</p>
                              </div>
                              <div className="text-center w-1/2 bg-white/70 backdrop-blur-sm rounded-lg sm:rounded-xl p-1 sm:p-3 shadow-sm border border-white">
                                  <h3 className="text-[10px] sm:text-sm font-extrabold text-gray-900 mb-0.5">डा. सविता ओझा</h3>
                                  <p className="text-[8px] sm:text-[11px] text-primary-600 font-bold leading-tight line-clamp-1">स्त्री एवं गुदा रोग</p>
                              </div>
                          </div>
                      </motion.div>

                      {/* Right - Dr Savita Ojha (Desktop) */}
                      <motion.div variants={itemVariants} className="flex-1 text-center md:text-left hidden md:flex flex-col justify-center bg-white/40 p-4 rounded-2xl backdrop-blur-sm border border-white mx-2 md:mx-0 shadow-sm max-w-full md:max-w-[30%] order-3">
                          <h3 className="text-xl md:text-[1.8vw] lg:text-3xl font-extrabold text-gray-900 mb-1 lg:mb-2">डा. सविता ओझा</h3>
                          <p className="text-primary-600 font-bold text-sm md:text-[1.1vw] lg:text-lg mb-2">प्रसूति, स्त्रीरोग, गुदा रोग</p>
                          <p className="text-gray-700 text-[10px] md:text-[0.8vw] lg:text-xs font-semibold leading-tight mb-2">कॉस्मेटोलॉजी एवं पंचकर्म विशेषज्ञ</p>
                          <p className="text-gray-600 text-[10px] md:text-[0.7vw] lg:text-[11px] leading-relaxed">बी.ए.एम.एस., सी.जी.ओ.<br/>प्रसूति विभाग, आई.एम.एस. बी.एच.यू., वाराणसी</p>
                      </motion.div>

                  </div>

                  {/* Buttons at bottom */}
                  <motion.div variants={itemVariants} className="mt-1 sm:mt-4 md:mt-4 flex justify-center pb-1 sm:pb-4 z-30 pointer-events-auto">
                      <button 
                         className="btn-primary flex items-center justify-center gap-1.5 sm:gap-2 text-[10px] sm:text-base md:text-lg px-4 py-1.5 sm:px-8 sm:py-3 md:px-10 md:py-4 rounded-full shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] active:scale-95 transition-all text-white font-bold transform hover:-translate-y-1"
                         onClick={(e) => { 
                              e.stopPropagation(); 
                              window.dispatchEvent(new CustomEvent('openCallModal')); 
                         }}
                      >
                         <Phone className="w-3 h-3 sm:w-5 sm:h-5 md:w-5 md:h-5 md:animate-pulse" />
                         <span>Book Appointment</span>
                      </button>
                  </motion.div>
                </motion.div>
              ) : (
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
                      className={`font-extrabold text-gray-900 tracking-tight lg:tracking-normal mb-2 sm:mb-4 md:mb-[1.5vw] drop-shadow-sm pointer-events-auto ${slide.id === 3 ? 'text-[15px] sm:text-2xl md:text-[2.2vw] leading-[1.4]' : 'text-sm sm:text-4xl md:text-[3.5vw] leading-[1.2]'}`}
                    >
                      {slide.titleLine1} <br className="hidden sm:block" />
                      <span className={`text-primary-600 bg-white/40 px-1 py-0.5 sm:px-2 sm:py-1 md:px-[0.5vw] rounded sm:rounded-lg md:rounded-[0.5vw] backdrop-blur-sm inline-block mt-1 sm:mt-2 md:mt-[0.5vw] ${slide.id === 3 ? 'text-[10px] sm:text-lg md:text-[1.5vw] leading-[1.4]' : 'text-xs sm:text-2xl md:text-[2.8vw] leading-tight'}`}>
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
              )}
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
