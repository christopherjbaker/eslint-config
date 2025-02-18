import reactPlugin from "eslint-plugin-react"
import reactHooksPlugin from "eslint-plugin-react-hooks"

import ifRequire from "../lib/if-require.cjs"

export default ifRequire("react", [
  {
    settings: {
      react: {
        version: "detect",
      },
    },
  },
  reactHooksPlugin.configs["recommended-latest"],
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  {
    rules: {
      "react/no-unknown-property": "off",
      "react/prop-types": "off",
    },
  },
]) ?? []
