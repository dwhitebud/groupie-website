/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Groupie - Host Your Own Dream Trip`,
    description: `Turn your dream trip into reality and get paid for it! Travel with your followers, create unforgettable memories, and earn money with zero risk.`,
    author: `Breanna White`,
    siteUrl: `https://groupie.travel/`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://groupie.travel`,
        sitemap: `https://groupie.travel/sitemap.xml`,
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Groupie - Host Your Own Dream Trip`,
        short_name: `Groupie`,
        start_url: `/`,
        background_color: `#4F46E5`,
        theme_color: `#4F46E5`,
        display: `minimal-ui`,
        icon: `src/images/example.png`, // Using the existing example.png file as the icon
      },
    },
  ],
}
