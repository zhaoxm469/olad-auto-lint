/*
 * @Date: 2022-02-21 16:09:24
 * @LastEditors: zhaoxm
 * @LastEditTime: 2022-03-06 15:21:02
 * @Description: 公共配置
 */

const common = require("./rules/common.js")

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: Object.assign({}, common),
}
