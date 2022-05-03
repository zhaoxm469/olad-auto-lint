# 介绍

olad-auto-lint 是针对公司内部 完全定制化的 前端代码规范解决方案。  
与其他业内流行的规范方案不同的是，业内通常是解决一种 或者 某一种的规范。  
例如 [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb)、
[eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard)等。  
而 olad-auto-lint 是一个`规范集合`，覆盖多种前端技术栈，另一方面，提供轻量的脚手架工具，一键接入到现有项目里。

## 特点

- 覆盖全面

包括前端开发基础规范 ESLint(Vue3、Vue2、React、TypeScript)、StyleLint(Less、CSS)、CommitLint

- 使用简单

提供三大基础包，安装即用；且提供轻量级[命令行工具](/cli/intro)，可一键接入到现有项目，为其添加规范、升级规范

- 易于扩展

利用 pnpm monorepo 方式管理， 统一版本模式发包。便于基础包升级、扩展自定义 paser、plugin 等

- 与时俱进

第一时间更新最新的规则

## 基础包介绍

| 包名                    | 功能                 | 包地址 |
| ----------------------- | -------------------- | ------ |
| @olad/commitlint-config | 提供 CommitLint 规范 |        |
| @olad/stylelint-config  | 提供 StyleLint 规范  |        |
| @olad/eslint-config     | 提供 EsLint 规范     |        |
| @olad/o-lint            | 命令行工具           |        |
