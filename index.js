module.exports = class Config {
  constructor(config) {
    this.config = null;
    this.reset(config);
  }

  reset(config) {
    this.config = Object.assign({
      entry: {},
      output: {},
      module: { rules: [] },
      plugins: [],
      devServer: {},
    }, config);
    return this;
  }

  toConfig() {
    return this.config;
  }

  use(fn, condition = true) {
    if (condition) {
      fn(this);
    }
    return this;
  }

  plugin(Plugin, ...args) {
    if (typeof Plugin === 'function') {
      this.config.plugins.push(new Plugin(...args));
    } else if (typeof Plugin === 'object') {
      this.config.plugins.push(Plugin);
    }
    return this;
  }

  rule(rule) {
    if (rule) {
      this.config.module.rules.push(rule);
    }
    return this;
  }
};
