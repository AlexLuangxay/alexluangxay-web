/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#F0F6FF',
        navy: {
          900: '#172554',
          800: '#1e293b',
        },
        slate: {
          500: '#64748B',
        },
        blue: {
          500: '#3B82F6',
          200: '#93C5FD',
        }
      },
    },
  },
  plugins: [],
}