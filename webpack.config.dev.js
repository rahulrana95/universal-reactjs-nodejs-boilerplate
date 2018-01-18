import path from  'path';
import webpack from 'webpack';

export default {
  devtool: 'eval-source-map',
  entry : [
    path.join(__dirname,'/client/index.js'),
    'webpack-hot-middleware/client'
  ],

  output: {
    path: '/',
    publicPath: '/',
    filename:'bundle.js'
  },
  plugins:[
    new webpack.NoErrorsPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  module:{
    loaders:[
      {
        test:/\.js$/,
        exclude: /node_modules/,
        include: path.join(__dirname,'/client'),
        loaders: [ 'react-hot-loader/webpack','babel-loader' ]
      }
    ]
  },

  resolve: {
    extensions : ['.js']
  }
}
