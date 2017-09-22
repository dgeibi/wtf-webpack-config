module.exports = options => (config) => {
  const rule = Object.assign(
    {
      loader: 'babel-loader',
      test: /\.jsx?$/,
    },
    options
  )
  config.rule(rule)
}
