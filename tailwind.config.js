module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '0px 3px 16px 5px rgba(125,125,125,0.8)',
        'contact' :'0 0 20px 1px rgba(0, 0, 0, 0.1)' ,
      },
      fontFamily: {
        SecularOne: ["Secular One", "sans-serif"],
        primary: ["Montserrat", "sans-serif"],

        secondary: ["Montserrat", "sans-serif"]
      },
      fontSize: {
        'sosmall':'.6rem',
        'xs': '.75rem',
        'sm': '.875rem',
        
        'base': '1rem',
        'lg': '1.125rem',
        'xl': '1.25rem',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
        
      },
      
    },
    
    screens: {
      'zoro' :'200px',
      'sm' : '640px',
      'md' : '768px',
      'lg' : '1024px',
      'xl' : '1280px',
      '2xl' : '1536px',
      '3xl': '1696px',
    },
  },
  plugins: [],
}
