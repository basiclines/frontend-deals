const path = require('path');

module.exports = {

	entry: [
		'./src/app.js'
	],

	output: {
		path: path.resolve(__dirname, 'src/dist/'),
		filename: 'app.bundle.js'
	},

	resolve: {
		alias: {
			src: path.resolve(__dirname, 'src/'),
			leo: path.resolve(__dirname, 'node_modules/@basiclines/leo/dist/leo')
		}
	},

	module: {
		rules: [
			{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }
		]
	}
}

