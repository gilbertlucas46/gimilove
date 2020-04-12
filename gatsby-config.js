const path = require('path');

module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `media`,
        path: path.join(__dirname, `static`, `img`),
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-netlify`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `about`,
        path: `${__dirname}/src/_data/about`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `footer`,
        path: `${__dirname}/src/_data/footer`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `header`,
        path: `${__dirname}/src/_data/header`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `location`,
        path: `${__dirname}/src/_data/location`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `rsvp`,
        path: `${__dirname}/src/_data/rsvp`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `metadata`,
        path: `${__dirname}/src/metadata`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // Plugins configs
        plugins: [
          // gatsby-remark-relative-images must
          // go before gatsby-remark-image
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: "header" // Must match the source name ^
            }
          },
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: "media" // Must match the source name ^
            }
          },
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: "images" // Must match the source name ^
            }
          },
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: "img" // Must match the source name ^
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
        ],
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gimilove.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
