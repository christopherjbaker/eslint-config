import eslint from "@eslint/js"
import globals from "globals"

export default [
  {
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        ...globals["shared-node-browser"],
      },
      parserOptions: {
        projectService: true,
        tsconfigRootDir: process.cwd(),
      },
    },
  },
  eslint.configs.recommended,
  {
    rules: {
      "no-use-before-define": "off",

      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-warning-comments": ["warn", { terms: ["todo"], location: "start" }],
    },
  },
]
