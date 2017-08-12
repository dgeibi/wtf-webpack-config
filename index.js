module.exports = class Config {
  constructor(config) {
    this.config = null
    this.reset(config)
  }

  reset(config) {
    this.config = Object.assign(
      {
        entry: {},
        output: {},
        module: { rules: [] },
        plugins: [],
        devServer: {},
      },
      config
    )
    return this
  }

  toConfig() {
    return this.config
  }

  use(fn, condition) {
    if (condition !== false) {
      fn(this)
    }
    return this
  }

  plugin(Plugin, args, condition) {
    if (typeof Plugin === 'function') {
      if (condition !== false) this.config.plugins.push(new Plugin(...args))
    } else if (typeof Plugin === 'object') {
      if (args !== false) this.config.plugins.push(Plugin)
    }
    return this
  }

  rule(rule, condition) {
    if (rule && condition !== false) {
      this.config.module.rules.push(rule)
    }
    return this
  }
}
