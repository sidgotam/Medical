import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Phone, Calendar, MessageSquare, Clock } from 'lucide-react';

const CallModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => {
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    };
    window.addEventListener('openCallModal', handleOpen);

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('openCallModal', handleOpen);
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = '';
  };

  const contactNumbers = [
    { label: "Phone Line 1", number: "+917607131682", display: "+91 76071 31682", icon: <Phone className="text-emerald-500" /> },
    { label: "Phone Line 2", number: "05514000536", display: "0551 400 0536", icon: <Phone className="text-blue-500" /> }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Overlay */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-sm mx-4 bg-white rounded-[1.5rem] shadow-2xl overflow-hidden border border-gray-100"
          >
            {/* Header */}
            <div className="bg-primary-500 p-5 sm:p-6 text-white relative">
              <button 
                onClick={closeModal}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 hover:bg-white/20 rounded-full transition-colors"
              >
                <X size={20} />
              </button>
              <div className="flex items-center gap-3 sm:gap-4 mb-1">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-[1rem] bg-white/20 flex items-center justify-center shrink-0">
                  <Calendar size={24} />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold leading-tight">Book Appointment</h3>
                  <p className="text-primary-100 text-xs sm:text-sm">Choose a number to call us now</p>
                </div>
              </div>
            </div>

            {/* Body */}
            <div className="p-5 sm:p-6 space-y-3 sm:space-y-4">
              {contactNumbers.map((contact, idx) => (
                <a 
                  key={idx}
                  href={`tel:${contact.number}`}
                  className="flex items-center justify-between p-3 sm:p-4 rounded-xl sm:rounded-[1rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-md hover:border-primary-100 transition-all group"
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform shrink-0">
                      {React.cloneElement(contact.icon, { size: 18 })}
                    </div>
                    <div>
                      <p className="text-[10px] sm:text-xs font-semibold text-gray-500 uppercase tracking-wider leading-none mb-1">{contact.label}</p>
                      <p className="text-sm sm:text-base font-bold text-gray-900 leading-none">{contact.display}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary-50 text-primary-600 flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-all shrink-0">
                    <Phone size={16} />
                  </div>
                </a>
              ))}

              <div className="pt-3 sm:pt-4 border-t border-gray-100 mt-4 sm:mt-6 text-center">
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 text-gray-500 mb-3 sm:mb-4">
                  <Clock size={14} />
                  <span className="text-xs sm:text-sm font-medium">Available 24/7 for Emergencies</span>
                </div>
                <button 
                  onClick={() => {
                    closeModal();
                    window.open('https://wa.me/919450878415', '_blank');
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2 sm:py-3 rounded-lg sm:rounded-xl border-2 border-green-500 text-green-600 text-sm sm:text-base font-bold hover:bg-green-50 transition-all"
                >
                  <MessageSquare size={18} />
                  Contact on WhatsApp
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CallModal;
