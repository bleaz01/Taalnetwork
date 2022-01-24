module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    minWidth: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    },
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
     greyColor:"#F7FAFC",
     greenColor:"#7ED957",
     whiteColor:'#FFF',
     redColor:"#FA4047",
     yelColor:"#F0C93E"
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      regular: ['ComicNeue', 'regular'],
      bold:['ComicNeue', 'bold'],
      italic: ['ComicNeue', 'italic']

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
