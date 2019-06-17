const path = require('path');
const webpack = require('webpack');
const IMAGES_PATH = process.env.IMAGES_PATH || '/images/';
const API_PATH = process.env.API_PATH || 'http://localhost:3001';

const config = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'build'),
    publicPath: 'build',
  },

  devtool: 'inline-source-map',

  devServer: {
    inline: true,
    host: '0.0.0.0',
    port: 3000,
    historyApiFallback: true,
    disableHostCheck: true,
    contentBase: 'public',
  },

  plugins: [
    // This makes it possible for us to safely use env vars on our code
    new webpack.DefinePlugin({
      'process.env.IMAGES_PATH': JSON.stringify(IMAGES_PATH),
      'process.env.API_PATH': JSON.stringify(API_PATH),
    }),
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
