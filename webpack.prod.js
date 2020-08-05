const webpackmerge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = webpackmerge.merge(common, {
    mode: "production",
    devtool: 'source-map'
});