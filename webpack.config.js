const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
	template: './src/index.html',
	filename: 'index.html',
	hash: true
});

// Tweak this to match your GitHub project name
const publicPath = '/covid-visual-guide/';

module.exports = {
	devServer: {
		contentBase: './dist',
		port: 3000
	},
	// Development Tools (Map Errors To Source File)
  	devtool: 'source-map',
  	// source
	entry: { 
		main: './src/index.js'
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
		// Tweak this to match your GitHub project name
      	publicPath: publicPath
	},
	module: {
		rules: [
			// CSS (or SASS but not used here)
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
	plugins: [HtmlWebpackPluginConfig]
};