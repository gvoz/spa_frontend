var path = require('path');
var webpack = require('webpack');

const PATHS = {
  src: path.join (__dirname, 'src'),
  build : path.join (__dirname, 'build')
};

module.exports = {
    devtool: 'eval',
    entry: [
      'webpack-hot-middleware/client?reload=true',
      './src/index'
    ],
    output: {
      path: PATHS.build,
      filename: "bundle.js",
      publicPath: '/build/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
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
