var WebpackNotifierPlugin = require('webpack-notifier')

var baseConfig = require('./webpack.config.base.js')

config = Object.assign(baseConfig, {
  devServer: {
    stats: { children: false },
  },
  stats: { children: false },
  devtool: 'cheap-module-source-map',
})

config.plugins.push(new WebpackNotifierPlugin())



config.plugins = config.plugins.concat([
  new WebpackNotifierPlugin()
])



module.exports = config
