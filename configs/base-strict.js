import baseRules from "../rules/base.js"
import typescriptRules from "../rules/typescript-strict.js"
import jestRules from "../rules/jest.js"
import importRules from "../rules/import-strict.js"

export default [
  //
  ...baseRules,
  ...typescriptRules,
  ...jestRules,
  ...importRules,
]
