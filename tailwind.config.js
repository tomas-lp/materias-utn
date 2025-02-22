/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: 'var(--main)',
        overlay: 'var(--overlay)',
        bg: 'var(--bg)',
        bw: 'var(--bw)',
        blank: 'var(--blank)',
        text: 'var(--text)',
        mtext: 'var(--mtext)',
        border: 'var(--border)',
        ring: 'var(--ring)',
        ringOffset: 'var(--ring-offset)',

        secondaryBlack: '#212121',

        // App colors
        'app-border': 'var(--border-color)',
        'app-blue': 'var(--blue-color)',
        'app-cyan': 'var(--cyan-color)',
        'app-pink': 'var(--pink-color)',
        'app-yellow': 'var(--yellow-color)',
        'app-green': 'var(--green-color)',
        'app-peach': 'var(--peach-color)',
        'app-purple': 'var(--purple-color)',
        'app-red': 'var(--red-color)',
        'app-primary': 'var(--primary-color)',
        'app-secondary': 'var(--secondary-color)',
        'app-background': 'var(--background-color)',
        'app-danger': 'var(--danger-color)',
        'app-success': 'var(--success-color)',
        'app-warning': 'var(--warning-color)',
        'app-disabled': 'var(--disabled-color)',
      },
      borderRadius: {
        base: '5px',
      },
      boxShadow: {
        shadow: 'var(--shadow)',
      },
      translate: {
        boxShadowX: '0px',
        boxShadowY: '4px',
        reverseBoxShadowX: '0px',
        reverseBoxShadowY: '-4px',
      },
      fontWeight: {
        base: '500',
        heading: '700',
      },

      // fontSize: {
      // 	xs: '0.75rem',
      // 	sm: '0.875rem',
      // 	base: '1rem',
      // 	lg: '1.125rem',
      // 	xl: '1.25rem',
      // 	'2xl': '1.5rem',
      // 	'3xl': '1.875rem',
      // 	'4xl': '2.25rem',
      // }
      // fontSize: {
      //   xs: 'clamp(0.66rem, 0.05vi + 0.65rem, 0.69rem)',
      //   sm: 'clamp(0.7rem, 0.2vi + 0.65rem, 0.83rem)',
      //   base: 'clamp(0.75rem, 0.38vi + 0.65rem, 1rem)',
      //   lg: 'clamp(0.8rem, 0.62vi + 0.65rem, 1.2rem)',
      //   xl: 'clamp(0.85rem, 0.9vi + 0.63rem, 1.44rem)',
      //   '2xl': 'clamp(0.91rem, 1.26vi + 0.6rem, 1.73rem)',
      //   '3xl': 'clamp(0.97rem, 1.69vi + 0.55rem, 2.07rem)',
      //   '4xl': 'clamp(1.04rem, 2.23vi + 0.48rem, 2.49rem)',
      // },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
