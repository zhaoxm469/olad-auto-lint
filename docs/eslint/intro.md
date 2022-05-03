# 介绍

EsLint 规范包集合包

其中包含了对 `Vue2`，`Vue3`，`Javascript`，`TypeScript` 的规则配置

## 安装依赖

:::warning
如果项目之前安装过 ESLint 相关的包，建议卸载。如`eslint`、`eslint-plugin-vue`、`@babel/eslint-parser`、`@typescript-eslint/eslint-plugin` 、`@typescript-eslint/parser`、`@vue/eslint-config-standard`、`@vue/eslint-config-typescript`、
`eslint-plugin-import`等，直接在 package.json 搜索**eslint**，相关的包全部卸载
:::

```bash
# with pnpm
pnpm add @olad/eslint-config -D

# with npm
npm install @olad/eslint-config -D

# with yarn
yarn add @olad/eslint-config -D
```

## 如何使用

在你的工程根目录下创建一个`.eslintrc.js`配置文件

配置如下:

> 默认的规范集合包是 @olad/eslint-config ,其中支持 `TypeScript` `JavaScript` `Vue3` `React` 的 lint 规则

```js
module.exports = {
  extends: ["@olad"],
};
```

## 相关依赖包

| 包名                     | 说明                                                        |
| ------------------------ | ----------------------------------------------------------- |
| @olad/eslint-config      | Eslint 规范集合，支持 Javascript，Typescript，Vue3 , React 代码校验 |
| @olad/eslint-config-vue2 | 针对 Vue2 的规范依赖包                                      |
