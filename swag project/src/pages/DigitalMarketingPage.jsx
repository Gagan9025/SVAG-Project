import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const DigitalMarketingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 font-heading text-gold-400" data-aos="fade-up">
                Digital Marketing
              </h1>
              <div className="flex justify-center my-6">
                <div className="w-16 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl md:text-2xl text-gold-300 mt-8 max-w-3xl mx-auto font-sans leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                Drive Growth with Data-Driven Marketing Strategies
              </p>
              <p className="text-lg text-silver-400 mt-8 max-w-3xl mx-auto font-sans leading-relaxed" data-aos="fade-up" data-aos-delay="300">
                Our digital marketing services combine creativity with analytics to deliver campaigns that generate real business results. We help brands increase their online visibility, engage their target audience, and drive conversions through strategic digital marketing solutions.
              </p>
            </div>
          </div>
        </section>

        {/* Data-Driven Approach Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                Data-Driven Approach
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
                Strategic Digital Marketing
              </p>
              <p className="text-lg text-silver-400 mt-8 max-w-3xl mx-auto font-sans leading-relaxed">
                In today's competitive digital landscape, simply having a website isn't enough. You need a comprehensive digital marketing strategy that puts your brand in front of the right audience at the right time, with the right message.
              </p>
              <p className="text-lg text-silver-400 mt-6 max-w-3xl mx-auto font-sans leading-relaxed">
                Our data-driven approach combines search engine optimization, paid advertising, content marketing, and advanced analytics to create campaigns that deliver measurable results. We don't just increase your online visibility—we drive qualified traffic that converts into loyal customers and drives sustainable business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="card-glass p-6 text-center">
                <div className="text-2xl text-gold-400 mb-4">🔍</div>
                <h3 className="text-lg font-bold text-ivory">SEO & SEM</h3>
              </div>
              <div className="card-glass p-6 text-center">
                <div className="text-2xl text-gold-400 mb-4">💸</div>
                <h3 className="text-lg font-bold text-ivory">Paid Advertising</h3>
              </div>
              <div className="card-glass p-6 text-center">
                <div className="text-2xl text-gold-400 mb-4">📝</div>
                <h3 className="text-lg font-bold text-ivory">Content Strategy</h3>
              </div>
              <div className="card-glass p-6 text-center">
                <div className="text-2xl text-gold-400 mb-4">📊</div>
                <h3 className="text-lg font-bold text-ivory">Analytics & ROI</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Marketing Funnel Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-center mb-8 md:mb-0">
                  <div className="w-16 h-16 rounded-full bg-gold-400 text-royal-dark flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
                  <h3 className="text-xl font-bold text-ivory">Awareness</h3>
                </div>
                <div className="text-center mb-8 md:mb-0">
                  <div className="w-16 h-16 rounded-full bg-gold-400 text-royal-dark flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
                  <h3 className="text-xl font-bold text-ivory">Interest</h3>
                </div>
                <div className="text-center mb-8 md:mb-0">
                  <div className="w-16 h-16 rounded-full bg-gold-400 text-royal-dark flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
                  <h3 className="text-xl font-bold text-ivory">Consideration</h3>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gold-400 text-royal-dark flex items-center justify-center text-xl font-bold mx-auto mb-4">4</div>
                  <h3 className="text-xl font-bold text-ivory">Conversion</h3>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                Our Services
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <h3 className="text-2xl text-gold-300 mt-4 mb-2 max-w-3xl mx-auto font-heading">
                Our Digital Marketing Services
              </h3>
              <p className="text-lg text-silver-400 max-w-3xl mx-auto font-sans">
                Comprehensive marketing solutions designed to increase your online visibility and drive sustainable business growth
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* SEO & SEM */}
              <div className="card-glass p-8" data-aos="fade-up">
                <h3 className="text-2xl font-bold text-ivory mb-4">SEO & SEM</h3>
                <p className="text-gold-400 mb-4">Search Engine Optimization and Marketing for maximum online visibility:</p>
                <ul className="space-y-3 text-silver-400">
                  <li className="flex items-start">
                    <span className="text-gold-400 mr-2 mt-1">•</span>
                    <span>Comprehensive keyword research</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-400 mr-2 mt-1">•</span>
                    <span>On-page and technical SEO</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-400 mr-2 mt-1">•</span>
                    <span>Local SEO optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-400 mr-2 mt-1">•</span>
                    <span>Google Ads management</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-400 mr-2 mt-1">•</span>
                    <span>Search performance tracking</span>
                  </li>
                </ul>
              </div>
              
              {/* Content Strategy & Reporting */}
              <div className="card-glass p-8" data-aos="fade-up" data-aos-delay="100">
                <h3 className="text-2xl font-bold text-ivory mb-4">Content Strategy & Reporting</h3>
                <p className="text-gold-400 mb-4">Data-driven content strategies with comprehensive performance analytics:</p>
                <ul className="space-y-3 text-silver-400">
                  <li className="flex items-start">
                    <span className="text-gold-400 mr-2 mt-1">•</span>
                    <span>Strategic content planning</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-400 mr-2 mt-1">•</span>
                    <span>Blog and article creation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-400 mr-2 mt-1">•</span>
                    <span>Email marketing campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-400 mr-2 mt-1">•</span>
                    <span>Performance analytics</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-400 mr-2 mt-1">•</span>
                    <span>ROI measurement & reporting</span>
                  </li>
                </ul>
              </div>
              
              {/* Google & Paid Ads Management */}
              <div className="card-glass p-8" data-aos="fade-up" data-aos-delay="200">
                <h3 className="text-2xl font-bold text-ivory mb-4">Google & Paid Ads Management</h3>
                <p className="text-gold-400 mb-4">Strategic paid advertising campaigns that maximize ROI and reach:</p>
                <ul className="space-y-3 text-silver-400">
                  <li className="flex items-start">
                    <span className="text-gold-400 mr-2 mt-1">•</span>
                    <span>Google Ads optimization</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-400 mr-2 mt-1">•</span>
                    <span>Facebook & Instagram ads</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-400 mr-2 mt-1">•</span>
                    <span>Display advertising campaigns</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-400 mr-2 mt-1">•</span>
                    <span>Remarketing strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-gold-400 mr-2 mt-1">•</span>
                    <span>Budget optimization & scaling</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Our Approach Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                Our Approach
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <h3 className="text-2xl text-gold-300 mt-4 mb-2 max-w-3xl mx-auto font-heading">
                Our Marketing Strategies
              </h3>
              <p className="text-lg text-silver-400 max-w-3xl mx-auto font-sans">
                Proven approaches that deliver consistent results across all digital channels
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="card-glass p-8 text-center" data-aos="fade-up">
                <div className="text-4xl text-gold-400 mb-6">📊</div>
                <h3 className="text-2xl font-bold text-ivory mb-4">Data-Driven Decision Making</h3>
                <p className="text-silver-400">
                  Every marketing decision is backed by comprehensive data analysis, ensuring optimal performance and ROI. We use advanced analytics tools to track, measure, and optimize every aspect of your campaigns.
                </p>
              </div>
              
              <div className="card-glass p-8 text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="text-4xl text-gold-400 mb-6">👥</div>
                <h3 className="text-2xl font-bold text-ivory mb-4">Audience-Centric Approach</h3>
                <p className="text-silver-400">
                  We develop detailed buyer personas and tailor campaigns to resonate with your specific target audience. Our strategies are designed to connect with your customers at every stage of their journey.
                </p>
              </div>
              
              <div className="card-glass p-8 text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="text-4xl text-gold-400 mb-6">🔄</div>
                <h3 className="text-2xl font-bold text-ivory mb-4">Continuous Optimization</h3>
                <p className="text-silver-400">
                  Regular campaign analysis and optimization ensure your marketing efforts improve over time. We constantly monitor performance and make data-driven adjustments to maximize results.
                </p>
              </div>
            </div>
            
            <div className="card-glass p-8 max-w-4xl mx-auto mt-12 text-center" data-aos="fade-up" data-aos-delay="300">
              <div className="text-4xl text-gold-400 mb-6">🔗</div>
              <h3 className="text-2xl font-bold text-ivory mb-4">Multi-Channel Integration</h3>
              <p className="text-silver-400 max-w-3xl mx-auto">
                Seamless integration across all digital channels creates a cohesive brand experience. We ensure your message is consistent and effective across every touchpoint.
              </p>
            </div>
          </div>
        </section>

        {/* Proven Results Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                Proven Results
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <h3 className="text-2xl text-gold-300 mt-4 mb-2 max-w-3xl mx-auto font-heading">
                Measurable Results & Analytics
              </h3>
              <p className="text-lg text-silver-400 max-w-3xl mx-auto font-sans">
                Transparent reporting that shows the real impact of your marketing efforts with detailed analytics and insights
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
              <div className="card-glass p-6 text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">150%</div>
                <p className="text-silver-400">Average increase in organic traffic</p>
              </div>
              <div className="card-glass p-6 text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">85%</div>
                <p className="text-silver-400">Improvement in search rankings</p>
              </div>
              <div className="card-glass p-6 text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">200%</div>
                <p className="text-silver-400">Increase in conversion rates</p>
              </div>
              <div className="card-glass p-6 text-center">
                <div className="text-3xl font-bold text-gold-400 mb-2">3.5x</div>
                <p className="text-silver-400">Return on ad spend (ROAS)</p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="card-glass p-8 text-center" data-aos="fade-up">
                <div className="text-3xl text-gold-400 mb-4">⏱️</div>
                <h3 className="text-xl font-bold text-ivory mb-4">Real-Time Analytics</h3>
                <p className="text-silver-400">
                  Monitor campaign performance in real-time with detailed dashboards and automated reporting.
                </p>
              </div>
              
              <div className="card-glass p-8 text-center" data-aos="fade-up" data-aos-delay="100">
                <div className="text-3xl text-gold-400 mb-4">🎯</div>
                <h3 className="text-xl font-bold text-ivory mb-4">Goal Tracking</h3>
                <p className="text-silver-400">
                  Set and track specific business goals with custom conversion tracking and attribution modeling.
                </p>
              </div>
              
              <div className="card-glass p-8 text-center" data-aos="fade-up" data-aos-delay="200">
                <div className="text-3xl text-gold-400 mb-4">📋</div>
                <h3 className="text-xl font-bold text-ivory mb-4">Monthly Reports</h3>
                <p className="text-silver-400">
                  Comprehensive monthly reports with actionable insights and recommendations for improvement.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                Why Choose Us
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <h3 className="text-2xl text-gold-300 mt-4 mb-2 max-w-3xl mx-auto font-heading">
                Why Choose SVAG for Digital Marketing?
              </h3>
              <p className="text-lg text-silver-400 max-w-3xl mx-auto font-sans">
                Our expertise and proven track record make us the ideal partner for your digital marketing success
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="card-glass p-8" data-aos="fade-up">
                <div className="text-3xl text-gold-400 mb-4">🏆</div>
                <h3 className="text-xl font-bold text-ivory mb-4">Proven Results</h3>
                <p className="text-silver-400">
                  Track record of delivering measurable improvements in traffic, rankings, and conversions with data-backed strategies that consistently outperform industry standards.
                </p>
              </div>
              
              <div className="card-glass p-8" data-aos="fade-up" data-aos-delay="100">
                <div className="text-3xl text-gold-400 mb-4">⚙️</div>
                <h3 className="text-xl font-bold text-ivory mb-4">Advanced Technology</h3>
                <p className="text-silver-400">
                  Utilize cutting-edge tools and platforms for optimal campaign performance, including AI-powered optimization and predictive analytics.
                </p>
              </div>
              
              <div className="card-glass p-8" data-aos="fade-up" data-aos-delay="200">
                <div className="text-3xl text-gold-400 mb-4">👨‍💼</div>
                <h3 className="text-xl font-bold text-ivory mb-4">Dedicated Support</h3>
                <p className="text-silver-400">
                  Personal account manager and 24/7 support for all your marketing needs, with regular check-ins and strategic consultations.
                </p>
              </div>
              
              <div className="card-glass p-8" data-aos="fade-up" data-aos-delay="300">
                <div className="text-3xl text-gold-400 mb-4">⚡</div>
                <h3 className="text-xl font-bold text-ivory mb-4">Quick Turnaround</h3>
                <p className="text-silver-400">
                  Fast implementation and optimization of campaigns for immediate results.
                </p>
              </div>
              
              <div className="card-glass p-8" data-aos="fade-up" data-aos-delay="400">
                <div className="text-3xl text-gold-400 mb-4">💰</div>
                <h3 className="text-xl font-bold text-ivory mb-4">Transparent Pricing</h3>
                <p className="text-silver-400">
                  Clear, upfront pricing with no hidden fees or surprise charges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Get Started Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-heading text-gold-400" data-aos="fade-up">
                Get Started
              </h2>
              <div className="flex justify-center my-6">
                <div className="w-16 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <h3 className="text-2xl text-gold-300 mt-4 mb-6 max-w-3xl mx-auto font-heading">
                Ready to Boost Your Digital Presence?
              </h3>
              <p className="text-lg text-silver-400 mt-4 mb-8 max-w-2xl mx-auto font-sans" data-aos="fade-up" data-aos-delay="100">
                Let's discuss how our digital marketing strategies can bring your business to your customers and drive sustainable growth with measurable results.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
                <div className="card-glass p-6 flex flex-col items-center">
                  <div className="text-3xl text-gold-400 mb-4">📅</div>
                  <h4 className="text-xl font-bold text-ivory mb-2">Free Strategy Session</h4>
                </div>
                <div className="card-glass p-6 flex flex-col items-center">
                  <div className="text-3xl text-gold-400 mb-4">📝</div>
                  <h4 className="text-xl font-bold text-ivory mb-2">Custom Campaign Plan</h4>
                </div>
                <div className="card-glass p-6 flex flex-col items-center">
                  <div className="text-3xl text-gold-400 mb-4">🔄</div>
                  <h4 className="text-xl font-bold text-ivory mb-2">Ongoing Optimization</h4>
                </div>
              </div>
              
              <div className="mt-10">
                <a 
                  href="/contact" 
                  className="btn-royal-gold px-8 py-4 text-lg inline-block"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  SCHEDULE YOUR FREE CONSULTATION
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

export default DigitalMarketingPage;