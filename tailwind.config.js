/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			border: 'hsl(var(--border))',
  			blue: 'var(--blue-color)',
  			cyan: 'var(--cyan-color)',
  			pink: 'var(--pink-color)',
  			yellow: 'var(--yellow-color)',
  			green: 'var(--green-color)',
  			peach: 'var(--peach-color)',
  			purple: 'var(--purple-color)',
  			red: 'var(--red-color)',
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			background: 'hsl(var(--background))',
  			danger: 'var(--danger-color)',
  			success: 'var(--success-color)',
  			warning: 'var(--warning-color)',
  			disabled: 'var(--disabled-color)',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			},

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
        'app-disabled': 'var(--disabled-color)'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
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
			fontSize: {
				xs: 'clamp(0.66rem, 0.05vi + 0.65rem, 0.69rem)',
				sm: 'clamp(0.7rem, 0.2vi + 0.65rem, 0.83rem)',
				base: 'clamp(0.75rem, 0.38vi + 0.65rem, 1rem)',
				lg: 'clamp(0.8rem, 0.62vi + 0.65rem, 1.2rem)',
				xl: 'clamp(0.85rem, 0.9vi + 0.63rem, 1.44rem)',
				'2xl': 'clamp(0.91rem, 1.26vi + 0.6rem, 1.73rem)',
				'3xl': 'clamp(0.97rem, 1.69vi + 0.55rem, 2.07rem)',
				'4xl': 'clamp(1.04rem, 2.23vi + 0.48rem, 2.49rem)',
			}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

