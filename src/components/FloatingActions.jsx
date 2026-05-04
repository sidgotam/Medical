import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, FileText, X, Plus } from 'lucide-react';

const FloatingActions = () => {
  const phoneNumber = "918052552950";
  const message = "Hello! I'm interested in booking an appointment or learning more about your services.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const googleFormUrl = "https://forms.gle/JwBEXAoKKhag8xZo9";

  const openForm = () => {
    window.open(googleFormUrl, '_blank');
  };

  const openCallModal = () => {
    window.dispatchEvent(new CustomEvent('openCallModal'));
  };

  const actionButtons = [
    {
      id: 'whatsapp',
      icon: <MessageCircle size={24} className="fill-current" />,
      label: 'WhatsApp',
      color: 'bg-[#25D366]',
      hoverColor: 'hover:bg-[#128C7E]',
      onClick: () => window.open(whatsappUrl, '_blank'),
      aria: 'Chat on WhatsApp'
    },
    {
      id: 'call',
      icon: <Phone size={24} />,
      label: 'Call Us',
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
      onClick: openCallModal,
      aria: 'Call us'
    },
    {
      id: 'form',
      icon: <FileText size={24} />,
      label: 'Book Now',
      color: 'bg-primary-500',
      hoverColor: 'hover:bg-primary-600',
      onClick: openForm,
      aria: 'Open appointment form'
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end gap-3">
      {actionButtons.map((btn, index) => (
        <motion.button
          key={btn.id}
          initial={{ opacity: 0, scale: 0.5, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          onClick={btn.onClick}
          className={`${btn.color} ${btn.hoverColor} text-white p-4 rounded-full shadow-2xl flex items-center justify-center group relative`}
          aria-label={btn.aria}
        >
          <div className="absolute right-full mr-4 bg-gray-900/80 backdrop-blur-md text-white text-xs font-bold px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {btn.label}
          </div>
          {btn.icon}
          {btn.id === 'whatsapp' && (
            <span className="absolute -top-1 -right-1 flex h-5 w-5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-white flex items-center justify-center text-[10px] text-green-600 font-bold">
                3
              </span>
            </span>
          )}
        </motion.button>
      ))}
    </div>
  );
};

export default FloatingActions;
