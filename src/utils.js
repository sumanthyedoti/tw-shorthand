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

const generateBorderWidth = (prefix) => {
  const utils = {}
  for (const [variant, size] of borderWidths) {
    utils[`.${prefix}-${variant}`] = {
      'border-width': size,
    }
  }
  return utils
}

const generateBorderWidthForSides = (sides, prefix) => {
  const utils = {}
  for (const [variant, size] of borderWidths) {
    const properties = {}
    for (const side of sides) {
      properties[`border-${side}-width`] = size
    }
    utils[`.${prefix}-${variant}`] = properties
  }
  return utils
}

const generateBorderRadius = (prefix) => {
  const utils = {}
  for (const [variant, size] of borderRadii) {
    utils[`.${prefix}-${variant}`] = {
      'border-radius': size,
    }
  }
  utils[`.${prefix}`] = {
    'border-radius': borderRadii[0][1],
  }
  return utils
}

const generateBorderRadiusForCorners = (corners, prefix) => {
  const utils = {}
  for (const [variant, size] of borderRadii) {
    const properties = {}
    for (const corner of corners) {
      properties[`border-${corner}-radius`] = size
    }
    utils[`.${prefix}-${variant}`] = properties
  }
  const normalSizeProperties = {}
  for (const corner of corners) {
    normalSizeProperties[`border-${corner}-radius`] = borderRadii[0][1]
  }
  utils[`.${prefix}`] = normalSizeProperties
  return utils
}

const generateOutlineWidth = (prefix) => {
  const utils = {}
  for (const [variant, size] of borderWidths) {
    utils[`.${prefix}-${variant}`] = {
      'outline-width': size,
    }
  }
  return utils
}

module.exports = {
  generateColorUtilities,
  generateBorderWidth,
  generateBorderWidthForSides,
  generateOutlineWidth,
  generateBorderRadius,
  generateBorderRadiusForCorners,
}
