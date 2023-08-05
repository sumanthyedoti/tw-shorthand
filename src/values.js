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
  ['sm', '0.125rem'],
  ['md', '0.375rem'],
  ['lg', '0.5rem'],
  ['xl', '0.75rem'],
  ['2xl', '1rem'],
  ['3xl', '1.5rem'],
  ['full', '9999px'],
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
  ['full', '360deg'],
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

module.exports = {
  colorVariants,
  colorsWithNoVariants,
  borderRadii,
  borderWidths,
  fontWeights,
  transformScales,
  transformRotates,
  transformOrigins,
}
