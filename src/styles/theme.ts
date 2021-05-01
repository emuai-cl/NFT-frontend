import tw from "twin.macro"

export const theme = {
  gradients: {
    main:
      "linear-gradient(45deg, #ee7752, #e73c7e, rgb(196, 91, 173),rgb(69, 32, 147))",
  },
  colors: {
    accent: "rgb(253, 102, 148)",
  },
  backgrounds: {
    accent: tw`bg-pink-500`,
    hoverAccent: tw`hover:bg-pink-600`,
    focusAccent: tw`focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-400`,
  },
}

export type Theme = typeof theme
