module.exports = {
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/no-inferrable-types': 'off',

    'no-warning-comments': [ 'warn', {
      terms: [ 'todo', 'fixme', 'xxx' ],
      location: 'start',
    }],

    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [ 'error', {
      ignoreRestSiblings: true,
      args: 'none',
    }],
  },
}
