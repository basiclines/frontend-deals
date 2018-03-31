const path = require('path');

module.exports = {

	entry: [
		'@webcomponents/custom-elements/src/native-shim',
		'@webcomponents/custom-elements',
		'./src/app.js'
	],

	output: {
		path: path.resolve(__dirname, 'src/'),
		filename: 'app.bundle.js'
	},

	resolve: {
		alias: {
			src: path.resolve(__dirname, 'src/'),
			leo: path.resolve(__dirname, 'node_modules/@basiclines/leo/src/leo'),
			native_shim: path.resolve(__dirname, 'node_modules/@webcomponents/custom-elements/src/native-shim'),
			custom_elements: path.resolve(__dirname, 'node_modules/@webcomponents/custom-elements')
		}
	},

	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
		]
	}
}

