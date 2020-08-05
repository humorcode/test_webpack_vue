const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    entry: {
        app: './src/index.js'
            // print: './src/print.js'
    },
    output: {
        filename: 'js_[name].js',
        chunkFilename: 'jsc_[name].js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: './'
    },
    plugins: [
        new webpack.HashedModuleIdsPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: "我擦Production"
        })
    ],
    optimization: {
        // splitChunks: {
        //     chunks: "all", //async异步代码分割 initial同步代码分割 all同步异步分割都开启
        //     minSize: 30000, //字节 引入的文件大于30kb才进行分割
        //     //maxSize: 50000,         //50kb，尝试将大于50kb的文件拆分成n个50kb的文件
        //     minChunks: 1, //模块至少使用次数
        //     maxAsyncRequests: 5, //同时加载的模块数量最多是5个，只分割出同时引入的前5个文件
        //     maxInitialRequests: 3, //首页加载的时候引入的文件最多3个
        //     automaticNameDelimiter: '~', //缓存组和生成文件名称之间的连接符
        //     name: true, //缓存组里面的filename生效，覆盖默认命名
        //     cacheGroups: { //缓存组，将所有加载模块放在缓存里面一起分割打包
        //         vendors: { //自定义打包模块
        //             test: /[\\/]node_modules[\\/]/,
        //             priority: -10, //优先级，先打包到哪个组里面，值越大，优先级越高
        //             filename: 'vendors.js',
        //         },
        //         default: { //默认打包模块
        //             priority: -20,
        //             reuseExistingChunk: true, //模块嵌套引入时，判断是否复用已经被打包的模块
        //             filename: 'common.js'
        //         }
        //     }
        // }
    },
    module: {
        rules: [{
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            }, {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader'
                ]
            },
            {
                test: /\.(csv|tsv)$/,
                use: [
                    'csv-loader'
                ]
            },
            {
                test: /\.xml$/,
                use: [
                    'xml-loader'
                ]
            }
        ]
    }
};