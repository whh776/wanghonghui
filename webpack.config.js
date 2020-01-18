// 引入path
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require("copy-webpack-plugin");
// const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    mode: "development",
    entry: "./src/javascript/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js"
    },
    plugins: [
        new HtmlWebpackPlugin({
            // title: "华为商城",
            filename: 'index.html', //文件名
            template: "./src/index.html", //路径
            chunks: ['index', 'vendor'], //模板
            minify: { //压缩html
                removeComments: true, //删除注释
                collapseWhitespace: true //删除空格
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'details.html',
            template: './src/details.html',
            chunks: ['detail', 'vendor'],
            minify: {
                removeComments: true, //删除注释
                collapseWhitespace: true //删除空格
            }
        }),
        new HtmlWebpackPlugin({
            filename: 'cartlist.html',
            template: './src/cartlist.html',
            chunks: ['cartlist', 'vendor'],
            minify: {
                removeComments: true, //删除注释
                collapseWhitespace: true //删除空格
            }
        }),
        new HtmlWebpackPlugin({
            // title: "华为商城-注册",
            filename: 'registry.html',
            template: './src/registry.html',
            chunks: ['registry', 'vendor'],
            minify: {
                removeComments: true, //删除注释
                collapseWhitespace: true //删除空格
            }
        }),
        new HtmlWebpackPlugin({
            title: "华为商城-登录",
            filename: 'login.html',
            template: './src/login.html',
            chunks: ['login', 'vendor'],
            minify: {
                removeComments: true, //删除注释
                collapseWhitespace: true //删除空格
            }
        }),
    ],
    // 引入load
    module: {
        rules: [{
                // 加载jquery
                test: require.resolve('jquery'),
                use: [{
                        loader: 'expose-loader',
                        options: '$'
                    },
                    {
                        loader: 'expose-loader',
                        options: 'jQuery'
                    }
                ]
            },
            // 加载css
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            //配置图片文件的包
            // {
            //     test: /\.(png|jpg|gif|svg|ico)$/,
            //     loader: 'file-loader',
            //     options: {
            //         name: 'images/[name].[ext]'
            //     }
            // },
            {
                test: /\.(png|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                }]
            },
            // 

        ]
    }
}