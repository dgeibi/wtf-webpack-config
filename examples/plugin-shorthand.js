const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const Config = require('wtf-webpack-config')

const publicPath = 'dist'
const assetPath = 'asset'

const config = new Config({
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, publicPath, assetPath),
    filename: 'bundle.js',
    publicPath: `${assetPath}/`,
  },
  devServer: {
    contentBase: path.resolve(__dirname, publicPath),
  },
})

config.plugin(HtmlWebpackPlugin, [
  {
    template: 'templates/index.ejs',
  },
])

module.exports = config.toConfig()
