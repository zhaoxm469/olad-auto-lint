# 快速上手

::: tip

一共有两种方式可以把代码规范快速集成到项目当中去（`推荐使用命令行工具方式`）

使用命令行工具会帮助用户在项目工程下自动进行相关依赖安装以及相关配置文件修改，帮助用户去掉繁琐的手动配置。

:::

## 使用命令行工具

全局安装[o-lint](/o-lint-cli/intro.md)命令行工具

```bash
# with pnpm
pnpm add -g @olad/auto-lint

# with yarn
yarn global add @olad/auto-lint

# with npm
npm i -g  @olad/auto-lint
```

你可以在终端输入命令 `o-lint`来验证是否安装成功

```bash
# 如果控制台输入信息面板则代表安装成功
o-lint
```

运行`init`命令，根据相关提示注入指定规范包

```bash
o-lint init
```

## 手动安装指定规范依赖包

我们除了使用命令行工具注入依赖，还可以手动安装指定依赖包到项目，进行相关配置。

:::warning
如果项目之前安装过 ESLint 相关的包，建议卸载。如`eslint`、`eslint-plugin-vue`、`@babel/eslint-parser`、`@typescript-eslint/eslint-plugin` 、`@typescript-eslint/parser`、`@vue/eslint-config-standard`、`@vue/eslint-config-typescript`、
`eslint-plugin-import`等，直接在 package.json 搜索**eslint**，相关的包全部卸载
:::

安装 Vue2 对应的 eslint 代码规范

```bash

# 进入到项目工程目录
cd  /olading-hrsaas-control-front

# 安装对应依赖
pnpm add -D @olad/eslint-config-vue2

```

修改工程项目下的 .eslintrc.js 配置文件

```js
module.exports = {
  extends: ["@olad/vue2"],
};
```
