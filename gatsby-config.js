module.exports = {
  siteMetadata: {
    title: `סדנת אומנות השחרור`,
    description: `סדנה מעשית ומעמיקה המשלבת תרגול, למידה והתנסות אישית`,
    author: `@zevik`,
    siteUrl: `https://www.yourdomain.com`,
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp"
    // הסרת gatsby-source-filesystem כי אנחנו משתמשים בתיקיית static
  ],
}