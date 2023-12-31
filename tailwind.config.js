/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'rubik-bold': ['Rubik Bold', 'sans-serif'],
        'rubik-medium': ['Rubik Medium', 'sans-serif'],
        'rubik-semibold': ['Rubik SemiBold', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
