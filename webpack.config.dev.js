const path = require('path');
const FlowWebpackPlugin = require('flow-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
  {
    mode: 'development',
    entry: __dirname + '/src/jsx/index',
    output: {
      path: path.join(__dirname, '/dist/js'),
      publicPath: '/dist/static',
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: [ 'env', 'flow', 'react', 'stage-2' ],
          },
        },
        {
          test: /\.(jpe?g|png|gif)$/,
          use: {
            loader: 'file-loader?name=[name].[ext]',
          },
        },
      ],
    },
    plugins: [ new FlowWebpackPlugin() ],
    devServer: {
      contentBase: path.resolve(__dirname, 'dist'),
      port: 3000,
    },
    devtool: 'cheap-module-eval-sourcemap',
    resolve: {
      extensions: [ '.js', '.jsx' ],
    },
  },
  {
    entry: {
      style: __dirname + '/src/styles/style.scss',
    },
    output: {
      path: __dirname + '/dist',
      filename: 'style.css',
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [ 'css-loader', 'sass-loader' ],
          }),
        },
      ],
    },
    plugins: [ new ExtractTextPlugin('style.css'), ]
  },
];

