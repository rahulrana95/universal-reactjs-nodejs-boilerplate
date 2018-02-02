const webpackMerge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.config.common.js');
module.exports = Object.assign({},common, {
	plugins: [
			new UglifyJSPlugin()
		]
});