module.exports = {
    content: ['./app/**/*.{js,jsx}', './components/**/*.{js,jsx}'],
    theme: {
      extend: {
        colors: {
          primary: '#acca57',
          dark: '#0d0d0d',
          light: '#f9f9f9',
          gray: '#a6a6a6',
          highlight: '#1c1c1c',
          soft: '#5a5959',
        },
        fontFamily: {
          title: ['var(--font-title)'],
          body: ['var(--font-body)'],
        },
        borderRadius: {
          xl: '1rem',
          '2xl': '1.5rem',
        },
      },
    },
    plugins: [],
  }
  
  