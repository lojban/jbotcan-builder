/* eslint-disable no-var, prefer-template, object-shorthand, func-names,
  import/no-extraneous-dependencies */
var webpack = require('webpack');
var path = require('path');
var autoprefixer = require('autoprefixer');
var functions = require('postcss-functions');
var atImport = require('postcss-import');
var precss = require('precss');
// var stylelint = require('stylelint');
var rem = require('to-rem');
var rucksack = require('rucksack-css');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  devtool: 'eval-source-map',
  entry: {
    bundle: ['webpack-hot-middleware/client?path=/__webpack_hmr', './client/index.js']
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), new ExtractTextPlugin("styles.css")
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        exclude: /node_modules/
      },
      // {
      //   test: /\.css$/,
      //   use: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"}),
      //   loaders: ['style?sourceMap', 'css?modules&importLoaders=1&localIdentName=[local]__[hash:base64:5]', 'postcss']
      // },
      {
        test: /\.scss/,
        exclude: /node_modules/,
        loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap&includePaths[]=node_modules/compass-mixins/lib'
      }, {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }, {
        test: /\.(png|jpg|gif|ico)$/,
        loaders: ['file?name=[path][name].[ext]']
      }
    ]
  },
  postcss: function() {
    return [
      atImport,
      precss,
      rucksack,
      functions({
        functions: {
          rem: rem
        }
      }),
      autoprefixer
    ];
  }
};
