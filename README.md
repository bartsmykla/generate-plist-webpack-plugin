# generate-plist-webpack-plugin

Webpack plugin to generate a custom Plist asset from JavaScript's objects or JSON's

### Installation

```shell
yarn add -D generate-plist-webpack-plugin
```

### Usage

```js
// webpack.config.js
const GeneratePlistPlugin = require('generate-plist-webpack-plugin');

module.exports = {
  // ...
  plugins: [
    // ...
    new GeneratePlistPlugin('my-file.plist', {
      foo: 'bar'
    })
  ]
  // ...
};
```

This will create a file `my-file.plist` in webpack's output directory, with contents:
```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
  <dict>
    <key>foo</key>
    <string>bar</string>
  </dict>
</plist>'
```
