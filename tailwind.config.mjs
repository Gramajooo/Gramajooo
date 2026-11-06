/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      colors: {
        bg: {
          DEFAULT: '#0a0a0f',
          2: '#12121a',
          card: 'rgba(255,255,255,0.04)',
        },
        primary: {
          DEFAULT: '#e84393',
          light: '#ff6ab8',
          glow: 'rgba(232,67,147,0.25)',
        },
        secondary: '#7c3aed',
        accent: '#06b6d4',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float 5s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'scroll-dot': 'scrollDot 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        scrollDot: {
          '0%': { transform: 'translateY(-8px)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(8px)', opacity: '0' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #e84393, #7c3aed)',
      },
      boxShadow: {
        'glow': '0 0 40px rgba(232,67,147,0.15)',
        'glow-lg': '0 0 60px rgba(232,67,147,0.25)',
        'card': '0 8px 32px rgba(0,0,0,0.4)',
      },
    },
  },
  plugins: [],
};

