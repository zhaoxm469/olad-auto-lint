# olad-lint-cli

阿拉钉前端代码规范命令行安装工具。  
通过此工具可以快速把规范依赖包快速集成到项目当中。

## 安装

```bash
# with pnpm
pnpm add -g olad-lint-cli

# with yarn 
yarn global add olad-lint-cli

# with npm
npm i -g  olad-lint-cli

```

## 检查是否安装成功

你可以简单在终端输入命令 `olad-lint`来验证是否安装成功。

```bash
olad-lint -V 

# OR 

olad-lint
```

## 使用 

```bash 

olad-lint init 

# 接着选择对应的依赖回车即可

```

## 命令介绍

| 命令                        |      说明           |
| ---------------------------| ------------------- |
| -V                         | 查看版本号            |
| init                       | 选择安装对应规范的依赖  |
| update                     | 快速升级规范依赖（后续迭代）  |