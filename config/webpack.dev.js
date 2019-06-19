/*require da biblioteca*/
var path = require('path')

/*exportar um objeto*/
module.exports = {
    /*ponto de entrada do webpack*/
    entry: './src/app.js',

    /*saída*/
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [path.resolve(__dirname, '../node_modules/babel-preset-env')]
                    }
                }
            }
        ]
    }
}
