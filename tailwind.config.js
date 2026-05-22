/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        midnight: '#070A12',
        panel: 'rgba(15, 23, 42, 0.68)',
        cyanSoft: '#5eead4',
        blueSoft: '#60a5fa',
        violetSoft: '#a78bfa',
      },
      boxShadow: {
        glow: '0 0 50px rgba(96, 165, 250, 0.22)',
        card: '0 24px 80px rgba(0, 0, 0, 0.34)',
      },
      backgroundImage: {
        'radial-blue': 'radial-gradient(circle at 20% 10%, rgba(96,165,250,.22), transparent 34%)',
        'radial-violet': 'radial-gradient(circle at 80% 0%, rgba(167,139,250,.18), transparent 36%)',
      },
    },
  },
  plugins: [],
};
