module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    './rules/base',
    './rules/jest',
    './rules/react',
  ].map(require.resolve),
  settings: {
    react: {
      version: "detect"
    },
  },
  env: {
    browser: true,
    jest: true,
    node: true,
  },
}
