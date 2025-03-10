import typescriptBase from "./typescript.js"

export default [
  ...typescriptBase,
  {
    rules: {
      "@typescript-eslint/array-type": ["error", { default: "array-simple" }],
      "@typescript-eslint/explicit-module-boundary-types": "error",
    },
  },
]
