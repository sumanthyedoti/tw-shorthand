const colors = require('tailwindcss/colors')

const {
  colorVariants,
  colorsWithNoVariants,
  borderWidths,
  borderRadii,
  transformRotates,
  transformScales,
  transformOrigins,
  translateLengths,
  skewRadii,
} = require('./values')

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

const generateBorderWidthForSides = (prefix, sides) => {
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

const generateBorderRadiusForCorners = (prefix, corners) => {
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

const generateTransformScale = (prefix) => {
  const utils = {}
  for (const [variant, size] of transformScales) {
    utils[`.${prefix}-${variant}`] = {
      transform: `scale(${size})`,
    }
  }
  return utils
}

const generateTransformRotate = (prefix) => {
  const utils = {}
  for (const [variant, size] of transformRotates) {
    utils[`.${prefix}-${variant}`] = {
      transform: `rotate(${size})`,
    }
  }
  return utils
}

const generateTransformOrigin = (prefix) => {
  const utils = {}
  for (const [variant, origin] of transformOrigins) {
    utils[`.${prefix}-${variant}`] = {
      'transform-origin': origin,
    }
  }
  return utils
}

const generateTransformTranslate = (prefix, axis) => {
  const utils = {}
  for (const [variant, length] of translateLengths) {
    utils[`.${prefix}-${axis}-${variant}`] = {
      transform: `translate${axis.toUpperCase()}(${length})`,
    }
  }
  return utils
}

const generateTransformSkew = (prefix, axis) => {
  const utils = {}
  for (const [variant, length] of skewRadii) {
    utils[`.${prefix}-${axis}-${variant}`] = {
      transform: `skew${axis.toUpperCase()}(${length})`,
    }
  }
  return utils
}

const generateUtilities = (property, prefix, values) => {
  const utils = {}
  for (const [variant, value] of values) {
    utils[`.${prefix}-${variant}`] = {
      [property]: value,
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
  generateTransformScale,
  generateTransformRotate,
  generateTransformOrigin,
  generateTransformTranslate,
  generateTransformSkew,
  generateUtilities,
}
