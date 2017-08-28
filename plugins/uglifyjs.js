
module.exports = options => (config) => {
  const webpack = require('import-cwd')('webpack')
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
