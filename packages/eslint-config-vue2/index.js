const vueRules = require("./rules.js")

module.exports = {
  parser: require.resolve("vue-eslint-parser"),
  extends: ["@olad/eslint-config-basic"],
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2018,
    sourceType: "module",
  },
  plugins: ["vue", "prettier"],
  rules: {
    ...vueRules,
  }
}
