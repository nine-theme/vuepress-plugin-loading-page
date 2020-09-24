const { path } = require('@vuepress/shared-utils')

module.exports = () => ({
  name: '@nine-theme/vuepress-plugin-loading-page',
  enhanceAppFiles: [
    path.resolve(__dirname, './bin/enhanceAppFile.js')
  ]
})
