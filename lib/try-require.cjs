module.exports = function tryRequire(packageName) {
  try {
    return require(packageName)
  } catch (er) {
    return undefined
  }
}
