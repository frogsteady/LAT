'use strict';

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        page: './src/main/react/index.jsx'
    },
    output: {
        filename: 'target/build.js',
        publicPath: '/',
        // export itself to a global var
        libraryTarget: "var",
        // name of the global var: "Index"
        library: "Index"
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ['babel-loader']
            },
            {test: /\.css$/, use: ['style-loader', 'css-loader']},
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            }

        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        new HtmlWebpackPlugin({template: './public/html/index.html'}),
        // new CleanWebpackPlugin(['target']),
    ]
};