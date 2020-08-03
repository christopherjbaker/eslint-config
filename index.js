module.exports = {
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
  rules: {
    'import/prefer-default-export': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',

    'import/no-extraneous-dependencies': [ 'error', {
      devDependencies: [
        '/.config/*',
        '/.storybook/*',
        '/jest.*',
        '**/*.test.js',
        '**/*.stories.js',
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
