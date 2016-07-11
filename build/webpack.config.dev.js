var path = require('path')
var webpack = require('webpack')

var ExtractTextPlugin = require('extract-text-webpack-plugin')
var customProperties = require('postcss-custom-properties')
var HappyPack = require('happypack')
var happyThreadPool = HappyPack.ThreadPool({ size: 5 })
var WebpackNotifierPlugin = require('webpack-notifier')

var environment = process.env.NODE_ENV || 'development';

var config = {
  devServer: {
    contentBase: './examples/',
    stats: {
      chunks: false,
      children: false,
    }
  },
  entry: {
    'index': './examples/index.jsx',
  },
  output: {
    path: '/',
    filename: '[name].js',
  },
  resolve: {
    root: [
      path.resolve(__dirname, '../node_modules'),
    ],
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [{
      test: /\.(png|gif|jpg|jpeg)$/,
      loader: 'file?name=[path][name].[ext]'
    }, {
      test: /\.(eot|svg|ttf|woff)$/,
      loader: 'file?name=[path][name].[ext]'
    }, {
      test: /\.tpl$/,
      loader: 'html'
    }, {
      test: /\.jsx$/,
      exclude: ['node_modules'],
      loader: 'babel-loader',
      happy: { id: 'jsx' },
    }, {
      test: /^((?!\.module).)*css$/,
      loader: ExtractTextPlugin.extract('@ali/ta-css-loader'),
    }, {
      test: /\.module\.css$/,
      loader: ExtractTextPlugin.extract('@ali/ta-css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]&importLoaders=1!happypack/loader?id=postcss'),
    }],
  },
  postcss() {
    return [
      customProperties,
    ]
  },
  plugins: [
    new HappyPack({
      id: 'jsx',
      threadPool: happyThreadPool,
    }),
    new HappyPack({
      id: 'postcss',
      threadPool: happyThreadPool,
      loaders: ['postcss-loader'],
    }),
    new ExtractTextPlugin('[name].css', {
      allChunks: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(environment),
    }),
    new WebpackNotifierPlugin()
  ],
}

module.exports = config
