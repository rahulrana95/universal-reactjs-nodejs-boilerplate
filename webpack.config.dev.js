const webpackMerge = require('webpack-merge');
const common = require('./webpack.config.common');


module.exports     = Object.assign({}, common, {
  devtool: 'inline-source-map'
});