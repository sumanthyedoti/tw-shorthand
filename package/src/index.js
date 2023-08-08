const plugin = require('tailwindcss/plugin')

const {
  generateColorUtilities,
  generateBorderWidth,
  generateBorderWidthForSides,
  generateOutlineWidth,
  generateBorderRadius,
  generateBorderRadiusForCorners,
  generateFontWeight,
  generateTransformScale,
  generateTransformRotate,
  generateTransformOrigin,
  generateTransformTranslate,
  generateTransformSkew,
  generateUtilities,
} = require('./utils')
const { allLengths } = require('./values')

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

    /* === flex === */
    /* flex-direction */
    '.f-r': {
      flexDirection: 'row',
    },
    '.f-c': {
      flexDirection: 'column',
    },
    /* flex-basis */
    ...generateUtilities('flex-basis', 'fb', allLengths),
    /* justify-content */
    '.j-s': {
      justifyContent: 'flex-start',
    },
    '.j-c': {
      justifyContent: 'sapce-between',
    },
    '.j-e': {
      justifyContent: 'flex-end',
    },
    /* align-items */
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

    /* color */
    ...generateColorUtilities('color', 'c'),

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
    '.t-right': {
      textAlign: 'right',
    },
    '.t-left': {
      textAlign: 'left',
    },
    '.t-center': {
      textAlign: 'center',
    },
    '.t-justify': {
      textAlign: 'justify',
    },
    '.t-start': {
      textAlign: 'start',
    },
    '.t-end': {
      textAlign: 'end',
    },

    /* text-overflow */
    '.t-ellipsis': {
      textAlign: 'ellipsis',
    },
    '.t-clip': {
      textAlign: 'clip',
    },

    /* text-tranform */
    '.tt-up': {
      textTransform: 'uppercase',
    },
    '.tt-low': {
      textTransform: 'lowercase',
    },
    '.tt-cap': {
      textTransform: 'capitalize',
    },
    '.tt-no': {
      textTransform: 'none',
    },

    /* pointer-events */
    '.pe-no': {
      pointerEvents: 'none',
    },
    '.pe-au': {
      pointerEvents: 'auto',
    },

    /* === border === */
    /* border-style */
    '.bs-solid': {
      borderStyle: 'solid',
    },
    '.bs-dashed': {
      borderStyle: 'dashed',
    },
    '.bs-dotted': {
      borderStyle: 'dotted',
    },
    '.bs-double': {
      borderStyle: 'double',
    },
    '.bs-hidden': {
      borderStyle: 'hidden',
    },
    '.bs-no': {
      borderStyle: 'none',
    },
    /* border-width */
    ...generateBorderWidth('bw'),
    ...generateBorderWidthForSides('bw-l', ['left']),
    ...generateBorderWidthForSides('bw-r', ['right']),
    ...generateBorderWidthForSides('bw-t', ['top']),
    ...generateBorderWidthForSides('bw-b', ['bottom']),
    ...generateBorderWidthForSides('bw-x', ['left', 'right']),
    ...generateBorderWidthForSides('bw-y', ['top', 'bottom']),
    /* border-radius */
    ...generateBorderRadius('br'),
    ...generateBorderRadiusForCorners('br-tl', ['top-left']),
    ...generateBorderRadiusForCorners('br-tr', ['top-right']),
    ...generateBorderRadiusForCorners('br-bl', ['bottom-left']),
    ...generateBorderRadiusForCorners('br-br', ['bottom-right']),
    ...generateBorderRadiusForCorners('br-t', ['top-left', 'top-right']),
    ...generateBorderRadiusForCorners('br-b', ['bottom-left', 'bottom-right']),
    ...generateBorderRadiusForCorners('br-l', ['top-left', 'bottom-left']),
    ...generateBorderRadiusForCorners('br-r', ['top-right', 'bottom-right']),

    /* === outline === */
    /* outline-color */
    ...generateColorUtilities('outline-color', 'olc'),
    /* outline-width */
    ...generateOutlineWidth('olw'),
    /* outline-style */
    '.ols-solid': {
      outlineStyle: 'solid',
    },
    '.ols-dashed': {
      outlineStyle: 'dashed',
    },
    '.ols-dotted': {
      outlineStyle: 'dotted',
    },
    '.ols-double': {
      outlineStyle: 'double',
    },
    '.ols-no': {
      outline: '2px solid transparent',
      outlineOffset: '2px',
    },

    /* === font === */
    /* font-weight */
    ...generateFontWeight('fw'),
    /* font-style */
    '.fs-i': {
      fontStyle: 'italic',
    },
    '.fs-nl': {
      fontStyle: 'normal',
    },
    '.fs-in': {
      fontStyle: 'inherit',
    },
    '.fs-init': {
      fontStyle: 'initial',
    },
    /* font-size */
    '.fz-xs': {
      fontSize: '0.75rem',
      lineHeight: '1rem',
    },
    '.fz-sm': {
      fontSize: '0.875rem',
      lineHeight: '1.25rem',
    },
    '.fz-base': {
      fontSize: '1rem', // 16px
      lineHeight: '1.5rem', // 24px
    },
    '.fz-lg': {
      fontSize: '1.125rem', // 18px
      lineHeight: '1.75rem', // 28px
    },
    '.fz-xl': {
      fontSize: '1.25rem', // 20px
      lineHeight: '1.75rem', // 28px
    },
    '.fz-2xl': {
      fontSize: '1.5rem', // 24px
      lineHeight: '2rem', // 32px
    },
    '.fz-3xl': {
      fontSize: '1.875rem', // 30px
      lineHeight: '2.25rem', // 36px
    },
    '.fz-4xl': {
      fontSize: '2.25rem', // 36px
      lineHeight: '2.5rem', // 40px
    },
    '.fz-5xl': {
      fontSize: '3rem', // 48px
      lineHeight: 1,
    },
    '.fz-6xl': {
      fontSize: '3.75rem', // 60px
      lineHeight: 1,
    },
    '.fz-7xl': {
      fontSize: '4.5rem', // 72px
      lineHeight: 1,
    },
    '.fz-8xl': {
      fontSize: '6rem', // 96px
      lineHeight: 1,
    },
    '.fz-9xl': {
      fontSize: '8rem', // 128px
      lineHeight: 1,
    },

    /* === transforms === */
    /* scale */
    ...generateTransformScale('tr-s'),
    /* rotate */
    ...generateTransformRotate('tr-r'),
    /* tranform-origin */
    ...generateTransformOrigin('tr-o'),
    /* translateX/Y */
    ...generateTransformTranslate('tr-tr', 'x'),
    ...generateTransformTranslate('tr-tr', 'y'),
    /* skewX/Y */
    ...generateTransformSkew('tr-sk', 'x'),
    ...generateTransformSkew('tr-sk', 'y'),
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
  addVariant('fot', '&:first-of-type')
  addVariant('lot', '&:last-of-type')
  addVariant('oot', '&:only-ot')
  addVariant('oc', '&:only-child')
})
