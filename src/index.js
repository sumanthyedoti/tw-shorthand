const plugin = require('tailwindcss/plugin')

const { generateColorUtilities } = require('./utils')

module.exports = plugin(function ({ addUtilities, addComponents, e, config }) {
  const newUtilities = {
    /* display */
    '.d-s': {
      display: 'static',
    },
    '.d-b': {
      display: 'block',
    },
    '.d-i': {
      display: 'inline',
    },
    '.d-ib': {
      display: 'inline-block',
    },
    '.d-no': {
      display: 'none',
    },
    '.d-f': {
      display: 'flex',
      flexDirection: 'row',
    },

    /* --- flex ---- */
    // flex-direction
    '.f-r': {
      flexDirection: 'row',
    },
    '.f-c': {
      flexDirection: 'column',
    },
    // justify-content
    '.j-s': {
      justifyContent: 'flex-start',
    },
    '.j-c': {
      justifyContent: 'sapce-between',
    },
    '.j-e': {
      justifyContent: 'flex-end',
    },
    // align-items
    '.a-s': {
      alignItems: 'flex-start',
    },
    '.a-c': {
      alignItems: 'sapce-between',
    },
    '.a-e': {
      alignItems: 'flex-end',
    },

    /* position */
    '.p-s': {
      position: 'static',
    },
    '.p-r': {
      position: 'relative',
    },
    '.p-a': {
      position: 'absolute',
    },
    '.p-f': {
      position: 'fixed',
    },
    ...generateColorUtilities(),
  }
  addUtilities(newUtilities)
})
