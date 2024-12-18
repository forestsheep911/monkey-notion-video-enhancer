const { resolve } = require('path')
const webpack = require('webpack')
const commonBanner = require('./common.meta.js')
const { baseOptions, getBanner } = require('./webpack.config.base')

module.exports = () => {
  baseOptions.output.filename = `${commonBanner.name}.js`
  baseOptions.output.path = resolve(__dirname, '../dist/store')
  baseOptions.plugins.push(
    new webpack.BannerPlugin({
      banner: getBanner({}),
      raw: true,
      entryOnly: true,
    }),
    new webpack.DefinePlugin({
      PRODUCTION: true,
    }),
  )
  baseOptions.mode = 'production'
  baseOptions.externals = {
    dplayer: 'DPlayer',
  }

  // 不启用代码压缩
  baseOptions.optimization = {
    minimize: false,
  }

  return baseOptions
}
