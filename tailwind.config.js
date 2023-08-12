/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#cf4277',
        primary_light: '#ec4c8a',
        footer: '#9b2552',
      },
      screens: {
        '400px': '400px',
        '500px': '500px',
        '600px': '600px',
        '620px': '620px',
        '730px': '730px',
        '850px': '850px',
        '1059px': '1060px',
      },
    },
  },
  plugins: [],
};
