const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ManifestPlugin = require('webpack-manifest-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports ={
  entry : [
    path.join(__dirname,'client/index.js'),
    'webpack-hot-middleware/client',
    'react-hot-loader/patch' // activate HMR for React

  ],

  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/',
	//	filename: '[name]-[hash:8].js', // generate hashed version for cache-bursting
	filename: 'bundle.js',
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json'
  },
  plugins:[
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
		new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
		new UglifyJSPlugin(),
		new ManifestPlugin({
			fileName: 'asset-manifest.json'
		})
  ],
	devtool: 'source-map',
  module:{
    rules: [{
        test:/\.js$/,
        exclude: /node_modules/,
        include: path.join(__dirname,'/client'),
        loaders: [ 'react-hot-loader/webpack','babel-loader','babel-loader?presets[]=es2015,presets[]=es2016,presets[]=react,presets[]=stage-3,plugins[]=transform-class-properties'],
      },
      {
              test: /\.css$/,
              loaders: [ 'style-loader', 'css-loader' ],
      },
      {
            test: /\.(ttf|eot|woff|woff2)$/,
            use: {
              loader: 'file-loader', // user: ['file-loader']
              options: {
                name: 'fonts/[name].[ext]',
              },
            },
      },
      {
            test: /\.(png|svg|jpg|jpeg|gif)$/,
            use: {
              loader: 'file-loader', // user: ['file-loader']
              options: {
                name: 'images/[name].[ext]',
              },
            },
        }
          ]
  },
  resolve: {
    extensions : ['.js','.css']
  }
}
