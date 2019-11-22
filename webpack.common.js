const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = () => ({
  entry: path.resolve(__dirname, 'src/index.jsx'),
  node: {
    fs: 'empty'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        resolve: { extensions: ['.js', '.jsx'] },
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react']
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Production',
      template: './src/index.html',
      inject: false
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx']
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js'
  }
});
