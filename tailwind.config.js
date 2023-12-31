/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    //font family
    fontFamily: {
      'inter':['Inter', 'sans-serif'],
    },
    colors:{
      //primary color
  'Soft-orange': 'hsl(35, 77%, 62%)',
  'Soft-red': 'hsl(5, 85%, 63%)',
  // Neutral colors
  'Off-white': 'hsl(36, 100%, 99%)',
  'Grayish-blue': 'hsl(233, 8%, 79%)',
  'Dark-grayish-blue': 'hsl(236, 13%, 42%)',
  'dark-blue': 'hsl(240, 100%, 5%)',
    },
    extend: {},
  },
  plugins: [],
}

