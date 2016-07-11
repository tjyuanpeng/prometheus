var fs = require('fs')
var path = require('path')
var webpack = require('webpack')

var ExtractTextPlugin = require('extract-text-webpack-plugin')
var customProperties = require('postcss-custom-properties')
var HappyPack = require('happypack')
var happyThreadPool = HappyPack.ThreadPool({ size: 5 })
var WebpackNotifierPlugin = require('webpack-notifier')

var environment = process.env.NODE_ENV || 'development';

function EntryGeneratorPlugin(options) {}
EntryGeneratorPlugin.prototype.apply = function(compiler) {
  compiler.plugin('emit', function(compilation, callback) {
    compilation.chunks.forEach(function(chunk) {
      var name = path.basename(chunk.name)
      var content = "module.exports = require('./lib/" + name + ".js')"
      if (chunk.files.length > 1) {
        content += "\nrequire('./lib/" + name + ".css')"
      }
      var fileName = name
      compilation.assets[fileName + '.js'] = {
        source: function() {
          return content;
        },
        size: function() {
          return content.length;
        }
      };
    });

    callback();
  });
};

function getDirectories(srcpath) {
  return fs.readdirSync(srcpath).filter(function(file) {
    return fs.statSync(path.join(srcpath, file)).isDirectory();
  });
}

var entry = {
  'lib/index': './src/index.jsx',
}
getDirectories(path.resolve(process.cwd(), './src/')).forEach(function(name) {
  if (name === 'util') {
    return
  }
  entry['lib/' + name] = ['./src/' + name + '/index.jsx']
})

var config = {
  stats: { children: false },
  entry: entry,
  output: {
    path: './dist',
    filename: '[name].js',
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
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('[name].css', {
      allChunks: true,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(environment),
    }),
    new EntryGeneratorPlugin(),
    new WebpackNotifierPlugin()
  ],
}

module.exports = config
