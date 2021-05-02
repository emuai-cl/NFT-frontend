import tw from "twin.macro"

export const gradientFirst = `#ee7752`
export const gradientSecond = `#e73c7e`
export const gradientThird = `#c45bad`
export const gradientForth = `#442093`

export const gradientColors = `${gradientFirst}, ${gradientSecond}, ${gradientThird},${gradientForth}`

export const theme = {
  gradients: {
    main: `linear-gradient(45deg, ${gradientColors})`,
  },
  colors: {
    accent: "#FD6694",
  },
  backgrounds: {
    accent: tw`bg-pink-500`,
    hoverAccent: tw`hover:bg-pink-600`,
    focusAccent: tw`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400`,
  },
}

export type Theme = typeof theme
