module.exports = {
  overrides: [
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
      rules: {
        "@typescript-eslint/no-unused-vars": "off",
        // 强制文件命名规范,
        "unicorn/filename-case": ["error", {
          "case": "kebabCase",
        }],

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
    },
  ],
  extends: ["plugin:vue/vue3-recommended", "@olad/eslint-config-ts"],
  rules: {
    "vue/no-multiple-slot-args": ["error"],
    "vue/order-in-components": ["error"],
    "vue/this-in-template": ["error"],
    "vue/attribute-hyphenation": ["error"],
    "vue/component-definition-name-casing": ["error"],
    "vue/html-closing-bracket-newline": ["error"],
    "vue/html-closing-bracket-spacing": ["error"],
    "vue/html-end-tags": ["error"],
    "vue/html-indent": ["error"],
    "vue/html-quotes": ["error"],
    "vue/multiline-html-element-content-newline": ["error"],
    "vue/mustache-interpolation-spacing": ["error"],
    "vue/no-multi-spaces": ["error"],
    "vue/no-spaces-around-equal-signs-in-attribute": ["error"],
    "vue/no-template-shadow": ["error"],
    "vue/one-component-per-file": ["error"],
    "vue/prop-name-casing": ["error"],
    "vue/require-default-prop": ["error"],
    "vue/require-explicit-emits": ["error"],
    "vue/require-prop-types": ["error"],
    "vue/singleline-html-element-content-newline": ["error"],
    "vue/v-bind-style": ["error"],
    "vue/v-on-style": ["error"],
    "vue/v-slot-style": ["error"],
    "vue/attributes-order": "error",
    "vue/max-attributes-per-line": "off",
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
