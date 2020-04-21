const path = require('path');

const url = 'https://gimilove.com';
const title = 'Gilbert & Mia Wedding';
const image = `${url}/src/images/facebook-coverphoto.jpg`;

module.exports = {
  siteMetadata: {
    title,
    image,
    description: `Welcome to Gilbert & Mia Wedding Website! View photos, directions, registry details and more.`,
    siteUrl: `https://gimilove.com`,
    pagetitle: `home`,
    author: `Gilbert lucas`,
    url: ` `,
    metatitle: `Wedding title`,
    metadesc: `Welcome to Gilbert & Mia Wedding Website! View photos, directions, registry details and more.`,
    titleTemplate: `%s · Gilbert & Mia Wedding`,
    twitterUsername: '@gilbertlucas14',
    facebookAppID: '',
  },
  plugins: [
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Leckerli One`,
            subsets: [`latin`],
            variants: [`400`]
          },
          {
            family: `Ubuntu`,
            subsets: [`latin`],
            variants: [`400`, `700`]
          },
          {
            family: `Noto Serif`,
            subsets: [`latin`],
            variants: [`400`, `700`]
          },
        ],
      },
    },
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
    `gatsby-plugin-styled-components`,
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
        path: `${__dirname}/src/metadata`,
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
        name: `gallery`,
        path: `${__dirname}/src/_data/gallery`,
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
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images\/.*\.svg/,
          omitKeys: ['xmlnsDc', 'xmlnsCc', 'xmlnsRdf', 'xmlnsSvg', 'xmlnsSodipodi', 'xmlnsInkscape']
        }
      }
    }, 
    {
      resolve: `gatsby-plugin-build-date`,
      options: {
        formatAsDateString: true, // boolean, defaults to true - if false API will return unformatted string from new Date()
        formatting: {
          format: 'dddd D MMMM YYYY', // string, defaults to `MM/DD/YYYY` - pass in any acceptable date-and-time format
          utc: false, // boolean, defaults to false - output time as UTC or not, following date-and-time API
        },
        // locale: 'fr', // string, defaults to null, which date-and-time defaults as `en` - whether to localize the date or not, can use any available date-and-time localization
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
              name: `header` // Must match the source name ^
            }
          },
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: `media` // Must match the source name ^
            }
          },
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: `images` // Must match the source name ^
            }
          },
          {
            resolve: `gatsby-remark-relative-images`,
            options: {
              name: `img` // Must match the source name ^
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
