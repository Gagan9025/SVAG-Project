import React, { useState } from 'react';
// Removed SectionTitle import
import { FiPhone, FiMail, FiSend } from 'react-icons/fi';

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
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
      <div className="container mx-auto px-4 relative z-10">
        {/* Custom bold heading for "Ready to Start?" */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
            READY TO START?
            <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
          </h2>
          <div className="flex justify-center my-4">
            <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
          </div>
          <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
            Ready to transform your business with creativity and strategy? Let's discuss your project and create something amazing together.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div 
            className="h-full"
            data-aos="fade-right"
            data-aos-delay="400"
          >
            <div className="glass-effect rounded-2xl p-8 border border-gold-400/20 h-full hover:scale-105 transition-transform duration-300">
              <h3 className="text-3xl font-bold mb-6 text-ivory">Our Services</h3>
              
              <div className="space-y-6 mb-8">
                {[
                  "Digital Strategy",
                  "Digital Transformation Consulting",
                  "Operational Excellence through Digitalisation",
                  "Social Media Management",
                  "Online Marketing",
                  "Website Development",
                  "e-commerce Solutions",
                  "Website Re-designing",
                  "Graphic Designing",
                  "Video Production and Editing"
                ].map((service, index) => (
                  <div 
                    key={index} 
                    className="flex items-center"
                    data-aos="fade-up"
                    data-aos-delay={500 + index * 50}
                  >
                    <span className="text-gold-400 mr-3">✦</span>
                    <span className="text-silver-300">{service}</span>
                  </div>
                ))}
              </div>
              
              <h3 className="text-2xl font-bold mb-6 text-ivory">Our Office</h3>
              <div className="space-y-4">
                <div 
                  className="flex items-center"
                  data-aos="fade-up"
                  data-aos-delay="1000"
                >
                  <FiPhone className="text-gold-400 mr-3 text-xl" />
                  <span className="text-silver-300">+974 71455795</span>
                </div>
                <div 
                  className="flex items-center"
                  data-aos="fade-up"
                  data-aos-delay="1100"
                >
                  <FiMail className="text-gold-400 mr-3 text-xl" />
                  <span className="text-silver-300">Info@svagdesignhub.com</span>
                </div>
              </div>
            </div>
          </div>
          
          <div 
            className="h-full"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="glass-effect rounded-2xl p-8 border border-gold-400/20 h-full hover:scale-105 transition-transform duration-300">
              <form onSubmit={handleSubmit} className="space-y-6 h-full flex flex-col">
                <div
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <label htmlFor="name" className="block text-ivory mb-2">Full Name</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="input-gold w-full"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                </div>
                
                <div
                  data-aos="fade-up"
                  data-aos-delay="600"
                >
                  <label htmlFor="email" className="block text-ivory mb-2">Email Address</label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="input-gold w-full"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                
                <div
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <label htmlFor="subject" className="block text-ivory mb-2">Subject</label>
                  <div className="relative">
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="input-gold w-full"
                      placeholder="Enter subject"
                      required
                    />
                  </div>
                </div>
                
                <div 
                  className="flex-grow"
                  data-aos="fade-up"
                  data-aos-delay="800"
                >
                  <label htmlFor="message" className="block text-ivory mb-2">Your Message</label>
                  <div className="relative h-full">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      className="input-gold w-full h-full"
                      placeholder="Enter your message"
                      required
                    ></textarea>
                  </div>
                </div>
                
                <div 
                  className="mt-auto"
                  data-aos="fade-up"
                  data-aos-delay="900"
                >
                  <button 
                    type="submit"
                    className="btn-gold w-full glow-pulse hover:scale-105 transition-transform duration-300"
                  >
                    Send Message
                    <FiSend className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
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