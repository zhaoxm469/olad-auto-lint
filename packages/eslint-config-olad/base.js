/*
 * @Date: 2022-02-21 16:09:24
 * @LastEditors: zhaoxm
 * @LastEditTime: 2022-03-06 14:01:33
 * @Description: 公共配置
 */

const common = require("./rules/common.js");

module.exports = {
  env: {
    browser: true,
    node: true,
  },
  rules: Object.assign({}, common),
};
