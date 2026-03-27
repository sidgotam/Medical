import React, { useState, useRef, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Play, Pause, Video, Mic, Volume2, Send, Camera, Music, Mail } from 'lucide-react';
import { motion, AnimatePresence, animate } from 'framer-motion';
import emailjs from '@emailjs/browser';

const Counter = ({ value, duration = 2, decimals = 0 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const nodeRef = useRef(null);

  useEffect(() => {
    const controls = animate(0, value, {
      duration: duration,
      onUpdate(v) {
        setDisplayValue(v.toFixed(decimals));
      },
      ease: "easeOut"
    });
    return () => controls.stop();
  }, [value, duration, decimals]);

  return <span ref={nodeRef}>{Number(displayValue).toLocaleString(undefined, { minimumFractionDigits: decimals, maximumFractionDigits: decimals })}</span>;
};

const testimonials = [
  {
    id: 1,
    type: 'video',
    name: "Rajesh Kumar",
    location: "Varanasi",
    rating: 5,
    text: "I was suffering from chronic piles for 5 years. Dr. S. K. Ojha's Ksharsutra treatment was a life-saver.",
    thumbnail: "https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&q=80&w=800",
    videoUrl: "#",
    date: "2 months ago",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Rajesh"
  },
  {
    id: 2,
    type: 'audio',
    name: "Sunita Devi",
    location: "Ghazipur",
    rating: 5,
    text: "Dr. Savita Ojha is very compassionate. Her Ayurvedic approach worked wonders.",
    audioUrl: "#",
    duration: "1:20",
    date: "1 month ago",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sunita"
  },
  {
    id: 3,
    type: 'text',
    name: "Amit Singh",
    location: "Mughalsarai",
    rating: 5,
    text: "The facilities at Kalash Chikitsalaya are top-notch. The staff is professional and the environment is very healing. I'm completely satisfied with my treatment for Fistula.",
    date: "3 weeks ago",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Amit"
  },
  {
    id: 4,
    type: 'video',
    name: "Priyanka Verma",
    location: "Varanasi",
    rating: 4,
    text: "Very effective treatment for skin issues. Modern clinic with traditional values.",
    thumbnail: "https://images.unsplash.com/photo-1594824476967-48c8b9642d3f?auto=format&fit=crop&q=80&w=800",
    videoUrl: "#",
    date: "5 months ago",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priyanka"
  }
];

const AudioPlayer = ({ url, duration }) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="bg-primary-50/50 p-2 md:p-4 rounded-xl md:rounded-2xl flex items-center gap-2 md:gap-4 border border-primary-100/50 w-full overflow-hidden">
      <button 
        onClick={() => setIsPlaying(!isPlaying)}
        className="w-8 h-8 md:w-12 md:h-12 bg-primary-500 rounded-full flex items-center justify-center text-white shadow-lg hover:bg-primary-600 transition-colors shrink-0"
      >
        {isPlaying ? <Pause size={14} /> : <Play size={14} className="ml-0.5" />}
      </button>
      <div className="flex-1 min-w-0">
        <div className="h-1 bg-primary-200 rounded-full overflow-hidden">
          <motion.div 
            animate={{ width: isPlaying ? "80%" : "20%" }}
            className="h-full bg-primary-500"
          />
        </div>
      </div>
      <span className="text-[10px] md:text-xs font-bold text-primary-600 shrink-0">{duration}</span>
    </div>
  );
};

const VideoThumb = ({ thumbnail, title }) => {
  return (
    <div className="relative aspect-video rounded-xl md:rounded-2xl overflow-hidden group cursor-pointer mb-3 md:mb-6 w-full">
      <img src={thumbnail} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
      <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
        <div className="w-10 h-10 md:w-16 md:h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 text-white transform transition-transform group-hover:scale-110">
          <Play size={18} fill="white" className="ml-0.5" />
        </div>
      </div>
    </div>
  );
};

const TestimonialCard = ({ item }) => {
  return (
    <div className="w-[82vw] sm:w-[400px] md:w-[450px] snap-center bg-white p-5 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] shadow-soft border border-gray-100 flex flex-col relative transition-all hover:shadow-card group shrink-0 overflow-hidden">
      <div className="flex justify-between items-start mb-4 md:mb-8">
        <div className="flex text-yellow-400 bg-yellow-50 px-2.5 py-0.5 md:px-3 md:py-1 rounded-full text-[10px] md:text-sm font-bold items-center gap-1 shrink-0">
          <Star size={12} fill="currentColor" />
          {item.rating}.0
        </div>
        <Quote className="w-6 h-6 md:w-12 md:h-12 text-primary-500/10 shrink-0" />
      </div>

      <div className="flex-grow min-w-0 overflow-hidden">
        {item.type === 'video' && <VideoThumb thumbnail={item.thumbnail} title={item.name} />}
        {item.type === 'audio' && <AudioPlayer duration={item.duration} />}
        
        <p className={`text-gray-700 leading-relaxed mb-4 md:mb-10 italic font-medium break-words ${item.type === 'text' ? 'text-xs md:text-xl' : 'text-xs md:text-lg mt-3 md:mt-6'}`}>
          "{item.text}"
        </p>
      </div>

      <div className="flex items-center gap-3 md:gap-4 pt-4 md:pt-10 border-t border-gray-50 mt-auto min-w-0">
        <img 
          src={item.image} 
          alt={item.name} 
          className="w-10 h-10 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-primary-50 border-2 border-white shadow-sm object-cover shrink-0"
        />
        <div className="min-w-0">
          <h4 className="font-bold text-gray-900 text-xs md:text-xl leading-tight truncate">{item.name}</h4>
          <p className="text-gray-500 text-[10px] md:text-base font-medium truncate">{item.location}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleEmailSubmit = (e) => {
    e.preventDefault();
    const form = e.target.closest('form');
    const name = form?.querySelector('input[placeholder="Full Name"]')?.value || "";
    const location = form?.querySelector('input[placeholder="Location"]')?.value || "";
    const feedback = form?.querySelector('textarea')?.value || "";
    
    if (!name || !feedback) {
      alert("Please enter at least your name and feedback.");
      return;
    }

    setIsSubmitting(true);

    const templateParams = {
      from_name: name,
      location: location,
      message: feedback,
      reply_to: "chikitsalayakalash@gmail.com"
    };

    const serviceID = 'service_bpkw49l';
    const templateID = 'template_testimonials';
    const publicKey = 'jRPvn2TmKAP5a-HS-';

    emailjs.send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert("Thank you! Your story has been received.");
        form.reset();
        setIsSubmitting(false);
      }, (err) => {
        console.error('FAILED...', err);
        const subject = encodeURIComponent(`Testimonial from ${name}`);
        const body = encodeURIComponent(`Name: ${name}\nLocation: ${location}\n\nExperience:\n${feedback}\n\n[Please attach any audio/video files]`);
        window.location.href = `mailto:chikitsalayakalash@gmail.com?subject=${subject}&body=${body}`;
        setIsSubmitting(false);
      });
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, offsetWidth } = scrollRef.current;
      const index = Math.round(scrollLeft / offsetWidth);
      if (index !== activeIndex && index >= 0 && index < testimonials.length) {
        setActiveIndex(index);
      }
    }
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = direction === 'left' ? -350 : 350;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-12 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-primary-50/50 rounded-full blur-[80px] md:blur-[120px] -z-10 translate-x-1/2 -translate-y-1/2 opacity-60"></div>
      
      <div className="container-custom overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-20 gap-6 md:gap-8 overflow-hidden">
          <div className="max-w-full md:max-w-2xl">
            <span className="text-primary-600 font-bold uppercase tracking-widest text-[10px] md:text-sm mb-2 md:mb-3 block">Soulful Journeys</span>
            <h2 className="text-2xl md:text-5xl font-black text-gray-900 leading-tight mb-3 md:mb-6 break-words">What Our Patients Say</h2>
            <div className="w-16 md:w-20 h-1 md:h-1.5 bg-gradient-to-r from-primary-500 to-primary-300 rounded-full"></div>
          </div>
          
          <div className="hidden md:flex gap-4 shrink-0">
             <button onClick={() => scroll('left')} className="p-4 bg-white border border-gray-100 rounded-2xl shadow-soft hover:shadow-lg transition-all active:scale-95 group">
               <ChevronLeft className="w-6 h-6 group-hover:-translate-x-0.5 transition-transform" />
             </button>
             <button onClick={() => scroll('right')} className="p-4 bg-white border border-gray-100 rounded-2xl shadow-soft hover:shadow-lg transition-all active:scale-95 group">
               <ChevronRight className="w-6 h-6 group-hover:translate-x-0.5 transition-transform" />
             </button>
          </div>
        </div>

        <div className="relative overflow-hidden">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex overflow-x-auto pb-8 md:pb-12 pt-2 -mx-[4vw] px-[4vw] md:mx-0 md:px-0 gap-4 md:gap-10 snap-x snap-mandatory scrollbar-hide scroll-smooth"
          >
            {testimonials.map((item) => (
              <TestimonialCard key={item.id} item={item} />
            ))}
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2.5 mt-4">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  if (scrollRef.current) {
                    const scrollAmount = idx * scrollRef.current.offsetWidth;
                    scrollRef.current.scrollTo({ left: scrollAmount, behavior: 'smooth' });
                  }
                }}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? 'bg-primary-500 w-6' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-12 md:mt-24 bg-white border border-gray-100 p-5 md:p-12 rounded-[2rem] md:rounded-[3rem] shadow-soft flex flex-col md:flex-row items-center justify-between gap-6 md:gap-10 text-center md:text-left transition-all hover:shadow-card overflow-hidden">
           <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 min-w-0">
              <div className="flex -space-x-3 md:-space-x-4 shrink-0">
                {testimonials.slice(0, 4).map((t, i) => (
                  <img key={i} src={t.image} alt="" className="w-10 h-10 md:w-16 md:h-16 rounded-full border-2 md:border-4 border-white shadow-sm bg-primary-100" />
                ))}
              </div>
              <div className="min-w-0">
                <p className="font-bold text-gray-900 text-lg md:text-3xl leading-tight truncate">
                  Trusted by <Counter value={10000} />+
                </p>
                <p className="text-gray-500 text-[10px] md:text-lg font-medium">Happy patients globally since 2010</p>
              </div>
           </div>
           <div className="flex items-center gap-3 md:gap-4 lg:pr-10 shrink-0">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" className="md:w-7 md:h-7" />)}
              </div>
              <span className="text-xl md:text-5xl font-black text-gray-900 whitespace-nowrap">
                <Counter value={4.9} decimals={1} />/5
              </span>
           </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
