import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';

const ClientsPage = () => {
  // Client data with temporary logos
  const clients = [
    {
      name: "EAS Traders",
      logo: "https://via.placeholder.com/200x100/251b5a/ffffff?text=EAS+TRADERS"
    },
    {
      name: "Top Hill",
      logo: "https://via.placeholder.com/200x100/1a1a2e/ffd724?text=TOP+HILL"
    },
    {
      name: "Calibre Engineering",
      logo: "https://via.placeholder.com/200x100/0f0f1a/ffffff?text=CALIBRE"
    },
    {
      name: "Qatar Corp",
      logo: "https://via.placeholder.com/200x100/161625/ffd724?text=QATAR+CORP"
    },
    {
      name: "TechFlow Solutions",
      logo: "https://via.placeholder.com/200x100/251b5a/ffffff?text=TECHFLOW"
    },
    {
      name: "InnovateLab",
      logo: "https://via.placeholder.com/200x100/1a1a2e/ffd724?text=INNOVATELAB"
    },
    {
      name: "StyleHub",
      logo: "https://via.placeholder.com/200x100/0f0f1a/ffffff?text=STYLEHUB"
    },
    {
      name: "Green Energy Co",
      logo: "https://via.placeholder.com/200x100/161625/ffd724?text=GREEN+ENERGY"
    },
    {
      name: "Finance First",
      logo: "https://via.placeholder.com/200x100/251b5a/ffffff?text=FINANCE+FIRST"
    },
    {
      name: "Health Plus",
      logo: "https://via.placeholder.com/200x100/1a1a2e/ffd724?text=HEALTH+PLUS"
    },
    {
      name: "EduTech Solutions",
      logo: "https://via.placeholder.com/200x100/0f0f1a/ffffff?text=EDUTECH"
    },
    {
      name: "LogiFlow",
      logo: "https://via.placeholder.com/200x100/161625/ffd724?text=LOGIFLOW"
    },
    {
      name: "TechFlow Solutions",
      logo: "https://via.placeholder.com/200x100/251b5a/ffffff?text=TECHFLOW"
    },
    {
      name: "InnovateLab",
      logo: "https://via.placeholder.com/200x100/1a1a2e/ffd724?text=INNOVATELAB"
    },
    {
      name: "StyleHub",
      logo: "https://via.placeholder.com/200x100/0f0f1a/ffffff?text=STYLEHUB"
    },
    {
      name: "Green Energy Co",
      logo: "https://via.placeholder.com/200x100/161625/ffd724?text=GREEN+ENERGY"
    },
    {
      name: "Finance First",
      logo: "https://via.placeholder.com/200x100/251b5a/ffffff?text=FINANCE+FIRST"
    },
    {
      name: "Health Plus",
      logo: "https://via.placeholder.com/200x100/1a1a2e/ffd724?text=HEALTH+PLUS"
    },
  ];

  return (
    <div className="bg-royal-dark text-silver-800 font-sans relative min-h-screen flex flex-col">
      {/* Background Beams animation is provided by MainLayout */}
      
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-dark to-royal-blue z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-7xl font-extrabold mb-6 font-heading text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-ivory">
                Our Clients
              </h1>
              <p className="text-2xl text-gold-300 mt-6 max-w-3xl mx-auto font-sans">
                Trusted by leading companies across Qatar
              </p>
            </div>
          </div>
        </section>

        {/* Clients Section */}
        <section className="py-20 relative">
          <div className="absolute inset-0 bg-gradient-to-b from-royal-blue to-royal-dark z-0"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-8">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="group relative bg-royal-navy/20 backdrop-blur-sm border border-gold-400/20 hover:border-gold-400/50 rounded-xl p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-royal-navy/30 flex items-center justify-center"
                  data-aos="fade-up"
                  data-aos-delay={100 + (index % 8) * 50}
                >
                  {/* Client Logo */}
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="max-w-full max-h-16 object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-all duration-300"
                  />
                  
                  {/* Hover Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gold-400/5 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default ClientsPage;