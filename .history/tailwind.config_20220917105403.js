/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      'xs': '500px',
      'sm': '640px',

      'md': '768px',
      "middle": "800px",
      "semilg": "900px",
      'lg': '1024px',

      'xl': '1100px',

      '2xl': '1300px',
      // => @media (min-width: 1536px) { ... }
    },
    
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
