module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // <type> 不能为空
    "scope-empty": ["error", "always"],
    // <type> 不能为空
    "type-empty": ["error", "never"],
    // <type>格式小写
    "type-case": ["error", "always", "lower-case"],
    // <scope> 格式 小写
    "scope-case": ["error", "always", "lower-case"],
    // <subject> 不能为空
    "subject-empty": ["error", "never"],
    // <subject> 以.为结束标志
    "subject-full-stop": ["error", "never", "."],
    "subject-case": ["error", "never", []],
    // body换行
    "body-leading-blank": ["error", "always"],
    // <footer> 以空行开头
    "footer-leading-blank": [1, "always"],
    // header 最长72
    // eslint-disable-next-line no-magic-numbers
    "header-max-length": ["error", "never", 72],
    "type-enum": [
      "error",
      "always",
      [
        // 编译相关的修改，例如发布版本、对项目构建或者依赖的改动
        "build",
        // 其他修改, 比如改变构建流程、或者增加依赖库、工具等
        "chore",
        // 持续集成修改
        "ci",
        // 文档修改
        "docs",
        // 新特性、新功能
        "feat",
        // 修改bug
        "fix",
        // 优化相关，比如提升性能、体验
        "perf",
        // 代码重构
        "refactor",
        // 回滚到上一个版本
        "revert",
        // 代码格式修改, 注意不是 css 修改
        "style",
        // 测试用例修改
        "test",
        // Add custom type
        // Update page use api fech data
        "page",
        // Changes page layout and style
        "ui",
        // Release version
        "release",
      ],
    ],
  },
}
