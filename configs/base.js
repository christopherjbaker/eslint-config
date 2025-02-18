import baseRules from "../rules/base.js"
import typescriptRules from "../rules/typescript.js"
import jestRules from "../rules/jest.js"
import importRules from "../rules/import.js"

export default [
  //
  ...baseRules,
  ...typescriptRules,
  ...jestRules,
  ...importRules,
]
