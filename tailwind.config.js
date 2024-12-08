const { content, theme, plugins } = require('./tailwind.config');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  fontFamily: {
    custom: ['"Instrument Sans"', 'sans-serif'], // Add custom font
  },
  tracking: {
    '-0.4': '-0.4px', // Add custom tracking
  },
  lineHeight: {
    '1.029': '1.029em',
  },
  borderleft:{
    leftborder:'2px solid #c0d1ec'
  } ,
  width:{
  w:'479px'
  },
  plugins: [],
}

