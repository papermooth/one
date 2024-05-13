const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {

    // 模式
    mode: 'development',

    // 入口
    entry: './src/index.js',

    // 输出
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },

    // 模块处理规则
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },

            {
                test: /\.(png|jpg|svg|eot|ttf|woff)$/i,
                type: 'asset' // asset modules
            },

            {
                test: /\.js$/i,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime']
                    }
                },
                exclude: /node_modules/
            }
        ]
    },

    // 插件
    plugins: [
        new MiniCssExtractPlugin(),

        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ],

    // 开发服务器
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        },
        port: 9000
    }
}