module.exports = {
  extends: [
    'eslint-config-airbnb',
  ].map(require.resolve),
  rules: {
    'arrow-body-style': 'off',
    'arrow-parens': 'off',
    'class-methods-use-this': 'off',
    'function-paren-newline': 'off',
    'guard-for-in': 'off',
    'implicit-arrow-linebreak': 'off',
    'max-len': 'off',
    'no-await-in-loop': 'off',
    'no-continue': 'off',
    'no-func-assign': 'off',
    'no-inner-declarations': 'off',
    'no-lonely-if': 'off',
    'no-loop-func': 'off',
    'no-mixed-operators': 'off',
    'no-nested-ternary': 'off',
    'no-param-reassign': 'off',
    'no-plusplus': 'off',
    'no-restricted-syntax': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'no-use-before-define': 'off',

    'array-bracket-spacing': [ 'error', 'always' ],
    'quote-props': [ 'error', 'consistent' ],
    'semi': [ 'error', 'never' ],

    'no-unused-vars': [ 'error', {
      ignoreRestSiblings: true,
      args: 'none',
    }],
    'no-warning-comments': [ 'warn', {
      terms: [ 'todo', 'fixme', 'xxx' ],
      location: 'start',
    }],
    'object-curly-newline': [ 'error', {
      multiline: true,
      consistent: true,
    }],
    'object-curly-spacing': [
      'error',
      'always',
    ],
  },
}
