
/*
 * @Date: 2022-02-21 16:09:52
 * @LastEditors: zhaoxm
 * @LastEditTime: 2022-05-08 21:55:00
 * @Description: 100 个强大的 ESLint 规则 https://github.com/sindresorhus/eslint-plugin-unicorn
 */

module.exports = {
  // unicorn off
  // 强制对长度使用 === 0 来判断
  "unicorn/explicit-length-check": "off",
  // 强制文件夹命名规范,后续可以根据需求再开放出来
  "unicorn/filename-case": "off",
  // 复杂情况不使用 reduce
  "unicorn/no-array-reduce": "off",
  // 不使用null复制
  "unicorn/no-null": "off",
  // 入参对象不进行设置默认值
  "unicorn/no-object-as-default-parameter": "off",
  // 不允许赋值this
  "unicorn/no-this-assignment": "off",
  "unicorn/prefer-dom-node-text-content": "off",

  // unicorn error
  "unicorn/better-regex": "error",
  "unicorn/catch-error-name": "error",
  "unicorn/consistent-destructuring": "error",
  "unicorn/consistent-function-scoping": "error",
  "unicorn/custom-error-definition": "off",
  "unicorn/empty-brace-spaces": "error",
  "unicorn/error-message": "error",
  "unicorn/escape-case": "error",
  "unicorn/expiring-todo-comments": "error",
  "unicorn/import-index": "off",
  "unicorn/import-style": "off",
  "unicorn/new-for-builtins": "error",
  "unicorn/no-abusive-eslint-disable": "error",
  "unicorn/no-array-callback-reference": "error",
  "unicorn/no-array-for-each": "error",
  "unicorn/no-array-method-this-argument": "error",
  "unicorn/no-array-push-push": "error",
  "unicorn/no-await-expression-member": "error",
  "unicorn/no-console-spaces": "error",
  "unicorn/no-document-cookie": "error",
  "unicorn/no-empty-file": "error",
  "unicorn/no-for-loop": "error",
  "unicorn/no-hex-escape": "error",
  "unicorn/no-instanceof-array": "error",
  "unicorn/no-invalid-remove-event-listener": "error",
  "unicorn/no-keyword-prefix": "off",
  "unicorn/no-lonely-if": "error",
  "no-nested-ternary": "off",
  "unicorn/no-nested-ternary": "error",
  "unicorn/no-new-array": "error",
  "unicorn/no-new-buffer": "error",
  "unicorn/no-process-exit": "error",
  "unicorn/no-static-only-class": "error",
  "unicorn/no-thenable": "error",
  "unicorn/no-unreadable-array-destructuring": "error",
  "unicorn/no-unreadable-iife": "error",
  "unicorn/no-unsafe-regex": "off",
  "unicorn/no-unused-properties": "off",
  "unicorn/no-useless-fallback-in-spread": "error",
  "unicorn/no-useless-length-check": "error",
  "unicorn/no-useless-promise-resolve-reject": "error",
  "unicorn/no-useless-spread": "error",
  "unicorn/no-useless-switch-case": "error",
  "unicorn/no-useless-undefined": "error",
  "unicorn/no-zero-fractions": "error",
  "unicorn/number-literal-case": "error",
  "unicorn/numeric-separators-style": "error",
  "unicorn/prefer-add-event-listener": "error",
  "unicorn/prefer-array-find": "error",
  "unicorn/prefer-array-flat": "error",
  "unicorn/prefer-array-flat-map": "error",
  "unicorn/prefer-array-index-of": "error",
  "unicorn/prefer-array-some": "error",
  // TODO: Enable this by default when targeting a Node.js version that supports `Array#at`.
  "unicorn/prefer-at": "off",
  "unicorn/prefer-code-point": "error",
  "unicorn/prefer-date-now": "error",
  "unicorn/prefer-default-parameters": "error",
  "unicorn/prefer-dom-node-append": "error",
  "unicorn/prefer-dom-node-dataset": "error",
  "unicorn/prefer-dom-node-remove": "error",
  "unicorn/prefer-export-from": "error",
  "unicorn/prefer-includes": "error",
  "unicorn/prefer-json-parse-buffer": "off",
  "unicorn/prefer-keyboard-event-key": "error",
  "unicorn/prefer-math-trunc": "error",
  "unicorn/prefer-modern-dom-apis": "error",
  "unicorn/prefer-modern-math-apis": "error",
  "unicorn/prefer-native-coercion-functions": "error",
  "unicorn/prefer-negative-index": "error",
  "unicorn/prefer-node-protocol": "error",
  "unicorn/prefer-number-properties": "error",
  "unicorn/prefer-object-from-entries": "error",
  "unicorn/prefer-optional-catch-binding": "error",
  "unicorn/prefer-prototype-methods": "error",
  "unicorn/prefer-query-selector": "error",
  "unicorn/prefer-reflect-apply": "error",
  "unicorn/prefer-regexp-test": "error",
  "unicorn/prefer-set-has": "error",
  "unicorn/prefer-spread": "error",
  // TODO: Enable this by default when targeting Node.js 16.
  "unicorn/prefer-string-replace-all": "off",
  "unicorn/prefer-string-slice": "error",
  "unicorn/prefer-string-starts-ends-with": "error",
  "unicorn/prefer-string-trim-start-end": "error",
  "unicorn/prefer-switch": "error",
  "unicorn/prefer-ternary": "error",
  // TODO: Enable this by default when targeting Node.js 14.
  "unicorn/prefer-top-level-await": "off",
  "unicorn/prefer-type-error": "error",
  "unicorn/prevent-abbreviations": ["error", {
    // 忽略文件名的检查
    checkFilenames: false,
  }],
  "unicorn/relative-url-style": "error",
  "unicorn/require-array-join-separator": "error",
  "unicorn/require-number-to-fixed-digits-argument": "error",
  // Turned off because we can't distinguish `widow.postMessage` and `{Worker,MessagePort,Client,BroadcastChannel}#postMessage()`
  // See #1396
  "unicorn/require-post-message-target-origin": "off",
  "unicorn/string-content": "off",
  "unicorn/template-indent": "error",
  "unicorn/text-encoding-identifier-case": "error",
  "unicorn/throw-new-error": "error",
}