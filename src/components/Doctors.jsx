import React, { useState, useEffect } from 'react';
import { Star, X, MapPin, Clock, Shield, Award, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const doctors = [
  {
    name: "Dr. S. K. Ojha",
    specialty: "गुद (मलद्वार) रोग विशेषज्ञ",
    experience: "15+ years",
    image: "/Dr S K Ojha/profile.jpeg",
    description: `डॉ. संतोष कुमार ओझा एक अनुभवी आयुर्वेदिक चिकित्सक एवं गुदा रोग विशेषज्ञ हैं। उन्हें पाइल्स (बवासीर), फिस्टुला (भगन्दर), फिशर तथा अन्य गुदा रोगों के उपचार में कई वर्षों का अनुभव है।
    
डॉ. ओझा आयुर्वेद की प्राचीन एवं प्रभावी क्षारसूत्र चिकित्सा पद्धति के विशेषज्ञ हैं, जिसके माध्यम से बिना बड़े ऑपरेशन के जटिल गुदा रोगों का सफल इलाज किया जाता है।

डॉ. ओझा ने आयुर्वेद चिकित्सा में उच्च शिक्षा प्राप्त की है और अनेक राष्ट्रीय एवं अंतरराष्ट्रीय चिकित्सा सम्मेलनों (Medical Conferences) में भाग लेकर अपने ज्ञान को निरंतर अपडेट करते रहते हैं। वे मरीजों की समस्या को ध्यानपूर्वक समझकर उन्हें सुरक्षित, प्रभावी एवं व्यक्तिगत उपचार प्रदान करते हैं।

उनका मुख्य उद्देश्य मरीजों को कम समय में बेहतर स्वास्थ्य लाभ प्रदान करना तथा आयुर्वेदिक चिकित्सा के माध्यम से रोगों का स्थायी समाधान देना है।`,
    
    education: `बी.ए.एम.एस., पी.जी. डिप के. के. (क्षारकर्म)
शल्यतन्त्र विभाग, आई.एम.एस. बी.एच.यू., (वाराणसी)
डिप इन योग, बी.एच.यू. डिस्ट्रिक कन्सलटेन्ट (क्यू.ए.)
CMO. कार्यालय, महराजगंज
रजि. नं. - 50468 (उ.प्र.)`,
    expertise: ["Piles (Hemorrhoids)", "Fistula-in-ano", "Fissure", "Pilonidal Sinus", "Anorectal disorders"],
    gallery: [
      "/Dr S K Ojha/image1.jpeg",
      "/Dr S K Ojha/image2.jpeg",
      "/Dr S K Ojha/image3.jpeg",
      "/Dr S K Ojha/image4.jpeg",
      "/Dr S K Ojha/image5.jpeg",
      "/Dr S K Ojha/image6.jpeg",
      "/Dr S K Ojha/image7.jpeg",
      "/Dr S K Ojha/image8.jpeg",
      "/Dr S K Ojha/image9.jpeg",
      "/Dr S K Ojha/image10.jpeg",
      "/Dr S K Ojha/image11.jpeg",
      "/Dr S K Ojha/image12.jpeg",
      "/Dr S K Ojha/image13.jpeg",
      "/Dr S K Ojha/image14.jpeg",
      "/Dr S K Ojha/image15.jpeg",
      "/Dr S K Ojha/image16.jpeg",
      "/Dr S K Ojha/image17.jpeg",
      "/Dr S K Ojha/image18.jpeg",
      "/Dr S K Ojha/image19.jpeg",
      "/Dr S K Ojha/image20.jpeg",
      "/Dr S K Ojha/image21.jpeg",
      "/Dr S K Ojha/image22.jpeg",
      "/Dr S K Ojha/image23.jpeg",
      "/Dr S K Ojha/image24.jpeg",
      "/Dr S K Ojha/image25.jpeg",
      "/Dr S K Ojha/image26.jpeg",
      "/Dr S K Ojha/image27.jpeg",
      "/Dr S K Ojha/image28.jpeg"
    ]
  },
  {
    name: "Dr. Savita Ojha",
    specialty: "प्रसूति, स्त्री रोग, गुदा रोग (मलद्वार), कॉस्मेटोलॉजी, ट्राइकोलॉजी एवं पंचकर्म विशेषज्ञ",
    experience: "15+ years",
    image: "/Dr Savita/profile.jpeg",
    description: `डॉ. सविता ओझा एक कुशल एवं अनुभवी आयुर्वेदिक चिकित्सक हैं। उन्हें स्त्री रोग, त्वचा रोग, गुदा रोग एवं सामान्य स्वास्थ्य समस्याओं के आयुर्वेदिक उपचार में विशेष अनुभव प्राप्त है।

वे मरीजों की स्वास्थ्य स्थिति का गहराई से अध्ययन करके उन्हें उचित एवं प्रभावी उपचार प्रदान करती हैं।

डॉ. सविता ओझा आयुर्वेद की पारंपरिक चिकित्सा पद्धतियों को आधुनिक चिकित्सा तकनीकों के साथ जोड़कर मरीजों को बेहतर उपचार प्रदान करने के लिए जानी जाती हैं। उनका उद्देश्य मरीजों को प्राकृतिक एवं सुरक्षित तरीके से स्वस्थ बनाना है।`,
    education: `बी.ए.एम.एस., सी.जी.ओ.
प्रसूति विभाग, आई.एम.एस., बी.एच.यू., वाराणसी

सी.सी. इन पंचकर्म (केरल)
डिप्लोमा इन पंचकर्म
सी.सी.वाई.पी. (योग), बी.एच.यू.
सी.सी. इन हाइड्राफेशियल कपिंग

चिकित्साधिकारी - गोरखपुर`,
    expertise: ["Women's Health", "Panchakarma", "Cosmetology", "Trichology", "Infertility Management"],
    gallery: [
      "/Dr Savita/image1.jpeg",
      "/Dr Savita/image2.jpeg",
      "/Dr Savita/image3.jpeg",
      "/Dr Savita/image4.jpeg",
      "/Dr Savita/image5.jpeg",
      "/Dr Savita/image6.jpeg",
      "/Dr Savita/image7.jpeg",
      "/Dr Savita/image8.jpeg",
      "/Dr Savita/image9.jpeg",
      "/Dr Savita/image10.jpeg",
      "/Dr Savita/image11.jpeg",
      "/Dr Savita/image12.jpeg",
      "/Dr Savita/image13.jpeg",
      "/Dr Savita/image14.jpeg",
      "/Dr Savita/image15.jpeg",
      "/Dr Savita/image16.jpeg",
      "/Dr Savita/image17.jpeg",
      "/Dr Savita/image18.jpeg",
      "/Dr Savita/image19.jpeg",
      "/Dr Savita/image20.jpeg",
      "/Dr Savita/image21.jpeg",
      "/Dr Savita/image22.jpeg",
      "/Dr Savita/image23.jpeg",
      "/Dr Savita/image24.jpeg"
    ]
  }
];

const Doctors = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openProfile = (doctor) => {
    setSelectedDoctor(doctor);
    document.body.style.overflow = 'hidden';
  };

  const closeProfile = () => {
    setSelectedDoctor(null);
    document.body.style.overflow = 'auto';
  };

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
  };

  const closeLightbox = () => {
    setSelectedImageIndex(null);
  };

  const showNextImage = (e) => {
    if (e) e.stopPropagation();
    if (selectedDoctor) {
      setSelectedImageIndex((prev) => (prev + 1) % selectedDoctor.gallery.length);
    }
  };

  const showPrevImage = (e) => {
    if (e) e.stopPropagation();
    if (selectedDoctor) {
      setSelectedImageIndex((prev) => (prev === 0 ? selectedDoctor.gallery.length - 1 : prev - 1));
    }
  };

  // Keyboard navigation for lightbox & closing modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedImageIndex !== null) {
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') showNextImage();
        if (e.key === 'ArrowLeft') showPrevImage();
      } else if (selectedDoctor !== null) {
        if (e.key === 'Escape') closeProfile();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    // Event listener for opening a doctor profile specifically from other components (like Hero)
    const handleOpenDoctorProfile = (e) => {
      const idx = e.detail;
      if (doctors[idx]) {
        openProfile(doctors[idx]);
      }
    };
    window.addEventListener('openDoctorProfile', handleOpenDoctorProfile);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('openDoctorProfile', handleOpenDoctorProfile);
    };
  }, [selectedImageIndex, selectedDoctor]);

  return (
    <section id="doctors" className="section-padding bg-background w-full">
      <div className="container-custom">
        <h2 className="heading-2">Our Doctors</h2>
        <div className="w-20 h-1.5 bg-primary-500 rounded-full mb-10"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12">
          {doctors.map((doc, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl shadow-soft border border-gray-100 p-6 md:p-10 flex flex-col hover:-translate-y-1 hover:shadow-card transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-8 text-center md:text-left">
                <div className="relative">
                  <img 
                    src={doc.image} 
                    alt={doc.name} 
                    className="w-32 h-32 md:w-36 md:h-36 rounded-2xl object-cover shadow-lg border-4 border-primary-50"
                  />
                  <div className="absolute -bottom-3 -right-3 bg-white p-2 rounded-xl shadow-md">
                    <Shield className="w-6 h-6 text-primary-500" />
                  </div>
                </div>
                <div className="flex-1 mt-2">
                  <h4 className="font-bold text-2xl md:text-3xl text-gray-900 leading-tight mb-2">{doc.name}</h4>
                  <p className="text-primary-600 font-semibold text-lg mb-4">{doc.specialty}</p>
                  <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
                    <div className="flex text-yellow-400 bg-yellow-50 px-3 py-1.5 rounded-xl">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={16} fill="currentColor" />
                      ))}
                    </div>
                    <span className="text-sm font-bold text-gray-700 bg-gray-100 px-4 py-1.5 rounded-xl flex items-center gap-2">
                      <Award size={16} className="text-primary-500"/>
                      {doc.experience} Experience
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4 mb-8">
                <h5 className="font-bold text-gray-900 flex items-center gap-2">
                  <Clock size={16} className="text-primary-500" /> Professional Background
                </h5>
                <p className="text-gray-600 leading-relaxed text-[15px] md:text-base whitespace-pre-line">
                  {doc.description.split('\n\n').slice(0, 2).join('\n\n')}
                  {doc.description.split('\n\n').length > 2 && " ..."}
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => openProfile(doc)}
                  className="flex-1 btn-primary py-4 text-base rounded-2xl font-bold shadow-soft hover:shadow-lg active:scale-[0.98] transition-all flex items-center justify-center gap-2"
                >
                  View Full Gallery & Cases
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Doctor Profile Modal */}
      <AnimatePresence>
        {selectedDoctor && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-6"
            onClick={closeProfile}
          >
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={closeProfile}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 bg-gray-100/80 hover:bg-gray-200 rounded-full text-gray-600 transition-colors z-10 hidden md:block"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex-1 overflow-y-auto hide-scrollbar">
                {/* Mobile Close */}
                <div className="md:hidden sticky top-0 left-0 right-0 p-4 flex justify-between items-center z-10 bg-white/80 backdrop-blur-md border-b border-gray-100">
                  <span className="font-bold text-gray-900">Doctor Profile</span>
                  <button onClick={closeProfile} className="p-2 bg-gray-100 rounded-full text-gray-800 active:scale-95 transition-transform">
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="p-5 md:p-10 flex flex-col md:flex-row gap-8 md:gap-12">
                  {/* Left Column: Image & Quick Info */}
                  <div className="md:w-1/3 flex flex-col items-center md:items-start text-center md:text-left shrink-0">
                    <div className="relative mb-6 group w-48 h-48 md:w-full md:h-auto md:aspect-square">
                      <img 
                        src={selectedDoctor.image} 
                        alt={selectedDoctor.name} 
                        className="w-full h-full object-cover rounded-3xl shadow-lg border-4 border-white relative z-10"
                      />
                      <div className="absolute inset-0 rounded-3xl border-4 border-primary-500/20 transform rotate-3 z-0 transition-transform group-hover:rotate-6"></div>
                    </div>
                    
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedDoctor.name}</h3>
                    <p className="text-xl text-primary-600 font-medium mb-4">{selectedDoctor.specialty}</p>
                    
                    <div className="w-full space-y-3 bg-gray-50 p-5 rounded-2xl text-left">
                      <div className="flex items-center gap-3 text-gray-700 font-medium">
                        <Award className="text-primary-500 w-5 h-5 flex-shrink-0" />
                        <span>{selectedDoctor.experience} Experience</span>
                      </div>
                    
                      <div className="flex items-center gap-3 text-gray-700 font-medium">
                        <MapPin className="text-primary-500 w-5 h-5 flex-shrink-0" />
                        <span>Kalash Chikitsalaya</span>
                      </div>
                    </div>
                    
                    <button onClick={closeProfile} className="mt-8 w-full btn-primary py-3 rounded-xl md:hidden">
                      Close Profile
                    </button>
                  </div>
 
                  {/* Right Column: Details & Gallery */}
                  <div className="md:w-2/3 flex flex-col">
                    <div className="mb-8">
                      <h4 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                        About Dr. {selectedDoctor.name.split(' ').pop()}
                      </h4>
                      <p className="text-gray-600 leading-relaxed text-base md:text-lg whitespace-pre-line">
                        {selectedDoctor.description}
                      </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6 mb-10">
                      <div className="bg-primary-50/50 p-6 rounded-2xl border border-primary-100/50">
                        <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <Award className="w-5 h-5 text-primary-600" /> Education
                        </h5>
                        <p className="text-gray-700 whitespace-pre-line">{selectedDoctor.education}</p>
                      </div>
                      
                      <div className="bg-primary-50/50 p-6 rounded-2xl border border-primary-100/50">
                        <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
                          <Shield className="w-5 h-5 text-primary-600" /> Key Expertise
                        </h5>
                        <ul className="text-gray-700 space-y-2">
                          {selectedDoctor.expertise.map((item, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <span className="text-primary-500 mt-0.5 font-bold">•</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Doctor's Gallery Section */}
                    <div className="mt-8 border-t border-gray-100 pt-8">
                      <div className="flex items-center justify-between mb-6">
                        <h4 className="text-2xl font-bold text-gray-900">Gallery & Clinical Cases</h4>
                        <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {selectedDoctor.gallery.length} Images
                        </span>
                      </div>
                      
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[160px] md:auto-rows-[180px]">
                        {selectedDoctor.gallery.map((src, index) => (
                          <div 
                            key={index}
                            onClick={() => openLightbox(index)}
                            className="relative rounded-2xl overflow-hidden cursor-pointer group shadow-sm bg-gray-100 border border-gray-100"
                          >
                            <img 
                              src={src} 
                              alt={`${selectedDoctor.name} gallery ${index + 1}`} 
                              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-primary-900/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                               <div className="bg-white/20 backdrop-blur-md p-3 rounded-full transform scale-50 group-hover:scale-100 transition-transform duration-500">
                                 <Maximize2 className="text-white w-6 h-6" />
                               </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox / Modal for Doctor's Gallery */}
      <AnimatePresence>
        {selectedDoctor && selectedImageIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            {/* Top Bar */}
            <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center text-white/70 z-10">
              <span className="text-sm font-medium tracking-wider">
                {selectedImageIndex + 1} / {selectedDoctor.gallery.length}
              </span>
              <button 
                onClick={closeLightbox}
                className="p-2 hover:bg-white/10 rounded-full transition-colors group text-white/70 hover:text-white"
              >
                <X className="w-6 h-6 group-hover:rotate-90 transition-transform duration-300" />
              </button>
            </div>

            {/* Prev Button */}
            <button 
              onClick={showPrevImage}
              className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all z-10 hidden md:block"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Main Image */}
            <motion.div 
              key={selectedImageIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="relative w-full h-full max-w-5xl max-h-[85vh] p-4 flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedDoctor.gallery[selectedImageIndex]} 
                alt={`${selectedDoctor.name} gallery view ${selectedImageIndex + 1}`} 
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </motion.div>

            {/* Next Button */}
            <button 
              onClick={showNextImage}
              className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 p-3 text-white/70 hover:text-white hover:bg-white/10 rounded-full transition-all z-10 hidden md:block"
            >
              <ChevronRight className="w-8 h-8" />
            </button>
            
            {/* Mobile Controls */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center space-x-6 md:hidden z-10" onClick={(e) => e.stopPropagation()}>
               <button onClick={showPrevImage} className="p-3 text-white bg-white/10 rounded-full backdrop-blur-md active:bg-white/20"><ChevronLeft className="w-6 h-6" /></button>
               <button onClick={showNextImage} className="p-3 text-white bg-white/10 rounded-full backdrop-blur-md active:bg-white/20"><ChevronRight className="w-6 h-6" /></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Doctors;
