/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'royal-dark': '#0f0f1a',
        'royal-blue': '#1a1a2e',
        'royal-navy': '#161625',
        'royal-purple': '#251b5a',
        'royal-deep': '#0d0d14',
        'gold': {
          50: '#fffdf6',
          100: '#fffbeb',
          200: '#ffefa8',
          300: '#ffe366',
          400: '#ffd724',
          500: '#e6c200',
          600: '#cca800',
          700: '#b38f00',
          800: '#8c7000',
          900: '#665200',
          950: '#403400',
        },
        'ivory': '#fdfdfd',
        'ivory-light': '#ffffff',
        'ivory-dark': '#f0f0f0',
        'crimson': '#dc143c',
        'emerald': '#50c878',
        'silver': {
          50: '#f9f9f9',
          100: '#f2f2f2',
          200: '#e5e5e5',
          300: '#d4d4d4',
          400: '#a3a3a3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0a0a0a',
        },
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Poppins', 'sans-serif'],
        'heading': ['Playfair Display', 'serif'],
        'script': ['Dancing Script', 'cursive'],
      },
      boxShadow: {
        'royal-glow': '0 0 15px rgba(255, 215, 0, 0.3)',
        'gold-glow': '0 0 20px rgba(255, 215, 0, 0.5)',
        'purple-glow': '0 0 25px rgba(37, 27, 90, 0.4)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.2)',
        'card': '0 10px 30px -15px rgba(0, 0, 0, 0.2)',
      },
      backgroundImage: {
        'royal-gradient': 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #251b5a 100%)',
        'gold-gradient': 'linear-gradient(90deg, rgba(255,215,0,0) 0%, rgba(255,215,0,0.3) 50%, rgba(255,215,0,0) 100%)',
        'purple-gradient': 'linear-gradient(135deg, #251b5a 0%, #1a1a2e 100%)',
        'gold-border': 'linear-gradient(90deg, transparent, #ffd724, transparent)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shine': 'shine 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(255, 215, 0, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(255, 215, 0, 0.6)' },
        },
        shine: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
}