// const webpack
const webpack = require('webpack');
// extract test webpack plugin
// load css into its own chunk, faster, instead of one big
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const config = {
	// current dir
	context: __dirname,
	// entry
	// src, index.js
	entry: './src/index.js',

	// output
	output: {
		// path current
    path: __dirname,
		// all to bundle.js
    filename: 'bundle.js'
  },

	// module has many loaders
	module: {
		loaders: [{
			// must eclude node_modues
			exclude: /node_modules/,
			// test file
			// need js or jsx
			test: /\.(js|jsx)$/,
			loader: 'babel'
		},
		{
			test: /\.scss$/,
			// for scss, each css into own
			// right to left, so sass, css
			loader: ExtractTextPlugin.extract('css!sass')
		}]
	},

	devServer: {
		// like each tab,
    historyApiFallback: true,
		// where we servce .css, .js
    contentBase: './'
  },
	// many plugins
	plugins: [
		// new webpack
		// define plugin means define global var
		// process env
		// NODE_ENV, json.stringify production
		new webpack.DefinePlugin({ 'process.env':{ 'NODE_ENV': JSON.stringify('production') } }),
		// new webpack.opt.deplugin
		// remove duplicate plugins
		new webpack.optimize.DedupePlugin(),
		// chunk or module ids according to occur
		new webpack.optimize.OccurrenceOrderPlugin(),
		// compress
		new webpack.optimize.UglifyJsPlugin({
			// compress, no warning
      compress: { warnings: false },
			// output no comments
      output: {comments: false },
			// no destroy, var name become single letter
      mangle: false,
			// no map
      sourcemap: false,
			// mini
      minimize: true,
			// this no mangle
			// $super, $, exports,
			// require, $q, $oc_lady_load
      mangle: { except: ['$super', '$', 'exports', 'require', '$q', '$ocLazyLoad'] }
    }),
		// src, public, stylesheets, app.css
		new ExtractTextPlugin('src/public/stylesheets/app.css', {
			// all chunks, true
      allChunks: true
    })
	]
}

module.exports = config;  
