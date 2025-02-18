import jestPlugin from "eslint-plugin-jest"

import ifRequire from "../lib/if-require.cjs"

// testing-library
// testing-library/react

export default ifRequire("jest", [
  {
    files: ["**/*.test.js", "**/*.test.jsx", "**/*.test.ts", "**/*.test.tsx"],
    plugins: { jest: jestPlugin },
    languageOptions: {
      globals: jestPlugin.environments.globals.globals,
    },
  },
  jestPlugin.configs["flat/recommended"],
  {
    rules: {
      "jest/consistent-test-it": "error",
      "jest/prefer-hooks-in-order": "error",
      "jest/prefer-hooks-on-top": "error",
      // "testing-library/prefer-user-event": "error",
    },
  },
]) ?? []
