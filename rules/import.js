import importPlugin from "eslint-plugin-import"

import tryRequire from "../lib/try-require.cjs"

const noTypeScript = !tryRequire("typescript")

export default [
  {
    settings: {
      "import/internal-regex": "^#",
      "import/resolver": {
        typescript: !noTypeScript,
        node: true,
      },
    },
  },
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  {
    rules: {
      "import/no-named-as-default-member": "off",

      "import/consistent-type-specifier-style": "error",
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-absolute-path": "error",
      "import/no-useless-path-segments": "error",
    },
  },
]
