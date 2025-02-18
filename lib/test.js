import assert from "node:assert"

import { ESLint } from "eslint"

export default async function testConfig(configFile) {
  try {
    const eslint = new ESLint({
      overrideConfigFile: configFile,
      baseConfig: {
        ignores: ["*.test.*", "*.cjs"],
        languageOptions: {
          globals: {
            process: false,
          },
        },
      },
    })
    const results = await eslint.lintFiles(["."])

    if (results.length > 0) {
      const formatter = await eslint.loadFormatter("stylish")
      const resultText = formatter.format(results)
      console.log(resultText) // eslint-disable-line no-console
    }

    assert.deepStrictEqual(results[0].messages, [])
  } catch (e) {
    console.error(e)
  }
}
