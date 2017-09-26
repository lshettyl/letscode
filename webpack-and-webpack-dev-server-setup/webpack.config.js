const path = require('path');
const BUILD_DIR = path.join(__dirname, '/build');
const APP_DIR = path.join(__dirname, '/src');
const CONTENT_BASE = path.join(__dirname, '/');

module.exports = {

  entry: APP_DIR + '/App.js',
  output: {
    path: BUILD_DIR,
    publicPath: '/build',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: CONTENT_BASE,
    compress: true,
    port: 9000, //Your own port
    inline: true, //To live reload as and when you make/save changes
    open: true //Opens the url in your default browser
  },
  devtool: 'inline-source-map',
  resolveLoader: {
    modules: ['node_modules'/*, path_resolve(__dirname, 'loaders')*/]
  },
  module: {
    loaders: [
      {
        loader: 'babel-loader',
        test: /\.js$/,
        include: APP_DIR,
        query: {
          presets: ['env']
        }
      },
      {
        loader: 'style-loader!css-loader',
        test: /\.css$/,
        include: APP_DIR
      }
    ]
  }
};
