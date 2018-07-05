const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	devtool: 'eval',
	entry: [
		'./src/app.js'
	],
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	module: {
		rules: [
      {
				enforce: 'pre',
        test: /\.js$/,
				exclude: /node_modules/,
				use: [
          'babel-loader',
          'eslint-loader',
        ]
      },
			{
        test: /\.css$/,
				use: ['style-loader','css-loader']
			}
		]
	},
	resolve: {
		extensions: ['.js', '.jsx']
	},
	devServer: {
		contentBase: './dist',
		hot: true,
		historyApiFallback: true
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + '/src/index.html',
      filename: 'index.html',
      inject: 'body'
    })
	]
};
