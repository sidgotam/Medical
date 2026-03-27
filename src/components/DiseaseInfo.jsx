import React from 'react';
import { Shield, Thermometer, HeartPulse, Stethoscope, Activity } from 'lucide-react';

const diseases = [
  
  {
    name: "पाइल्स (बवासीर)",
    symptoms: "Pain, itching, and bleeding during bowel movements.",
    precautions: "Eat high-fiber foods, stay hydrated, and avoid straining.",
    icon: <Activity size={24} />
  },
  {
    name: "फिस्टुला (भगन्दर)",
    symptoms: "Persistent pain, swelling, and pus discharge near the anal area.",
    precautions: "Maintain high hygiene standards and follow high-fiber diet.",
    icon: <Shield size={24} />
  },
  {
    name: "फिशर",
    symptoms: "Sharp pain and bright red blood during or after bowel movements.",
    precautions: "Use stool softeners, take sitz baths, and drink plenty of water.",
    icon: <Stethoscope size={24} />
  },
  {
    name: "कब्ज",
    symptoms: "Difficulty in passing stool, bloating, and hard stools.",
    precautions: "Include physical activity, drink warm water, and use natural fibers.",
    icon: <HeartPulse size={24} />
  }
];

const DiseaseInfo = () => {
  return (
    <section id="disease-info" className="section-padding bg-background w-full">
      <div className="container-custom">
        <h2 className="heading-2">Disease Information</h2>
        <div className="w-20 h-1.5 bg-primary-500 rounded-full mb-10"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {diseases.map((disease, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex gap-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center text-primary-500 shrink-0">
                {disease.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold text-gray-900 mb-2">{disease.name}</h4>
                <p className="text-sm text-gray-700 mb-2 leading-relaxed"><strong>Symptoms:</strong> {disease.symptoms}</p>
                <p className="text-sm text-gray-600 leading-relaxed"><strong>Precautions:</strong> {disease.precautions}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiseaseInfo;
