// eslint-disable-next-line @typescript-eslint/no-require-imports
const vueRules = require("./rules.js")

module.exports = {
  parser: require.resolve("vue-eslint-parser"),
  extends: ["@olad/eslint-config-basic"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: ["vue"],
  rules: {
    ...vueRules,
  }
}
