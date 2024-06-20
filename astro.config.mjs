
import { defineConfig, passthroughImageService } from 'astro/config'
import cloudflare from "@astrojs/cloudflare";
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import UnoCSS from 'unocss/astro'
import expressiveCode from 'astro-expressive-code'
import rehypeExternalLinks from 'rehype-external-links';
import { remarkReadingTime } from './src/lib/remarkReadingTime'
import config from './site.config'

// https://astro.build/config
export default defineConfig({
  site: config.url,
  prefetch: true,
  markdown: {
    rehypePlugins: [
      remarkReadingTime,
      [
        rehypeExternalLinks,
        {
          target: "_blank",
          rel: ['nofollow, noopener, noreferrer'],
        }
      ],
    ],
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
  // // cloudflare, deno not support astro image optimization
  image: {
    service: passthroughImageService()
  },
  output: 'server',
  adapter: cloudflare(),
})
