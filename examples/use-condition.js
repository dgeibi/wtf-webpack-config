const path = require('path')

const Config = require('wtf-webpack-config')
const babel = require('wtf-webpack-config/rules/js/babel')
const define = require('wtf-webpack-config/plugins/define')

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

config.use(babel())

module.exports = (env = {}) => {
  const isProduction = !!env.production
  config.use(define(), isProduction)

  return config.toConfig()
}
