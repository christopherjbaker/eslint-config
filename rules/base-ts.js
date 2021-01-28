module.exports = {
  plugins: [
    '@typescript-eslint',
  ],
  extends: [
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',

    'no-unused-vars': [ 'error', {
      ignoreRestSiblings: true,
      args: 'none',
    }],
    'no-warning-comments': [ 'warn', {
      terms: [ 'todo', 'fixme', 'xxx' ],
      location: 'start',
    }],
  },
}
