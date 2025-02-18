import baseRules from "../rules/base.js"
import importRules from "../rules/import-strict.js"
import jestRules from "../rules/jest.js"
import typescriptRules from "../rules/typescript-strict.js"

export default [
  //
  ...baseRules,
  ...typescriptRules,
  ...jestRules,
  ...importRules,
]
