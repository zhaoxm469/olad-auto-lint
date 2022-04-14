// eslint-disable-next-line @typescript-eslint/no-require-imports
const rules = require("./rules.js")

module.exports = {
  parser: "vue-eslint-parser",
  extends: ["@olad/eslint-config-basic"],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
  },
  plugins: ["vue"],
  rules,
}
