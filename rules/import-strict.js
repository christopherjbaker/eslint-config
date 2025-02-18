import ifRequire from "../lib/if-require.cjs"

import importBase from "./import.js"

export default [
  ...importBase,
  {
    rules: {
      ...(ifRequire("typescript", {
        "@typescript-eslint/consistent-type-imports": [
          "error",
          {
            prefer: "no-type-imports",
            fixStyle: "inline-type-imports",
          },
        ],
      }) ?? {}),
      "import/order": [
        "error",
        {
          "newlines-between": "always-and-inside-groups",
          alphabetize: {
            order: "asc",
            caseInsensitive: true,
          },
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
          ],
        },
      ],
    },
  },
]
