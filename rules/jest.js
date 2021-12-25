const tryRequire = require('../lib/try-require')
const jest = tryRequire('jest')
const react = tryRequire('react')

module.exports = !jest ? {} : {
  plugins: [
    "jest",
    "testing-library",
  ],
  extends: [
    "plugin:jest/recommended",
    ...(!react ? [] : ["plugin:testing-library/react"]),
  ],
  rules: {
    "jest/no-export": "off",
    "jest/valid-expect": "off",
  },
};
