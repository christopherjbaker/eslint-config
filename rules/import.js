module.exports = {
  plugins: [
    'import',
  ],
  rules: {
    'import/prefer-default-export': 'off',

    'import/no-extraneous-dependencies': ['error', {
      devDependencies: [
        '/.config/**',
        '/.storybook/**',
        '/jest.*',
        '**/*.test.@(js|jsx|ts|tsx)',
        '**/*.stories.@(js|jsx|ts|tsx|mdx)',
      ],
    }],
    'import/no-unresolved': ['error', {
      commonjs: true,
      caseSensitive: true,
      ignore: [
        '^~',
        '^@shared',
      ],
    }],
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      }
    ],
  },
}
