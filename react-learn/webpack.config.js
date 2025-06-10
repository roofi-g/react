const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        main: './index.jsx'
    },
    mode: 'development',
    context: resolve(__dirname, 'src'),
    output: {
        filename: 'main.[contenthash].js',
        path: resolve(__dirname, 'build')
    },
    resolve: {
        modules: [`${__dirname}/src`, 'node_modules'],
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                options: {
                    plugins: [
                        ["@babel/plugin-proposal-class-properties", {"loose": true}]
                    ]
                }
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: resolve(__dirname, 'public/index.html')}),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].css'
        }),
    ],
    devServer: {
        port: 3000,
        hot: true,
        open: false
    }
}
