import React, { useState, useEffect } from 'react';
import { X, Maximize2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const allImages = [
  "/Dr S K Ojha/image1.jpeg", "/Dr S K Ojha/image2.jpeg", "/Dr S K Ojha/image3.jpeg", "/Dr S K Ojha/image4.jpeg",
  "/Dr S K Ojha/image5.jpeg", "/Dr S K Ojha/image6.jpeg", "/Dr S K Ojha/image7.jpeg", "/Dr S K Ojha/image8.jpeg",
  "/Dr S K Ojha/image9.jpeg", "/Dr S K Ojha/image10.jpeg", "/Dr S K Ojha/image11.jpeg", "/Dr S K Ojha/image12.jpeg",
  "/Dr S K Ojha/image13.jpeg", "/Dr S K Ojha/image14.jpeg", "/Dr S K Ojha/image15.jpeg", "/Dr S K Ojha/image16.jpeg",
  "/Dr S K Ojha/image17.jpeg", "/Dr S K Ojha/image18.jpeg", "/Dr S K Ojha/image19.jpeg", "/Dr S K Ojha/image20.jpeg",
  "/Dr S K Ojha/image21.jpeg", "/Dr S K Ojha/image22.jpeg", "/Dr S K Ojha/image23.jpeg", "/Dr S K Ojha/image24.jpeg",
  "/Dr S K Ojha/image25.jpeg", "/Dr S K Ojha/image26.jpeg", "/Dr S K Ojha/image27.jpeg", "/Dr S K Ojha/image28.jpeg",
  "/Dr Savita/image1.jpeg", "/Dr Savita/image2.jpeg", "/Dr Savita/image3.jpeg", "/Dr Savita/image4.jpeg",
  "/Dr Savita/image5.jpeg", "/Dr Savita/image6.jpeg", "/Dr Savita/image7.jpeg", "/Dr Savita/image8.jpeg",
  "/Dr Savita/image9.jpeg", "/Dr Savita/image10.jpeg", "/Dr Savita/image11.jpeg", "/Dr Savita/image12.jpeg",
  "/Dr Savita/image13.jpeg", "/Dr Savita/image14.jpeg", "/Dr Savita/image15.jpeg", "/Dr Savita/image16.jpeg",
  "/Dr Savita/image17.jpeg", "/Dr Savita/image18.jpeg", "/Dr Savita/image19.jpeg", "/Dr Savita/image20.jpeg",
  "/Dr Savita/image21.jpeg", "/Dr Savita/image22.jpeg", "/Dr Savita/image23.jpeg", "/Dr Savita/image24.jpeg"
];

const Gallery = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState(null); // Optional: if they click grid image inside modal? It wasn't in screenshot, but good to have or not. I will just stick to screenshot.

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  };

  // Keyboard escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const displayImages = allImages.slice(0, 4);

  return (
    <section id="gallery" className="py-20 bg-white w-full">
      <div className="container-custom mx-auto px-4 md:px-6">
        
        {/* Header section matching screenshot */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-[42px] font-bold text-[#0B1B3D] mb-4">Our Image Gallery</h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed">
            Take a look at our state-of-the-art facilities and comfortable environment
            designed for your fastest recovery.
          </p>
        </div>
        
        {/* 4 Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[250px] mb-12">
          {displayImages.map((src, index) => (
            <div 
              key={index}
              className="relative rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow cursor-pointer"
              onClick={openModal}
            >
              <img 
                src={src} 
                alt={`Hospital Gallery ${index + 1}`} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
        
        {/* View All Button matching screenshot */}
        <div className="flex justify-center">
          <button 
            onClick={openModal}
            className="bg-[#1A365D] text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-[#0B1B3D] transition-colors shadow-md hover:shadow-lg active:scale-95 transform duration-200"
          >
            View All Images
          </button>
        </div>

      </div>

      {/* Grid Modal matching screenshot */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 md:p-6"
            onClick={closeModal}
          >
            <motion.div 
              initial={{ y: 50, opacity: 0, scale: 0.95 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              exit={{ y: 50, opacity: 0, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-white rounded-[24px] shadow-2xl w-full max-w-6xl max-h-[90vh] flex flex-col relative overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              
              {/* Modal Header */}
              <div className="flex justify-between items-center px-8 py-6 border-b border-gray-100 shrink-0">
                <h3 className="text-3xl md:text-4xl font-bold text-[#0B1B3D]">
                  Complete Image Gallery
                </h3>
                <button 
                  onClick={closeModal}
                  className="p-2 bg-gray-50 hover:bg-gray-100 rounded-full text-gray-500 hover:text-[#0B1B3D] transition-colors"
                >
                  <X className="w-7 h-7" />
                </button>
              </div>

              {/* Modal Scrollable Content */}
              <div className="flex-1 overflow-y-auto p-8 custom-scrollbar">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[200px]">
                  {allImages.map((src, index) => (
                    <div 
                      key={index} 
                      className="rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow group relative cursor-pointer"
                      onClick={() => setLightboxImage(src)}
                    >
                      <img 
                        src={src} 
                        alt={`Gallery Item ${index + 1}`} 
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Maximize2 className="text-white w-8 h-8 drop-shadow-md transform scale-50 group-hover:scale-100 transition-transform duration-300" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Individual Image Lightbox inside Modal (Bonus UX) */}
      <AnimatePresence>
        {lightboxImage && (
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
             onClick={() => setLightboxImage(null)}
           >
              <button 
                onClick={() => setLightboxImage(null)}
                className="absolute top-6 right-6 p-2 text-white/50 hover:text-white rounded-full bg-white/5 hover:bg-white/10 transition-colors"
              >
                <X className="w-8 h-8" />
              </button>
              <motion.img 
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                src={lightboxImage} 
                alt="Enlarged gallery view" 
                className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              />
           </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Gallery;
