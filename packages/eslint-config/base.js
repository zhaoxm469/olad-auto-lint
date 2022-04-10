/*
 * @Date: 2022-02-21 16:09:24
 * @LastEditors: zhaoxm
 * @LastEditTime: 2022-03-08 09:19:50
 * @Description: 公共配置
 */

const common = require("./rules/common.js")

module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  parser: "babel-eslint",
  rules: Object.assign({}, common),
}
