const colors = require('tailwindcss/colors')

console.log(colors.lightBlue[''])
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

const borderWidths = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10']

const getVariant = (variant) => parseInt(variant) / 10

const generateColorUtilities = (property, prefix) => {
  const utils = {}
  const colorsWithVariants = Object.keys(colors).filter(
    (color) => typeof colors[color] !== 'string'
  )
  for (const color of colorsWithVariants) {
    for (const variant of colorVariants) {
      utils[`.${prefix}-${color}-${getVariant(variant)}`] = {
        [property]: colors[color][variant],
      }
    }
  }
  for (const color of colorsWithNoVariants) {
    utils[`.${prefix}-${color}`] = {
      [property]: colors[color],
    }
  }
  return utils
}

const generateBorderWidths = (prefix) => {
  const utils = {}
  for (const width of borderWidths) {
    utils[`.${prefix}-${width}`] = {
      'border-width': width + 'px',
    }
  }
  return utils
}

const generateOutlineWidths = (prefix) => {
  const utils = {}
  for (const width of borderWidths) {
    utils[`.${prefix}-${width}`] = {
      'outline-width': width + 'px',
    }
  }
  return utils
}

const generateBorderWidthsForSides = (sides, prefix) => {
  const utils = {}
  for (const width of borderWidths) {
    const values = {}
    for (const side of sides) {
      values[`border-${side}-width`] = width + 'px'
    }
    utils[`.${prefix}-${width}`] = values
  }
  return utils
}

module.exports = {
  generateColorUtilities,
  generateBorderWidths,
  generateBorderWidthsForSides,
  generateOutlineWidths,
}
