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
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
}

