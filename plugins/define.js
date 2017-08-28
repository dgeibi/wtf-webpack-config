module.exports = options => (config) => {
  const webpack = require('import-cwd')('webpack')
  const opts = Object.assign(
    {
      'process.env.NODE_ENV': '"production"',
    },
    options
  )

  config.plugin(webpack.DefinePlugin, [opts])
}
