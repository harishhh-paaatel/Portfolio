import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(255, 128, 0, 0.18)',
        panel: '0 30px 90px rgba(0,0,0,0.22)',
      },
      backgroundImage: {
        radialGlow: 'radial-gradient(circle at top left, rgba(255,124,0,0.12), transparent 32%), radial-gradient(circle at bottom right, rgba(255, 84, 24, 0.16), transparent 22%)',
      },
      keyframes: {
        float: {
          '0%,100%': { transform: 'translateY(-8px)' },
          '50%': { transform: 'translateY(8px)' },
        },
        pulseGlow: {
          '0%,100%': { opacity: '0.08' },
          '50%': { opacity: '0.2' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseGlow: 'pulseGlow 5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
