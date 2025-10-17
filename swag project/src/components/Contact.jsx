import React, { useState } from 'react';
import { FiPhone, FiMail, FiSend } from 'react-icons/fi';
import { BackgroundBeams } from './ui/background-beams';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will contact you shortly.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 md:py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
      <BackgroundBeams className="absolute inset-0 z-0" showStaticBeams={false} />
      <div className="container mx-auto px-4 relative z-10">
        {/* Custom bold heading for "Ready to Start?" */}
        <div className="mb-12 md:mb-16 text-center animate-fade-in-down">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
            READY TO START?
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
          </h2>
          <div className="flex justify-center my-4 animate-pulse">
            <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans animate-fade-in">
            Ready to Elevate Your Brand?
          </p>
          <p className="text-sm sm:text-base md:text-lg text-silver-400 mt-4 max-w-3xl mx-auto font-sans animate-fade-in">
            Ready to transform your business with creativity and strategy? Let's discuss your project and create something amazing together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-start">
          <div 
            className="h-full animate-fade-in-left"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <div className="glass-effect rounded-2xl p-6 md:p-8 border border-gold-400/20 h-full hover:scale-105 transition-all duration-300">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 text-ivory animate-fade-in-down">Our Services</h3>
              
              <div className="space-y-4 md:space-y-6 mb-6 md:mb-8">
                {[
                  "Digital Consulting",
                  "Digital Strategy",
                  "Digital Transformation Consulting",
                  "Operational Excellence through Digitalisation",
                  "Digital Marketing",
                  "Social Media Management",
                  "Online Marketing",
                  "Web Development",
                  "Website Development",
                  "e-commerce Solutions",
                  "Website Re-designing",
                  "Graphic & Video",
                  "Graphic Designing",
                  "Video Production and Editing"
                ].map((service, index) => (
                  <div 
                    key={index} 
                    className="flex items-center animate-fade-in-right"
                    data-aos="fade-up"
                    data-aos-delay={500 + index * 50}
                  >
                    <span className="text-gold-400 mr-2 md:mr-3 animate-pulse text-sm">✦</span>
                    <span className="text-silver-300 text-sm md:text-base">{service}</span>
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-ivory animate-fade-in-down">Our Office</h3>
              <div className="space-y-3 md:space-y-4">
                <div 
                  className="flex items-center animate-fade-in-up"
                  data-aos="fade-up"
                  data-aos-delay="1000"
                >
                  <FiPhone className="text-gold-400 mr-2 md:mr-3 text-lg md:text-xl animate-bounce" />
                  <span className="text-silver-300 text-sm md:text-base">+974 71455795</span>
                </div>
                <div 
                  className="flex items-center animate-fade-in-up"
                  data-aos="fade-up"
                  data-aos-delay="1100"
                >
                  <FiMail className="text-gold-400 mr-2 md:mr-3 text-lg md:text-xl animate-bounce" />
                  <span className="text-silver-300 text-sm md:text-base">Info@nextgendesignhub.com</span>
                </div>
              </div>
              
              <h3 className="text-xl md:text-2xl font-bold mt-6 md:mt-8 mb-4 md:mb-6 text-ivory animate-fade-in-down">Company</h3>
              <div className="space-y-3 md:space-y-4">
                {[
                  "Strategic Partnership",
                  "CSR- Social Works",
                  "Careers",
                  "Privacy Policy"
                ].map((item, index) => (
                  <div 
                    key={index} 
                    className="flex items-center animate-fade-in-right"
                    data-aos="fade-up"
                    data-aos-delay={1200 + index * 50}
                  >
                    <span className="text-gold-400 mr-2 md:mr-3 animate-pulse text-sm">✦</span>
                    <span className="text-silver-300 text-sm md:text-base">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div 
            className="h-full animate-fade-in-right"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="glass-effect rounded-2xl p-6 md:p-8 border border-gold-400/20 h-full hover:scale-105 transition-all duration-300">
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6 h-full flex flex-col">
                <div
                  className="animate-fade-in-up"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <label htmlFor="name" className="block text-ivory mb-2 text-sm md:text-base">Full Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="input-gold w-full react-icon text-sm md:text-base"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                </div>
                
                <div
                  className="animate-fade-in-up"
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <label htmlFor="email" className="block text-ivory mb-2 text-sm md:text-base">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-gold w-full react-icon text-sm md:text-base"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                
                <div
                  className="animate-fade-in-up"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <label htmlFor="subject" className="block text-ivory mb-2 text-sm md:text-base">Subject</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="input-gold w-full react-icon text-sm md:text-base"
                      placeholder="Enter subject"
                      required
                    />
                  </div>
                </div>
                
                <div 
                  className="flex-grow animate-fade-in-up"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  <label htmlFor="message" className="block text-ivory mb-2 text-sm md:text-base">Your Message</label>
                  <div className="relative h-full">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="4"
                      className="input-gold w-full h-full hover:scale-105 transition-transform duration-300 text-sm md:text-base"
                      placeholder="Enter your message"
                      required
                    ></textarea>
                  </div>
                </div>
                
                <div 
                  className="mt-auto animate-fade-in-up"
                  data-aos="fade-up"
                  data-aos-delay="900"
                >
                  <button 
                    type="submit"
                    className="btn-gold w-full glow-pulse hover:scale-105 transition-all duration-300"
                  >
                    Send Message
                    <FiSend className="ml-2 react-icon" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;