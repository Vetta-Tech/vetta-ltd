module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/container/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        monster: ['Montserrat'],
      },
      colors: {
        ovou: '##ff653a',
        cyellow: '#F1D900',
        softYellow: '#EEEE9B',
        cblue: '#00344A',
        softBlue: '#005F9D',
        cred: '#E41F24',
        softRed: '#F47174',
        cgreen: '#005228',
        softGreen: '#9FCECE',
        cwhite: '#F6FCFA',
        softWhite: '#DAE6E2',
        cblack: '#171717',
        matteBlack: '#383D3F',
      },
    },
    minHeight: {
      '2/3': '70%',
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          '@screen sm': {
            maxWidth: '540px',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '960px',
          },
          '@screen xl': {
            maxWidth: '1140px',
          },
        },
      })
    },
  ],
}
