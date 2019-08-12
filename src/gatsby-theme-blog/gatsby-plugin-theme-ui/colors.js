import merge from "deepmerge"
import defaultThemeColors from "gatsby-theme-blog/src/gatsby-plugin-theme-ui/colors"

/*
 * Want to change your theme colors?
 * Try uncommenting the color overrides below
 * to go from default purple to a blue theme
 */

const lightBlue = `#3525e6`
const blue = `#40C3F7`
const blueGray = `#c4c6ff`
const black = `#102a43`
const grayDarker = `#102A43`

export default merge(defaultThemeColors, {
  text: black,
  primary: lightBlue,
  heading: blueGray,
  modes: {
    dark: {
      background: grayDarker,
      primary: blue,
      highlight: lightBlue,
    },
  },
})
