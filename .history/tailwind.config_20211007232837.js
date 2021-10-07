module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
  
    screens: {
      xs:'415px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
     baseColor:"#4337C9",
     secondeColor:"#111827",
     baseTextColor:"#ECEBEF",
     greyColor:"#F7FAFC"
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {},
  },
  variants: {
    extend: {
      visibility: ['hover', 'focus'],

    },
  },
  plugins: [],
}
