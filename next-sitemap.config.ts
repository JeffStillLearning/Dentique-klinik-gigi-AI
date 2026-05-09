import type { IConfig } from 'next-sitemap'

const config: IConfig = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://dentique.co.id',
  generateRobotsTxt: false,
  outDir: './out',
}

export default config
