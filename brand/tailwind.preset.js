// reskif-commons — preset Tailwind du design system « sphère »
// Usage : presets: [require('./tailwind.preset.js')]
module.exports = {
  theme: {
    extend: {
      colors: {
        night: '#010101',
        ink: '#ffffff',
        muted: 'rgba(255, 255, 255, .62)',
        line: 'rgba(255, 255, 255, .22)',
        glass: 'rgba(10, 4, 24, .55)',
        warm: { DEFAULT: '#ffb08a', vif: '#ff6a2b' },
        cold: { DEFAULT: '#9cc0ff', vif: '#4d8dff' },
        violet: '#5b1cff',
      },
      fontFamily: {
        display: ['Syne', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        text: ['Fraunces', 'Iowan Old Style', 'Georgia', 'serif'],
        dict: ['EB Garamond', 'Garamond', 'Times New Roman', 'serif'],
      },
      borderRadius: { verre: '18px' },
    },
  },
};
