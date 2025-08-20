// @type {import('tailwindcss').Config}
module.exports = {
  content: ["./src/**/*.{html,ts}",],
  theme: {
    screens: {
      'xs': { 'max': '575px' },
      // => @media (max-width: 575px) { ... }

      'sm': { 'max': '767px' },
      // => @media (max-width: 767px) { ... }

      'md': { 'min': '768px', 'max': '991px' },
      // => @media (min-width: 768px) and (max-width: 991px) { ... }

      'lg': { 'min': '992px', 'max': '1200px' },
      // => @media (min-width: 992px) and (max-width: 1200px) { ... }

      'xl': { 'min': '1201px', 'max': '1400px' },
      // => @media (min-width: 1201px) and (max-width: 1400px) { ... }

      'xxl': { 'min': '1401px', 'max': '1600px' },
      // => @media (min-width: 1401px) and (max-width: 1600px) { ... }

      'xxxl': { 'min': '1601px', 'max': '1920px' },
      // => @media (min-width: 1401px) and (max-width: 1600px) { ... }

      'minSm': { 'min': '768px' },
      // => @media (min-width: 575px) { ... }
    },
    container: {
      center: true,
      padding: '15px',
    },
    fontFamily: {
      'primary': ["'Nunito Sans', sans-serif"],
      'fontawesome': ["Font Awesome 5 Pro"],
    },
    extend: {
      colors: {
        'white': '#ffffff',
        'heading': '#0D0F19',
        'primary': '#1E3A8A', // azul oscuro sobrio
        'secondary': '#3B82F6', // azul intermedio
        'success': '#2563EB', // azul brillante
        'border': '#E5E7EB',
        'borderLight': '#93C5FD', // azul claro
        'body': '#374151', // gris oscuro
        'gray': '#F3F4F6', // para fondos input
        'lightest': '#F9FAFB',
        'teal': '#1E40AF', // azul más profundo en lugar de teal
        'danger': '#B91C1C', // rojo sobrio oscuro
        'warning': '#D97706', // ámbar apagado
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
