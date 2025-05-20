/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Montserrat', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'monospace'],
      },
      colors: {
        navy: '#03183b',
        yellow: '#FFD600',
        'green-accent': '#79C143',
        'blue-accent': '#0047BB',
        white: '#ffffff',
      },
      borderRadius: {
        pill: '32px',
        input: '8px',
      },
      maxWidth: {
        container: '1200px',
      },
      spacing: {
        'topbar-h': '72px',
        'topbar-h-mobile': '60px',
        'container-px': '20px',
        'container-px-mobile': '10px',
        'input-p': '32px',
        'button-x': '1.5rem',
        'button-y': '0.8rem',
      },
      fontSize: {
        topbar: '1.6rem',
        button: '1rem',
      },
      boxShadow: {
        input: '0 2px 8px 0 rgba(0,0,0,0.10)',
      },
    },
  },
  plugins: [],
};
