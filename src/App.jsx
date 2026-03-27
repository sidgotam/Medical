import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Facilities from './components/Facilities';
import MedicalServices from './components/MedicalServices';
import DiseaseInfo from './components/DiseaseInfo';
import Doctors from './components/Doctors';
import Gallery from './components/Gallery';
import WhatsAppButton from './components/WhatsAppButton';
import CallModal from './components/CallModal';
import Footer from './components/Footer';
import Testimonials from './components/Testimonials';
import Panchkarma from './components/Panchkarma';


function App() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans overflow-x-hidden w-full relative">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Services />
        <About />
        <Facilities />
        <DiseaseInfo />
        <MedicalServices />
        <Panchkarma />
        <Testimonials />
        <Doctors />
        <Gallery />
      </main>
      <WhatsAppButton />
      <CallModal />
      <Footer />
    </div>
  );
}

export default App;
