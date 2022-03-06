// const vueRules = require("./rules/vue-common.js");

module.exports = {
  env: {
    es2021: true,
  },
  extends: ["./base.js"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  // rules: vueRules,
};
