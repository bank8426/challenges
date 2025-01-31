const webpack = require('webpack');
const path = require('path');
const IMAGES_PATH = process.env.IMAGES_PATH || '/images/';
const API_PATH = process.env.API_PATH || 'http://localhost:3001';
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const config = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '',
    filename: 'js/[name].js',
  },

  devtool: 'inline-source-map',

  devServer: {
    inline: true,
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true,
    disableHostCheck: true,
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Tamboon Development',
      template: path.resolve(__dirname, 'public', 'index.html'),
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
