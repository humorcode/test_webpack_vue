const webpackmerge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = webpackmerge.merge(common, {
    mode: "production",
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
});