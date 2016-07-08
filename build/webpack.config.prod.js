var webpack = require('webpack')
var WebpackNotifierPlugin = require('webpack-notifier')

var baseConfig = require('./webpack.config.base.js')

config = Object.assign(baseConfig, {
  stats: { children: false },
})

config.plugins = config.plugins.concat([
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new WebpackNotifierPlugin()
])

module.exports = config
