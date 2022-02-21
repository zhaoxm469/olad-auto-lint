# ESLint规范

阿拉钉前端ESLint规范，目前支持 `vue|typescript`  
## 安装

```bash
# with pnpm 
pnpm add @olad/eslint-config-lint -D 

# with npm 
npm install @olad/eslint-config-lint -D

# with yarn 
yarn add @olad/eslint-config-lint --D
```

## 使用

在你的工程根目录下创建一个`.eslintrc.js`配置文件

配置如下:

- **vue**
```js
module.exports = {
  extends: ['@olad/lint//vue'],
};
```

- **typescript**
```js
module.exports = {
  extends: ['@olad/lint/typescript'],
};
```

> 如果项目之前安装过ESLint相关的包，建议卸载，避免引入不必要的包。如`eslint`、`eslint-plugin-vue`、`@babel/eslint-parser`、`@typescript-eslint/eslint-plugin`  、`@typescript-eslint/parser`、`@vue/eslint-config-standard`、`@vue/eslint-config-typescript`、`eslint-config-react-app`、
`eslint-plugin-import`等，直接在package.json搜索**eslint**，相关的包全部卸载

## 规范文档

后续完善...