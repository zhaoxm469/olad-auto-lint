const rules = require("./rules.js")

module.exports = {
  parser: "vue-eslint-parser",
  extends: ["@olad/eslint-config-basic"],
  plugins: ["vue"],
  rules: {
    ...rules,
    "vue/html-self-closing": [
      "error",
      {
        html: {
          void: "never",
          normal: "always",
          component: "always",
        },
        svg: "always",
        math: "always",
      },
    ],
  },
}
