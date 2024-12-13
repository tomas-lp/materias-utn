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
  			light: {
  				border: '#E2E8F0',
  				blue: '#98BEF6',
  				cyan: '#A6F6E8',
  				pink: '#F592D8',
  				yellow: '#FDFD94',
  				green: '#94FB80',
  				peach: '#F9CEA4',
  				purple: '#B1AEFC',
  				red: '#FF9898',
  				primary: '#000000',
  				secondary: '#383838'
  			},
  			dark: {
  				blue: '#306CC7',
  				cyan: '#40B19B',
  				pink: '#D847AC',
  				yellow: '#B4B42E',
  				green: '#3CB85D',
  				peach: '#CE8C4A',
  				purple: '#625DDE',
  				red: '#C54444',
  				background: '#121212',
  				border: '#2D2F32',
  				primary: '#FFFFFF',
  				secondary: '#D1D1D1'
  			},
  			disabled: '#8E8E8E',
  			danger: '#FF7878',
  			success: '#66D857',
  			warning: '#FFFF2C',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
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
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
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

