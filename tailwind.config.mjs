/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#004B87',
        secondary: '#7C5295',
        success: '#4B9560',
        error: '#E04F39',
        warning: '#F4C300',
        info: '#9BB8D3',
        light: '#E3E8F1',
        dark: '#27363B',
      },
    },
  },
  plugins: [],
};
