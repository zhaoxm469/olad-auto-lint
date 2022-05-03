# 介绍

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

然后在 中增加：package.json

```bash
{
  "husky": {
    "hooks": {
      "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
    }
  }
}
```

## 示例

格式： `<type>[(scope)]: <description>`

示例

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
