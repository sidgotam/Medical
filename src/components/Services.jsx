import React, { useState, useRef } from 'react';
import { Stethoscope, Activity, Hospital, Image as ImageIcon, Calendar } from 'lucide-react';

const services = [
  {
    title: "Doctor Consultation",
    description: "Consult experienced doctors for proper diagnosis and treatment.",
    icon: <Stethoscope size={32} className="text-primary-500" />,
    link: "#doctors"
  },
  {
    title: "Disease Information",
    description: "Detailed information about common diseases, symptoms and precautions.",
    icon: <Activity size={32} className="text-primary-500" />,
    link: "#disease-info"
  },
  {
    title: "Facilities",
    description: "Modern hospital facilities including OPD, diagnostics and treatment rooms.",
    icon: <Hospital size={32} className="text-primary-500" />,
    link: "#facilities"
  },
  {
    title: "Gallery",
    description: "Explore our hospital infrastructure and facilities through images.",
    icon: <ImageIcon size={32} className="text-primary-500" />,
    link: "#gallery"
  }
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / (offsetWidth * 0.3)); // 3 cards ~30%
      setActiveIndex(index);
    }
  };

  return (
    <section id="services" className="py-[4vw] md:py-[4vw] bg-white relative z-10 -mt-10 md:-mt-16 rounded-t-[3rem] shadow-sm border-t border-gray-100 overflow-hidden">
      <div className="max-w-container mx-auto px-[4vw] md:px-[2vw]">
        <div className="flex flex-row items-center justify-between mb-6 md:mb-[1.5vw] bg-white p-4 md:p-[1.5vw] rounded-2xl md:rounded-[1vw] shadow-sm border border-gray-100">
          <div className="shrink">
            <h2 className="text-lg md:text-[2.2vw] font-bold text-gray-900 leading-tight">Our Key Services</h2>
            <p className="text-xs md:text-[1.1vw] text-gray-600 block">Comprehensive care for your family</p>
          </div>
          <button 
            className="btn-primary space-x-2 md:space-x-[0.5vw] shadow-md text-xs md:text-[1.4vw] px-4 py-2 md:px-[1.5vw] md:py-[0.8vw] h-auto shrink-0 whitespace-nowrap"
            onClick={() => window.dispatchEvent(new CustomEvent('openCallModal'))}
          >
            <Calendar className="w-4 h-4 md:w-[1.8vw] md:h-[1.8vw]" />
            <span>Book Appointment</span>
          </button>
        </div>
        
        <div className="relative">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex md:grid md:grid-cols-4 gap-3 md:gap-[2vw] overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 -mx-[4vw] md:mx-0 px-[4vw] md:px-0 snap-x snap-mandatory scrollbar-hide"
          >
            {services.map((service, index) => (
              <a 
                key={index}
                href={service.link}
                className="min-w-[28vw] md:min-w-0 bg-white rounded-xl md:rounded-[1vw] p-3 md:p-[1.5vw] border border-gray-100 shadow-soft hover:shadow-card md:hover:-translate-y-1 transition-all duration-300 group text-center flex flex-col items-center cursor-pointer outline-none snap-center"
              >
                <div className="w-10 h-10 md:w-[5vw] md:h-[5vw] rounded-lg md:rounded-[1vw] bg-primary-50 flex items-center justify-center mb-2 md:mb-[1vw] group-hover:scale-110 group-hover:bg-primary-100 transition-all duration-300 shrink-0">
                  {React.cloneElement(service.icon, { className: "w-5 h-5 md:w-[2.5vw] md:h-[2.5vw] text-primary-500" })}
                </div>
                <h3 className="text-[10px] md:text-[1.6vw] font-bold text-gray-900 mb-1 md:mb-[0.5vw] group-hover:text-primary-500 transition-colors leading-tight line-clamp-2 md:line-clamp-none h-6 md:h-auto">{service.title}</h3>
                <p className="hidden md:block text-gray-600 leading-tight text-[1.1vw]">
                  {service.description}
                </p>
              </a>
            ))}
          </div>

          {/* Mobile Dot Indicators */}
          <div className="flex md:hidden justify-center gap-2 mt-2">
            {services.map((_, idx) => (
              <div 
                key={idx} 
                className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'bg-primary-500 w-4' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
