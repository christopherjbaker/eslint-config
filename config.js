module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    './rules/base',
    './rules/import',
    './rules/react',
  ].map(require.resolve),
  settings: {
    react: {
      version: "detect"
    },
    'import/resolver': {
      node: {
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
