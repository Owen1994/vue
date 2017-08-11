const htmlwebpack = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js'
    },

    plugins: [
        new htmlwebpack({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.tpl$/,
                use: 'html-loader'
            },
            {
                test: /\.(png|gif|jpg)$/,
                use: [
                    { loader: 'url-loader', options: { limit: 4000 } },
                    'image-webpack-loader'
                ]
            },
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['es2015'],
                        plugins:['transform-runtime']
                    }
                },
                exclude:/node_modules/
            },
            {
                test:/\.vue$/,
                use:[
                    'vue-loader'
                ]
            }
        ]
    }
}