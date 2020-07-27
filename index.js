module.exports = {
  root: true,
  parser: 'babel-eslint',
  extends: [
    './rules/base',
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
      'import-resolver-custom-eslint': {
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
  rules: {
    'import/prefer-default-export': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',

    'import/no-extraneous-dependencies': [ 'error', {
      devDependencies: [
        '**/*.test.js',
        '**/*.stories.js',
        '/jest.*',
      ],
    }],
    'import/no-unresolved': [ 'error', {
      commonjs: true,
      caseSensitive: true,
      ignore: [
        '^~',
      ],
    }],
  },
}
