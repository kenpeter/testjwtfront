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

	module: {
		loaders: [{

		}]
	},
	
}
