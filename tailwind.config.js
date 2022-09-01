const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'origin-protocol-button-start': '#8C66FC',
        'origin-protocol-button-end': '#0274F1',
        'ousd-button-start': '#B361E6',
        'ousd-button-end': '#6A36FC',
        'ousd-button-dark-start': '#402154',
        'ousd-button-dark-end': '#120046',
        'story-button-start': '#8C66FC',
        'story-button-end': '#429CFF',
      },
      textColor: {
        'story-blue': '#2B70F5'
      },
      fontFamily: () => ({
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      }),
      lineHeight: {
        'button': '3.5rem',
      },
      boxShadow: {
        DEFAULT: '0px 27px 80px rgba(0, 0, 0, 0.07), 0px 6.0308px 17.869px rgba(0, 0, 0, 0.0417275), 0px 1.79553px 5.32008px rgba(0, 0, 0, 0.0282725);'
      },
      animation: {
        gradient: 'gradient 15s ease infinite'
      },
      keyframes: {
        gradient: {
          '0%': {
            backgroundPosition: '0% 50%'
          },
          '50%': {
            backgroundPosition: '100% 50%'
          },
          '100%': {
            backgroundPosition: '0% 50%'
          }
        }
      }
    },
  },
  plugins: [],
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
}
