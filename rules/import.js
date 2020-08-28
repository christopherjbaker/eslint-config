module.exports = {
  plugins: [
    'import',
  ],
  rules: {
    'import/prefer-default-export': 'off',

    'import/no-extraneous-dependencies': [ 'error', {
      devDependencies: [
        '/.config/**',
        '/.storybook/**',
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
