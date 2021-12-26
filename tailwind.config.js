module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        SecularOne: ["Secular One", "sans-serif"],
        primary: ["Source Code Pro", "monospace"],

        secondary: ["Playfair Display", "serif"]
      },
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
  plugins: [],
}
