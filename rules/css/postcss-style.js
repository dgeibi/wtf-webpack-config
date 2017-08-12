module.exports = options => (config) => {
  config.rule(
    Object.assign(
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }, { loader: 'postcss-loader' }],
      },
      options
    )
  )
}
