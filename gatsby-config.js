module.exports = {
  siteMetadata: {
    title: "amner.me-gatsby",
    siteUrl: "https://www.amner.me"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-react-svg",
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: false,
        reportOnly: false, 
        mergeScriptHashes: false,
        mergeStyleHashes: false,
        mergeDefaultDirectives: true,
        directives: {
          "script-src": "'self' 'unsafe-inline' 'unsafe-eval' https://getinsights.io",
          "style-src": "'self' 'unsafe-inline'",
          "img-src": "'self' data:",
          "connect-src": "'self' https://getinsights.io",
         }
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1200,
              linkImagesToOriginal: false
            }
          },
          {
            resolve: 'gatsby-remark-highlight-code',
            options: {
              terminal: 'carbon',
              theme: "one-light",
            },
          }
        ]
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        sassOptions: {
          precision: 6,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "assets",
        "path": "./src/assets/"
      },
      __key: "assets"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "pages",
        "path": "./src/pages/"
      },
      __key: "pages"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "services",
        "path": "./src/services/"
      },
      __key: "services"
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "posts",
        "path": "./src/posts/"
      },
      __key: "posts"
    }
  ]
};
