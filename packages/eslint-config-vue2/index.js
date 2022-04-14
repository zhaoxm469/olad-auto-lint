// eslint-disable-next-line @typescript-eslint/no-require-imports
const rules = require("./rules.js")

module.exports = {
  parser: "vue-eslint-parser",
  extends: ["@olad/eslint-config-basic"],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    parser: "babel-eslint",
  },
  plugins: ["vue"],
  rules,
}
