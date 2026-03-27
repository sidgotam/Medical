import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  return (
    <section id="about" className="relative w-full aspect-[21/9] flex items-center justify-start overflow-hidden mt-[2vw]">
      {/* Background Image Spread Fully */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://medical-store-ashy.vercel.app/images/clinic.jpg" 
          alt="Kalash Chikitsalaya Building" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gray-900/60 z-10"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-gray-900/70 to-transparent z-10"></div>
      </div>

      <div className="container-custom relative z-20 w-full">
        <motion.div 
          className="w-full max-w-[45%] flex flex-col items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div variants={itemVariants} className="inline-block px-[1.5vw] py-[0.5vw] rounded-full bg-white/10 text-white font-medium text-[1.2vw] mb-[1vw] border border-white/20 backdrop-blur-md">
            Established 2010
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-[3.2vw] font-extrabold text-white leading-[1.1] tracking-tight mb-[1vw] drop-shadow-md">
            About Kalash <br className="hidden" />
            <span className="text-primary-400">Chikitsalaya</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-[1.6vw] text-gray-200 leading-tight mb-[1vw] drop-shadow-sm font-medium">
            Kalash Chikitsalaya - Sushruta Ksharsutra & Panchakarma Research Center is dedicated to providing quality Ayurvedic healthcare services.
          </motion.p>

          <motion.p variants={itemVariants} className="text-[1.4vw] text-gray-300 leading-tight mb-[1.5vw] drop-shadow-sm block">
            Serving the Gorakhpur region for years, we focus on holistic healing using advanced Ksharsutra therapy.
          </motion.p>
          
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-[2vw] pb-[1vw] pt-[1vw] border-t border-white/20 w-full mt-[1vw]">
            <div className="bg-white/10 backdrop-blur-md p-[1.2vw] rounded-[1vw] border border-white/10 hover:bg-white/20 transition-colors">
              <h4 className="font-bold text-white text-[1.5vw] mb-[0.5vw]">Our Mission</h4>
              <p className="text-gray-300 text-[1vw] leading-tight">To provide accessible, affordable, and quality healthcare.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-md p-[1.2vw] rounded-[1vw] border border-white/10 hover:bg-white/20 transition-colors">
              <h4 className="font-bold text-white text-[1.5vw] mb-[0.5vw]">Our Vision</h4>
              <p className="text-gray-300 text-[1vw] leading-tight">To be the most trusted healthcare partner for families.</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
