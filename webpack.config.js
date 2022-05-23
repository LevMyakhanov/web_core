const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    mode: 'development',
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './index.html'
        }),
        new HTMLWebpackPlugin({
            filename: 'block1.3.html',
            template: './block1.3.html'
        }),
        new HTMLWebpackPlugin({
            filename: 'menu.html',
            template: './menu.html'
        }),
        new HTMLWebpackPlugin({
            filename: 'block1.5.html',
            template: './block1.5.html'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: "html-loader",
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
                generator: {
                    filename: '[name].[ext]'
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'images/[name].[ext]'
                }
            },
            {
                test: /\.svg$/,
                use: [{
                    loader: 'svg-inline-loader',
                    options: {
                      name: 'img/[name].[ext]'
                    }
                }]
            },
            {
                test: /\.svg$/,
                use: {
                  loader: "svg-url-loader",
                  options: {
                    name: 'img/[name].[ext]'
                  }
                },
              }
        ]
    }
}