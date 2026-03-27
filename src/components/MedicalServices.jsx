import React from 'react';
import { BriefcaseMedical } from 'lucide-react';

const specialties = [
  "Piles, Fissure & Fistula",
  "Ksharsutra Therapy",
  "Panchakarma (Detoxification)",
  "Women's Health & Delivery",
  "Pediatrics (Swarnaprashan)",
  "Skin & Hair Diseases"
];

const MedicalServices = () => {
  return (
    <section id="medical-services" className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="heading-2">Medical Services</h2>
        <div className="w-20 h-1.5 bg-primary-500 rounded-full mb-10"></div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {specialties.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-4 bg-gray-50 border border-gray-100 hover:border-primary-200 p-5 rounded-2xl hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-colors duration-300">
                <BriefcaseMedical size={24} />
              </div>
              <span className="font-semibold text-gray-800 text-lg group-hover:text-primary-600 transition-colors">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalServices;
