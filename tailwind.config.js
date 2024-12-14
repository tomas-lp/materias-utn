/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--border-color)',
        blue: 'var(--blue-color)',
        cyan: 'var(--cyan-color)',
        pink: 'var(--pink-color)',
        yellow: 'var(--yellow-color)',
        green: 'var(--green-color)',
        peach: 'var(--peach-color)',
        purple: 'var(--purple-color)',
        red: 'var(--red-color)',
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        background: 'var(--background-color)',
        danger: 'var(--danger-color)',
        success: 'var(--success-color)',
        warning: 'var(--warning-color)',
        disabled: 'var(--disabled-color)'
      }
    }
  },
  plugins: [],
}

