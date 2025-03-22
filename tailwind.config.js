/** @type {import('tailwindcss').Config} */
export default {
  content: ["./**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px',
    },
    extend: {
      colors: {
        primary: '#2b6cb0',
        secondary: '#64748b',
        dark: '#1e293b',
        light: '#ffffff',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}