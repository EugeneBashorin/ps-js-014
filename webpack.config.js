const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
    entry: {
        // main: path.resolve(__dirname, './src/index.js'),
        gallery: path.resolve(__dirname, './src/01-gallery.js'),
        video: path.resolve(__dirname, './src/02-video.js'),
        feedback: path.resolve(__dirname, './src/03-feedback.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: "[name].js",
        // filename: '[name].bundle.js',
        library: "[name]"
    },
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        static: path.resolve(__dirname, './dist'),
        open: true,
        compress: true,
        hot: true,
        port: 8080,
      },

    plugins: [
        new HtmlWebpackPlugin({
            title: 'index.html',
            template: path.resolve(__dirname, './src/index.html'),
            filename: 'index.html', // output file
        }),
        new HtmlWebpackPlugin({
            title: '01-gallery.html',
            template: path.resolve(__dirname, './src/01-gallery.html'),
            filename: '01-gallery.html', // output file
        }),
        new HtmlWebpackPlugin({
            title: '02-video.html',
            template: path.resolve(__dirname, './src/02-video.html'),
            filename: '02-video.html', // output file
        }),
        new HtmlWebpackPlugin({
            title: '03-feedback.html',
            template: path.resolve(__dirname, './src/03-feedback.html'),
            filename: '03-feedback.html', // output file
        }),
        new CleanWebpackPlugin(),
        new webpack.HotModuleReplacementPlugin(),
    ],
    module: {
        rules: [
            //Java-Script
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: ['babel-loader'],
            },
            //Images
            {
                test: /\.(?:ico|gif|png|jpg|jpeg)$/i,
                type: 'asset/resource',
            },
            //fonts ang SVGs
            {
                test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,
                type: 'asset/inline',
            },
            // CSS, PostCSS, and Sass
            {
                test: /\.(scss|css)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },

}