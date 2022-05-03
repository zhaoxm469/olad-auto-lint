/*
 * @Date: 2022-02-21 16:09:24
 * @LastEditors: zhaoxm
 * @LastEditTime: 2022-05-03 21:50:08
 * @Description: 公共配置
 */

const rules = require("./rules.js")

module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends:["plugin:unicorn/recommended"],
  globals: {
    document: "readonly",
    navigator: "readonly",
    window: "readonly",
  },
  plugins: ["html", "promise", "import"],
  ignorePatterns: [
    "*.min.*",
    "CHANGELOG.md",
    "dist",
    "LICENSE*",
    "output",
    "coverage",
    "public",
    "temp",
    "packages-lock.json",
    "pnpm-lock.yaml",
    "yarn.lock",
    "__snapshots__",
    "!.github",
    "!.vitepress",
    "!.vscode",
  ],
  rules: {
    ...rules,

    // unicorn off 
    // 强制对长度使用 === 0 来判断
    "unicorn/explicit-length-check": "off",
    // 强制文件夹命名规范,后续可以根据需求再开放出来
    "unicorn/filename-case":"off",
    // 复杂情况不使用 reduce 
    "unicorn/no-array-reduce":"off",
    // 不使用null复制
    "unicorn/no-null": "off",
    // 入参对象不进行设置默认值
    "unicorn/no-object-as-default-parameter": "off",
    // 不允许赋值this
    "no-this-assignment":"off",
    "unicorn/prefer-dom-node-text-content": "off",

    // 强制使用一致的参数名和顺序。
    "promise/param-names": "error",
    // 报告任何无效的导出，即同名的再导出
    "import/export": "error",
    // 确保所有导入出现在其他语句之前
    "import/first": "error",
    // 报告在多个地方重复导入同一模块
    "import/no-duplicates": "error",
    // 禁止命名默认导出
    "import/no-named-default": "error",
  },
  overrides: [
    {
      files: ["*.d.ts"],
      rules: {
        "import/no-duplicates": "off",
      },
    },
    {
      files: ["*.js"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "unicorn/prefer-module":"off",
      },
    },
    {
      files: ["scripts/**/*.*", "cli.*"],
      rules: {
        "no-console": "off",
      },
    },
    {
      files: ["*.test.ts", "*.test.js", "*.spec.ts", "*.spec.js"],
      rules: {
        "no-unused-expressions": "off",
      },
    },
  ],
}
