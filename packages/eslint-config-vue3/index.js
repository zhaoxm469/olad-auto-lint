module.exports = {
  overrides: [
    {
      files: ["*.vue"],
      env:{
        "vue/setup-compiler-macros":true,
      },
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
      rules: {
        "@typescript-eslint/no-unused-vars": "off",
        "unicorn/filename-case": ["error", {
          "case": "pascalCase",
          "ignore": [
            "^.eslintrc",
          ],
        }],
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
    // 一行代码属性最多个数
    "vue/max-attributes-per-line": ["error", {
      "singleline": {
        "max": 1,
      },
      "multiline": {
        "max": 1,
      },
    }],
    // 是否需要闭合标签
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
    // 保证组件名称是多字符 避免和原生标签冲突
    "vue/multi-word-component-names": [
      "error",
      {
        "ignores": ["Todo", "Item"],
      },
    ],
    // 保证顺序
    "vue/define-macros-order": ["error", {
      "order": ["defineProps", "defineEmits"],
    }],
    // 不允许使用未定义的属性
    "vue/no-undef-properties": ["error", {
      "ignores": ["/^\\$/"],
    }],
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
