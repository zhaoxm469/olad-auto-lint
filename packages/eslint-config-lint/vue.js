const vueRules = require("../eslint-config-olad/rules/vue-common.js");

module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:prettier/recommended",
    "plugin:vue/essential",
    "./base.js",
  ],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  plugins: ["vue", "prettier"],
  rules: Object.assign({}, vueRules),
};
