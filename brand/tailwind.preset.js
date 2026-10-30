// reskif-commons — preset Tailwind (mêmes noms que reskif.org)
// Usage : presets: [require('./tailwind.preset.js')]
module.exports = {
  theme: {
    extend: {
      colors: {
        encre: '#042e4d',
        'brand-blue': { 500: '#00aaff', 700: '#0068ab' },
        'brand-pink': { 500: '#ff00e5' },
        'brand-yellow': { 500: '#ffcc00' },
        'papier-bleu': '#eff9ff',
        'papier-jaune': '#fffee7',
        'papier-rose': '#fff1fd',
      },
      fontFamily: { sans: ['Rubik', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'] },
    },
  },
};
