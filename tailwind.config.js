/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#ff7a00',
          50: '#fff2e5',
          100: '#ffe2cc',
          200: '#ffcaba',
          300: '#ffab80',
          400: '#ff8a4d',
          500: '#ff7a00',
          600: '#e66a00',
          700: '#bf5700',
          800: '#994500',
          900: '#7a3800',
        },
        background: '#f9fafb',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        card: '14px',
      },
      boxShadow: {
        soft: '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        card: '0 10px 30px -5px rgba(0, 0, 0, 0.05)',
      },
      screens: {
        'md': '768px',
        'lg': '1024px',
      },
      maxWidth: {
        'container': '1200px',
      }
    },
  },
  plugins: [],
}
