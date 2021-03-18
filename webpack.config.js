const HtmlWebpackPlugin = require('html-webpack-plugin')

const path = require('path');

module.exports = {
    entry: './src/index.tsx',
    mode: 'development',
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.(js|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.(sass|scss|css)$/,
                exclude: /node_modules/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist'),
        port: 8080,
        hot: true,
    },
    plugins: [new HtmlWebpackPlugin({
        template: 'index.html'
    })],
};
