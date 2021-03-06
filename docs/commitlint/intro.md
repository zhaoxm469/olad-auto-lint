# 介绍

在开发的过程中，Git 每次提交代码，都需要写Commit message 。如果没有对 Commit message 进行规范，会造成很多的麻烦。

比如：

- 每个人的 Commit message 风格不同，格式凌乱，查看就不太方便。
- 有一些commit 没有写 message，事后就很难知道对应修改的作用。

所以说规范的 Commit message 是很有必要的。也是有很多的好处的，比如：

- 可以统一团队的Git commit 日志风格
- 方便日后查阅， Reviewing Code等
- 可以帮助我们写好 Changelog

## 说明

commitlint 可共享配置，用于对 git commit message 进行校验，统一格式的提交记录，更清晰和易读。

## 安装依赖

:::warning

如果项目之前安装过 CommitLint 相关的包，建议卸载，避免引入不必要的包。如`@commitlint/cli`、`@commitlint/config-conventional`等，直接在 package.json 搜索**commitlint**，相关的包全部卸载

:::

```bash
# with npm
npm install @olad/commitlint-config -D

# with yarn
yarn add @olad/commitlint-config --dev

# with npm
pnpm add @olad/commitlint-config --dev
```

## 如何使用

在你的工程根目录下创建一个`.commitlint.config.js`配置文件

配置如下即可:

```js
module.exports = {
  extends: '@olad/commitlint-config',
};
```

## 设置 git hook

可通过 [husky](https://www.npmjs.com/package/husky) 设置在 git commit 时触发 commitlint。

首先安装husky：

```bash
npm install husky -D
```

进行一系列的初始化

```bash
npm set-script prepare husky install

npx husky install 

npm run prepare
```

向 `.husky` 目录 添加 commit-msg , common.sh , pre-commit 文件

commit-msg 文件 写入

```bash
#!/bin/sh

# shellcheck source=./_/husky.sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit "$1"
```

commit-msg 文件内容

```bash
#!/bin/sh

# shellcheck source=./_/husky.sh
. "$(dirname "$0")/_/husky.sh"

npx --no-install commitlint --edit "$1"
```

common.sh 文件内容

```bash
#!/bin/sh
command_exists () {
  command -v "$1" >/dev/null 2>&1
}

# Workaround for Windows 10, Git Bash and Yarn
if command_exists winpty && test -t 1; then
  exec < /dev/tty
fi
```

pre-commit 文件内容

```bash
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
. "$(dirname "$0")/common.sh"

[ -n "$CI" ] && exit 0

```

## GIT提交示例

格式： `<type>[(scope)]: <description>`

```bash
git commit -a -m 'build: xxxxx'
git commit -a -m 'feat(cli): xxxxx'
```

字段说明

| 字段        | 类型   | 说明                                                         | 必须 |
| ----------- | ------ | ------------------------------------------------------------ | ---- |
| type        | string | 用于表明我们这次提交的改动类型                               | 是   |
| scope       | string | 一个可选的修改范围。用于标识此次提交主要涉及到代码中哪个模块 | 否   |
| description | string | 一句话描述此次提交的主要内容，做到言简意赅                   | 是   |

## type

| type 类型 | 说明                                                                             |
| --------- | -------------------------------------------------------------------------------- |
| build     | 主要目的是修改项目构建系统(例如 glup，webpack，rollup 的配置等)的提交            |
| ci        | 主要目的是修改项目继续集成流程(例如 Travis，Jenkins，GitLab CI，Circle 等)的提交 |
| docs      | 文档更新                                                                         |
| feat      | 新增功能                                                                         |
| fix       | bug 修复                                                                         |
| perf      | 优化                                                                             |
| refactor  | 重构代码                                                                         |
| style     | 不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)                         |
| test      | 新增测试用例或是更新现有测试                                                     |
| revert    | 回滚某个更早之前的提交                                                           |
| chore     | 不属于以上类型的其他类型(日常事务)                                               |
