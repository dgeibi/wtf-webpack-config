module.exports = (filename, options) => (config) => {
  const ExtractTextPlugin = require('import-cwd')('extract-text-webpack-plugin')
  const extractMainCSS = new ExtractTextPlugin(filename)
  const rule = Object.assign(
    {
      test: /\.css$/,
      use: extractMainCSS.extract(['css-loader', 'postcss-loader']),
    },
    options
  )

  config.plugin(extractMainCSS).rule(rule)
}
