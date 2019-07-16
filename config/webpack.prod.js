/*require da biblioteca*/
var path = require('path')

var merge = require('webpack-merge');
var dev = require('./webpack.dev')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

/*exportar um objeto*/
module.exports = merge(dev, {
  plugins: [
    /*Objeto de configuração*/
    new UglifyJsPlugin({
      /*Expressão regular, para localizar apenas arquivos javascript*/
      test: /\.js($|\?)/i
    })
  ]
});
