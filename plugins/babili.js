module.exports = () => (config) => {
  const BabiliPlugin = require('import-cwd')('babili-webpack-plugin')
  const overrides = {
    compress: {
      warnings: false,
    },
    comments: false,
    'screw-ie8': true,
  }

  const babiliOptions = {
    removeConsole: true,
    removeDebugger: true,
  }

  config.plugin(BabiliPlugin, [babiliOptions, overrides])
}
