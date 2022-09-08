const path = require('path')

module.exports = function override(config, env) {
  config.resolve.roots = [ path.resolve(__dirname, 'src') ]
  config.resolve.preferRelative = true
  config.resolve.plugins = []  // remove module scope plugin

  return config
}
