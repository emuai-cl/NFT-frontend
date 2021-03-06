module.exports = {
  siteMetadata: {
    title: `EMUAI NFT`,
    description: `EMUAI Solar Team is launching an NFT fundraising sale for it's next Solar Car! Buy NFT's and own a part of the car, to customize as you wish.`,
    author: `@emuai_SolarTeam`,
    keywords: 'nft, emu, emuai, emus, solar car, race car, nfts, nft on a car, nft on a solar car, nft on a race car',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#29628B`,
        theme_color: `#29628B`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // {
    //   resolve: `gatsby-plugin-webfonts`,
    //   options: {
    //     fonts: {
    //       google: [
    //         {
    //           family: "Poppins",
    //         },
    //       ],
    //     },

    //     useMinify: true,
    //     usePreload: true,
    //   },
    // },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
