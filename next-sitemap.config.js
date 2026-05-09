/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://dentique.co.id',
  generateRobotsTxt: false,
  outDir: './out',
}

module.exports = config
