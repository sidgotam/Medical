import React from 'react';
import { Stethoscope, FileText, Syringe, CheckCircle } from 'lucide-react';

const SpecializedTreatments = () => {
  const treatments = [
    "बवासीर (Piles)", "भगन्दर (Fistula)", "गुदा विदर (फिशर / Fissure)",
    "पायलोनाइडल साइनस", "प्रोलैप्स रेक्टम", "हाइड्रोसील", "हर्निया",
    "कटे-फटे नाक-कान", "शरीर एवं चेहरे के तिल, मुंहासे, गांठ", "समस्त त्वचा रोग"
  ];

  const facilities = [
    "रबर बैंड लिगेशन", "स्क्लेरोथेरेपी", "अग्निकर्म", "क्षारकर्म", 
    "प्रोक्टोस्कोपी", "केमिकल एवं थर्मल कॉटराइजेशन", "डाइलेटेशन", 
    "फिस्टुलोग्राम", "स्टीम बाथ", "अभ्यंग", "लीच थेरेपी", "शिरोधारा", 
    "स्वेदन", "रक्तमोक्षण", "पंचकर्म चिकित्सा", "हाइड्रा फेशियल", 
    "नार्मल डिलीवरी सुविधा", "नशा मुक्ति केंद्र", "मोटापा एवं सौंदर्य उपचार"
  ];

  return (
    <section id="specialized-treatments" className="py-16 md:py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">उपचार एवं सुविधाएं (Treatments & Facilities)</h2>
          <div className="w-20 h-1.5 bg-primary-500 rounded-full mx-auto"></div>
        </div>

        {/* Special Note Banner */}
        <div className="bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-2xl p-6 md:p-8 mb-12 flex flex-col md:flex-row items-center gap-6 border border-primary-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full blur-3xl -mr-10 -mt-10"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary-500/5 rounded-full blur-3xl -ml-10 -mb-10"></div>
          
          <div className="bg-white w-16 h-16 rounded-full flex items-center justify-center shadow-sm shrink-0 border border-primary-100 z-10">
            <FileText className="text-primary-500" size={32} />
          </div>
          <div className="text-center md:text-left z-10">
            <h3 className="text-xl font-bold text-gray-900 mb-2">📝 विशेष नोट</h3>
            <p className="text-lg text-primary-800 font-medium">क्षारकर्म एवं पंचकर्म के द्वारा गुदा रोग एवं अन्य शारीरिक रोगों की सफल चिकित्सा की जाती है।</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Treatments List */}
          <div className="bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
              <Stethoscope className="text-secondary-500" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">🏥 उपचार सेवाएं</h3>
            </div>
            <p className="font-semibold text-gray-700 mb-4 bg-white px-4 py-2 rounded-lg border border-gray-200 inline-block shadow-sm">
              क्षार सूत्र एवं लेजर सर्जरी / सर्जरी द्वारा चिकित्सा
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-2">
              {treatments.map((treatment, idx) => (
                <div key={idx} className="flex items-center gap-2 group">
                  <CheckCircle size={18} className="text-secondary-500 group-hover:scale-110 transition-transform shrink-0" />
                  <span className="text-gray-700 font-medium whitespace-break-spaces">{treatment}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Available Facilities List */}
          <div className="bg-white rounded-2xl p-6 md:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-200">
              <Syringe className="text-primary-500" size={28} />
              <h3 className="text-2xl font-bold text-gray-900">💉 उपलब्ध सुविधाएं</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-y-4 gap-x-4">
              {facilities.map((fac, idx) => (
                <div key={idx} className="flex items-center gap-2 group p-2 hover:bg-primary-50 rounded-lg transition-colors border border-transparent hover:border-primary-100 cursor-default">
                  <div className="w-2 h-2 rounded-full bg-primary-400 group-hover:scale-150 transition-transform shrink-0"></div>
                  <span className="text-gray-700 font-medium">{fac}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpecializedTreatments;
