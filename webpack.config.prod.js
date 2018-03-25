const webpackMerge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports ={
    // Don't attempt to continue if there are any errors.
    bail: true,
    entry : [
        path.join(__dirname,'client/index.js')
    ],

    output: {
        path: path.join(__dirname, 'build'),
        publicPath: './',
        filename:'bundle.js'
    },
    plugins:[
        new webpack.NoEmitOnErrorsPlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new HtmlWebpackPlugin(),
        new UglifyJSPlugin({
            cache: true,
            parallel: true,
            sourceMap: true,
            uglifyOptions: {
                ecma: 8,
                warnings: false,
                compress: {
                    warnings: false,
                    conditionals: true,
                    unused: true,
                    comparisons: true,
                    sequences: true,
                    dead_code: true,
                    evaluate: true,
                    if_return: true,
                    join_vars: true
                },
                output: {
                    comments: false,
                    beautify: false,
                },
                toplevel: false,
                nameCache: null,
                ie8: false,
                keep_classnames: undefined,
                keep_fnames: false,
                safari10: false,
            }
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ],
    // We generate sourcemaps in production. This is slow but gives good results.
    // You can exclude the *.map files from the build during deployment.
    devtool: 'source-map',
    module:{
        strictExportPresence: true,

        rules: [
            // {
            //     test: /\.(js|jsx|mjs)$/,
            //     enforce: 'pre',
            //     use: [
            //         {
            //             options: {
            //                 formatter: eslintFormatter,
            //                 eslintPath: require.resolve('eslint'),
            //
            //             },
            //             loader: require.resolve('eslint-loader'),
            //         },
            //     ],
            // },
            {
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
                test: /\.(eot?.+|svg?.+|ttf?.+|otf?.+|woff?.+|woff2?.+)$/,
                use: 'file-loader?name=assets/[name]-[hash].[ext]'
            },
            {
                test: /\.(png|gif|jpg|svg)$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {}
                    }
                ],
            }
        ]
    },
    resolve: {
        extensions : ['.js']
    }
}