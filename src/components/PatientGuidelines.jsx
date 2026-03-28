import React from 'react';
import { CheckCircle2, XCircle, Apple, Ban } from 'lucide-react';

const PatientGuidelines = () => {
  return (
    <section id="patient-guidelines" className="py-16 md:py-24 bg-gray-50/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-2 mb-4">रोगी दिशा-निर्देश (Patient Guidelines)</h2>
          <div className="w-20 h-1.5 bg-primary-500 rounded-full mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Pathya (Diet to Follow) */}
          <div className="bg-white rounded-2xl shadow-sm border border-green-100 overflow-hidden hover:shadow-md transition-shadow">
            <div className="bg-green-50/80 px-6 py-4 border-b border-green-100 flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-lg text-green-600">
                <Apple size={24} />
              </div>
              <h3 className="text-xl font-bold text-green-800">🥗 पथ्य (खाने वाली चीजें)</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {[
                  "गेहूं, ज्वार, मल्टीग्रेन आटे की रोटी, चावल, मांड निकाला हुआ",
                  "सलाद – गाजर, खीरा, मूली, प्याज, टमाटर आदि",
                  "मौसमी फल – अमरूद, केला, सेब, संतरा, अनार, पपीता इत्यादि",
                  "नारियल पानी, नींबू पानी, मठा, छाछ, 10-12 गिलास सादा पानी",
                  "हरी सब्जियाँ – मेथी, पालक, धनिया, गोभी, भिंडी, लौकी, नेनुआ आदि",
                  "रेशेदार खाद्य पदार्थ – साबुत अनाज, अंकुरित दालें, रोस्टेड चने, उबला अंडा (कम मात्रा में)"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Apathya (Diet to Avoid) */}
          <div className="bg-white rounded-2xl shadow-sm border border-red-100 overflow-hidden hover:shadow-md transition-shadow">
            <div className="bg-red-50/80 px-6 py-4 border-b border-red-100 flex items-center gap-3">
              <div className="bg-red-100 p-2 rounded-lg text-red-600">
                <Ban size={24} />
              </div>
              <h3 className="text-xl font-bold text-red-800">❌ अपथ्य (न खाने वाली चीजें)</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {[
                  "मैदा से बने पदार्थ – रोटी, पूरी, पराठा, केक, ब्रेड, कोल्ड ड्रिंक",
                  "तले हुए पदार्थ, ज्यादा नमक, मिर्च मसाला, खट्टी चीजें",
                  "डेयरी प्रोडक्ट – केक, चॉकलेट, आइसक्रीम, मलाई वाला दूध",
                  "मांसाहार – मटन, चिकन, मछली (अधिक मात्रा में)",
                  "कब्ज करने वाली चीजें, बाहर का खाना",
                  "अधिक चाय/कॉफी का सेवन"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <XCircle className="text-red-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Do's (What to do) */}
          <div className="bg-white rounded-2xl shadow-sm border border-blue-100 overflow-hidden hover:shadow-md transition-shadow">
            <div className="bg-blue-50/80 px-6 py-4 border-b border-blue-100 flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-bold text-blue-800">✅ क्या करें (Do's)</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {[
                  "स्वयं की साफ-सफाई रखें",
                  "गुनगुने पानी से स्नान करें",
                  "ढीले-ढाले कपड़े पहनें",
                  "6–8 घंटे की नींद लें",
                  "हल्का व्यायाम व टहलना करें"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="text-blue-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Don'ts (What not to do) */}
          <div className="bg-white rounded-2xl shadow-sm border border-orange-100 overflow-hidden hover:shadow-md transition-shadow">
            <div className="bg-orange-50/80 px-6 py-4 border-b border-orange-100 flex items-center gap-3">
              <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
                <XCircle size={24} />
              </div>
              <h3 className="text-xl font-bold text-orange-800">❌ क्या न करें (Don'ts)</h3>
            </div>
            <div className="p-6">
              <ul className="space-y-4">
                {[
                  "बहुत देर तक न बैठें",
                  "वाहन चलाते समय अधिक दबाव न डालें",
                  "नशे का सेवन न करें",
                  "अधिक व्यायाम या जोर न लगाएं",
                  "शौच में अधिक देर तक न बैठें"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <XCircle className="text-orange-500 shrink-0 mt-0.5" size={20} />
                    <span className="text-gray-700 leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatientGuidelines;
