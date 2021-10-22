module.exports = {
  siteMetadata: {
    siteUrl: 'https://limeunseop.github.io/',
    title: 'Apple New Product',
  },
  pathPrefix: '/apple-new-product',
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets\/images\/.*?\.svg/, // See below to configure properly
        },
      },
    },
  ],
}
