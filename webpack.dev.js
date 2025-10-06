const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-cheap-module-source-map',
  
  devServer: {
    port: 3001,
    historyApiFallback: true,
    hot: true,
    open: true
  }
});