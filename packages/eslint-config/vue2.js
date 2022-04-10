/* eslint-disable no-magic-numbers */
const vueRules = require("./rules/vue-common.js")

module.exports = {
  parser: require.resolve("vue-eslint-parser"),
  extends: ["./base.js"],
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2019,
    sourceType: "module",
  },
  plugins: ["vue", "prettier"],
  rules: {
    ...vueRules,
    /**
     * 限制自定义组件的 attrs属性风格
     */
    "vue/attribute-hyphenation": "off",
    /**
     * <script> 标签必须有 lang 属性
     */
    "vue/block-lang": "off",
    /**
     * 变量名必须是 camelCase 风格的
     * @reason 很多 api 或文件名都不是 camelCase 风格的
     */
    "vue/camelcase": "off",
    /**
     * 支持在模版中使用 eslint-disable-next-line 等注释
     */
    "vue/comment-directive": "error",
    /**
     * 组件的 name 命名规则 ， 默认启用中划线
     * @reason 这是官方建议的规范
     */
    "vue/component-definition-name-casing": ["error", "kebab-case"],
    /**
     * 此规则旨在为第一个属性强制实施一致的位置。
     * @reason 这是官方建议的规范
     */
    "vue/first-attribute-linebreak": "error",
    /**
     * v-text 指令必须合法
     */
    "vue/valid-v-text": "error",
    "vue/html-indent": ["error", 2],
    /**
     * 元素开始 > 括号是否换行
     */
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "always",
      },
    ],
    /**
     * 要求或不允许在标记的右括号前加上空格
     */
    "vue/html-closing-bracket-spacing": "off",
    /**
     * 此规则旨在禁止缺少结束标记。
     */
    "vue/html-end-tags": "error",
    /**
     * 如果属性的引号与配置的引号不同，则此规则将报告该引号。
     */
    "vue/html-quotes": ["error", "double", { avoidEscape: false }],
    /**
     * 此规则旨在强制将自闭合符号作为配置的样式。
     */
    "vue/html-self-closing": ["error"],
    /**
     * 强制要求每行的最大属性数
     */
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: {
          max: 1,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    /**
     * 差值表达式 中数据左右是否有间距
     */
    "vue/mustache-interpolation-spacing": ["error", "always"],
    /**
     * 在多行元素的内容之前和之后需要换行符
     */
    "vue/multiline-html-element-content-newline": "off",
    /**
     * 不允许多个空格,标签attr属性中
     */
    "vue/no-multi-spaces": "error",
    /**
     * 不允许在属性中的等号周围留空格
     */
    "vue/no-spaces-around-equal-signs-in-attribute": "error",
    /**
     * 禁止从外部作用域中声明的阴影变量中声明变量
     */
    "vue/no-template-shadow": "error",
    /**
     * 强制每个组件都应该再单独的文件中
     */
    "vue/one-component-per-file": "off",
    /**
     * 强制约束 定义的 props name为 驼峰命名
     */
    "vue/prop-name-casing": "error",
    /**
     * props 属性需要默认值
     */
    "vue/require-default-prop": "error",
    /**
     * props 属性 需要type类型
     */
    "vue/require-prop-types": "error",
    /**
     * 差值表达式 前后是否需要换行符
     */
    "vue/singleline-html-element-content-newline": "warn",
    /**
     * 规定v-bind的写法（简写:key=“value”）
     */
    "vue/v-bind-style": "off",
    /**
     *规定v-on的写法（简写@click=“event”）
     */
    "vue/v-on-style": "error",
    /**
     * slot 规则强制实施应使用速记或长格式的指令样式
     */
    "vue/v-slot-style": "warn",
    /**
     * 强制执行属性顺序,vue官方推荐的
     */
    "vue/attributes-order": "error",
    /**
     * 页面根元素的书写顺序
     */
    "vue/component-tags-order": [
      "error",
      {
        order: [["template", "script"], "style"],
      },
    ],
    /**
     * 不允许不必要的<template>
     */
    "vue/no-lone-template": "error",
    /**
     * 禁止给 scoped slots 传递多个参数
     */
    "vue/no-multiple-slot-args": "error",
    /**
     * 禁止使用 v-html
     * @reason 某些情况下还是可以使用的
     */
    "vue/no-v-html": "off",
    /**
     * 此规则可确保在组件中保留声明的属性顺序
     */
    "vue/order-in-components": "error",
    /**
     * 禁止在模版中用 this
     */
    "vue/this-in-template": "error",
    /**
     * 要求组件命名是多字的
     */
    "vue/multi-word-component-names": "error",
    /**
     * 对自定义事件名称强制实施特定大小写
     */
    "vue/custom-event-name-casing": [
      "error",
      "kebab-case",
      {
        ignores: [],
      },
    ],
    /**
     * watch 中禁止使用箭头函数 , 怕this指向有问题
     */
    "vue/no-arrow-functions-in-watch": "error",
    /**
     * 计算属性禁止包含异步方法
     */
    "vue/no-async-in-computed-properties": "error",
    /**
     * 禁止data定义属性中直接访问计算属性
     */
    "vue/no-computed-properties-in-data": "error",
    /**
     * 禁止在组件上使用 模型上的自定义修饰符
     * @reason 在某些情况可能会出现自定义修饰符
     */
    "vue/no-custom-modifiers-on-v-model": "off",
    /**
     * 禁止重复的键名
     */
    "vue/no-dupe-keys": "error",
    /**
     *  禁止在 v-if 和 v-else-if 中出现重复的测试表达式
     */
    "vue/no-dupe-v-else-if": "error",
    /**
     * 禁止出现重复的属性
     */
    "vue/no-duplicate-attributes": [
      "error",
      {
        allowCoexistClass: true,
        allowCoexistStyle: true,
      },
    ],
    /**
     * 禁止模版中有多个根节点
     */
    "vue/no-multiple-template-root": "error",
    /**
     * 禁止修改组件的 props
     */
    "vue/no-mutating-props": "error",
    /**
     * 禁止出现语法错误
     */
    "vue/no-parsing-error": "error",
    /**
     * 禁止覆盖保留字
     */
    "vue/no-reserved-keys": "error",
    /**
     * 禁止在props中覆盖保留字
     */
    "vue/no-reserved-props": [
      "error",
      {
        vueVersion: 2,
      },
    ],
    /**
     * 组件的 data 属性的值必须是一个函数
     */
    "vue/no-shared-component-data": "error",
    /**
     * 禁止在计算属性中对属性修改
     */
    "vue/no-side-effects-in-computed-properties": "error",
    /**
     * 禁止在 <textarea> 中出现模版语法 {{message}}
     */
    "vue/no-textarea-mustache": "error",
    /**
     * 禁止定义在 components 中的组件未使用
     */
    "vue/no-unused-components": "error",
    /**
     * 模版中已定义的变量必须使用
     */
    "vue/no-unused-vars": "error",
    /**
     * 禁止在同一个元素上使用 v-if 和 v-for 指令
     */
    "vue/no-use-v-if-with-v-for": "error",
    /**
     * 禁止模版中使用未生效的属性
     */
    "vue/no-useless-template-attributes": "error",
    /**
     * template 不必带key，
     * @reason 因为带key无效的，要带的话只需要给他下面的元素带
     */
    "vue/no-v-for-template-key": "error",
    /**
     * 禁止给 v-model 属性添加参数
     */
    "vue/no-v-model-argument": "error",
    /**
     * <component> 必须有绑定的组件
     */
    "vue/require-component-is": "error",
    /**
     * props 的取值必须是基本类型的构造函数，而不是字符串
     */
    "vue/require-prop-type-constructor": "error",
    /**
     * render 函数必须有返回值
     */
    "vue/require-render-return": "error",
    /**
     *  v-for 指令的元素必须有 v-bind:key
     */
    "vue/require-v-for-key": "error",
    /**
     * 的默认值必须匹配它的类型
     */
    "vue/require-valid-default-prop": "error",
    /**
     * 计算属性必须有返回值
     */
    "vue/return-in-computed-property": "error",
    /**
     * 当一个节点上出现两个 v-on:click 时，其中一个必须为修饰符
     */
    "vue/use-v-on-exact": "error",
    /**
     * 禁止调用 Vue.nextTick 或 vm.$nextTick 时不使用 await
     */
    "vue/valid-next-tick": "off",
    /**
     * template 的根节点必须合法
     */
    "vue/valid-template-root": "error",
    /**
     * v-bind:foo.sync 指令必须合法 ， 一下都是校验合法性，就不一一注释了
     */
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
  },
}
