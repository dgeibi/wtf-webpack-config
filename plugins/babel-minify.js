module.exports = (minifyOpts, pluginOpts) => (config) => {
  const plugin = require('import-cwd')('babel-minify-webpack-plugin')
  config.plugin(plugin, [
    Object.assign(
      {
        removeConsole: true,
        removeDebugger: true,
      },
      minifyOpts
    ),
    Object.assign(
      {
        comments: false,
      },
      pluginOpts
    ),
  ])
}
