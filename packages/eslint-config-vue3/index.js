module.exports = {
  overrides: [
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
      rules: {
        "no-unused-vars": "off",
        "no-undef": "off",
        "@typescript-eslint/no-unused-vars": "off",
      },
    },
  ],
  extends: ["@olad/eslint-config-basic",  "@olad/eslint-config-ts", "plugin:vue/vue3-recommended"],
  rules: {
    // 强制文件命名规范,
    "unicorn/filename-case":["error", {
      "case": "kebabCase",
    }],

    "vue/max-attributes-per-line": "off",
    "vue/no-v-html": "off",
    "vue/require-prop-types": "off",
    "vue/require-default-prop": "off",
    "vue/multi-word-component-names": "off",

    // reactivity transform
    "vue/no-setup-props-destructure": "off",

    "vue/component-tags-order": [
      "error",
      {
        order: ["script", "template", "style"],
      },
    ],
  },
}
