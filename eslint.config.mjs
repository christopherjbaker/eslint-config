import config from "./configs/base-strict.js"

export default [
  {
    languageOptions: {
      globals: {
        process: false,
      },
    },
  },
  ...config,
]
