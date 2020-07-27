module.exports = {
  plugins: [
    'react-hooks',
  ],
  rules: {
    'react/jsx-filename-extension': 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/require-default-props': 'off',

    'react-hooks/exhaustive-deps': 'error',
    'react-hooks/rules-of-hooks': 'error',

    'react/default-props-match-prop-types': [ 'error', {
      allowRequiredDefaults: true,
    }],
    'react/no-unused-prop-types': [ 'error', {
      skipShapeProps: false,
    }],
  },
}
