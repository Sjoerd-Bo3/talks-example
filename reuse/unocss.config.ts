import extractorMdc from '@unocss/extractor-mdc'
import {
  defineConfig,
} from 'unocss'

export default defineConfig({
  extractors: [
    extractorMdc(),
  ],
  theme: {
    colors: {
      vue: '#44B883',
      typescript: '#3078C6',
      vite: '#636CFF',
      nuxt: '#00DC82',
    },
  },
})
