const plugin = require('tailwindcss/plugin')

const {
  generateColorUtilities,
  generateBorderWidth,
  generateBorderWidthForSides,
  generateOutlineWidth,
  generateBorderRadius,
  generateBorderRadiusForCorners,
  generateTransformScale,
  generateTransformRotate,
  generateTransformOrigin,
  generateTransformTranslate,
  generateTransformSkew,
  generateUtilities,
} = require('./utils')
const {
  allLengths,
  columns,
  displayValues,
  positions,
  objectFits,
  overflows,
  flexOrders,
  fontWeights,
  elementColumns,
  rows,
  gridTemplateColumns,
  gridTemplateRows,
  gridColumns,
  gridColumnStart,
  gridColumnEnd,
  gridRows,
  gridAutoFlows,
  gridAutoColumns,
  gridAutoRows,
} = require('./values')

module.exports = plugin(function ({ addUtilities, addVariant }) {
  const newUtilities = {
    /* display */
    ...generateUtilities('display', 'd', displayValues),

    /* === flex === */
    /* flex-basis */
    ...generateUtilities('flex-basis', 'f-b', allLengths),

    /* flex-dreiction */
    '.f-r': {
      flexDirection: 'row',
    },
    '.f-rr': {
      flexDirection: 'row-reverse',
    },
    '.f-c': {
      flexDirection: 'column',
    },
    '.f-cr': {
      flexDirection: 'column-reverse',
    },
    /* flex  */
    '.f-1': {
      flex: '1 1 0%',
    },
    '.f-au': {
      flex: '1 1 auto',
    },
    '.f-in': {
      flex: '0 1 auto',
    },
    '.f-no': {
      flex: 'none',
    },
    /* flex-grow */
    '.f-g-1': {
      flexGrow: '1',
    },
    '.f-g-0': {
      flexGrow: '0',
    },
    /* flex-shrink */
    '.f-s-1': {
      flexShrink: '1',
    },
    '.f-s-0': {
      flexShrink: '0',
    },
    /* order */
    ...generateUtilities('order', 'ord', flexOrders),
    /* flex-wrap  */
    '.f-w': {
      flexWrap: 'wrap',
    },
    '.f-w-r': {
      flexWrap: 'wrap-reverse',
    },
    '.f-w-no': {
      flexWrap: 'none',
    },
    /* justify-content */
    '.jc-s': {
      justifyContent: 'flex-start',
    },
    '.jc-c': {
      justifyContent: 'sapce-between',
    },
    '.jc-e': {
      justifyContent: 'flex-end',
    },
    /* align-items */
    '.ai-s': {
      alignItems: 'flex-start',
    },
    '.ai-c': {
      alignItems: 'sapce-between',
    },
    '.ai-e': {
      alignItems: 'flex-end',
    },

    /* grid */
    ...generateUtilities('grid-template-columns', 'g-t-c', gridTemplateColumns),
    ...generateUtilities('grid-template-rows', 'g-t-r', gridTemplateRows),

    ...generateUtilities('grid-column', 'g-c', gridColumns),
    ...generateUtilities('grid-column-start', 'g-c-s', gridColumnStart),
    ...generateUtilities('grid-column-end', 'g-c-e', gridColumnEnd),

    ...generateUtilities('grid-row', 'g-r', gridRows),
    ...generateUtilities('grid-row-start', 'g-r-s', gridColumnStart),
    ...generateUtilities('grid-row-end', 'g-r-e', gridColumnEnd),

    ...generateUtilities('grid-auto-flow', 'g-a-f', gridAutoFlows),
    ...generateUtilities('grid-auto-columns', 'g-a-c', gridAutoColumns),
    ...generateUtilities('grid-auto-rows', 'g-a-r', gridAutoRows),

    ...generateUtilities(
      'grid-column',
      'g-c',
      columns,
      (value) => `repeat(${value}, minmax(0, 1fr))`
    ),
    '.g-t-c-no': {
      gridTemplateColumns: 'none',
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

    /* object-fit */
    ...generateUtilities('object-fit', 'ob', objectFits),

    /* object-position */
    ...generateUtilities('object-position', 'ob', positions),

    /* overflow */
    ...generateUtilities('overflow', 'ov', overflows),
    ...generateUtilities('overflow-x', 'ov-x', overflows),
    ...generateUtilities('overflow-y', 'ov-y', overflows),

    /* color */
    ...generateColorUtilities('color', 'c'),

    /* background-position */
    ...generateUtilities('background-position', 'bg', positions),

    /* columns */
    ...generateUtilities('columns', 'cols', elementColumns),

    /* box-decoration-break */
    '.box-decor-cl': {
      boxDecorationBreak: 'clone',
    },
    '.box-decor-sl': {
      boxDecorationBreak: 'slice',
    },

    /* box-sizing */
    '.box-z-b': {
      boxSizing: 'border-box',
    },
    '.box-z-c': {
      boxSizing: 'content-box',
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
    '.p-e-no': {
      pointerEvents: 'none',
    },
    '.p-e-au': {
      pointerEvents: 'auto',
    },

    /* === border === */
    /* border-style */
    '.b-sol': {
      borderStyle: 'solid',
    },
    '.b-dash': {
      borderStyle: 'dashed',
    },
    '.b-dot': {
      borderStyle: 'dotted',
    },
    '.b-dbl': {
      borderStyle: 'double',
    },
    '.b-hid': {
      borderStyle: 'hidden',
    },
    '.b-no': {
      borderStyle: 'none',
    },
    /* border-width */
    ...generateBorderWidth('bw'),
    ...generateBorderWidthForSides('b-w-l', ['left']),
    ...generateBorderWidthForSides('b-w-r', ['right']),
    ...generateBorderWidthForSides('b-w-t', ['top']),
    ...generateBorderWidthForSides('b-w-b', ['bottom']),
    ...generateBorderWidthForSides('b-w-x', ['left', 'right']),
    ...generateBorderWidthForSides('b-w-y', ['top', 'bottom']),
    /* border-radius */
    ...generateBorderRadius('br'),
    ...generateBorderRadiusForCorners('b-r-tl', ['top-left']),
    ...generateBorderRadiusForCorners('b-r-tr', ['top-right']),
    ...generateBorderRadiusForCorners('b-r-bl', ['bottom-left']),
    ...generateBorderRadiusForCorners('b-r-br', ['bottom-right']),
    ...generateBorderRadiusForCorners('b-r-t', ['top-left', 'top-right']),
    ...generateBorderRadiusForCorners('b-r-b', ['bottom-left', 'bottom-right']),
    ...generateBorderRadiusForCorners('b-r-l', ['top-left', 'bottom-left']),
    ...generateBorderRadiusForCorners('b-r-r', ['top-right', 'bottom-right']),

    /* === outline === */
    /* outline-color */
    ...generateColorUtilities('outline-color', 'ol-c'),
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
    ...generateUtilities('font-weight', 'fw', fontWeights),
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

    /* aspect-ratio */
    '.ar-au': {
      aspectRatio: 'auto',
    },
    '.ar-1\\/1': {
      aspectRatio: '1 / 1',
    },
    '.ar-16\\/9': {
      aspectRatio: '16 / 9',
    },
    '.ar-9\\/16': {
      aspectRatio: '9 / 16',
    },
    '.ar-2\\/3': {
      aspectRatio: '2 / 3',
    },
    '.ar-3\\/2': {
      aspectRatio: '3 / 2',
    },
    '.ar-4\\/5': {
      aspectRatio: '4 / 5',
    },
    '.ar-5\\/4': {
      aspectRatio: '5 / 4',
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
  addVariant('fot', '&:first-of-type')
  addVariant('lot', '&:last-of-type')
  addVariant('oot', '&:only-ot')
  addVariant('oc', '&:only-child')
})
