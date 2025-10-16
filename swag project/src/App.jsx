import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import WhatWeDoPage from './pages/WhatWeDoPage';
import DigitalServicesPage from './pages/DigitalServicesPage';
import PrintServicesPage from './pages/PrintServicesPage';
// Service page imports
import DigitalConsultingPage from './pages/DigitalConsultingPage';
import WebDevelopmentPage from './pages/WebDevelopmentPage';
import DigitalMarketingPage from './pages/DigitalMarketingPage';
import SocialMediaMarketingPage from './pages/SocialMediaMarketingPage';
import GraphicDesigningPage from './pages/GraphicDesigningPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      {/* Individual service pages */}
      <Route path="/services/digital-consulting" element={<DigitalConsultingPage />} />
      <Route path="/services/web-development" element={<WebDevelopmentPage />} />
      <Route path="/services/digital-marketing" element={<DigitalMarketingPage />} />
      <Route path="/services/social-media-marketing" element={<SocialMediaMarketingPage />} />
      <Route path="/services/graphic-designing" element={<GraphicDesigningPage />} />
      <Route path="/portfolio" element={<PortfolioPage />} />
      <Route path="/what-we-do" element={<WhatWeDoPage />} />
      <Route path="/digital-services" element={<DigitalServicesPage />} />
      <Route path="/print-services" element={<PrintServicesPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
}

export default App;