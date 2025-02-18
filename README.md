# @christopherjbaker/eslint-config

christopherjbaker's Recommended ESLint Rule Set

## Installation

Run `npm install --save-dev @christopherjbaker/eslint-config`

## Usage

This package ships with several primary configs.

* base
* base-strict
* react
* react-strict

In your Project's ESLint config file, extend your desired config.

```js
import cjbConfig from "@christopherjbaker/eslint-config/react-strict"

export default [
  { ignores: ["dist"] },
  ...cjbConfig,
]
```
