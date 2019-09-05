// const { DefinePlugin } = require('webpack');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new Dotenv({
          path: './.env.development',
    }),
  ],
  devServer: {
    proxy: {
      '/testone': 'http://localhost:5000',
    },
    contentBase: './dist',
    hot: true
  }
}

// devServer: {
//   contentBase: '/',
//   publicPath: '/',
//   historyApiFallback: true,
//   hot: true,
//   proxy: {
//     '/api': NODE_DEV_SERVER_URL,
//   },
// },