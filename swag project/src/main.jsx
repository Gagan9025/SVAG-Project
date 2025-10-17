import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize AOS with enhanced configuration for royal theme
AOS.init({
  duration: 800,
  easing: 'ease-out-cubic',
  once: true,
  offset: 100,
  delay: 100,
  anchorPlacement: 'top-bottom',
  disable: function() {
    // Disable AOS on mobile devices for better performance
    return window.innerWidth < 768;
  }
});

// Refresh AOS on route changes for better performance
window.addEventListener('load', AOS.refresh);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)