import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Leaf, Shield, Droplets, Target, UserCheck } from 'lucide-react';

const procedures = [
  {
    title: "वमन (Vamana)",
    description: "शरीर के ऊपरी दोषों (कफ) को संतुलित करने के लिए औषधीय चिकित्सा के माध्यम से विषाक्त पदार्थों का निष्कासन।",
    benefit: "दमा, एलर्जी और त्वचा रोगों में अत्यंत प्रभावी।",
    icon: <Droplets className="text-blue-500" />
  },
  {
    title: "विरेचन (Virechana)",
    description: "पित्त दोष को दूर करने के लिए औषधियां देकर शरीर का शोधन किया जाता है।",
    benefit: "पाचन संबंधी विकार, पीलिया और पुरानी सूजन में सहायक।",
    icon: <Leaf className="text-green-500" />
  },
  {
    title: "बस्ती (Basti)",
    description: "आयुर्वेद की सबसे महत्वपूर्ण चिकित्सा, जिसमें औषधीय काढ़ा या तेल के माध्यम से वात दोष का उपचार किया जाता है।",
    benefit: "गठिया, लकवा और पीठ दर्द में रामबाण इलाज।",
    icon: <Shield className="text-indigo-500" />
  },
  {
    title: "नस्य (Nasya)",
    description: "नाक के छिद्रों के माध्यम से औषधीय तेल या पाउडर का प्रशासन।",
    benefit: "सिरदर्द, साइनसाइटिस और मानसिक तनाव से राहत।",
    icon: <Target className="text-red-500" />
  },
  {
    title: "रक्तमोक्षण (Raktamokshana)",
    description: "शरीर से दूषित रक्त को बाहर निकालकर संबंधित रोगों का उपचार करना।",
    benefit: "त्वचा के रोगों, रक्त विकारों और पुरानी खुजली में लाभदायक।",
    icon: <UserCheck className="text-orange-500" />
  }
];

const Panchkarma = () => {
  return (
    <section id="panchkarma" className="section-padding bg-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary-50/30 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary-50/40 rounded-full blur-[100px] -z-10 -translate-x-1/4 translate-y-1/4"></div>

      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 rounded-full text-primary-600 font-bold text-xs uppercase tracking-widest mb-6">
              <Sparkles size={14} /> शोधन चिकित्सा
            </div>
            <h2 className="heading-2 mb-6">पंचकर्म: <span className="text-primary-600">संपूर्ण शरीर का कायाकल्प</span></h2>
            <div className="w-20 h-1.5 bg-primary-500 rounded-full mb-8"></div>
            
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              पंचकर्म आयुर्वेद की एक प्राचीन और अद्वितीय विषहरण (Detoxification) पद्धति है। यह पाँच प्रक्रियाओं का समूह है जो शरीर के आंतरिक अंगों को शुद्ध कर दोषों (वात, पित्त, कफ) को संतुलित करती है।
            </p>
            
            <div className="space-y-6">
              <div className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-soft transition-all">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                  <Leaf className="text-primary-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">प्राकृतिक शुद्धिकरण</h4>
                  <p className="text-sm text-gray-500">बिना किसी दुष्प्रभाव के शरीर से जहरीले तत्वों (Toxins) को बाहर निकालता है।</p>
                </div>
              </div>
              
              <div className="flex gap-4 p-5 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-soft transition-all">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center shrink-0">
                  <Shield className="text-primary-500" />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-1">रोग प्रतिरोधक क्षमता</h4>
                  <p className="text-sm text-gray-500">इम्युनिटी को बढ़ाकर रोगों से लड़ने की शक्ति प्रदान करता है।</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl z-10 border-8 border-white">
              <img 
                src="/Images/Panchkarma/main.png" 
                alt="Ayurvedic Panchkarma Therapy" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-bottom p-8 md:p-12">
                <p className="text-white font-medium text-lg italic md:text-xl">
                  "पंचकर्म से शरीर का शुद्धिकरण पुनर्जीवन की शुरुआत है।"
                </p>
              </div>
            </div>
            
            {/* Abstract accents */}
            <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary-100 rounded-full -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-secondary-100 rounded-full -z-10"></div>
          </motion.div>
        </div>

        <div className="mb-20">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h3 className="text-3xl font-black text-gray-900 mb-4">पंचकर्म की <span className="text-primary-600 underline decoration-primary-100 underline-offset-8">पाँच प्रक्रियाएँ</span></h3>
            <p className="text-gray-500">प्रत्येक प्रक्रिया शरीर के विशेष अंगों और दोषों की शुद्धि के लिए डिज़ाइन की गई है।</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {procedures.map((proc, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 p-8 rounded-[2.5rem] border border-gray-100 hover:bg-white hover:shadow-card hover:-translate-y-2 transition-all duration-300 group"
              >
                <div className="w-14 h-14 bg-white rounded-2xl shadow-soft flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {proc.icon}
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-4">{proc.title}</h4>
                <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  {proc.description}
                </p>
                <div className="pt-6 border-t border-gray-200/50">
                  <p className="text-xs font-black text-primary-600 uppercase tracking-widest mb-2">मुख्य लाभ</p>
                  <p className="text-gray-800 font-medium text-sm">{proc.benefit}</p>
                </div>
              </motion.div>
            ))}
            
            {/* Visual Callout for Procedures */}
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="lg:col-span-1 rounded-[2.5rem] overflow-hidden relative shadow-soft group min-h-[300px]"
            >
              <img src="/Images/Panchkarma/procedures.png" alt="Panchkarma Illustration" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" />
              <div className="absolute inset-0 bg-primary-600/10 group-hover:bg-transparent transition-colors"></div>
            </motion.div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-primary-600 rounded-[3rem] p-10 md:p-16 text-center text-white relative overflow-hidden flex flex-col items-center">
           <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] opacity-10"></div>
           <h3 className="text-3xl md:text-4xl font-black mb-6 relative z-10">क्या आप अपने शरीर को शुद्ध करने के लिए तैयार हैं?</h3>
           <p className="text-primary-100 text-lg mb-10 max-w-2xl relative z-10">
              आज ही हमारे विशेषज्ञों से संपर्क करें और अपनी प्रकृति के अनुसार उचित पंचकर्म चिकित्सा का परामर्श लें।
           </p>
           <button 
             onClick={() => window.dispatchEvent(new CustomEvent('openCallModal'))}
             className="px-8 py-4 bg-white text-primary-600 font-black rounded-2xl shadow-xl hover:scale-105 transition-transform active:scale-95 relative z-10"
           >
              परामर्श बुक करें
           </button>
        </div>
      </div>
    </section>
  );
};

export default Panchkarma;
