import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import AllServicesPage from './pages/AllServicesPage';
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
import GraphicDesignPage from './pages/GraphicDesignPage';
import ClientsPage from './pages/ClientsPage';
import AnimationDemoPage from './pages/AnimationDemoPage';
import MainLayout from './components/MainLayout';
import PageTransition from './components/PageTransition';

function App() {
  const location = useLocation();
  
  return (
    <MainLayout>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <PageTransition>
              <Home />
            </PageTransition>
          } />
          <Route path="/about" element={
            <PageTransition>
              <AboutPage />
            </PageTransition>
          } />
          <Route path="/services" element={
            <PageTransition>
              <ServicesPage />
            </PageTransition>
          } />
          <Route path="/all-services" element={
            <PageTransition>
              <AllServicesPage />
            </PageTransition>
          } />
          {/* Individual service pages */}
          <Route path="/services/digital-consulting" element={
            <PageTransition>
              <DigitalConsultingPage />
            </PageTransition>
          } />
          <Route path="/services/web-development" element={
            <PageTransition>
              <WebDevelopmentPage />
            </PageTransition>
          } />
          <Route path="/services/digital-marketing" element={
            <PageTransition>
              <DigitalMarketingPage />
            </PageTransition>
          } />
          <Route path="/services/social-media-marketing" element={
            <PageTransition>
              <SocialMediaMarketingPage />
            </PageTransition>
          } />
          <Route path="/services/graphic-designing" element={
            <PageTransition>
              <GraphicDesigningPage />
            </PageTransition>
          } />
          <Route path="/services/graphic-design" element={
            <PageTransition>
              <GraphicDesignPage />
            </PageTransition>
          } />
          <Route path="/portfolio" element={
            <PageTransition>
              <PortfolioPage />
            </PageTransition>
          } />
          <Route path="/what-we-do" element={
            <PageTransition>
              <WhatWeDoPage />
            </PageTransition>
          } />
          <Route path="/digital-services" element={
            <PageTransition>
              <DigitalServicesPage />
            </PageTransition>
          } />
          <Route path="/print-services" element={
            <PageTransition>
              <PrintServicesPage />
            </PageTransition>
          } />
          <Route path="/clients" element={
            <PageTransition>
              <ClientsPage />
            </PageTransition>
          } />
          <Route path="/contact" element={
            <PageTransition>
              <ContactPage />
            </PageTransition>
          } />
          <Route path="/animation-demo" element={
            <PageTransition>
              <AnimationDemoPage />
            </PageTransition>
          } />
        </Routes>
      </AnimatePresence>
    </MainLayout>
  );
}

export default App;