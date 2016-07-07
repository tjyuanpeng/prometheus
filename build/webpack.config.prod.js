var webpack = require('webpack')

var baseConfig = require('./webpack.config.base.js')

config = Object.assign(baseConfig, {
  stats: { children: false },
  devtool: 'source-map',
})

config.plugins = config.plugins.concat([
  new webpack.optimize.DedupePlugin(),
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
    output: {
      comments: false,
    },
  }),
])

module.exports = config
