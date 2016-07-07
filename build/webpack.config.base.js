var path = require('path')
var webpack = require('webpack')

var ExtractTextPlugin = require('extract-text-webpack-plugin')
var customProperties = require('postcss-custom-properties')
var HappyPack = require('happypack')
var happyThreadPool = HappyPack.ThreadPool({ size: 5 })

var environment = process.env.NODE_ENV || 'development';

var config = {
  entry: {
    'prometheus': './src/index.jsx',
  },
  output: {
    path: 'dist/',
    filename: '[name].js',
    library: 'prometheus',
    libraryTarget: 'commonjs2',
  },
  externals: [
    'react',
    'react-dom',
    'react-css-modules',
    'moment',
    '@alife/alpha-icon/icon.css',
  ],
  resolve: {
    root: [
      path.resolve(__dirname, '../node_modules'),
      path.resolve(__dirname, '../node_modules/@alife'),
    ],
    extensions: ['', '.js', '.jsx'],
  },
  module: {
    loaders: [{
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
      // loader: ExtractTextPlugin.extract('@ali/ta-css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]&importLoaders=1!postcss'),
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
  ],
}

module.exports = config
