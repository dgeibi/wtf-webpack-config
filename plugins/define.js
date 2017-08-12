const webpack = require('import-cwd')('webpack')

module.exports = options => (config) => {
  const opts = Object.assign(
    {
      'process.env.NODE_ENV': '"production"',
    },
    options
  )

  config.plugin(webpack.DefinePlugin, [opts])
}
