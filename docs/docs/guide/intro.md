# 介绍

olad-auto-lint 是针对公司内部 完全定制化的 前端 Lint 规范的解决方案。  
业内流行的方案通常解决某一种(JS 或 Style 等)规范，如 eslint-config-airbnb、eslint-config-standard 等，而 olad-auto-lint 是一个`规范集合`。  
覆盖多种前端技术栈，另一方面，提供轻量的脚手架工具，一键接入到现有项目里。

## 特点

- 支持多种规范

例如 EsLint（Vue,Typescript）,CommitLint ,StyleLint（Css,Scss） 等

- 使用简单

提供[cli 命令行工具](/cli/intro)，快速便捷的把规范依赖包集成到项目当中。

## 基础包介绍

| 包名                     | 功能                 | 包地址                                                                            |
| ------------------------ | -------------------- | --------------------------------------------------------------------------------- |
| @olad/commitlint-config  | 提供 CommitLint 规范 | https://github.com/zhaoxm469/olad-auto-lint/tree/main/packages/commitlint-config  |
| @olad/stylelint-config   | 提供 StyleLintt 规范 | https://github.com/zhaoxm469/olad-auto-lint/tree/main/packages/stylelint-config   |
| @olad/eslint-config-lint | 提供 EsLint 规范     | https://github.com/zhaoxm469/olad-auto-lint/tree/main/packages/eslint-config-lint |
| @olad/lint-cli           | 命令行工具           | https://github.com/zhaoxm469/olad-auto-lint/tree/main/packages/lint-cli           |

## 如何使用

一共有两种方式可以把规范集成到项目当中去（`推荐使用方案一`）

1. 使用命令行工具，一键接入 ，详见 [lint-cli 文档](/cli/intro) 。

2. 在项目中引入单独的包，然后在项目中再进行配置 。
