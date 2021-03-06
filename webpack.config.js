const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')


module.exports = {
module: {    
	rules: [       
				{
				test: /\.js$/,       
				exclude: /node_modules/,       
				use: ['babel-loader'],     
				},  
				{ 
				test: /\.(?:ico|gif|png|jpg|jpeg)$/i,        
				type: 'asset/resource',      
				},
				{        
				test: /\.(woff(2)?|eot|ttf|otf|svg|)$/,        
				type: 'asset/inline',      
				},				
		  ],  
	  },
	entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
	output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
    plugins: [    
	new CleanWebpackPlugin(),
	new HtmlWebpackPlugin({      title: 'webpack Boilerplate',      template: path.resolve(__dirname, './src/template.html'), 
	filename: 'index.html', 
	}),
	],
}