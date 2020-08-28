module.exports = {
  parser: 'babel-eslint',
  extends: [
    './rules/base',
    './rules/import',
    './rules/react',
  ].map(require.resolve),
  settings: {
    'import/resolver': {
      'node': {
        extensions: [
          '.js',
          '.jsx',
          '.json',
        ],
      },
      '@hmudesign/eslint-config/import-resolver-custom-eslint': {
        extensions: [
          '.js',
          '.jsx',
          '.json',
        ],
      },
    },
  },
  env: {
    browser: true,
    jest: true,
  },
}
