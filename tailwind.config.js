/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-bg': '#1a1a1a',
        'dark-surface': '#2a2a2a',
        'dark-border': '#3a3a3a',
        'dark-text': '#e0e0e0',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
};