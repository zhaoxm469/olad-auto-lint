const rules = require("./rules")

module.exports = {
  overrides: [
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
      },
      rules: {
        // 可以使用未定义的变量
        "no-unused-vars": "off",
        "no-undef": "off",
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
    ...rules,
    "vue/require-explicit-emits": ["error"],
    // Vue2 规则 关闭
    "vue/no-v-model-argument": "off",
    "vue/valid-v-bind-sync": "off",
    "vue/no-v-for-template-key": "off",
    // 禁止模版中有多个根节点
    "vue/no-multiple-template-root": "off",
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
