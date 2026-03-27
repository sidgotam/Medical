import React from 'react';
import { Microscope, Activity, BedDouble, Pill, Zap, Scan, Sparkles, Baby, Users, HeartPulse, Stethoscope, Droplet } from 'lucide-react';

const facilityList = [
  {
    title: "Accommodations",
    desc: "मरीजों हेतु ए.सी./कुलर रूम जनरल रूम व खाने पीने की व्यवस्था उपलब्ध।",
    icon: <BedDouble size={28} />
  },
  {
    title: "Advanced Proctology",
    desc: "क्षार सूत्र, लेजर मशीन, रबर बैंड लाइगेशन, अग्निकर्म एवं स्कलैरोथिरेपी से भगन्दर, बवासीर, परिकर्तिका (पाइल्स, फिस्टुला, फिसर) का सफल इलाज।",
    icon: <Zap size={28} />
  },
  {
    title: "Digital Diagnostics",
    desc: "मलद्वार के अन्दर मशीन द्वारा जाँच व रिपोर्ट।",
    icon: <Scan size={28} />
  },
  {
    title: "Panchakarma & Detox",
    desc: "पंचकर्म चिकित्सा से शरीर का डी-टॉक्सीफिकेशन, रसायन चिकित्सा (या शरीर का कायाकल्प) एवं प्रतिरोधक क्षमता में वृद्धि होती है।",
    icon: <Sparkles size={28} />
  },
  {
    title: "Holistic Treatments",
    desc: "क्षारसूत्र से भगन्दर, बवासीर, रबर बैंड, लाइगेशन अगिनकर्म, स्केलेरोथिरैपी तथा पंचकर्म से गठिया, सायटिका सर्वाइकल कपिंग (फायर कपिंग, वेट कपिंग, ड्राई थेरेपी) मोटापा, स्टीम बाथ, अभयंग महिलाओं के गुदारोग के लिए महिला डा. द्वारा इलाज की सुविधा उपलब्ध है एवं समस्त त्वचा सम्बन्धी रोगों का इलाज किया जाता है।",
    icon: <Stethoscope size={28} />
  },
  {
    title: "Leech Therapy",
    desc: "लीच थिरैपी द्वारा पुराने चर्म रोग एवं गंजापन की चिकित्सा।",
    icon: <Droplet size={28} />
  },
  {
    title: "Ayurvedic Vaccination",
    desc: "बच्चों के लिए स्वर्णप्राशन (आयुर्वेदिक टीकाकरण) उपलब्ध।",
    icon: <Baby size={28} />
  },
  {
    title: "Female Specialist",
    desc: "महिलाओं के गुदा (Anus) रोगों के लिए महिला डा० द्वारा इलाज की सुविधा।",
    icon: <Users size={28} />
  },
  {
    title: "Maternity Care",
    desc: "नार्मल डिलेवरी की सुविधा उपलब्ध।",
    icon: <HeartPulse size={28} />
  }
];

const Facilities = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const scrollRef = React.useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      const width = scrollRef.current.offsetWidth;
      // Calculate index based on 3 cards (approx 30vw width each)
      const index = Math.round(scrollLeft / (width / 3)); 
      setActiveIndex(index);
    }
  };

  return (
    <section id="facilities" className="py-16 md:py-24 relative bg-gray-50/50 overflow-hidden">
      <div className="container-custom px-4">
        <div className="text-center md:text-left mb-12">
          <h2 className="heading-2 mb-4">Our Facilities</h2>
          <div className="w-20 h-1.5 bg-primary-500 rounded-full mx-auto md:mx-0"></div>
        </div>
        
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="flex overflow-x-auto snap-x snap-mandatory gap-3 pb-12 px-2 -mx-2 md:grid md:grid-cols-3 lg:grid-cols-3 md:gap-8 md:pb-0 md:px-0 md:mx-0 scrollbar-hide items-stretch"
        >
          {facilityList.map((item, idx) => (
            <div 
              key={idx} 
              className="w-[31vw] md:w-auto snap-center bg-white border border-gray-100 rounded-2xl md:rounded-3xl p-2.5 md:p-8 transition-all duration-500 flex flex-col items-center text-center group shrink-0 shadow-sm hover:shadow-xl hover:-translate-y-2"
            >
              <div className="w-9 h-9 md:w-20 md:h-20 rounded-xl md:rounded-2xl bg-orange-50 text-orange-500 flex items-center justify-center mb-2.5 md:mb-6 shrink-0 group-hover:bg-primary-500 group-hover:text-white transition-all duration-500">
                {React.cloneElement(item.icon, { size: 28, className: "w-4 h-4 md:w-10 md:h-10" })}
              </div>
              <h4 className="text-[9px] md:text-xl font-bold text-gray-900 mb-2 leading-tight h-6 md:h-auto uppercase tracking-wide md:normal-case line-clamp-2 md:line-clamp-none overflow-hidden">{item.title}</h4>
              <p className="text-gray-600 text-[8px] md:text-base leading-[1.25] md:leading-relaxed flex-grow">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile Pagination Dots */}
        <div className="flex md:hidden justify-center items-center gap-2 mt-2">
          {facilityList.map((_, idx) => (
            <div 
              key={idx} 
              className={`transition-all duration-500 rounded-full ${
                activeIndex === idx 
                ? 'w-6 h-2 bg-primary-500 shadow-md shadow-primary-500/30' 
                : 'w-2 h-2 bg-gray-200'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Facilities;
