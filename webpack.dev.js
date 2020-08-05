const webpackmerge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');

module.exports = webpackmerge.merge(common, {
    mode: "development",
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
        publicPath: '/',
        hot: true
    },
    plugins: [new webpack.NamedModulesPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development')
        })
    ]
});