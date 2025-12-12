import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import FadeIn from './FadeIn';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl overflow-hidden shadow-xl">
          
          {/* Contact Info & Map */}
          <div className="bg-slate-900 text-white p-10 lg:p-14">
            <h3 className="text-3xl font-serif font-bold mb-8">Visit Us</h3>
            
            <div className="space-y-8 mb-12">
              <div className="flex items-start gap-4">
                <MapPin className="text-primary-400 mt-1" />
                <div>
                  <h4 className="font-bold text-lg">Gomti Nagar, Lucknow</h4>
                  <p className="text-slate-400">Plot 12, Vipul Khand, Near CMS,<br/>Lucknow, Uttar Pradesh 226010</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Phone className="text-primary-400" />
                <div>
                  <h4 className="font-bold text-lg">Call Us</h4>
                  <p className="text-slate-400">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="text-primary-400" />
                <div>
                  <h4 className="font-bold text-lg">Email Us</h4>
                  <p className="text-slate-400">hello@glowderma.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Clock className="text-primary-400" />
                <div>
                  <h4 className="font-bold text-lg">Opening Hours</h4>
                  <p className="text-slate-400">Mon - Sat: 10:00 AM - 8:00 PM<br/>Sun: By Appointment</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="w-full h-48 bg-slate-800 rounded-xl overflow-hidden relative group">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3559.877283938478!2d80.99222531504285!3d26.843855983157327!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be30555555555%3A0x1234567890abcdef!2sGomti%20Nagar%2C%20Lucknow!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{border:0}} 
                allowFullScreen={false} 
                loading="lazy"
                title="Clinic Map"
                className="opacity-75 group-hover:opacity-100 transition-opacity"
               ></iframe>
            </div>
          </div>

          {/* Booking Form */}
          <div className="p-10 lg:p-14">
            <h3 className="text-3xl font-serif font-bold text-slate-900 mb-6">Book an Appointment</h3>
            <p className="text-slate-600 mb-8">Ready to start your skin journey? Fill out the form and we will contact you shortly.</p>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder="John Doe" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Phone Number</label>
                  <input type="tel" className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder="+91 99999 99999" />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Select Service</label>
                <select className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all bg-white">
                  <option>General Consultation</option>
                  <option>Acne Treatment</option>
                  <option>Laser Hair Removal</option>
                  <option>Anti-Aging</option>
                  <option>HydraFacial</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">Message (Optional)</label>
                <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-slate-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all" placeholder="Tell us about your concern..."></textarea>
              </div>

              <button className="w-full bg-primary-500 hover:bg-primary-600 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary-500/30 transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2">
                <Send size={18} />
                Request Appointment
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;