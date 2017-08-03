module.exports = options => (config) => {
  const rule = Object.assign({
    test: /\.jsx?$/,
    use: [
      { loader: 'babel-loader' },
    ],
  }, options);
  config.rule(rule);
};
