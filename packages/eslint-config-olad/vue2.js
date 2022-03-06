const vueRules = require("./rules/vue-common.js");

module.exports = {
  parser: require.resolve("vue-eslint-parser"),
  extends: ["./base.js"],
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: "module",
  },
  plugins: ["vue"],
  rules: {
    ...vueRules,
    "vue/attribute-hyphenation": "warn",
    "vue/component-definition-name-casing": "warn",
    "vue/first-attribute-linebreak": "warn",
    "vue/html-closing-bracket-newline": "warn",
    "vue/html-closing-bracket-spacing": "warn",
    "vue/html-end-tags": "warn",
    "vue/html-indent": "warn",
    "vue/html-quotes": "warn",
    "vue/html-self-closing": "warn",
    "vue/max-attributes-per-line": "warn",
    "vue/multiline-html-element-content-newline": "warn",
    "vue/mustache-interpolation-spacing": "warn",
    "vue/no-multi-spaces": "warn",
    "vue/no-spaces-around-equal-signs-in-attribute": "warn",
    "vue/no-template-shadow": "warn",
    "vue/one-component-per-file": "warn",
    "vue/prop-name-casing": "warn",
    "vue/require-default-prop": "warn",
    "vue/require-prop-types": "warn",
    "vue/singleline-html-element-content-newline": "warn",
    "vue/v-bind-style": "warn",
    "vue/v-on-style": "warn",
    "vue/v-slot-style": "warn",
    "vue/attributes-order": "warn",
    "vue/component-tags-order": "warn",
    "vue/no-lone-template": "warn",
    "vue/no-multiple-slot-args": "warn",
    "vue/no-v-html": "warn",
    "vue/order-in-components": "warn",
    "vue/this-in-template": "warn",
    "vue/multi-word-component-names": "error",
    "vue/no-arrow-functions-in-watch": "error",
    "vue/no-async-in-computed-properties": "error",
    "vue/no-computed-properties-in-data": "error",
    "vue/no-custom-modifiers-on-v-model": "error",
    "vue/no-dupe-keys": "error",
    "vue/no-dupe-v-else-if": "error",
    "vue/no-duplicate-attributes": "error",
    "vue/no-multiple-template-root": "error",
    "vue/no-mutating-props": "error",
    "vue/no-parsing-error": "error",
    "vue/no-reserved-keys": "error",
    "vue/no-reserved-props": [
      "error",
      {
        vueVersion: 2,
      },
    ],
    "vue/no-shared-component-data": "error",
    "vue/no-side-effects-in-computed-properties": "error",
    "vue/no-template-key": "error",
    "vue/no-textarea-mustache": "error",
    "vue/no-unused-components": "error",
    "vue/no-unused-vars": "error",
    "vue/no-use-v-if-with-v-for": "error",
    "vue/no-useless-template-attributes": "error",
    "vue/no-v-for-template-key": "error",
    "vue/no-v-model-argument": "error",
    "vue/require-component-is": "error",
    "vue/require-prop-type-constructor": "error",
    "vue/require-render-return": "error",
    "vue/require-v-for-key": "error",
    "vue/require-valid-default-prop": "error",
    "vue/return-in-computed-property": "error",
    "vue/use-v-on-exact": "error",
    "vue/valid-next-tick": "error",
    "vue/valid-template-root": "error",
    "vue/valid-v-bind-sync": "error",
    "vue/valid-v-bind": "error",
    "vue/valid-v-cloak": "error",
    "vue/valid-v-else-if": "error",
    "vue/valid-v-else": "error",
    "vue/valid-v-for": "error",
    "vue/valid-v-html": "error",
    "vue/valid-v-if": "error",
    "vue/valid-v-model": "error",
    "vue/valid-v-on": "error",
    "vue/valid-v-once": "error",
    "vue/valid-v-pre": "error",
    "vue/valid-v-show": "error",
    "vue/valid-v-slot": "error",
    "vue/valid-v-text": "error",
  },
};
