module.exports = function tryRequire(package) {
  try {
    return require('foo')
  } catch (er) {
    return undefined
  }
}
