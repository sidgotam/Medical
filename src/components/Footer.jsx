import React from 'react';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800 text-white pt-16 pb-8 font-sans">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 mb-16">
          
          {/* Brand Col */}
          <div className="lg:col-span-1">
            <div 
              onClick={() => window.location.href = "/"}
              className="flex items-center gap-3 mb-6 cursor-pointer"
            >
              <img src="/Images/KalashLogo.png" alt="Logo" className="w-12 h-12 md:w-16 md:h-16 object-contain" />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-tight">Kalash</span>
                <span className="text-sm font-medium text-gray-400 leading-tight">Chikitsalaya</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Sushruta Ksharsutra & Panchakarma Research Center. Providing accessible, affordable, and holistic Ayurvedic healthcare since 2010.
            </p>
          </div>

          {/* Contact Info Col */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 font-sans">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex gap-3 text-gray-400 text-sm">
                <MapPin size={20} className="text-primary-500 flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  बुद्ध विहार, पार्ट-B, निकट सिद्धि विनायक ट्रेडर्स, चिड़ियाघर से 500 मीटर पहले, <br className="hidden md:block"/>
                  D-100 भगत चौराहा से 800 मीटर पूरब, मेन देवरिया बाईपास रोड, तारामण्डल गोरखपुर
                </span>
              </li>
              <li className="flex gap-3 text-gray-400 text-sm">
                <Phone size={20} className="text-primary-500 flex-shrink-0" />
                <span>7607131682 / 05514000536</span>
              </li>
               <li className="flex gap-3 text-gray-400 text-sm">
                 <Mail size={20} className="text-primary-500 flex-shrink-0" />
                 <span>chikitsalayakalash@gmail.com</span>
               </li>
            </ul>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6 font-sans">Quick Links</h4>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Our Doctors', 'Services', 'Contact'].map((link, idx) => (
                <li key={idx}>
                  <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-700 group-hover:bg-primary-500 transition-colors"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Map Col - Custom Header Style */}
          <div className="md:col-span-1 lg:col-span-1 space-y-4">
            <h4 className="text-lg font-bold text-white mb-6 font-sans">Our Maps</h4>
            
            <div className="space-y-4">
              {/* Hand-drawn Route Map - Stacked */}
              <div className="rounded-2xl overflow-hidden bg-white/5 border border-gray-800 p-2 group relative h-48 shadow-lg">
                <img 
                  src="/Images/Map.png" 
                  alt="Official Route Map" 
                  className="w-full h-full object-contain rounded-xl transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute top-3 right-3 bg-primary-600 text-white text-[8px] font-black px-2 py-0.5 rounded-full pointer-events-none">
                  ROUTE MAP
                </div>
              </div>

              {/* Interactive Iframe - Stacked */}
              <div className="rounded-2xl overflow-hidden border border-gray-800 bg-gray-900 group h-40 shadow-lg">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14255.612457732892!2d83.39866!3d26.715542000000003!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39914393c4288c99%3A0x612d8425332a85a5!2sKALASH%20CHIKITSALAYA!5e0!3m2!1sen!2sin!4v1774589116113!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                ></iframe>
              </div>
            </div>
          </div>
          
        </div>

        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-xs text-gray-500">
          <p>&copy; {new Date().getFullYear()} Kalash Chikitsalaya. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
