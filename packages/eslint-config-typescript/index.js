/*
 * @Date: 2022-02-21 16:09:24
 * @LastEditors: zhaoxm
 * @LastEditTime: 2022-04-20 16:02:33
 * @Description:入口规则
 */

// eslint-disable-next-line @typescript-eslint/no-require-imports
const rules = require("./rules")

module.exports = {
  extends: [
    "@olad/eslint-config-basic",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
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
