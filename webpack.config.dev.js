var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
	devtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
		'./src/app.js'
	],
	output: {
		path: __dirname + '/dist',
		publicPath: '/',
		filename: 'bundle.js'
	},
	// eslint: {
	// 	emitWarning: true
	// },
	module: {
		// preLoaders: [
		// 	{
		// 		test: /\.js?$/,
		// 		loaders: ['eslint-loader'],
		// 		exclude: /node_modules/
		// 	}
		// ],
		loaders: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loaders: ['react-hot', 'babel']
			},
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      }
		]
	},
	resolve: {
		extensions: ['', '.js', '.jsx']
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin(),
		HtmlWebpackPluginConfig
	]
};
