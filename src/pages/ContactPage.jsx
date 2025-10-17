import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const ContactPage = () => {
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
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Thank you for your message! We will get back to you soon.');
  };

  // Unique contact information for this page
  const contactInfo = [
    {
      title: "Email Us",
      description: "For general inquiries and project discussions",
      detail: "Info@nextgendesignhub.com",
      icon: "📧"
    },
    {
      title: "Call Us",
      description: "For immediate assistance and quick questions",
      detail: "+974 71455795",
      icon: "📞"
    },
    {
      title: "Our Office",
      description: "Headquarters and creative studio",
      detail: "SVAG Design Hub",
      icon: "🏢"
    }
  ];

  return (
    <div className="bg-royal-dark text-silver-800 font-sans relative min-h-screen flex flex-col">
      {/* Animated background */}
      <div className="animated-background overflow-hidden">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
        <div className="particle particle-5"></div>
        <div className="particle particle-6"></div>
        <div className="particle particle-7"></div>
        <div className="particle particle-8"></div>
        <div className="particle particle-9"></div>
        <div className="particle particle-10"></div>
        <div className="particle particle-11"></div>
        <div className="particle particle-12"></div>
        <div className="orb orb-1"></div>
        <div className="orb orb-2"></div>
        <div className="orb orb-3"></div>
        <div className="orb orb-4"></div>
        <div className="orb orb-5"></div>
      </div>
      
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Contact Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16 animate-fade-in-down">
              <h2 className="text-4xl md:text-5xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                GET IN TOUCH
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4 animate-pulse">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans animate-fade-in">
                Have a project in mind? Let's create something amazing together.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="animate-fade-in-left">
                <h3 className="text-3xl font-bold mb-8 text-ivory-light">Contact Information</h3>
                <p className="text-lg text-silver-300 mb-10">
                  We're here to help and answer any questions you might have. We look forward to hearing from you!
                </p>
                
                <div className="space-y-8">
                  {contactInfo.map((info, index) => (
                    <div 
                      key={index}
                      className="flex items-start animate-fade-in-right"
                      data-aos="fade-right"
                    >
                      <div className="text-3xl mr-6 animate-bounce">{info.icon}</div>
                      <div>
                        <h4 className="text-xl font-bold mb-2 text-ivory">{info.title}</h4>
                        <p className="text-silver-400 mb-1">{info.description}</p>
                        <p className="text-gold-400 font-medium">{info.detail}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map Placeholder */}
                <div className="mt-12 animate-fade-in-up">
                  <h4 className="text-xl font-bold mb-4 text-ivory">Our Location</h4>
                  <div className="bg-royal-blue/30 rounded-2xl h-64 flex items-center justify-center border border-gold-400/30 hover:scale-105 transition-all duration-300">
                    <div className="text-center">
                      <div className="text-5xl mb-4 animate-bounce">🗺️</div>
                      <p className="text-ivory">Interactive Map</p>
                      <p className="text-silver-400 text-sm mt-2">123 Creative Street, Design City</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div className="animate-fade-in-right">
                <h3 className="text-3xl font-bold mb-8 text-ivory-light">Send us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="animate-fade-in-up">
                    <label htmlFor="name" className="block text-ivory mb-2">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-royal-blue/30 border border-gold-400/30 rounded-xl text-ivory focus:outline-none focus:ring-2 focus:ring-gold-400 hover:scale-105 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div className="animate-fade-in-up">
                    <label htmlFor="email" className="block text-ivory mb-2">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-royal-blue/30 border border-gold-400/30 rounded-xl text-ivory focus:outline-none focus:ring-2 focus:ring-gold-400 hover:scale-105 transition-all duration-300"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div className="animate-fade-in-up">
                    <label htmlFor="subject" className="block text-ivory mb-2">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-royal-blue/30 border border-gold-400/30 rounded-xl text-ivory focus:outline-none focus:ring-2 focus:ring-gold-400 hover:scale-105 transition-all duration-300"
                      placeholder="Project Inquiry"
                    />
                  </div>
                  
                  <div className="animate-fade-in-up">
                    <label htmlFor="message" className="block text-ivory mb-2">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="5"
                      className="w-full px-4 py-3 bg-royal-blue/30 border border-gold-400/30 rounded-xl text-ivory focus:outline-none focus:ring-2 focus:ring-gold-400 hover:scale-105 transition-all duration-300"
                      placeholder="Tell us about your project..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit" 
                    className="btn-royal-gold w-full py-4 text-lg font-semibold hover:scale-105 transition-transform duration-300"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            {/* Business Hours */}
            <div className="mt-20 bg-royal-blue/30 rounded-3xl p-8 border border-gold-400/30 animate-fade-in-up">
              <h3 className="text-3xl font-bold mb-6 text-center text-ivory-light">Business Hours</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                {[
                  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
                  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
                  { day: "Sunday", hours: "Closed" }
                ].map((item, index) => (
                  <div key={index} className="flex justify-between items-center py-3 border-b border-gold-400/20 hover:scale-105 transition-all duration-300">
                    <span className="text-ivory font-medium">{item.day}</span>
                    <span className="text-gold-400">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default ContactPage;