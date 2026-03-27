import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = 'service_bpkw49l';
    const templateID = 'template_contact'; // Common default or user can update
    const publicKey = 'jRPvn2TmKAP5a-HS-';

    emailjs.sendForm(serviceID, templateID, e.target, publicKey)
      .then((result) => {
        setFormStatus('success');
        setIsSubmitting(false);
        e.target.reset();
        setTimeout(() => setFormStatus(null), 5000);
      }, (error) => {
        setFormStatus('error');
        setIsSubmitting(false);
        setTimeout(() => setFormStatus(null), 5000);
      });
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
              <p className="text-gray-600 text-lg max-w-md">
                Have questions or want to book an appointment? Our team is here to help you on your journey to wellness.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-100 flex items-center justify-center text-primary-600 shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Call Us</h4>
                  <p className="text-gray-600">+91 7607131682 / 0551 400 0536</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-100 flex items-center justify-center text-primary-600 shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Email Us</h4>
                  <p className="text-gray-600">chikitsalayakalash@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-primary-100 flex items-center justify-center text-primary-600 shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-900">Visit Us</h4>
                  <p className="text-gray-600 leading-snug">
                    Hanuman Mandir, D-100, Budh Vihar Part B, MIG, <br />
                    Near Rampur, Taramandal Rd, Gorakhpur, UP 273016
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 bg-white rounded-[2rem] border border-gray-100 shadow-soft">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-primary-500" />
                <h4 className="font-bold text-gray-900">Hospital Hours</h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between"><span>Mon - Fri</span> <span>9:00 AM - 9:00 PM</span></li>
                <li className="flex justify-between"><span>Sat - Sun</span> <span>10:00 AM - 8:00 PM</span></li>
                <li className="text-primary-600 font-semibold mt-2 underline">24/7 Emergency Care Available</li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-card border border-gray-100 relative overflow-hidden">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Your Name</label>
                  <input 
                    required
                    name="user_name"
                    type="text" 
                    placeholder="Enter full name" 
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-700 ml-1">Phone Number</label>
                  <input 
                    required
                    name="user_phone"
                    type="tel" 
                    placeholder="+91" 
                    className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Subject</label>
                <select 
                  name="subject"
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all"
                >
                  <option>Book an Appointment</option>
                  <option>General Inquiry</option>
                  <option>Medical Consultation</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
                <textarea 
                  required
                  name="message"
                  rows="4" 
                  placeholder="How can we help you?" 
                  className="w-full px-5 py-4 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary-500/20 transition-all resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary-600 hover:bg-primary-700 text-white rounded-2xl font-bold shadow-soft transition-all active:scale-[0.98] flex items-center justify-center gap-2 text-lg"
              >
                {isSubmitting ? "Sending..." : "Send Message"} <Send size={20} className={isSubmitting ? 'hidden' : 'block'} />
              </button>

              {formStatus === 'success' && (
                <p className="text-green-600 font-bold text-center mt-4">Thank you! Your message has been sent.</p>
              )}
              {formStatus === 'error' && (
                <p className="text-red-600 font-bold text-center mt-4">Oops! Something went wrong. Please try again.</p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
