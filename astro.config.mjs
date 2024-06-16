// import cloudflare from "@astrojs/cloudflare";
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import expressiveCode from 'astro-expressive-code'
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'
import config from './site.config'
import { remarkReadingTime } from './src/lib/remarkReadingTime'

// https://astro.build/config
export default defineConfig({
  site: config.url,
  prefetch: true,
  markdown: {
    rehypePlugins: [remarkReadingTime],
  },
  integrations: [
    UnoCSS({
      injectReset: true, // or a path to the reset file
    }),
    // must before mdx
    expressiveCode(),
    mdx(),
    sitemap({
      entryLimit: 10000,
    }),
    (await import('@playform/compress')).default({
      CSS: false,
      HTML: true,
      Image: false,
      JavaScript: true,
      SVG: true,
      Logger: 2,
    }),
  ],
  // adapter: cloudflare({
  //   platformProxy: {
  //     enabled: true,
  //   },
  // }),
})
