# ESLint 规范

阿拉钉前端 JavaScript ESLint 规范

## 安装

* 推荐适用`pnpm`安装

```bash
# with pnpm
pnpm add @olad/eslint-config-basic -D

# with npm
npm install @olad/eslint-config-basic -D

# with yarn
yarn add @olad/eslint-config-basic --D
```

## 使用

在你的工程根目录下创建一个`.eslintrc.js`配置文件

配置如下:

```js
module.exports = {
  extends: ["@olad/eslint-config-basic"],
}
```