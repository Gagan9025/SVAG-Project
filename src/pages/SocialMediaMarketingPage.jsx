import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const SocialMediaMarketingPage = () => {
  // Services
  const services = [
    {
      title: "Social Media Strategy & Calendar Creation",
      description: "Comprehensive social media strategies with organized content calendars:",
      features: [
        "Platform-specific strategy development",
        "Content calendar planning & scheduling",
        "Audience research and targeting",
        "Competitive analysis & benchmarking",
        "Performance tracking & optimization"
      ]
    },
    {
      title: "Content Creation & Posting",
      description: "Engaging content that resonates with your target audience:",
      features: [
        "Creative copywriting & storytelling",
        "Visual content design & creation",
        "Video content production & editing",
        "Regular posting schedule management",
        "Content optimization & A/B testing"
      ]
    },
    {
      title: "Visual Post Design (Stories, Graphics)",
      description: "Eye-catching visuals for stories, posts, and social media graphics:",
      features: [
        "Instagram stories & highlights design",
        "Post graphics & template creation",
        "Branded visual elements & assets",
        "Video thumbnails & cover images",
        "Consistent brand styling & guidelines"
      ]
    },
    {
      title: "Paid Social Ads Management",
      description: "Strategic paid advertising across all social media platforms:",
      features: [
        "Facebook & Instagram ads management",
        "LinkedIn advertising & B2B targeting",
        "Twitter promoted content & trends",
        "Ad creative development & testing",
        "Campaign optimization & ROI tracking"
      ]
    },
    {
      title: "Community Engagement & Analytics",
      description: "Active community management with detailed performance insights:",
      features: [
        "Comment management & moderation",
        "Direct message responses & support",
        "Community building & engagement",
        "Performance tracking & analytics",
        "ROI measurement & reporting"
      ]
    }
  ];

  // Platforms
  const platforms = [
    {
      name: "Facebook",
      description: "Community building, brand awareness, and targeted advertising for businesses of all sizes with advanced audience targeting and engagement tools."
    },
    {
      name: "Instagram",
      description: "Visual storytelling, influencer partnerships, and shoppable content for brand engagement with Stories, Reels, and IGTV optimization."
    },
    {
      name: "LinkedIn",
      description: "Professional networking, B2B marketing, and thought leadership content with targeted business audience engagement and lead generation."
    },
    {
      name: "Twitter",
      description: "Real-time engagement, customer service, and trending topic participation with viral content potential and direct audience interaction."
    },
    {
      name: "YouTube",
      description: "Video content marketing, brand storytelling, and educational content with SEO optimization and long-form engagement strategies."
    },
    {
      name: "TikTok",
      description: "Short-form video content, viral marketing, and reaching younger demographics with trending challenges and creative storytelling."
    }
  ];

  // Process Steps
  const processSteps = [
    {
      number: "01",
      title: "Research & Analysis",
      description: "Comprehensive audience research, competitor analysis, and platform insights to understand your market and opportunities."
    },
    {
      number: "02",
      title: "Strategy Development",
      description: "Custom content themes, optimal posting schedules, and engagement strategies tailored to your brand and audience."
    },
    {
      number: "03",
      title: "Content Creation",
      description: "High-quality, engaging content creation tailored to each platform's unique requirements and audience preferences."
    },
    {
      number: "04",
      title: "Optimization",
      description: "Continuous performance analysis and optimization to improve engagement, reach, and conversion rates over time."
    }
  ];

  // Why Choose Us
  const whyChooseUs = [
    {
      title: "Quick Results",
      description: "Our strategies are designed to deliver visible results quickly, helping you reach your customers soon with immediate engagement and growth."
    },
    {
      title: "Creative Excellence",
      description: "Eye-catching visuals and compelling content that stands out in crowded social feeds with innovative design and storytelling."
    },
    {
      title: "Data-Driven",
      description: "Performance tracking and analytics ensure your social media efforts deliver measurable ROI with actionable insights."
    },
    {
      title: "24/7 Community Management",
      description: "Round-the-clock monitoring and engagement to maintain active community presence."
    },
    {
      title: "Multi-Platform Expertise",
      description: "Specialized knowledge across all major social media platforms for maximum reach."
    }
  ];

  // Stats
  const stats = [
    { value: "500+", label: "Happy Clients" },
    { value: "2M+", label: "Followers Gained" },
    { value: "300%", label: "Avg. Engagement Increase" }
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
                Social Media Marketing
              </h1>
              <div className="flex justify-center my-6">
                <div className="w-16 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6 font-heading text-gold-400 mt-8" data-aos="fade-up" data-aos-delay="100">
                Build Meaningful Connections with Your Audience
              </h2>
              <p className="text-lg md:text-xl text-gold-300 mt-8 max-w-3xl mx-auto font-sans leading-relaxed" data-aos="fade-up" data-aos-delay="200">
                Our social media marketing services help brands create authentic connections with their audience across all platforms. We develop strategic content plans, manage social presence, and drive engagement that builds brand loyalty and drives business growth.
              </p>
            </div>
          </div>
        </section>

        {/* Community Building Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                Community Building
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <h3 className="text-2xl text-gold-300 mt-4 mb-2 max-w-3xl mx-auto font-heading">
                Strategic Social Media Presence
              </h3>
              <p className="text-lg text-silver-400 mt-8 max-w-3xl mx-auto font-sans leading-relaxed">
                Social media has become the primary way people discover, research, and engage with brands. With billions of active users across multiple platforms, having a strategic social media presence is no longer optional—it's essential for business success and customer connection.
              </p>
              <p className="text-lg text-silver-400 mt-6 max-w-3xl mx-auto font-sans leading-relaxed">
                Our social media marketing approach goes beyond just posting content. We develop comprehensive strategies that build authentic connections with your audience, increase brand awareness, and drive meaningful engagement that converts followers into loyal customers and brand advocates.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="card-glass p-6 text-center">
                <div className="text-2xl text-gold-400 mb-4">📱</div>
                <h3 className="text-lg font-bold text-ivory">Content Strategy</h3>
              </div>
              <div className="card-glass p-6 text-center">
                <div className="text-2xl text-gold-400 mb-4">👥</div>
                <h3 className="text-lg font-bold text-ivory">Community Management</h3>
              </div>
              <div className="card-glass p-6 text-center">
                <div className="text-2xl text-gold-400 mb-4">💸</div>
                <h3 className="text-lg font-bold text-ivory">Paid Advertising</h3>
              </div>
              <div className="card-glass p-6 text-center">
                <div className="text-2xl text-gold-400 mb-4">📊</div>
                <h3 className="text-lg font-bold text-ivory">Analytics & ROI</h3>
              </div>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto mt-8">
              <div className="card-glass p-4 text-center">
                <div className="text-xl font-bold text-gold-400 mb-2">f</div>
                <h3 className="text-md font-bold text-ivory">Facebook</h3>
              </div>
              <div className="card-glass p-4 text-center">
                <div className="text-xl font-bold text-gold-400 mb-2">i</div>
                <h3 className="text-md font-bold text-ivory">Instagram</h3>
              </div>
              <div className="card-glass p-4 text-center">
                <div className="text-xl font-bold text-gold-400 mb-2">in</div>
                <h3 className="text-md font-bold text-ivory">LinkedIn</h3>
              </div>
              <div className="card-glass p-4 text-center">
                <div className="text-xl font-bold text-gold-400 mb-2">t</div>
                <h3 className="text-md font-bold text-ivory">Twitter</h3>
              </div>
              <div className="card-glass p-4 text-center">
                <div className="text-xl font-bold text-gold-400 mb-2">y</div>
                <h3 className="text-md font-bold text-ivory">YouTube</h3>
              </div>
              <div className="card-glass p-4 text-center">
                <div className="text-xl font-bold text-gold-400 mb-2">t</div>
                <h3 className="text-md font-bold text-ivory">TikTok</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Our Services Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
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
                Our Social Media Marketing Services
              </h3>
              <p className="text-lg text-silver-400 max-w-3xl mx-auto font-sans">
                Comprehensive social media solutions designed to build your online presence and engage your audience across all platforms
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {services.map((service, index) => (
                <div 
                  key={index}
                  className="card-glass p-8 hover:scale-105 transition-transform duration-300"
                  data-aos="fade-up"
                  data-aos-delay={100 * index}
                >
                  <h3 className="text-xl font-bold text-ivory mb-4">{service.title}</h3>
                  <p className="text-gold-400 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="text-gold-400 mr-2 mt-1">•</span>
                        <span className="text-silver-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Mastery Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                Platform Mastery
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <h3 className="text-2xl text-gold-300 mt-4 mb-2 max-w-3xl mx-auto font-heading">
                Platform Expertise
              </h3>
              <p className="text-lg text-silver-400 max-w-3xl mx-auto font-sans">
                We specialize in all major social media platforms to maximize your reach and engagement across diverse audiences
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {platforms.map((platform, index) => (
                <div 
                  key={index}
                  className="card-glass p-8 hover:scale-105 transition-transform duration-300"
                  data-aos="fade-up"
                  data-aos-delay={100 * index}
                >
                  <h3 className="text-xl font-bold text-ivory mb-4">{platform.name}</h3>
                  <p className="text-silver-400">{platform.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-4 relative inline-block font-heading text-gold-400">
                Our Process
                <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-gold-400 to-transparent"></span>
              </h2>
              <div className="flex justify-center my-4">
                <div className="w-8 h-1 bg-gold-400 rounded-full"></div>
              </div>
              <h3 className="text-2xl text-gold-300 mt-4 mb-2 max-w-3xl mx-auto font-heading">
                Our Content Strategy Approach
              </h3>
              <p className="text-lg text-silver-400 max-w-3xl mx-auto font-sans">
                Strategic content planning that engages your audience and drives measurable results across all platforms
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {processSteps.map((step, index) => (
                <div 
                  key={index}
                  className="card-glass p-8 text-center hover:scale-105 transition-transform duration-300"
                  data-aos="fade-up"
                  data-aos-delay={100 * index}
                >
                  <div className="text-3xl font-bold text-gold-400 mb-4">{step.number}</div>
                  <h3 className="text-xl font-bold text-ivory mb-4">{step.title}</h3>
                  <p className="text-silver-400">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
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
                Why Choose SVAG for Social Media Marketing?
              </h3>
              <p className="text-lg text-silver-400 max-w-3xl mx-auto font-sans">
                Our expertise and creative approach deliver real social media results that help you reach your customers soon
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {whyChooseUs.map((item, index) => (
                <div 
                  key={index}
                  className="card-glass p-8 hover:scale-105 transition-transform duration-300"
                  data-aos="fade-up"
                  data-aos-delay={100 * index}
                >
                  <h3 className="text-xl font-bold text-ivory mb-4">{item.title}</h3>
                  <p className="text-silver-400">{item.description}</p>
                </div>
              ))}
            </div>
            
            <div className="card-glass p-8 max-w-4xl mx-auto mt-12 text-center" data-aos="fade-up" data-aos-delay="600">
              <h3 className="text-2xl font-bold text-ivory mb-4">Ready to Dominate Social Media?</h3>
              <p className="text-silver-400 mb-8">
                Join hundreds of businesses that have transformed their social media presence with our proven strategies. Get a FREE Social Media Audit and discover your growth potential.
              </p>
              
              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto mb-10">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-gold-400 mb-2">{stat.value}</div>
                    <p className="text-silver-400">{stat.label}</p>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <p className="text-silver-400 mb-4">No long-term contracts • 30-day money-back guarantee</p>
                <div className="flex flex-wrap justify-center gap-6 mb-8">
                  <div className="flex items-center">
                    <span className="text-gold-400 mr-2">✓</span>
                    <span className="text-silver-300">Free Consultation</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gold-400 mr-2">✓</span>
                    <span className="text-silver-300">Custom Strategy</span>
                  </div>
                  <div className="flex items-center">
                    <span className="text-gold-400 mr-2">✓</span>
                    <span className="text-silver-300">Ongoing Support</span>
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
                  GET YOUR FREE AUDIT
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