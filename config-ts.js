module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    './rules/base-ts',
    './rules/import',
    './rules/react',
  ].map(require.resolve),
  settings: {
    'import/resolver': {
      'node': {
        extensions: [
          '.js',
          '.ts',
          '.jsx',
          '.tsx',
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
