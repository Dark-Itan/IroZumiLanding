export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        background: '#0b1120',
        surface: '#111827',
      },
      boxShadow: {
        soft: '0 20px 60px rgba(15, 23, 42, 0.35)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(32px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s ease-out both',
      },
    },
  },
  plugins: [],
};
