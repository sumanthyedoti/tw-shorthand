const displayValues = [
  ['b', 'block'],
  ['ib', 'inline-block'],
  ['i', 'inline'],
  ['f', 'flex'],
  ['if', 'inline-flex'],
  ['t', 'table'],
  ['it', 'inline-table'],
  ['t-cp', 'table-caption'],
  ['t-cl', 'table-cell'],
  ['t-c', 'table-column'],
  ['t-c-g', 'table-column-group'],
  ['t-ft-g', 'table-footer-group'],
  ['t-hd-g', 'table-header-group'],
  ['t-r-g', 'table-row-group'],
  ['t-r', 'table-row'],
  ['fw-rt', 'flow-root'],
  ['g', 'grid'],
  ['ig', 'inline-grid'],
  ['c', 'contents'],
  ['li', 'list-item'],
  ['no', 'none'],
]

const boxPositions = [
  ['c', 'center'],
  ['t', 'top'],
  ['b', 'bottom'],
  ['l', 'left'],
  ['r', 'right'],
  ['lt', 'left top'],
  ['lb', 'left bottom'],
  ['rt', 'right top'],
  ['rb', 'right bottom'],
]

const objectFits = [
  ['c', 'contain'],
  ['v', 'cover'],
  ['f', 'fill'],
  ['n', 'none'],
  ['sd', 'scale-down'],
]

const overflows = [
  ['au', 'auto'],
  ['h', 'hidden'],
  ['c', 'clip'],
  ['v', 'visible'],
  ['s', 'scroll'],
]

const colorVariants = [
  '50',
  '100',
  '200',
  '300',
  '400',
  '500',
  '600',
  '700',
  '800',
  '900',
  '950',
]

const colorsWithNoVariants = [
  'inherit',
  'transparent',
  'current',
  'black',
  'white',
]

const borderRadii = [
  ['nl', '0.25rem'], // normal
  ['no', '0rem'],
  ['xs', '0.113rem'],
  ['sm', '0.125rem'],
  ['md', '0.375rem'],
  ['lg', '0.5rem'],
  ['xl', '0.75rem'],
  ['2xl', '1rem'],
  ['3xl', '1.5rem'],
  ['fu', '9999px'],
]

const borderWidths = [
  ['0', '0px'],
  ['1', '1px'],
  ['2', '2px'],
  ['3', '3px'],
  ['4', '4px'],
  ['6', '6px'],
  ['8', '8px'],
  ['10', '10px'],
]

const fontWeights = [
  ['1', '100'],
  ['2', '200'],
  ['3', '300'],
  ['4', '400'],
  ['5', '500'],
  ['6', '600'],
  ['7', '700'],
  ['8', '800'],
  ['9', '900'],
  ['thin', '100'],
  ['xlt', '200'],
  ['lt', '300'],
  ['nl', '400'],
  ['md', '500'],
  ['sb', '600'],
  ['b', '700'],
  ['xb', '800'],
  ['black', '900'],
]

const transformScales = [
  ['0', '0'],
  ['25', '0.25'],
  ['50', '0.5'],
  ['75', '0.75'],
  ['90', '0.9'],
  ['95', '0.95'],
  ['100', '1'],
  ['105', '1.05'],
  ['110', '1.10'],
  ['125', '1.25'],
  ['150', '1.50'],
  ['175', '1.75'],
  ['200', '2'],
]

const transformRotates = [
  ['0', '0'],
  ['1', '1deg'],
  ['2', '2deg'],
  ['3', '3deg'],
  ['4', '4deg'],
  ['5', '5deg'],
  ['6', '6deg'],
  ['8', '8deg'],
  ['10', '10deg'],
  ['12', '12deg'],
  ['45', '45deg'],
  ['90', '90deg'],
  ['180', '180deg'],
  ['270', '270deg'],
  ['360', '360deg'],
  // ratio
  ['1\\/8', '45deg'],
  ['2\\/8', '90deg'],
  ['1\\/4', '90deg'],
  ['3\\/8', '135deg'],
  ['4\\/8', '180deg'],
  ['2\\/4', '180deg'],
  ['1\\/2', '180deg'],
  ['5\\/8', '225deg'],
  ['6\\/8', '270deg'],
  ['3\\/4', '270deg'],
  ['7\\/8', '315deg'],
  ['fu', '360deg'],
]

const transformOrigins = [
  ['c', 'center'],
  ['t', 'top'],
  ['b', 'bottom'],
  ['r', 'right'],
  ['r', 'left'],
  ['tr', 'top right'],
  ['tl', 'top left'],
  ['br', 'bottom right'],
  ['bl', 'bottom left'],
]

const numericLengths = [
  ['0', '0'],
  ['px', '1px'],
  ['0\\.5', '0.125rem'],
  ['1', '0.25rem'],
  ['1\\.5', '0.375rem'],
  ['2', '0.5rem'],
  ['2\\.5', '0.625rem'],
  ['3', '0.75rem'],
  ['3\\.5', '0.875rem'],
  ['4', '1rem'],
  ['5', '1.25rem'],
  ['6', '1.5rem'],
  ['7', '1.75rem'],
  ['8', '2rem'],
  ['9', '2.25rem'],
  ['10', '2.5rem'],
  ['11', '2.75rem'],
  ['12', '3rem'],
  ['14', '3.5rem'],
  ['16', '4rem'],
  ['18', '4.5rem'],
  ['20', '5rem'],
  ['24', '6rem'],
  ['28', '7rem'],
  ['32', '8rem'],
  ['36', '9rem'],
  ['40', '10rem'],
  ['44', '11rem'],
  ['48', '12rem'],
  ['52', '13rem'],
  ['56', '14rem'],
  ['60', '15rem'],
  ['64', '16rem'],
  ['72', '18rem'],
  ['80', '20rem'],
  ['96', '24rem'],
  ['fu', '100%'],
]

const lineHeights = [
  ['3', '0.75rem'],
  ['4', '1rem'],
  ['5', '1.25rem'],
  ['6', '1.5rem'],
  ['7', '1.75rem'],
  ['8', '2rem'],
  ['9', '2.25rem'],
  ['10', '2.5rem'],
  ['no', 'none'],
  ['tight', '1.25rem'],
  ['snug', '1.375rem'],
  ['nl', '1.5rem'],
  ['relaxed', '1.625rem'],
  ['loose', '2rem'],
]

const letterSpacings = [
  ['tt', '-0.05em'],
  ['t', '-0.025em'],
  ['nl', '0em'],
  ['w', '0.025em'],
  ['ww', '0.05em'],
  ['www', '0.1em'],
]

const percentageLengths_2_3_4 = [
  ['1\\/2', '50%'],
  ['1\\/3', '33.333333%'],
  ['2\\/3', '66.666667%'],
  ['1\\/4', '25%'],
  ['2\\/4', '25%'],
  ['3\\/4', '75%'],
]

const percentageLengths_5_6_12 = [
  ['1\\/5', '20%'],
  ['2\\/5', '40%'],
  ['3\\/5', '60%'],
  ['4\\/5', '80%'],
  ['1\\/6', '16.666667%'],
  ['2\\/6', '33.333333%'],
  ['3\\/6', '50%'],
  ['4\\/6', '66.666667%'],
  ['5\\/6', '83.333333%'],
  ['1\\/12', '8.333333%'],
  ['2\\/12', '16.666667%'],
  ['3\\/12', '25%'],
  ['4\\/12', '33.333333%'],
  ['5\\/12', '41.666667%'],
  ['6\\/12', '50%'],
  ['7\\/12', '58.333333%'],
  ['8\\/12', '66.666667%'],
  ['9\\/12', '75%'],
  ['10\\/12', '83.333333%'],
  ['11\\/12', '91.666667%'],
]

const skewRadii = [
  ['1', '1deg'],
  ['2', '1deg'],
  ['3', '3deg'],
  ['4', '4deg'],
  ['5', '5deg'],
  ['6', '6deg'],
  ['8', '8deg'],
  ['10', '10deg'],
  ['12', '12deg'],
  ['16', '16deg'],
  ['20', '20deg'],
  ['25', '25deg'],
]

const rows = [
  ['1', '1'],
  ['2', '2'],
  ['3', '3'],
  ['4', '4'],
  ['5', '5'],
  ['6', '6'],
]
const columns = [
  ...rows,
  ['7', '7'],
  ['8', '8'],
  ['9', '9'],
  ['10', '10'],
  ['11', '11'],
  ['12', '12'],
]

const flexOrders = [
  ...columns,
  ['first', 'first'],
  ['last', 'last'],
  ['no', 'none'],
]

const gridTemplateRows = [
  ['1', 'repeat(1, minmax(0, 1fr))'],
  ['2', 'repeat(2, minmax(0, 2fr))'],
  ['3', 'repeat(3, minmax(0, 3fr))'],
  ['4', 'repeat(4, minmax(0, 4fr))'],
  ['5', 'repeat(5, minmax(0, 5fr))'],
  ['6', 'repeat(6, minmax(0, 6fr))'],
  ['no', 'none'],
]

const gridTemplateColumns = [
  ...gridTemplateRows,
  ['7', 'repeat(7, minmax(0, 7fr))'],
  ['8', 'repeat(8, minmax(0, 8fr))'],
  ['9', 'repeat(9, minmax(0, 9fr))'],
  ['10', 'repeat(10, minmax(0, 10fr))'],
  ['11', 'repeat(11, minmax(0, 11fr))'],
  ['12', 'repeat(12, minmax(0, 12fr))'],
]

const gridRows = [
  ['au', 'auto'],
  ['1\\/1', 'span 1 / span 1'],
  ['2\\/2', 'span 2 / span 2'],
  ['3\\/3', 'span 3 / span 3'],
  ['4\\/4', 'span 4 / span 4'],
  ['5\\/5', 'span 5 / span 5'],
  ['6\\/6', 'span 6 / span 6'],
  ['fu', '1 / -1'],
]
const gridRowStart = [...rows, ['7', '7'], ['au', 'auto']]
const gridRowEnd = gridRowStart

const gridColumns = [
  ...gridRows,
  ['7\\/7', 'span 7 / span 7'],
  ['8\\/8', 'span 8 / span 8'],
  ['9\\/9', 'span 9 / span 9'],
  ['10\\/10', 'span 10 / span 10'],
  ['11\\/11', 'span 11 / span 11'],
  ['12\\/12', 'span 12 / span 12'],
]

const gridColumnStart = [...columns, ['13', '13'], ['au', 'auto']]
const gridColumnEnd = gridColumnStart

const gridAutoFlows = [
  ['r', 'row'],
  ['c', 'column'],
  ['d', 'dense'],
  ['rd', 'row dense'],
  ['cd', 'column dense'],
]

const gridAutoRows = [
  ['au', 'auto'],
  ['min', 'min-content'],
  ['max', 'max-content'],
  ['fr', 'minmax(0, 1fr)'],
]

const justifyItems = [
  ['s', 'flex-start'],
  ['e', 'flex-end'],
  ['c', 'center'],
  ['tt', 'stretch'],
]
const justifyContent = [
  ...justifyItems,
  ['nl', 'normal'],
  ['w', 'space-between'],
  ['a', 'space-around'],
  ['v', 'space-evenly'],
]
const justifySelf = [...justifyItems, ['au', 'auto']]
const alignContent = [...justifyContent, ['bl', 'baseline']]
const alignItems = [...justifyItems, ['bl', 'baseline']]
const alignSelf = [...justifyItems, ['au', 'auto'], ['bl', 'baseline']]
const placeContent = alignContent
const placeItems = alignItems
const placeSelf = [...justifyItems, ['au', 'auto']]

const gridAutoColumns = gridAutoRows

const elementColumns = [
  ...columns,
  ['au', 'auto'],
  ['3xs', '16rem'],
  ['2xs', '18rem'],
  ['xs', '20rem'],
  ['sm', '24rem'],
  ['md', '28rem'],
  ['lg', '32rem'],
  ['xl', '36rem'],
  ['2xl', '42rem'],
  ['3xl', '48rem'],
  ['4xl', '56rem'],
  ['5xl', '64rem'],
  ['6xl', '72rem'],
  ['7xl', '80rem'],
]

const translateLengths = [...numericLengths, ...percentageLengths_2_3_4]
const allLengths = [
  ...numericLengths,
  ...percentageLengths_2_3_4,
  ...percentageLengths_5_6_12,
]

const durations = [
  ['0', '0ms'],
  ['75', '75ms'],
  ['100', '100ms'],
  ['150', '150ms'],
  ['200', '200ms'],
  ['250', '250ms'],
  ['300', '300ms'],
  ['400', '400ms'],
  ['500', '500ms'],
  ['600', '600ms'],
  ['700', '700ms'],
  ['750', '750ms'],
  ['800', '800ms'],
  ['900', '900ms'],
  ['1000', '1000ms'],
]

const boxShadows = [
  ['sm', '0 1px 2px 0 rgb(0 0 0 / 0.05)'],
  [null, '0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)'],
  ['md', '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)'],
  ['lg', '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'],
  ['xl', '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)'],
  ['2xl', '0 25px 50px -12px rgb(0 0 0 / 0.25)'],
  ['inner', 'inset 0 2px 4px 0 rgb(0 0 0 / 0.05)'],
  ['no', '0 0 #0000'],
]

const dropShadows = [
  ['sm', 'drop-shadow(0 1px 1px rgb(0 0 0 / 0.05))'],
  [null, 'drop-shadow(0 1px 2px rgb(0 0 0 / 0.1)) drop-shadow(0 1px 1px rgb(0 0 0 / 0.06))'],
  ['md', 'drop-shadow(0 4px 3px rgb(0 0 0 / 0.07)) drop-shadow(0 2px 2px rgb(0 0 0 / 0.06))'],
  ['lg', 'drop-shadow(0 10px 8px rgb(0 0 0 / 0.04)) drop-shadow(0 4px 3px rgb(0 0 0 / 0.1))'],
  ['xl', 'drop-shadow(0 20px 13px rgb(0 0 0 / 0.03)) drop-shadow(0 8px 5px rgb(0 0 0 / 0.08))'],
  ['2xl', 'drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))'],
  ['no', 'drop-shadow(0 0 #0000)'],
]

const opacities = [
  ['0', '0'],
  ['5', '0.05'],
  ['10', '0.1'],
  ['20', '0.2'],
  ['25', '0.25'],
  ['30', '0.3'],
  ['40', '0.4'],
  ['50', '0.5'],
  ['60', '0.6'],
  ['70', '0.7'],
  ['75', '0.75'],
  ['80', '0.8'],
  ['90', '0.9'],
  ['95', '0.95'],
  ['fu', '1'],
  ['100', '1'],
]

module.exports = {
  displayValues,
  boxPositions,
  objectFits,
  overflows,
  flexOrders,
  rows,
  columns,
  gridTemplateRows,
  gridTemplateColumns,
  gridColumnStart,
  gridColumnEnd,
  gridRowStart,
  gridRowEnd,
  gridColumns,
  gridRows,
  gridAutoFlows,
  gridAutoColumns,
  gridAutoRows,
  justifyContent,
  justifyItems,
  justifySelf,
  alignContent,
  alignItems,
  alignSelf,
  placeContent,
  placeItems,
  placeSelf,
  colorVariants,
  colorsWithNoVariants,
  borderRadii,
  borderWidths,
  fontWeights,
  lineHeights,
  letterSpacings,
  transformScales,
  transformRotates,
  transformOrigins,
  translateLengths,
  durations,
  allLengths,
  skewRadii,
  elementColumns,
  boxShadows,
  dropShadows,
  opacities,
}
