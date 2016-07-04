var path = require('path')
var webpack = require('webpack');

var ExtractTextPlugin = require("extract-text-webpack-plugin");
var WebpackNotifierPlugin = require('webpack-notifier');
var autoprefixer = require('autoprefixer');
var customProperties = require("postcss-custom-properties");
var HappyPack = require('happypack');
var happyThreadPool = HappyPack.ThreadPool({ size: 5 });

var packageJson = require('./package.json');
var environment = process.env.NODE_ENV || 'development';

var config = {
  stats: { children: false },
  devtool: 'cheap-module-source-map',
  entry: {
    'list/page-test/entry': './list/page-test/entry',
  },
  output: {
    path: 'dist/' + packageJson.name + '/',
    publicPath: '/' + packageJson.name + '/',
    filename: '[name].js'
  },
  resolve: {
    // modulesDirectories: ['node_modules', 'node_modules/@alife'],
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
  postcss: function (webpack) {
    return [
      customProperties,
      autoprefixer({
        browsers: ['last 2 versions', 'ie 9', 'ie 10']
      })
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
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common-chunks',
      minChunks: 3,
      chunks: [
        'list/page-list/entry',
        'list/page-list-rfq/entry',
        'list/page-recycle/entry',
      ]
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendors',
      chunks: ['common-chunks']
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
  // config.devtool = 'cheap-module-source-map';
  // config.plugins.push(new webpack.SourceMapDevToolPlugin({
  //   test: /\.js$/,
  //   exclude: [
  //     'vendors.js',
  //     'common/entry/browser-upgrade',
  //   ],
  //   filename: '[file].map',
  //   columns: false, // cheap
  //   module: true // module
  // }));
  config.plugins.push(new WebpackNotifierPlugin());
}

module.exports = config;
