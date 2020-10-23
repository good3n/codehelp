module.exports = {
  siteMetadata: {
    title: `CodeHelp`,
    description: `A Discord Community for Web Development, Programming, and Marketing.`,
    author: `@good3n`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-anchor-links`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-codehelp`,
        short_name: `codehelp`,
        start_url: `/`,
        background_color: `#4FD8C3`,
        theme_color: `#4FD8C3`,
        display: `minimal-ui`,
        icon: `src/assets/images/ch-logo-black.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
