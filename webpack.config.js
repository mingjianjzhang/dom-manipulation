var path = require('path');
var webpack = require('webpack');
module.exports = {
	entry: './js/index.js',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: 'main.bundle.js'
	},
	devServer: {
		contentBase: './build'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel-loader',
				query: {
					presets: ['@babel/preset-env']
				}
			}
		]
	},
	devtool: 'source-map'
};