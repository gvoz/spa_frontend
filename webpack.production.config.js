var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: [
      './src/index'
    ],
    output: {
      path: path.join (__dirname, 'public'),
      filename: "index.js",
      publicPath: '/'
    },
    plugins: [
      new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'BACKEND_SERVER': JSON.stringify('http://35.157.80.187')
      }
    })
    ],
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loaders: ['react-hot', 'babel'],
          include: path.join (__dirname, 'src')
        }
      ]
    }
};
