const webpack = require('import-cwd')('webpack')

module.exports = options => (config) => {
  const opts = Object.assign(
    {
      compress: {
        warnings: false,
      },
      comments: false,
      'screw-ie8': true,
    },
    options
  )

  config.plugin(webpack.optimize.UglifyJsPlugin, [opts])
}
