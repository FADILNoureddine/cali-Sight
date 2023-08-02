/** @type {import('tailwindcss').Config} */
module.exports = {
  // important: true,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      sans: ['Lexend', 'League Spartan', 'sans-serif'],
      spartan: 'League Spartan',
      maven_bold: 'Maven Pro Bold',
      maven_black: 'Maven Pro Black',
      indie_flower: 'Indie Flower',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }, 
      spacing: {
  
        '17': '17rem',
        '21': '21rem',
        '25': '25rem',
        '26': '26rem', 
        '27': '27rem', 
       
        '29': '29rem',                
        '30': '30rem',
        '31': '31rem',
        '31': '31rem',
        '33': '33rem',
        '34': '34rem',
        '35': '35rem',
        '51': '51rem',
        '140': '140rem',


        
       },    
       colors: {
        'primary-color': '#2639e2',
        'section': '#f9f9f9',
        'arrow-color': '#a7afb5',
        'icon-color': "#569dff",
        'gardien-color': '#133677b3'
      },
      width: {
        '27': '27vw',
        '29': '29vw',
        '30': '30vw',
        '43': '43vw',
        '45': '45vw',
        '47': '47vw',
        '50': '50vw',
        '63': '63.5vw',
        '85': '85vw',
        '86': '86vw',
        '88': '88vw',
        '90': '90vw',
        '93': '93vw',
        '94': '94vw',
        '95': '95vw',
        
      },
      height: {
       '84': '84vh',
       '108': '108vh',
       '120': '120vh',
       '153': '153vh',
        
      },
      maxWidth: {
        '79': '79rem',
      }
    },
    screens: {
      xs: '320px',
      // => @media (min-width: 320px) { ... }

      sm: '425px',
      // => @media (min-width: 576px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '992px',
      // => @media (min-width: 1024px) { ... }

      xl: '1024px',
      // => @media (min-width: 1200px) { ... }

      'xxl': '1440px',
      // => @media (min-width: 1400px) { ... }

      '2xl': '1920px',
      // => @media (min-width: 1400px) { ... }

      '3xl': '2560px',
      // => @media (min-width: 1600px) { ... }
      narrow: { raw: '(max-aspect-ratio: 3 / 2)' },
      wide: { raw: '(min-aspect-ratio: 3 / 2)' },
      'taller-than-854': { raw: '(min-height: 854px)' },
    },
  },
  plugins: [],
}
