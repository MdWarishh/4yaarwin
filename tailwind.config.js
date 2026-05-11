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
        brand: {
          green: '#00C97A',
          'green-dark': '#00A865',
          'green-light': '#00E88A',
          mint: '#E8FFF5',
          dark: '#0A1A12',
          'dark-2': '#0F2318',
          'dark-3': '#1A3828',
          card: '#112B1E',
          border: '#1E4030',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
      },
      backgroundImage: {
        'green-glow': 'radial-gradient(ellipse at center, rgba(0,201,122,0.25) 0%, transparent 70%)',
        'hero-pattern': 'radial-gradient(ellipse at top, rgba(0,201,122,0.15) 0%, transparent 60%), radial-gradient(ellipse at bottom right, rgba(0,168,101,0.1) 0%, transparent 50%)',
        'card-gradient': 'linear-gradient(135deg, #112B1E 0%, #0F2318 100%)',
        'btn-gradient': 'linear-gradient(135deg, #00E88A 0%, #00C97A 50%, #00A865 100%)',
      },
      animation: {
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0,201,122,0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(0,201,122,0.6), 0 0 80px rgba(0,201,122,0.2)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      boxShadow: {
        'glow-sm': '0 0 15px rgba(0,201,122,0.3)',
        'glow-md': '0 0 30px rgba(0,201,122,0.4)',
        'glow-lg': '0 0 60px rgba(0,201,122,0.4), 0 0 120px rgba(0,201,122,0.1)',
        'card': '0 4px 24px rgba(0,0,0,0.4), inset 0 1px 0 rgba(0,201,122,0.1)',
      },
    },
  },
  plugins: [],
};
