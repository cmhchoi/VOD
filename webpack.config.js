const path = require('path');
const webpack = require('webpack');
 
module.exports = {
  entry: './src/client/app.js',
  output: { 
    path: path.join(__dirname, './src/client'),
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loaders: ['style', 'css', 'sass'],
      },
    ]
  },
  watch: true,
  devServer: {
    inline: true,
    port: 3000,
  },
};


// module.exports = {
//   devtool: 'inline-source-map',
//   entry: [
//     './client/src',
//   ],
//   output: {
//     path: path.join(__dirname, './client/public'),
//     filename: 'bundle.js',
//   },
//   resolve: {
//     modulesDirectories: ['node_modules', 'client/src'],
//     extensions: ['', '.js'],
//   },
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?$/,
//         exclude: /node_modules/,
//         loaders: ['babel?presets[]=react,presets[]=es2015'],
//       },
//       {
//         test: /\.scss$/,
//         loaders: ['style', 'css', 'sass'],
//       },
//     ],
//   },
//   plugins: [
//     new webpack.NoErrorsPlugin(),
//   ],
// };
