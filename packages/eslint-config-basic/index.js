/*
 * @Date: 2022-02-21 16:09:24
 * @LastEditors: zhaoxm
 * @LastEditTime: 2022-04-11 23:31:33
 * @Description: 公共配置
 */

// eslint-disable-next-line @typescript-eslint/no-require-imports
const rules = require("./rules.js")

module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends: ["plugin"],
  globals: {
    document: "readonly",
    navigator: "readonly",
    window: "readonly",
  },
  plugins: ["html", "plugin"],
  ignorePatterns: [
    "*.min.*",
    "CHANGELOG.md",
    "dist",
    "LICENSE*",
    "output",
    "coverage",
    "public",
    "temp",
    "packages-lock.json",
    "pnpm-lock.yaml",
    "yarn.lock",
    "__snapshots__",
    "!.github",
    "!.vitepress",
    "!.vscode",
  ],
  parser: "babel-eslint",
  rules,
}
