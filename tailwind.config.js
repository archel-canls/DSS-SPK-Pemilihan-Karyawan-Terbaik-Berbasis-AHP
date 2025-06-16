// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './*.html', // Adjust if your HTML files are in a different directory
    ],
    theme: {
      extend: {
        colors: {
          'dark-background': '#1A1A2E',
          'dark-card': '#25253F',
          'text-light': '#E0E0E0',
          'text-primary': '#B0B0B0',
          'accent-cyber-blue': '#00ADB5',
          'accent-cyber-green': '#6EEB83',
          'accent-cyber-purple': '#BF5AF2',
          'accent-cyber-gold': '#FFC600',
          'border-dark': '#3A3A5B',
        },
        fontFamily: {
          sans: ['Inter', 'sans-serif'], // Modern sans-serif font
          display: ['Orbitron', 'sans-serif'], // Techy display font
        },
        boxShadow: {
          'cyber-glow': '0 0 15px rgba(0, 173, 181, 0.6)', // Subtle glow for cards
        },
      },
    },
    plugins: [],
  }