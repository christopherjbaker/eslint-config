const path = require('path')

module.exports = function resolver(source, options) {
  const { defaultResolver } = options

  try {
    return defaultResolver(source, options)
  } catch (e) {
    //
  }

  try {
    source = directoryNamedSource(source, options)

    return defaultResolver(source, options)
  } catch (e) {
    //
  }

  throw new Error(`Not found: ${source}`)
}

function directoryNamedSource(source) {
  const basename = path.basename(source)

  if (source.startsWith('./')) {
    return source.slice(0, 2) + path.join(source, `${basename}.js`)
  }

  return path.join(source, `${basename}.js`)
}
