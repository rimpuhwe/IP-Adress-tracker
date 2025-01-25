/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage:{
        'custom-image': "url('./public/pattern-bg-desktop.png')",
    },
    textColor:{
      'color': "#161515"
    }
    },
  },
  variants: {
    extend: {}
      ,
  },
  plugins: [],
}
