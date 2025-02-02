import antfu from '@antfu/eslint-config'

export default antfu({
  vue: true,
  formatters: {
    css: true,
    markdown: true,
    slidev: {
      files: [
        '*/src/slides.md',
      ],
    },
  },
  rules: {
    'no-new': 'off',
  },
})
