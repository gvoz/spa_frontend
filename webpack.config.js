var path = require('path');
var webpack = require('webpack');

const PATHS = {
  src: path.join (__dirname, 'src'),
  build : path.join (__dirname, 'build')
};

module.exports = {
    devtool: 'eval',
    entry: [
      'whatwg-fetch',
      'webpack-hot-middleware/client?reload=true',
      './src/index'
    ],
    output: {
      path: PATHS.build,
      filename: "index.js",
      publicPath: '/'
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.DefinePlugin({
      'process.env': {
        'BACKEND_SERVER': JSON.stringify('http://35.157.80.187')
      }
    })],
    module: {
      loaders: [
        {
          test: /\.css$/,
          loader: 'style!css',
          include: PATHS.src
        },
        {
          test: /\.jsx?$/,
          loaders: ['react-hot', 'babel'],
          include: PATHS.src
        }
      ]
    }
};
