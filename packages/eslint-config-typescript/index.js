/*
 * @Date: 2022-02-21 16:09:24
 * @LastEditors: zhaoxm
 * @LastEditTime: 2022-04-10 20:39:45
 * @Description:入口规则
 */

import rules from "./rules"

export default {
  extends: [
    "plugin:@typescript-eslint/recommended",
    "@olad/eslint-config-basic",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module",
  },
  plugins: ["@typescript-eslint"],
  settings: {
    "import/resolver": {
      node: { extensions: [".js", ".jsx", ".mjs", ".ts", ".tsx", ".d.ts"] },
    },
  },
  parser: "@typescript-eslint/parser",
  rules,
}
