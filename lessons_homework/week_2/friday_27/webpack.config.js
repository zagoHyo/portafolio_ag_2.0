const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// Ajustes de salida
module.exports = {
    entry: ['@babel/polyfill','./src/app/index.js',],
    mode:'production',
    output: {
        filename: 'js/app.bundle.js',
        path: path.resolve(__dirname, 'build'),
    },
    devServer:{
        port:3000
    },
    module:{
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },      
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({template: './src/index.html', 
        manify: {
            collapseWhitespace: true,
            removeComments: true,
            removeRedundantAttributes: true,
            removeScriptTypeAttributes: true,
            removeStyleLinkTypeAttributes: true,
            useShortDoctype: true
        }
    }),
    new MiniCssExtractPlugin({
        filename: 'css/app.bundle.css'
    })
]
};
