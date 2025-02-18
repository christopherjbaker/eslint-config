import baseRules from "../rules/base.js"
import importRules from "../rules/import.js"
import jestRules from "../rules/jest.js"
import typescriptRules from "../rules/typescript.js"

export default [
  //
  ...baseRules,
  ...typescriptRules,
  ...jestRules,
  ...importRules,
]
