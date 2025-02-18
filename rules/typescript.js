import tseslint from "typescript-eslint"

import ifRequire from "../lib/if-require.cjs"

export default ifRequire("typescript", [
  {
    settings: {
      "import/resolver": {
        typescript: true,
      },
    },
  },
  tseslint.configs.eslintRecommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    rules: {
      "no-unused-vars": "off",
      "@typescript-eslint/no-unused-vars": [
        "error",
        { ignoreRestSiblings: true, args: "none" },
      ],

      "@typescript-eslint/no-confusing-void-expression": "off",
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-unnecessary-type-parameters": "off",
      "@typescript-eslint/no-unsafe-assignment": "off",
      "@typescript-eslint/no-use-before-define": "off",
      "@typescript-eslint/prefer-regexp-exec": "off",
      "@typescript-eslint/restrict-template-expressions": "off",
    },
  },
]) ?? []
