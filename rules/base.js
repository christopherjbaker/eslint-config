module.exports = {
  plugins: [
    "@typescript-eslint",
  ],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  rules: {
    "no-use-before-define": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-inferrable-types": "off",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/ban-ts-comment": "off",

    "@typescript-eslint/explicit-module-boundary-types": "error",

    "no-console": [
      "warn",
      {
        allow: ["warn", "error"],
      },
    ],
    "no-warning-comments": [
      "warn",
      {
        terms: ["todo"],
        location: "start",
      },
    ],

    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        ignoreRestSiblings: true,
        args: "none",
      },
    ],
  },
};
