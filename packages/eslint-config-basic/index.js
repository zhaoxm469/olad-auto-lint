/*
 * @Date: 2022-02-21 16:09:24
 * @LastEditors: zhaoxm
 * @LastEditTime: 2022-05-07 00:23:19
 * @Description: 公共配置
 */

const rules = require("./rules.js")
const unicorn = require("./unicorn.js")

module.exports = {
  env: {
    browser: true,
    amd: true,
    node: true,
    es2021: true,
  },
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2022,
    ecmaFeatures: {
      jsx: true,
    },
  },
  extends:[
    "plugin:markdown/recommended",
  ],
  globals: {
    document: "readonly",
    navigator: "readonly",
    window: "readonly",
  },
  plugins: ["html", "promise", "import", "unicorn"],
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
      files: ["*.js", "*.ts"],
      rules: {
        ...unicorn,
        "unicorn/prefer-module": "off",
        "@typescript-eslint/no-var-requires": "off",
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
    {
      files: ["**/*.md/*.*"],
      rules: {
        "@typescript-eslint/no-redeclare": "off",
        "@typescript-eslint/no-unused-vars": "off",
        "@typescript-eslint/no-use-before-define": "off",
        "@typescript-eslint/no-var-requires": "off",
        "import/no-unresolved": "off",
        "no-alert": "off",
        "no-console": "off",
        "no-restricted-imports": "off",
        "no-undef": "off",
        "no-unused-expressions": "off",
        "no-unused-vars": "off",
      },
    },
  ],
}
