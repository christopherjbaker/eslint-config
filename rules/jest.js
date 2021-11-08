module.exports = {
  plugins: [
    "jest",
    "testing-library",
  ],
  extends: [
    "plugin:jest/recommended",
    "plugin:testing-library/react",
  ],
  rules: {
    "jest/no-export": "off",
    "jest/valid-expect": "off",
  },
};
