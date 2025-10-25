/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-navy': '#001B44',
        'accent-gold': '#FFB100',
        'success-green': '#4BB486',
        'alert-red': '#E24338',
        'text-dark': '#2B2B2B',
        'text-medium': '#7D8799',
        'bg-base': '#FAFAFA',
        'bg-card': '#E9EAEB',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0,0,0,0.05)',
        'md': '0 4px 6px rgba(0,0,0,0.1)',
        'lg': '0 10px 15px rgba(0,0,0,0.1)',
      }
    },
  },
  plugins: [],
}
