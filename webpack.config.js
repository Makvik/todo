'use strict';

let path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: ['./resources/js/app.js', './resources/css/style.less'],
    output: {
        filename: 'js/bundle.js',
        path: path.resolve(__dirname),
    },
    watch: true,

    devtool: "source-map",

    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/style.css',
        }),
    ],

    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                    },

                    {
                        loader: 'css-loader',
                        options: {url: false}
                    },
                    {
                        loader: 'less-loader',
                    },
                ],
            },
        ],
    },
};
