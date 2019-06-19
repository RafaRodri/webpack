const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

/*require da biblioteca*/
var path = require('path')

/*exportar um objeto*/
module.exports = {
	/*ponto de entrada do webpack*/
	entry: './src/app.js',

	/*saída*/
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	plugins: [
		/*Objeto de configuração*/
		new UglifyJsPlugin({
			/*Expressão regular, para localizar apenas arquivos javascript*/
			test: /\.js($|\?)/i
		})
	]
}
