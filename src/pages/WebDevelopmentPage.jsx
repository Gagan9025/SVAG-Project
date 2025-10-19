import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const WebDevelopmentPage = () => {
  return (
    <div className="bg-royal-dark text-silver-800 font-sans relative min-h-screen flex flex-col">
      {/* Animated background */}
      <div className="animated-background overflow-hidden">
        <div className="particle particle-1"></div>
        <div className="orb orb-1"></div>
      </div>
      
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-16 mobile:hero-py relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 mobile:px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-3xl mobile:text-3xl md:text-5xl font-extrabold mb-6 font-heading text-gold-400" data-aos="fade-up">
                MODERN WEB SOLUTIONS
              </h1>
              <div className="flex justify-center my-4">
                <div className="w-12 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-lg mobile:text-xl md:text-2xl text-gold-300 mt-6 mobile:mt-8 max-w-3xl mx-auto font-sans leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                In today's digital-first world, your website is often the first impression potential customers have of your business. We build websites that not only look stunning but also perform exceptionally, driving conversions and user engagement.
              </p>
              <p className="text-base mobile:text-lg text-silver-300 mt-4 mobile:mt-6 max-w-3xl mx-auto font-sans leading-relaxed" data-aos="fade-up" data-aos-delay="300">
                Our web development approach combines cutting-edge technology with proven design principles to create websites that are fast, secure, and optimized for search engines. From simple business sites to complex e-commerce platforms, we deliver solutions that grow with your business.
              </p>
            </div>
          </div>
        </section>

        {/* Key Features - Mobile Page Separation */}
        <section className="py-12 mobile:section-py relative mobile-page-section">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 mobile:px-0 relative z-10">
            <div className="text-center mb-10">
              <h2 className="mobile:page-title">KEY FEATURES</h2>
              <div className="flex justify-center my-3">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-lg mobile:text-xl text-gold-300 mt-4 max-w-2xl mx-auto font-sans">
                Essential elements that make our web solutions stand out
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mobile:gap-4">
              <div className="text-center p-5 mobile:p-4 card-glass" data-aos="fade-up">
                <div className="text-3xl mobile:text-4xl text-gold-400 mb-3 mobile:mb-4">📱</div>
                <h3 className="text-lg mobile:text-xl font-bold text-ivory mb-2">Responsive Design</h3>
                <p className="text-sm mobile:text-base text-silver-300">Flawless experience across all devices</p>
              </div>
              <div className="text-center p-5 mobile:p-4 card-glass" data-aos="fade-up" data-aos-delay="100">
                <div className="text-3xl mobile:text-4xl text-gold-400 mb-3 mobile:mb-4">🔍</div>
                <h3 className="text-lg mobile:text-xl font-bold text-ivory mb-2">SEO Optimized</h3>
                <p className="text-sm mobile:text-base text-silver-300">Higher rankings and visibility</p>
              </div>
              <div className="text-center p-5 mobile:p-4 card-glass" data-aos="fade-up" data-aos-delay="200">
                <div className="text-3xl mobile:text-4xl text-gold-400 mb-3 mobile:mb-4">⚡</div>
                <h3 className="text-lg mobile:text-xl font-bold text-ivory mb-2">Fast Performance</h3>
                <p className="text-sm mobile:text-base text-silver-300">Lightning-fast loading speeds</p>
              </div>
              <div className="text-center p-5 mobile:p-4 card-glass" data-aos="fade-up" data-aos-delay="300">
                <div className="text-3xl mobile:text-4xl text-gold-400 mb-3 mobile:mb-4">🔒</div>
                <h3 className="text-lg mobile:text-xl font-bold text-ivory mb-2">Secure & Reliable</h3>
                <p className="text-sm mobile:text-base text-silver-300">Protected business and customer data</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services - Mobile Page Separation */}
        <section className="py-16 mobile:section-py relative mobile-page-section">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 mobile:px-0 relative z-10">
            <div className="text-center mb-12 mobile:mb-10">
              <h2 className="mobile:page-title">OUR WEB DEVELOPMENT SERVICES</h2>
              <div className="flex justify-center my-3">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-lg mobile:text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
                Comprehensive web solutions designed to establish your online presence and drive business growth
              </p>
            </div>
            
            <div className="space-y-10 mobile:space-y-8">
              {/* Custom Website Builds */}
              <div className="card-glass p-6 mobile:p-5 mobile:content-block" data-aos="fade-up">
                <h3 className="mobile:content-title">Custom Website Builds</h3>
                <p className="mobile:content-text">Tailored websites designed for your specific business needs:</p>
                <ul className="mobile:feature-list">
                  <li className="mobile:feature-item flex items-start">
                    <span className="text-gold-400 mr-2 mt-1">✓</span>
                    <span className="text-silver-300">Custom design and development</span>
                  </li>
                  <li className="mobile:feature-item flex items-start">
                    <span className="text-gold-400 mr-2 mt-1">✓</span>
                    <span className="text-silver-300">Responsive layouts for all devices</span>
                  </li>
                  <li className="mobile:feature-item flex items-start">
                    <span className="text-gold-400 mr-2 mt-1">✓</span>
                    <span className="text-silver-300">SEO-optimized structure</span>
                  </li>
                  <li className="mobile:feature-item flex items-start">
                    <span className="text-gold-400 mr-2 mt-1">✓</span>
                    <span className="text-silver-300">Content management systems</span>
                  </li>
                  <li className="mobile:feature-item flex items-start">
                    <span className="text-gold-400 mr-2 mt-1">✓</span>
                    <span className="text-silver-300">Performance optimization</span>
                  </li>
                </ul>
              </div>

              {/* E-Commerce Solutions */}
              <div className="card-glass p-6 mobile:p-5 mobile:content-block" data-aos="fade-up" data-aos-delay="100">
                <h3 className="mobile:content-title">E-Commerce Solutions</h3>
                <p className="mobile:content-text">Full-featured online stores that drive sales and growth:</p>
                <ul className="mobile:feature-list">
                  <li className="mobile:feature-item flex items-start">
                    <span className="text-gold-400 mr-2 mt-1">✓</span>
                    <span className="text-silver-300">Secure payment gateways</span>
                  </li>
                  <li className="mobile:feature-item flex items-start">
                    <span className="text-gold-400 mr-2 mt-1">✓</span>
                    <span className="text-silver-300">Inventory management systems</span>
                  </li>
                  <li className="mobile:feature-item flex items-start">
                    <span className="text-gold-400 mr-2 mt-1">✓</span>
                    <span className="text-silver-300">Order processing automation</span>
                  </li>
                  <li className="mobile:feature-item flex items-start">
                    <span className="text-gold-400 mr-2 mt-1">✓</span>
                    <span className="text-silver-300">Customer account management</span>
                  </li>
                  <li className="mobile:feature-item flex items-start">
                    <span className="text-gold-400 mr-2 mt-1">✓</span>
                    <span className="text-silver-300">Analytics and reporting</span>
                  </li>
                </ul>
              </div>

              {/* Site Redesign & UX Optimization */}
              <div className="card-glass p-6 mobile:p-5 mobile:content-block" data-aos="fade-up" data-aos-delay="200">
                <h3 className="mobile:content-title">Site Redesign & UX Optimization</h3>
                <p className="mobile:content-text">Transform existing sites with modern design and user experience:</p>
                <ul className="mobile:feature-list">
                  <li className="mobile:feature-item flex items-start">
                    <span className="text-gold-400 mr-2 mt-1">✓</span>
                    <span className="text-silver-300">User experience audits</span>
                  </li>
                  <li className="mobile:feature-item flex items-start">
                    <span className="text-gold-400 mr-2 mt-1">✓</span>
                    <span className="text-silver-300">Conversion rate optimization</span>
                  </li>
                  <li className="mobile:feature-item flex items-start">
                    <span className="text-gold-400 mr-2 mt-1">✓</span>
                    <span className="text-silver-300">Modern design implementation</span>
                  </li>
                  <li className="mobile:feature-item flex items-start">
                    <span className="text-gold-400 mr-2 mt-1">✓</span>
                    <span className="text-silver-300">Performance improvements</span>
                  </li>
                  <li className="mobile:feature-item flex items-start">
                    <span className="text-gold-400 mr-2 mt-1">✓</span>
                    <span className="text-silver-300">Mobile-first approach</span>
                  </li>
                </ul>
              </div>

              {/* Hosting, Maintenance & Performance Tuning */}
              <div className="card-glass p-6 mobile:p-5 mobile:content-block" data-aos="fade-up" data-aos-delay="300">
                <h3 className="mobile:content-title">Hosting, Maintenance & Performance Tuning</h3>
                <p className="mobile:content-text">Complete web infrastructure management and optimization:</p>
                <ul className="mobile:feature-list">
                  <li className="mobile:feature-item flex items-start">
                    <span className="text-gold-400 mr-2 mt-1">✓</span>
                    <span className="text-silver-300">Reliable hosting solutions</span>
                  </li>
                  <li className="mobile:feature-item flex items-start">
                    <span className="text-gold-400 mr-2 mt-1">✓</span>
                    <span className="text-silver-300">Regular security updates</span>
                  </li>
                  <li className="mobile:feature-item flex items-start">
                    <span className="text-gold-400 mr-2 mt-1">✓</span>
                    <span className="text-silver-300">Performance monitoring</span>
                  </li>
                  <li className="mobile:feature-item flex items-start">
                    <span className="text-gold-400 mr-2 mt-1">✓</span>
                    <span className="text-silver-300">Backup and recovery</span>
                  </li>
                  <li className="mobile:feature-item flex items-start">
                    <span className="text-gold-400 mr-2 mt-1">✓</span>
                    <span className="text-silver-300">24/7 technical support</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Tech Stack - Mobile Page Separation */}
        <section className="py-16 mobile:section-py relative mobile-page-section">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 mobile:px-0 relative z-10">
            <div className="text-center mb-12 mobile:mb-10">
              <h2 className="mobile:page-title">OUR TECHNOLOGY STACK</h2>
              <div className="flex justify-center my-3">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-lg mobile:text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
                We use cutting-edge technologies to build fast, secure, and scalable websites
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mobile:gap-4">
              <div className="card-glass p-6 mobile:p-5" data-aos="fade-up">
                <h4 className="text-lg mobile:text-xl font-bold text-ivory mb-3">Frontend</h4>
                <p className="text-sm mobile:text-base text-silver-300">HTML5, CSS3, JavaScript, React, Vue.js</p>
              </div>
              <div className="card-glass p-6 mobile:p-5" data-aos="fade-up" data-aos-delay="100">
                <h4 className="text-lg mobile:text-xl font-bold text-ivory mb-3">Backend</h4>
                <p className="text-sm mobile:text-base text-silver-300">Node.js, PHP, Python, .NET, Database systems</p>
              </div>
              <div className="card-glass p-6 mobile:p-5" data-aos="fade-up" data-aos-delay="200">
                <h4 className="text-lg mobile:text-xl font-bold text-ivory mb-3">Responsive</h4>
                <p className="text-sm mobile:text-base text-silver-300">Mobile-first design, Bootstrap, CSS Grid, Flexbox</p>
              </div>
              <div className="card-glass p-6 mobile:p-5" data-aos="fade-up" data-aos-delay="300">
                <h4 className="text-lg mobile:text-xl font-bold text-ivory mb-3">Performance</h4>
                <p className="text-sm mobile:text-base text-silver-300">CDN, caching, image optimization, lazy loading</p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Process - Mobile Page Separation */}
        <section className="py-16 mobile:section-py relative mobile-page-section">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 mobile:px-0 relative z-10">
            <div className="text-center mb-12 mobile:mb-10">
              <h2 className="mobile:page-title">OUR DEVELOPMENT PROCESS</h2>
              <div className="flex justify-center my-3">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-lg mobile:text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
                A systematic approach that ensures quality and timely delivery
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mobile:gap-4">
              <div className="card-glass p-5 mobile:p-4 text-center" data-aos="fade-up">
                <div className="text-2xl mobile:text-3xl font-bold text-gold-400 mb-3">01</div>
                <h4 className="text-lg mobile:text-xl font-bold text-ivory mb-2">Discovery & Planning</h4>
                <p className="text-sm mobile:text-base text-silver-300">Requirements gathering, user research, and project planning</p>
              </div>
              <div className="card-glass p-5 mobile:p-4 text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="text-2xl mobile:text-3xl font-bold text-gold-400 mb-3">02</div>
                <h4 className="text-lg mobile:text-xl font-bold text-ivory mb-2">Design & Prototyping</h4>
                <p className="text-sm mobile:text-base text-silver-300">UI/UX design, wireframes, and interactive prototypes</p>
              </div>
              <div className="card-glass p-5 mobile:p-4 text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="text-2xl mobile:text-3xl font-bold text-gold-400 mb-3">03</div>
                <h4 className="text-lg mobile:text-xl font-bold text-ivory mb-2">Development & Testing</h4>
                <p className="text-sm mobile:text-base text-silver-300">Clean coding, testing, and quality assurance</p>
              </div>
              <div className="card-glass p-5 mobile:p-4 text-center" data-aos="fade-up" data-aos-delay="300">
                <div className="text-2xl mobile:text-3xl font-bold text-gold-400 mb-3">04</div>
                <h4 className="text-lg mobile:text-xl font-bold text-ivory mb-2">Launch & Support</h4>
                <p className="text-sm mobile:text-base text-silver-300">Deployment, training, and ongoing maintenance</p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us - Mobile Page Separation */}
        <section className="py-16 mobile:section-py relative mobile-page-section">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 mobile:px-0 relative z-10">
            <div className="text-center mb-12 mobile:mb-10">
              <h2 className="mobile:page-title">WHY CHOOSE SVAG FOR WEB DEVELOPMENT?</h2>
              <div className="flex justify-center my-3">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-lg mobile:text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
                Our expertise and commitment to quality set us apart
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mobile:gap-4">
              <div className="card-glass p-6 mobile:p-5 text-center" data-aos="fade-up">
                <div className="text-3xl mobile:text-4xl text-gold-400 mb-3">📱</div>
                <h4 className="text-lg mobile:text-xl font-bold text-ivory mb-2">Mobile-First Design</h4>
                <p className="text-sm mobile:text-base text-silver-300">All our websites are designed mobile-first, ensuring perfect functionality across all devices</p>
              </div>
              <div className="card-glass p-6 mobile:p-5 text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="text-3xl mobile:text-4xl text-gold-400 mb-3">⚡</div>
                <h4 className="text-lg mobile:text-xl font-bold text-ivory mb-2">Performance Optimized</h4>
                <p className="text-sm mobile:text-base text-silver-300">We prioritize speed and performance, ensuring your website loads quickly and ranks well</p>
              </div>
              <div className="card-glass p-6 mobile:p-5 text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="text-3xl mobile:text-4xl text-gold-400 mb-3">🔒</div>
                <h4 className="text-lg mobile:text-xl font-bold text-ivory mb-2">Security First</h4>
                <p className="text-sm mobile:text-base text-silver-300">Built-in security measures protect your website and customer data from threats</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section - Mobile Page Separation */}
        <section className="py-16 mobile:section-py relative mobile-page-section">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 mobile:px-0 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mobile:page-title">READY TO BUILD YOUR ONLINE PRESENCE?</h2>
              <p className="text-lg mobile:text-xl text-gold-300 mt-4 mb-6 max-w-2xl mx-auto font-sans" data-aos="fade-up" data-aos-delay="100">
                Let's discuss how our web development services can help you establish a powerful online presence that drives business growth.
              </p>
              <div className="mt-5 mb-8">
                <div className="flex flex-wrap justify-center gap-4 mobile:gap-3">
                  <div className="flex items-center">
                    <span className="text-gold-400 mr-2">✓</span>
                    <span className="text-sm mobile:text-base text-silver-300">Free Consultation</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gold-400 mr-2">✓</span>
                    <span className="text-sm mobile:text-base text-silver-300">Custom Strategy</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gold-400 mr-2">✓</span>
                    <span className="text-sm mobile:text-base text-silver-300">Ongoing Support</span>
                  </div>
                </div>
              </div>
              <div className="mt-8">
                <a 
                  href="/contact" 
                  className="btn-royal-gold px-6 py-3 mobile:btn-full text-lg inline-block"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  GET STARTED
                </a>
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

export default WebDevelopmentPage;