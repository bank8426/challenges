const webpack = require('webpack');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpackBundleAnalyzer = require('webpack-bundle-analyzer');
const IMAGES_PATH = process.env.IMAGES_PATH || 'https://serene-goldberg-d32da8.netlify.com/images/';
const API_PATH = process.env.API_PATH || 'https://db-heroku-for-challenge.herokuapp.com';
const CopyPlugin = require('copy-webpack-plugin');

process.env.NODE_ENV = 'production';
const config = {
  mode: 'production',
  target: 'web',
  devtool: 'source-map',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '',
    filename: 'js/[name].js',
  },
  plugins: [
    // Display bundle stats
    new webpackBundleAnalyzer.BundleAnalyzerPlugin({ analyzerMode: 'static' }),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Tamboon Production',
      template: 'public/index.html',
      favicon: 'public/favicon.ico',
    }),
    // This makes it possible for us to safely use env vars on our code
    new webpack.DefinePlugin({
      'process.env.IMAGES_PATH': JSON.stringify(IMAGES_PATH),
      'process.env.API_PATH': JSON.stringify(API_PATH),
    }),
    new CopyPlugin([
      { from: 'public/images', to: 'images' },
    ]),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};

module.exports = config;
