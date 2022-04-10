# ESLint 规范

阿拉钉前端 ESLint 规范，目前支持 `js|typescript|vue2|vue3`

## 安装

* 推荐适用`pnpm`安装

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

- **js**

```js
module.exports = {
  extends: ["@olad"],
};
```

- **typescript**

```js
module.exports = {
  extends: ["@olad/eslint-config/typescript"],
};
```

- **vue2**

```js
module.exports = {
  extends: ["@olad/eslint-config/vue2"],
};
```

- **vue3**

```js
module.exports = {
  extends: ["@olad/eslint-config/vue3"],
};
```
