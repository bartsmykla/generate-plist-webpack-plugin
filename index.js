const plist = require('plist');

function GeneratePlistPlugin(filename, value) {
  Object.assign(this, { filename, value });
}

GeneratePlistPlugin.prototype.apply = function apply(compiler) {
  compiler.plugin('emit', (compilation, done) => {
    const results = plist.build(this.value);
    compilation.assets[this.filename] = { // eslint-disable-line no-param-reassign
      source: () => results,
      size: () => results.length,
    };
    done();
  });
};

module.exports = GeneratePlistPlugin;
