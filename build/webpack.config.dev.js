var WebpackNotifierPlugin = require('webpack-notifier')

var baseConfig = require('./webpack.config.base.js')

config = Object.assign(baseConfig, {
  devServer: {
    contentBase: './examples/',
    stats: {
      chunks: false,
      children: false,
    }
  },
  entry: {
    'index': './examples/index',
  },
  output: {
    path: '/',
    filename: '[name].js',
  },
  externals: undefined,
})

config.module.loaders = config.module.loaders.concat([
  {
    test: /\.(png|gif|jpg|jpeg)$/,
    loader: 'file?name=[path][name].[ext]'
  }, {
    test: /\.(eot|svg|ttf|woff)$/,
    loader: 'file?name=[path][name].[ext]'
  }, {
    test: /\.tpl$/,
    loader: 'html'
  },
])

config.plugins = config.plugins.concat([
  new WebpackNotifierPlugin()
])

module.exports = config
