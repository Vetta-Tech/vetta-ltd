module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/container/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    container: {
      // you can configure the container to be centered
      center: true,

      // or have default horizontal padding
      padding: '1rem',

      // default breakpoints but with 40px removed
      screens: {
        sm: '600px',
        md: '728px',
        lg: '984px',
        xl: '1240px',
        '2xl': '1496px'
      }
    },
    extend: {
      fontFamily: {
        monster: ['Montserrat']
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
        matteBlack: '#383D3F'
      }
    },
    minHeight: {
      '2/3': '70%'
    }
  },
  plugins: [require('tailwind-scrollbar-hide')]
}
