import ifRequire from "../lib/if-require.cjs"

import reactBase from "./react.js"

export default ifRequire("react", [
  ...reactBase,
  {
    files: ["**/*.jsx", "**/*.tsx"],
    rules: {
      "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    },
  },
]) ?? []
