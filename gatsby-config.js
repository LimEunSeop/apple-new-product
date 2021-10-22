module.exports = {
  siteMetadata: {
    siteUrl: 'https://limeunseop.github.io/apple-new-product/public/',
    title: 'Apple New Product',
  },
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
