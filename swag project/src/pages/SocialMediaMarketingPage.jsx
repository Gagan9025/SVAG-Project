import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import { FiSmartphone, FiUsers, FiHeart, FiTrendingUp } from 'react-icons/fi';

const SocialMediaMarketingPage = () => {
  const socialServices = [
    {
      title: "Content Creation",
      description: "Engaging content that resonates with your audience.",
      features: ["Visual Design", "Copywriting", "Video Production", "Content Calendar"],
      details: "Our content creation services help brands tell their story and connect with their audience. We develop content strategies aligned with your brand voice and create visually stunning content that drives engagement across all social media platforms."
    },
    {
      title: "Community Management",
      description: "Build and nurture meaningful relationships with your followers.",
      features: ["Engagement Response", "Community Building", "Brand Monitoring", "Crisis Management"],
      details: "We help brands build meaningful connections with their audiences through strategic community management. Our services include monitoring conversations, responding to comments and messages, and fostering a positive community around your brand."
    },
    {
      title: "Paid Advertising",
      description: "Targeted social media ads that drive conversions.",
      features: ["Campaign Strategy", "Audience Targeting", "Ad Creation", "Performance Optimization"],
      details: "Our paid social media advertising services help you reach the right audience with the right message at the right time. We create and manage highly targeted campaigns across Facebook, Instagram, LinkedIn, Twitter, and TikTok to maximize your return on investment."
    }
  ];

  const platforms = [
    {
      name: "Facebook",
      description: "Build community and drive engagement with your audience"
    },
    {
      name: "Instagram",
      description: "Visual storytelling and brand building"
    },
    {
      name: "LinkedIn",
      description: "Professional networking and B2B marketing"
    },
    {
      name: "Twitter",
      description: "Real-time engagement and brand awareness"
    },
    {
      name: "TikTok",
      description: "Viral content and reaching younger demographics"
    }
  ];

  const benefits = [
    {
      icon: <FiUsers className="text-2xl" />,
      title: "Audience Growth",
      description: "Expand your reach and attract new customers"
    },
    {
      icon: <FiHeart className="text-2xl" />,
      title: "Brand Loyalty",
      description: "Build stronger relationships with your customers"
    },
    {
      icon: <FiTrendingUp className="text-2xl" />,
      title: "Increased Traffic",
      description: "Drive more visitors to your website"
    },
    {
      icon: <FiSmartphone className="text-2xl" />,
      title: "Higher Conversions",
      description: "Turn followers into paying customers"
    }
  ];

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
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 font-heading text-gold-400" data-aos="fade-up">
                SOCIAL MEDIA MARKETING
              </h1>
              <div className="flex justify-center my-6">
                <div className="w-16 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl md:text-2xl text-gold-300 mt-8 max-w-3xl mx-auto font-sans leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                Engage your audience and grow your brand across social media platforms.
              </p>
            </div>
          </div>
        </section>

        {/* Social Media Marketing Services */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                OUR SOCIAL MEDIA SERVICES
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
                Comprehensive social media solutions to build your brand presence
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {socialServices.map((service, index) => (
                <div
                  key={index}
                  className="card-glass p-8 hover:scale-105 transition-transform duration-300"
                  data-aos="fade-up"
                  data-aos-delay={200 + index * 100}
                >
                  <div className="flex items-start mb-6">
                    <div className="text-4xl mr-4">📱</div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2 text-ivory">{service.title}</h3>
                      <p className="text-gold-400 font-medium">{service.description}</p>
                    </div>
                  </div>
                  <p className="text-silver-400 mb-6">{service.details}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <span className="text-gold-400 mr-2">✦</span>
                        <span className="text-silver-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Social Platforms */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                SOCIAL MEDIA PLATFORMS
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
                We develop platform-specific strategies for maximum impact
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {platforms.map((platform, index) => (
                <div
                  key={index}
                  className="card-glass p-6 text-center"
                  data-aos="fade-up"
                  data-aos-delay={100 * index}
                >
                  <div className="text-3xl text-gold-400 mb-4">{platform.name.charAt(0)}</div>
                  <h3 className="text-xl font-bold text-ivory mb-2">{platform.name}</h3>
                  <p className="text-silver-400 text-sm">{platform.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                SOCIAL MEDIA BENEFITS
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <p className="text-xl text-gold-300 mt-4 max-w-3xl mx-auto font-sans">
                Transform your social media presence and achieve measurable results
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="card-glass p-6 text-center"
                  data-aos="fade-up"
                  data-aos-delay={100 * index}
                >
                  <div className="text-gold-400 mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-ivory mb-2">{benefit.title}</h3>
                  <p className="text-silver-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-heading text-gold-400" data-aos="fade-up">
                READY TO AMPLIFY YOUR SOCIAL PRESENCE?
              </h2>
              <p className="text-xl text-gold-300 mt-4 mb-8 max-w-2xl mx-auto font-sans" data-aos="fade-up" data-aos-delay="100">
                Let's discuss how our social media marketing services can help you connect with your audience and grow your brand.
              </p>
              <div className="mt-6 mb-10">
                <div className="flex flex-wrap justify-center gap-6">
                  <div className="flex items-center">
                    <span className="text-gold-400 mr-2">✓</span>
                    <span className="text-silver-300">Free Social Media Audit</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gold-400 mr-2">✓</span>
                    <span className="text-silver-300">Custom Strategy</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gold-400 mr-2">✓</span>
                    <span className="text-silver-300">Monthly Reporting</span>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <a 
                  href="/contact" 
                  className="btn-royal-gold px-8 py-4 text-lg inline-block"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  START YOUR CAMPAIGN
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

export default SocialMediaMarketingPage;