import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers'
import { defineEcConfig } from 'astro-expressive-code'

export default defineEcConfig({
  // themes: ['github-dark', 'github-light'],
  // themes: ['min-dark', 'min-light'],
  themes: ['catppuccin-mocha', 'catppuccin-latte'],
  styleOverrides: {
    borderRadius: '0.2rem',
  },
  defaultProps: {
    wrap: true,
    showLineNumbers: false, // showLineNumbers
    overridesByLang: {
      'bash.ps,sh': { preserveIndent: false },
    },
  },
  plugins: [pluginLineNumbers()],
})
