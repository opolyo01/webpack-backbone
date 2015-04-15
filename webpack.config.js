'use strict';

var path = require("path");
var webpack = require("webpack");

module.exports = { 
    debug: true,
    devtool: "eval",
    entry: [
        './public/javascripts/app.js'
    ],
    output: {
        path: path.join(__dirname, "public/build"),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
            { test: /\.jsx$/, loader: 'jsx-loader?harmony' },
            { test: /\.less$/, loader: 'style-loader!css-loader!less-loader' }, // use ! to chain loaders
            { test: /\.css$/, loader: 'style-loader!css-loader' },
            { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' },
            { test: /\.html/, loader: "underscore-template-loader"}
        ]
    },
    resolve: {
        alias: {
            
        },
        extensions: ['', '.js', '.jsx', '.json'],
        modulesDirectories: ['node_modules', 'bower_components']
    },
    plugins: [
        new webpack.ProvidePlugin({
            _: "underscore"
        })
    ]
};