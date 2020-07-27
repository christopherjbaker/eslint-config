const path = require('path')

// eslint-disable-next-line import/no-extraneous-dependencies
const fallback = require('eslint-import-resolver-node')

exports.interfaceVersion = 2

exports.resolve = function resolver(source, file, config) {
  if (source.startsWith(`~${path.sep}`) || source === '~') {
    source = path.join(process.cwd(), 'src', 'shared', source.slice(1)) // remove '~/'
    const test = fallback.resolve(source, file, config)
    if (test.found) {
      return test
    }
  }

  source = directoryNamedSource(source, file)
  const test = fallback.resolve(source, file, config)
  if (test.found) {
    return test
  }

  return { found: false }
}

function directoryNamedSource(source, file) {
  if (source === '.') {
    const basename = path.basename(path.dirname(file))
    return `.${path.sep}${basename}.js`
  }

  const basename = path.basename(source)

  if (source.startsWith('./')) {
    return source.slice(0, 2) + path.join(source, `${basename}.js`)
  }

  return path.join(source, `${basename}.js`)
}
