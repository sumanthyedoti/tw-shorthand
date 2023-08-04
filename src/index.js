const plugin = require('tailwindcss/plugin')

const { generateColorUtilities } = require('./utils')

module.exports = plugin(function ({ addUtilities, addVariant }) {
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
    '.d-g': {
      display: 'grid',
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

    /* grid */
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

    /* color */
    ...generateColorUtilities('color', 'c'),

    /* background-color */
    ...generateColorUtilities('background-color', 'bgc'),

    /* outline-color */
    ...generateColorUtilities('outline-color', 'olc'),

    /* background-position */
    '.bgp-c': {
      backgroundPosition: 'center',
    },
    '.bgp-t': {
      backgroundPosition: 'top',
    },
    '.bgp-b': {
      backgroundPosition: 'bottom',
    },
    '.bgp-l': {
      backgroundPosition: 'left',
    },
    '.bgp-r': {
      backgroundPosition: 'right',
    },
    '.bgp-lt': {
      backgroundPosition: 'left top',
    },
    '.bgp-lb': {
      backgroundPosition: 'left bottom',
    },
    '.bgp-rt': {
      backgroundPosition: 'right top',
    },
    '.bgp-rb': {
      backgroundPosition: 'right bottom',
    },

    /* text-align */
    't-right': {
      textAlign: 'right',
    },
    't-left': {
      textAlign: 'left',
    },
    't-center': {
      textAlign: 'center',
    },
    't-justify': {
      textAlign: 'justify',
    },
    't-start': {
      textAlign: 'start',
    },
    't-end': {
      textAlign: 'end',
    },

    /* text-overflow */
    't-ellipsis': {
      textAlign: 'ellipsis',
    },
    't-clip': {
      textAlign: 'clip',
    },

    /* text-tranform */
    'tt-up': {
      textTransform: 'uppercase',
    },
    'tt-low': {
      textTransform: 'lowercase',
    },
    'tt-cap': {
      textTransform: 'capitalizer',
    },
    'tt-no': {
      textTransform: 'none',
    },

    /* pointer-events */
    '.pe-no': {
      pointerEvents: 'none',
    },
    '.pe-au': {
      pointerEvents: 'auto',
    },
  }

  addUtilities(newUtilities)

  /* variants */
  addVariant('h', '&:hover')
  addVariant('a', '&:active')
  addVariant('f', '&:focus')
  addVariant('v', '&:visited')
  addVariant('l', '&:link')
  addVariant('c', '&:checked')
  addVariant('d', '&:disabled')
  addVariant('t', '&:target')
  addVariant('e', '&:empty')
  addVariant('o', '&:optional')
  addVariant('first-ot', '&:first-of-type')
  addVariant('last-ot', '&:last-of-type')
  addVariant('only-ot', '&:only-ot')
  addVariant('only-c', '&:only-child')
})
