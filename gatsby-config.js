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
    description: `Manual Work is a Bug. Always be automating, change your mindset and achieve more in less time.`,
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
