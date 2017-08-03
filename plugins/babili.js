const BabiliPlugin = require('import-cwd')('babili-webpack-plugin');

module.exports = () => (config) => {
  const babiliOptions = {
    compress: {
      warnings: false,
    },
    comments: false,
    'screw-ie8': true,
  };

  const overrides = {
    removeConsole: true,
    removeDebugger: true,
  };

  config.plugin(BabiliPlugin, babiliOptions, overrides);
};
