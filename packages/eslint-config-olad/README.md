<!--
 * @Date: 2022-02-21 16:09:24
 * @LastEditors: zhaoxm
 * @LastEditTime: 2022-03-06 11:11:12
 * @Description:
-->

# ESLint 规范

阿拉钉前端 ESLint 规范，目前支持 `vue|typescript`

## 安装

```bash
# with pnpm
pnpm add eslint-config-olad -D

# with npm
npm install eslint-config-olad -D

# with yarn
yarn add eslint-config-olad --D
```

## 使用

在你的工程根目录下创建一个`.eslintrc.js`配置文件

配置如下:

- **vue**

```js
module.exports = {
  extends: ["@olad/lint/vue"],
};
```

- **typescript**

```js
module.exports = {
  extends: ["@olad/lint/typescript"],
};
```

> 如果项目之前安装过 ESLint 相关的包，建议卸载，避免引入不必要的包。如`eslint`、`eslint-plugin-vue`、`@babel/eslint-parser`、`@typescript-eslint/eslint-plugin` 、`@typescript-eslint/parser`、`@vue/eslint-config-standard`、`@vue/eslint-config-typescript`、`eslint-config-react-app`、
> `eslint-plugin-import`等，直接在 package.json 搜索**eslint**，相关的包全部卸载

## 规范文档

后续完善...
