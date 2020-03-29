const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
	mode: 'production',
	entry: {
		background: './src/background.js',
		content: './src/content.js'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'chrome')
	},

	plugins: [
		new CleanWebpackPlugin(),
		new CopyPlugin([
			{
				from: './src/manifest.json',
				to: path.resolve(__dirname, 'chrome')
			},
			{
				from: './src/images',
				to: path.resolve(__dirname, 'chrome/images')
			}
		])
	]
}
