import tw from "twin.macro"

export const gradientFirst = `#2D9CCA`
export const gradientSecond = `#2B7FAB`
export const gradientThird = `#27446C`
export const gradientForth = `#25274D`

export const gradientColors = `${gradientFirst}, ${gradientSecond}, ${gradientThird},${gradientForth}`

export const theme = {
  gradients: {
    main: `linear-gradient(45deg, ${gradientColors})`,
    first: gradientFirst,
    second: gradientSecond,
    third: gradientThird,
    forth: gradientForth,
  },
  colors: {
    accent: "#2D9CCA",
  },

  backgrounds: {
    accent: tw`bg-blue-500`,
    hoverAccent: tw`hover:bg-blue-600`,
    focusAccent: tw`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-400`,
    page: '#eee'
  },
}

export type Theme = typeof theme
