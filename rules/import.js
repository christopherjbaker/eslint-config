import importPlugin from "eslint-plugin-import"

export default [
  {
    settings: {
      "import/internal-regex": "^#",
      "import/resolver": {
        typescript: true,
        node: true,
      },
    },
  },
  importPlugin.flatConfigs.recommended,
  importPlugin.flatConfigs.typescript,
  {
    rules: {
      "import/first": "error",
      "import/newline-after-import": "error",
      "import/no-absolute-path": "error",
      "import/no-named-as-default-member": "off",
      "import/no-useless-path-segments": "error",
    },
  },
]
