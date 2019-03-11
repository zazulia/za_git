var path = require('path');
const autoprefixer = require('autoprefixer');
 
module.exports = {
	entry: './src/index.js',
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
	  rules: [{
			test: /\.m?js$/,
			exclude: /(node_modules|bower_components)/,
			use: {
			loader: 'babel-loader',
			options: {
				presets: ['@babel/preset-env']
			}
			}
		},  {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
				name: '[path][name].[ext]',
				context: path.resolve(__dirname, "src/"),
			},
          },
        ],
      },  {
        test: /\.(woff|woff2)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
				name: '[path][name].[ext]',
				context: path.resolve(__dirname, "src/"),
			},
          },
        ],
      }, {
			test: /\.scss$/,
            use: [{
                        loader: "file-loader",
                        options: {
                            name: "css/[name].css",
                        },
                    },
                    {
                        loader: "extract-loader",
                        options: {
                            publicPath: "../",
                        }
                    }, {
                loader: "css-loader"
            }, {
				loader: 'postcss-loader',
				options: {
					plugins: [
						autoprefixer({
							browsers:['ie >= 11', 'last 4 version']
						})
					],
					sourceMap: true
			}},
			{
                loader: "sass-loader"
            }]
        }]
	}
};