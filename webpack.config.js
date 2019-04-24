const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './src/index.html',
	filename: 'index.html'
});

module.exports = {
	devServer: {
		contentBase: './dist',
		port: 3000
	},
	entry: { 
		main: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js'
	},
	// mode: 'development',
	module: {
		rules: [
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader']
			},
			// js/jsx (es6 friendly)
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: { 
					loader: 'babel-loader'
				}

			},
			// image loader
			{
				test: /\.(gif|jpg|png|svg)$/,
				use: {
					loader: 'file-loader'
				}
			},
			// fonts
			{
				test: /\.(eot|otf|ttf|woff|woff2)$/,
				use: {
					loader: 'file-loader'
				}
			}
		]
	},
	plugins: [HtmlWebpackPluginConfig],
	watch: true
};