/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: `/v1/portal`,
  plugins: [
    'gatsby-plugin-typescript',
    {
      resolve: `gatsby-plugin-s3`,
      options: {
        bucketName: `my-gatsby-app`
      }
    }
  ]
}
