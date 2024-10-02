/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      sm: { max: '960px' },
      xs: { max: '600px' },
    },
    colors: {
      white: '#ffffff',
      black: '#252A32',
      grey: {
        dark: '#F5F5FC',
        base: '#E4E6F1',
        light: '#F6F9FE',
      },
      blue: {
        darker: '#4368E0',
        dark: '#449CF4',
        base: '#68C2E9',
        light: '#97AACD',
        lighter: '#D9E7FF',
      }
    },
    fontSize: {
      xs: '11px',
      sm: '12px',
      base: '14px',
      'lg-1': '18px',
      'lg-2': '22px'
    },
    extend: {},
  },
  plugins: [],
}

