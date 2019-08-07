module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-mdx-deck",
      options: {
        // enable or disable gatsby-plugin-mdx
        mdx: true,
        // source directory
        contentPath: "decks",
        // base path for routes generate by this theme
        basePath: "",
      },
    },
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
