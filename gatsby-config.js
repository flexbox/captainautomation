module.exports = {
  siteMetadata: {
    title: `Captain Automation`,
    name: `David Leuliette`,
    siteUrl: `https://captainautomation.xyz`,
    description: `Manual Work is a Bug. Always be automating, change your mindset and achieve more in less time.`,
    author: `David leuliette`,

    // important to set the main text that appears in the hero
    hero: {
      heading: `Perspectives on technology, design and business from the team at Narative.`,
      maxWidth: 652,
    },
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
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    `gatsby-plugin-mdx`,
    'gatsby-plugin-theme-ui',
    'gatsby-theme-mdx-deck',
  ],
};
