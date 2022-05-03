# 介绍

其中设计了几个 EsLint 规范包，用户可根据实际项目需求自行选择。  
其中包含 `Vue2`|`Vue3`|`Javascript`|`TypeScript`

| 包名                           | 说明                                                        |
| ------------------------------ | ----------------------------------------------------------- |
| @olad/eslint-config            | Eslint 规范集合，其中包含了 Javascript，Typescript，Vue3 等 |
| @olad/eslint-config-vue2       | 针对 Vue2 的规范依赖包                                      |
| @olad/eslint-config-typescript | 针对 Typescript 的规范依赖包                                |

## 安装

```bash
# with pnpm
pnpm add @olad/eslint-config -D

# with npm
npm install @olad/eslint-config -D

# with yarn
yarn add @olad/eslint-config --D
```

## 使用

在你的工程根目录下创建一个`.eslintrc.js`配置文件

配置如下:

> 默认的规范集合包是 @olad/eslint-config , 支持的 是 Vue3 版本的规范

```js
module.exports = {
  extends: ["@olad"],
};
```

- Vue2

> 如果为 Vue2 安装依赖 请安装 `@olad/eslint-config-vue2` 依赖包

```js
module.exports = {
  extends: ["@olad/vue2"],
};
```

## 注意事项

如果项目之前安装过 ESLint 相关的包，建议卸载，避免引入不必要的包。如`eslint`、`eslint-plugin-vue`、`@babel/eslint-parser`、`@typescript-eslint/eslint-plugin` 、`@typescript-eslint/parser`、`@vue/eslint-config-standard`、`@vue/eslint-config-typescript`、`eslint-config-react-app`、
`eslint-plugin-import`等，直接在 package.json 搜索**eslint**，相关的包全部卸载
