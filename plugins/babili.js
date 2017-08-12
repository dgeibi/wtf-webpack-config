const BabiliPlugin = require('import-cwd')('babili-webpack-plugin')

module.exports = () => (config) => {
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
