const shorthand = require('./src/index')

module.exports = {
  content: ['index.html'],
  theme: {
    extend: {},
  },
  plugins: [shorthand],
}
