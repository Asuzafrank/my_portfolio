/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      gridTemplateColumns:{
        '50/50': '50% 48%',
        '60/40': '60% 38%'
      },
      borderRadius:{
        '3xl': '30px'
      },
      width:{
        '13': '400px'
      }
    },
  },
  plugins: [],
}

