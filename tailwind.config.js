/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        messageBackgroundColor: "#CBE8EF",
        unimelbScienceBlue: "#012A58",
        unimelbTeal: "#003C55",
        unimelbDarkBlue: "#000B34",
        unimelbBlue: '#000F46',
        scienceCat: "#CAF3DA",
        tabGreen: '#D5E0D3',
        requisites: "#ff6f3c",
        subjectSidebar: '#EDF2F5',
        smallTabBlue: '#35659E',
        subjectBackground: "#0058A6",
        unimelbFooterBottom: '#000B34',
        unimelbSignin: "#094183",
        buttonGreen: "#00875A",
      },
      fontFamily: {
        inter: ['var(--font-inter)', 'sans-serif'],
        'nycd': ['var(--font-nycd)', 'cursive'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1.5' }],
        sm: ['0.875rem', { lineHeight: '1.5715' }],
        base: ['1rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        lg: ['1.125rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        xl: ['1.25rem', { lineHeight: '1.5', letterSpacing: '-0.01em' }],
        '2xl': ['1.5rem', { lineHeight: '1.415', letterSpacing: '-0.01em' }],
        '3xl': ['1.875rem', { lineHeight: '1.333', letterSpacing: '-0.01em' }],
        '4xl': ['2.25rem', { lineHeight: '1.277', letterSpacing: '-0.01em' }],
        '5xl': ['3rem', { lineHeight: '1', letterSpacing: '-0.01em' }],
        '6xl': ['3.75rem', { lineHeight: '1', letterSpacing: '-0.01em' }],
        '7xl': ['4.5rem', { lineHeight: '1', letterSpacing: '-0.01em' }],
      },
      animation: {
        'endless': 'endless 20s linear infinite',
        'shine': 'shine 5s linear 500ms infinite',
        'float': 'float 2s ease-in-out infinite',
        'infinite-scroll': 'infinite-scroll 60s linear infinite',
        'infinite-scroll-inverse': 'infinite-scroll-inverse 60s linear infinite',
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      translate: {
        "22": '5.2rem'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
