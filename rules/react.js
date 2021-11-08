module.exports = {
  plugins: [
    "react",
    "react-hooks",
    "jsx-a11y",
  ],
  extends: [
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/jsx-runtime",
  ],
  rules: {
    "react/prop-types": "off",

    "react-hooks/exhaustive-deps": "error",
    "react-hooks/rules-of-hooks": "error",
  },
  overrides: [
    {
      files: "**/*.+(ts|tsx)",
      rules: {
        "react/display-name": "off",
      },
    }
  ]
};
