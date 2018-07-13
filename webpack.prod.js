const webpack = require('webpack'),
    path = require('path'),
    CleanWebpackPlugin = require('clean-webpack-plugin'),
    UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    merge = require('webpack-merge'),
    common = require('./webpack.common.js');

module.exports = merge(common, {
    output: {
		path: path.join(__dirname, 'dist'),
		filename: "bundle.[hash].min.js"
	},
	plugins: [
		new CleanWebpackPlugin(['dist/*.*'], {
            root: __dirname,
            watch: true
        }),
        new UglifyJsPlugin(),
        new ExtractTextPlugin({
            filename: 'bundle.[hash].min.css'
        })
	]
});