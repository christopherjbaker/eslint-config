const tryRequire = require("./try-require.cjs")

module.exports = function ifRequire(packageName, value) {
  return tryRequire(packageName) ? value : undefined
}
