var path = require('path')
var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var WebpackNotifierPlugin = require('webpack-notifier');
var customProperties = require("postcss-custom-properties");
var HappyPack = require('happypack');
var happyThreadPool = HappyPack.ThreadPool({ size: 5 });

var packageJson = require('./package.json');
var environment = process.env.NODE_ENV || 'development';

var config = {
  stats: { children: false },
  externals: [
    'react',
    'react-dom',
    '@alife/alpha-icon/icon.css'
  ],
  entry: {
    'prometheus': './src/index.jsx',
  },
  output: {
    path: 'lib/',
    filename: '[name].js',
    library: 'prometheus',
    libraryTarget: "commonjs2",
  },
  resolve: {
    root: [
      path.resolve(__dirname, './node_modules'),
      path.resolve(__dirname, './node_modules/@alife')
    ],
    extensions: ['', '.js', '.jsx']
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
      happy: { id: 'jsx' }
    }, {
      test: /^((?!\.module).)*css$/,
      loader: ExtractTextPlugin.extract('@ali/ta-css-loader')
    }, {
      test: /\.module\.css$/,
      loader: ExtractTextPlugin.extract('@ali/ta-css-loader?modules&localIdentName=[name]__[local]___[hash:base64:5]&importLoaders=1!happypack/loader?id=postcss')
    }]
  },
  postcss: function () {
    return [
      customProperties,
    ];
  },
  plugins: [
    new HappyPack({
      id: 'jsx',
      threadPool: happyThreadPool,
    }),
    new HappyPack({
      id: 'postcss',
      threadPool: happyThreadPool,
      loaders: [ 'postcss-loader' ]
    }),
    new ExtractTextPlugin('[name].css', {
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(environment)
    })
  ]
};

if (environment === 'production') {
  config.plugins.push(new webpack.optimize.DedupePlugin());

  // -p: --optimize-minimize --optimize-occurence-order
  config.plugins.push(new webpack.optimize.OccurenceOrderPlugin());
  config.plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress:{
      warnings: false
    },
    output: {
      comments: false
    }
  }));
}

if (environment === 'development') {
  config.plugins.push(new WebpackNotifierPlugin());
}

module.exports = config;
