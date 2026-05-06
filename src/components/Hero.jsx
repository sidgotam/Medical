import React, { useState, useEffect, useRef } from 'react';
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
  const [isPaused, setIsPaused] = useState(false);

  const [scale, setScale] = useState(1);
  const containerRef = useRef(null);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const { width } = containerRef.current.getBoundingClientRect();
        setScale(width / 1200);
      }
    };
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  const touchStartX = React.useRef(null);
  const touchEndX = React.useRef(null);
  const isDragging = React.useRef(false);
  const swipeOccurred = React.useRef(false);

  useEffect(() => {
    setShowCallNumbers(false);
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    
    return () => clearInterval(timer);
  }, [currentSlide, isPaused]);

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

  const onTouchStart = (e) => { setIsPaused(true); handleDragStart(e.targetTouches[0].clientX); };
  const onTouchMove = (e) => handleDragMove(e.targetTouches[0].clientX);
  const onTouchEnd = () => { setIsPaused(false); handleDragEnd(); };

  const onMouseDown = (e) => { setIsPaused(true); handleDragStart(e.clientX); };
  const onMouseMove = (e) => handleDragMove(e.clientX);
  const onMouseUp = () => { setIsPaused(false); handleDragEnd(); };
  const onMouseLeave = () => { setIsPaused(false); handleDragEnd(); };

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
      className="relative w-full flex flex-col items-center justify-start overflow-hidden mt-0 cursor-pointer pt-[24px] pb-4 bg-gray-50/30 touch-pan-y"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={onMouseLeave}
    >
      <div className="container-custom relative z-20 w-full flex flex-col items-center justify-center">
        
        {/* Hero Slider */}
        <div 
          ref={containerRef}
          className="relative w-full max-w-[1200px] aspect-[3/2] group mx-auto" 
        >
          <div 
            className="absolute top-0 left-0 bg-white shadow-2xl overflow-hidden border-gray-100 transition-all duration-500 origin-top-left rounded-[40px]"
            style={{ width: '1200px', height: '800px', transform: `scale(${scale})` }}
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
          <div className="absolute inset-0 z-0 bg-white pointer-events-none">
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

          <div className="relative z-20 w-full h-full flex flex-col items-start justify-center p-[2%] pointer-events-none">
            <AnimatePresence mode="wait">
              {slide.isCustomIntro ? (
                <motion.div
                  key="custom-intro"
                  className="w-full h-full flex flex-col items-center justify-between pointer-events-auto overflow-hidden gap-0 py-[1%] relative"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {/* Top Header Row with Logos */}
                  <div className="w-full flex flex-col items-center mt-0 mb-4 pt-4 shrink-0">
                      <div className="w-full flex items-start justify-between px-8 mb-2">
                          
                          {/* Left: Kalash Logo */}
                          <motion.div variants={itemVariants} className="w-[125px] h-[125px] shrink-0 bg-white/60 p-2 rounded-2xl shadow-sm border-white/80">
                              <img src="/Images/KalashLogo.png" alt="Kalash Logo" className="w-full h-full object-contain hover:scale-110 transition-transform duration-300" />
                          </motion.div>
                          
                          {/* Center: Text Headers */}
                          <motion.div variants={itemVariants} className="text-center flex-1 px-4 flex flex-col justify-start items-center">
                              <h1 className="text-[72px] font-extrabold drop-shadow-sm mb-2 leading-tight">
                                  कलश चिकित्सालय
                              </h1>
                              <h2 className="text-[28px] font-bold bg-white/70 backdrop-blur-md px-6 py-2 rounded-full inline-block shadow-sm text-gray-800">
                                  सुश्रुत क्षारकर्म एवं पंचकर्म रिसर्च सेन्टर
                              </h2>
                          </motion.div>
                          
                          {/* Right: Clinic Photo */}
                          <motion.div variants={itemVariants} className="w-[150px] h-[150px] shrink-0 bg-white/60 p-1.5 rounded-2xl shadow-sm border-white/80 overflow-hidden">
                              <img src="/gallery/clinic.jpg" alt="Clinic photo" className="w-full h-full object-cover rounded-xl hover:scale-110 transition-transform duration-300" />
                          </motion.div>
                          
                      </div>

                      {/* Address placed safely below the Title so it spans nicely without squishing */}
                      <motion.div variants={itemVariants} className="w-full px-0 text-center flex flex-col items-center gap-3">
                          <p className="text-[20px] text-gray-900 bg-white/60 backdrop-blur-md px-6 py-3 rounded-xl mx-auto w-full max-w-[95%] font-semibold shadow-sm border-white leading-snug">
                              <MapPin className="inline-block mb-[2px] text-primary-600 mr-[4px] w-5 h-5" />
                              हॉस्पिटल-डी-100 बुद्ध विहार पार्ट-बी, एम.आई.जी. निकट सिद्धि विनायक ट्रेडर्स मेन देवरिया बाईपास रोड, तारामण्डल, गोरखपुर-273016
                          </p>
                          <div className="flex flex-row items-center justify-center gap-6 text-[20px] text-gray-900 bg-white/60 backdrop-blur-md px-8 py-2 rounded-full font-bold border-white shadow-sm">
                              <a href="tel:+919450878415" className="flex items-center gap-2 hover:text-primary-600 transition-colors">
                                  <Phone className="text-primary-600 w-5 h-5" />
                                  <span>9450878415</span>
                              </a>
                              <div className="w-[1px] h-4 bg-gray-400"></div>
                              <a href="tel:+918052262605" className="flex items-center gap-2 hover:text-primary-600 transition-colors">
                                  <Phone className="text-primary-600 w-5 h-5" />
                                  <span>05514000536, 7607131682</span>
                              </a>
                          </div>
                      </motion.div>
                  </div>

                  {/* Details & Images Row */}
                  <div className="flex flex-row w-full items-center justify-center gap-8 flex-1 mt-0 shrink shrink-0 mb-0">
                      
                      {/* Left - Dr S K Ojha (Always Visible) */}
                      <motion.div variants={itemVariants} className="flex-1 text-right flex flex-col justify-center bg-white/50 p-6 rounded-[24px] backdrop-blur-md border-white mx-0 shadow-md max-w-[32%] order-1">
                          <h3 className="text-[36px] font-extrabold mb-2 leading-tight text-gray-900">डा० एस० के० ओझा</h3>
                          <p className="text-[22px] text-primary-600 font-bold mb-2 leading-tight">गुद (मलद्वार) रोग विशेषज्ञ</p>
                          <p className="text-[16px] text-gray-800 font-bold leading-tight mb-2">(Consultant Proctologist & KsharSutra Surgeon)</p>
                          <p className="text-[14px] text-gray-700 font-semibold leading-relaxed">बी.ए.एम.एस., पी.जी. डिप. के.के. (क्षारकर्म)<br/>शल्यतन्त्र विभाग, आई.एम.एस. बी.एच.यू., वाराणसी</p>
                      </motion.div>

                      {/* Center - Two Doctors Image */}
                      <motion.div variants={itemVariants} className="flex flex-col items-center justify-center relative shrink-0 w-auto h-auto order-2">
                          {/* The two doctor pictures */}
                          <div className="relative flex items-center justify-center w-[400px] h-[280px] mx-auto mt-0">
                              {/* Background subtle glow */}
                              <div className="absolute inset-0 bg-primary-400/20 rounded-full blur-3xl z-0"></div>
                              
                              {/* Dr SK Ojha Image (Left) */}
                              <div className="absolute left-[0%] w-[240px] h-[240px] rounded-full border-4 shadow-2xl overflow-hidden z-20 hover:z-30 hover:-translate-y-2 hover:scale-105 transition-all duration-300">
                                  <img src="/Dr S K Ojha/profile.jpeg" alt="Dr S K Ojha" className="w-full h-full object-cover object-top" />
                              </div>
                              {/* Dr Savita Image (Right) */}
                              <div className="absolute right-[0%] top-[15%] w-[220px] h-[220px] rounded-full border-4 shadow-xl overflow-hidden z-10 hover:z-30 hover:-translate-y-2 hover:scale-105 transition-all duration-300">
                                  <img src="/Dr Savita/profile.jpeg" alt="Dr Savita Ojha" className="w-full h-full object-cover object-top" />
                              </div>
                          </div>
                      </motion.div>

                      {/* Right - Dr Savita Ojha (Always Visible) */}
                      <motion.div variants={itemVariants} className="flex-1 text-left flex flex-col justify-center bg-white/50 p-6 rounded-[24px] backdrop-blur-md border-white mx-0 shadow-md max-w-[32%] order-3">
                          <h3 className="text-[36px] font-extrabold mb-2 leading-tight text-gray-900">डा. सविता ओझा</h3>
                          <p className="text-[22px] text-primary-600 font-bold mb-2 leading-tight">प्रसूति, स्त्रीरोग, गुदा रोग</p>
                          <p className="text-[16px] text-gray-800 font-bold leading-tight mb-2">कॉस्मेटोलॉजी एवं पंचकर्म विशेषज्ञ</p>
                          <p className="text-[14px] text-gray-700 font-semibold leading-relaxed">बी.ए.एम.एस., सी.जी.ओ.<br/>प्रसूति विभाग, आई.एम.एस. बी.एच.यू., वाराणसी</p>
                      </motion.div>
                  </div>

                  {/* Buttons at bottom */}
                  <motion.div variants={itemVariants} className="w-full flex justify-center pb-4 z-30 pointer-events-auto mt-6">
                      <button 
                         className="btn-primary flex items-center justify-center gap-3 text-[24px] px-[48px] py-[20px] rounded-[24px] shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] active:scale-95 transition-all font-bold transform hover:-translate-y-1"
                         onClick={(e) => { 
                              e.stopPropagation(); 
                              window.dispatchEvent(new CustomEvent('openCallModal')); 
                         }}
                      >
                         <Phone className="w-6 h-6 animate-pulse" />
                         <span>Book Appointment</span>
                      </button>
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div 
                  key={slide.id}
                  className="w-full max-w-[85%] flex flex-col items-start h-full"
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {slide.badge && (
                    <motion.div variants={itemVariants} className="inline-block px-[18px] py-[6px] rounded-full bg-primary-50 text-[14px] font-semibold mb-[18px] border-primary-100 shadow-sm backdrop-blur-sm pointer-events-auto uppercase tracking-wider">
                      {slide.badge}
                    </motion.div>
                  )}
                  
                  {slide.titleLine1 && (
                    <motion.h1 
                      variants={itemVariants} 
                      className={`font-extrabold text-gray-900 tracking-normal mb-[18px] drop-shadow-sm pointer-events-auto ${slide.id === 3 ? 'text-[32px] leading-[1.4]' : 'text-[42px] leading-[1.2]'}`}
                    >
                      {slide.titleLine1} <br className="block" />
                      <span className={`text-primary-600 bg-white/40 px-2 py-1 rounded-lg backdrop-blur-sm inline-block mt-[6px] ${slide.id === 3 ? 'text-[24px] leading-[1.4]' : 'text-[33px] leading-tight'}`}>
                        {slide.titleLine2}
                      </span>
                    </motion.h1>
                  )}
                  
                  {slide.subtitle && (
                    <motion.p variants={itemVariants} className={`mb-[24px] max-w-[90%] leading-snug font-medium drop-shadow-sm bg-white/80 p-[18px] rounded-[16px] backdrop-blur-sm shadow-sm block pointer-events-auto ${slide.id === 3 ? 'text-[22px]' : 'text-[19px]'}`}>
                      {slide.subtitle}
                    </motion.p>
                  )}

                  {/* Spacer to push buttons down since text is now in image, ONLY if there is text */}
                  {(slide.titleLine1 || slide.subtitle) && (
                    <div className="flex-grow min-h-[36px]"></div>
                  )}
                  
                  <motion.div variants={itemVariants} className={`flex flex-row flex-nowrap gap-[18px] w-auto pointer-events-auto ${(!slide.titleLine1 && !slide.subtitle) ? 'absolute bottom-[24px] left-[48px] z-30' : 'mt-[16px]'}`}>
                    
                    {slide.btn1Text && (
                      <button 
                        className="btn-primary flex flex-none items-center justify-center gap-[9px] text-[20px] px-[36px] py-[16px] rounded-[16px] shadow-xl hover:shadow-2xl active:scale-95 transition-all w-auto whitespace-nowrap min-w-max font-bold"
                        onClick={(e) => { 
                          e.stopPropagation(); 
                          if (slide.btn1Text.includes("Book") || slide.btn1Text.includes("Call")) {
                            window.dispatchEvent(new CustomEvent('openCallModal'));
                          } else {
                            handleSlideClick(slide.id); 
                          }
                        }}
                      >
                        {slide.btn1Icon && React.cloneElement(slide.btn1Icon, { className: "w-[24px] h-[24px] shrink-0" })}
                        <span>{slide.btn1Text}</span>
                      </button>
                    )}

                    {slide.btn2Text && (
                      <button 
                        className="btn-secondary flex flex-none items-center justify-center gap-[9px] group text-[20px] px-[36px] py-[16px] rounded-[16px] shadow-md hover:shadow-lg active:scale-95 transition-all w-auto whitespace-nowrap min-w-max font-bold"
                        onClick={(e) => { e.stopPropagation(); handleSlideClick(slide.id); }}
                      >
                        {slide.btn2Text === "WhatsApp Now" ? (
                          <MessageSquare size={24} className="w-[24px] h-[24px] text-green-500 group-hover:scale-110 transition-transform shrink-0" />
                        ) : (
                          <ChevronRight className="w-[24px] h-[24px] text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-transform shrink-0" />
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
          <div className="absolute bottom-[24px] right-[24px] flex items-center gap-[12px] z-30 pointer-events-auto">
            {slides.map((_, idx) => (
              <button 
                key={idx}
                onClick={(e) => { e.stopPropagation(); setCurrentSlide(idx); }}
                className={`h-3 rounded-full transition-all duration-300 ${idx === currentSlide ? 'bg-primary-500 w-[36px]' : 'bg-white/30 hover:bg-white w-3'}`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;
