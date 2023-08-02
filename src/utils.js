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

const generateColorUtilities = () => {
  const utils = {}
  const getVariant = (variant) => parseInt(variant) / 100
  const colorsWithVariants = Object.keys(colors).filter(
    (color) => typeof colors[color] !== 'string'
  )
  for (const color of colorsWithVariants) {
    for (const variant of colorVariants) {
      utils[`.c-${color}-${getVariant(variant)}`] = {
        color: colors[color][variant],
      }
    }
  }
  return utils
}

module.exports = {
  generateColorUtilities,
}
