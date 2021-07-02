module.exports = {
  plugins: ["import"],
  extends: ["plugin:import/recommended", "plugin:import/typescript"],
  rules: {
    "import/prefer-default-export": "off",
    "import/extensions": "off",

    "import/no-extraneous-dependencies": [
      "error",
      {
        devDependencies: [
          "/.config/**",
          "/.storybook/**",
          "/jest.*",
          "/scripts/**",
          "**/*.test.@(js|jsx|ts|tsx)",
          "**/*.stories.@(js|jsx|ts|tsx|mdx)",
        ],
      },
    ],
    "import/no-unresolved": [
      "error",
      {
        commonjs: true,
        caseSensitive: true,
        ignore: ["^@shared", "^@scenes"],
      },
    ],
  },
}
