
module.exports = {
  siteMetadata: {
    title: `Samuele Piazzesi`,
    description: `portfolio`,
    author: `Samuele Piazzesi`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["./src/scss", "./node_modules"],
      }
    },
    `gatsby-transformer-sharp`, `gatsby-plugin-sharp`
    ]
}
