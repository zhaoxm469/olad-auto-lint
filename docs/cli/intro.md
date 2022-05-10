# 介绍

代码规范注入 CLI 工具

通过此工具可以把相关规范快速集成到项目当中去，减少需繁琐的手动配置。

## 全局安装

```bash
# with pnpm
pnpm add -g @olad/auto-lint

# with yarn
yarn global add @olad/auto-lint

# with npm
npm i -g  @olad/auto-lint
```

## 校验是否安装成功

你可以在终端输入命令 `o-lint`来验证是否安装成功。

```bash
o-lint
```

## 升级版本

```bash
# pnpm yarn
pnpm global upgrade --latest @olad/auto-lint

# with npm
npm upgrade -g @olad/auto-lint

# with yarn
yarn global upgrade --latest @olad/auto-lint
```

## 使用

o-lint 提供了两个命令，init 和 upgrade，下面分别介绍这两个命令

```bash
o-lint init
```

随后命令行会列举可选的规范类型，目前包括 eslint、stylelint 及 commitlint，默认全选，使用上下键切换目标选项，空格键可切换选中态，回车确认。

![o-lint init](/init.png)

如果选中包含 `EsLint` 规则， 会进行二次询问  

![o-lint init](/eslint.png)

继续回车，会自动安装对应的依赖包，以及自动向根项目注入相关配置文件。

## 命令介绍

| 命令          | 说明                     |
| ------------- | ------------------------ |
| init          | 选择安装对应规范的依赖   |
| update        | 更新 lint 依赖 |
