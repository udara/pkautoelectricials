/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "slantedGrey": "linear-gradient(170deg,#fff 53%,#fafafa 0,#fafafa 123%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'hero': "url('/images/hero.jpg')",
      },
      colors: {
        crimsonFlame:'#d32026',
        oceanBlue: '#0177bf',
        charcoal: '#333333',
        header: '#626262',
        para: '#999999',
        white: '#ffffff',
        black: '#000000'

      },
      fontFamily: {
        racing: ['var(--font-racing-sans-one)', 'sans-serif'],
        roboto: ['var(--font-roboto)', 'sans-serif'],
      },
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        roman: 'upper-roman',
      }
    },
  },
  plugins: [],
};
