# wtf-webpack-config

Like [webpack-chain](https://github.com/mozilla-neutrino/webpack-chain) but the API is much simpler.

## Install

```
$ npm install wtf-webpack-config
```

## Usage

``` js
const path = require('path');
const publicPath = 'dist';
const assetPath = 'asset';

const config = new Config({
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, publicPath, assetPath),
    filename: 'bundle.js',
    publicPath: `${assetPath}/`,
  },
  devServer: {
    contentBase: path.resolve(__dirname, publicPath),
  },
});

config.use(config => {
  // do something with config or config.config.
});

module.exports = config.toConfig();
```

See more [examples](examples)

## LICENSE

[MIT](LICENSE)
