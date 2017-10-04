const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PUB_DIR = path.join(__dirname, '/public');
const APP_DIR = path.join(__dirname, '/src');
const CONTENT_BASE = path.join(__dirname, '/public');

module.exports = {

  entry: APP_DIR + '/index.js',
  output: {
    path: PUB_DIR,
    publicPath: '/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: CONTENT_BASE,
    compress: true,
    port: 9001, //Your own port
    inline: true, //To live reload as and when you make/save changes
    open: true //Opens the url in your default browser
  },
  devtool: 'inline-source-map',
  resolveLoader: {
    modules: ['node_modules']
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.(js|jsx)$/,
        include: APP_DIR,
        exclude: /node_modules/,
        query: {
          presets: ['env', 'react']
        }
      },
      {
        loader: 'style-loader!css-loader',
        test: /\.css$/,
        include: APP_DIR,
        exclude: /node_modules/,
      },
      {
        loader: 'style-loader!css-loader!sass-loader',
        test: /\.scss$/,
        include: APP_DIR,
        exclude: /node_modules/,
      },
      {
        loader: 'html-loader',
        test: /\.html?$/,
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: PUB_DIR + '/index.html',
      filename: PUB_DIR + '/index.html',
      inject: 'body'
    })
  ]
};
