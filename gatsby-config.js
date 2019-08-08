module.exports = {
  plugins: [
    "gatsby-theme-mdx-deck",
    {
      resolve: `gatsby-theme-blog`,
      options: {},
    },
  ],
  // Customize your site metadata:
  siteMetadata: {
    title: `Captain Automation`,
    author: `David Leuliette`,
    description: `My site description...`,
    social: [
      {
        name: `Twitter`,
        url: `https://twitter.com/flexbox_`,
      },
      {
        name: `Instagram`,
        url: `https://instagram.com/captainautomation/`,
      },
    ],
  },
}
