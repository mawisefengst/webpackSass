var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
	entry: "./src/app.js",
	output : {
		filename: "bundle.js",
		path: __dirname + "/dist"
	},
	performance : {hints : false},
	module:{
		rules:[
			{
				test: /\.html$/,
				loader: [
					"raw-loader"

				]
			},
			{
				test : /\.css$/,
				loader: "style-loader!css-loader"
			},
			{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract({
				  fallbackLoader: 'style-loader',
				  loader: [
					  {	loader: 'css-loader'},
					  {	loader: 'postcss-loader'},
					  { loader: 'sass-loader' }
					]
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin("styles.css")
	],
	watch: true,
	devServer: {
		contentBase: "./dist",
		inline: true,
    }
}