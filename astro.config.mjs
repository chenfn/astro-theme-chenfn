import mdx from '@astrojs/mdx'
import expressiveCode from 'astro-expressive-code'
import { defineConfig } from 'astro/config'
import UnoCSS from 'unocss/astro'

import sitemap from '@astrojs/sitemap'
import { remarkReadingTime } from './src/lib/remarkReadingTime'

// https://astro.build/config
export default defineConfig({
  site: 'https://chenfn.com',
  prefetch: true,
  markdown: {
    rehypePlugins: [remarkReadingTime],
  },
  integrations: [
    UnoCSS({
      injectReset: true, // or a path to the reset file
    }),
    expressiveCode(),
    // must before mdx
    mdx(),
    sitemap({
      entryLimit: 10000,
    }),
  ],
})
