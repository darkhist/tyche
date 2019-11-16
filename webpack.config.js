const path = require('path');
const dotenv = require('dotenv');
const { DefinePlugin } = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => {
  const env = dotenv.config().parsed;

  return {
    entry: path.resolve(__dirname, 'src/index.js'),
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'bundle.js'
    },
    node: {
      fs: 'empty'
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          resolve: { extensions: ['.js', '.jsx'] },
          exclude: /node_modules/,
          use: ['babel-loader', 'eslint-loader']
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
        inject: false
      }),
      new DefinePlugin({
        'process.env.PROXY_URL': JSON.stringify(`${env.PROXY_URL}`)
      })
    ]
  };
};
