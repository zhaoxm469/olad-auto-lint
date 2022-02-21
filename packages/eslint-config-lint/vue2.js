const vueRules = require("../eslint-config-olad/rules/vue-common.js");

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:vue/essential",
    "plugin:prettier/recommended",
  ],
  // extends: ["eslint:recommended", "plugin:vue/essential", "@olad/lint/vue"],
  parserOptions: {
    // 默认使用Espree作为其解析器,除此之外就Esprima,Babel-ESLint,@typescript-eslint/parser
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["vue", "prettier"],
  rules: vueRules,
};
