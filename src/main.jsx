import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

// Check if device is mobile
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// Initialize AOS with enhanced configuration for royal theme
AOS.init({
  duration: isMobile ? 600 : 800,
  easing: 'ease-out-cubic',
  once: true,
  offset: isMobile ? 50 : 100,
  delay: isMobile ? 50 : 100,
  anchorPlacement: 'top-bottom',
  disable: function() {
    // Disable AOS on mobile devices for better performance
    return isMobile && window.innerWidth < 768;
  }
});

// Refresh AOS on route changes for better performance
window.addEventListener('load', AOS.refresh);

// Add mobile-specific optimizations
if (isMobile) {
  // Add touch handling optimizations
  document.addEventListener('touchstart', function() {}, { passive: true });
  
  // Reduce motion for mobile devices
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.documentElement.classList.add('reduce-motion');
  }
}

// Add font loading optimization
document.fonts.ready.then(() => {
  // Trigger reflow to ensure fonts are applied
  document.body.offsetHeight;
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)