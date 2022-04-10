/*
 * @Date: 2022-02-21 16:09:24
 * @LastEditors: zhaoxm
 * @LastEditTime: 2022-04-10 18:46:33
 * @Description: 
 */
export const ROOT_PATH = process.cwd()

export const targetFile = "private"

export const ESLINT_PACKAGE_NAME = "@olad/eslint-config"

export const COMMIT_LINT_PACKAGE_NAME = "commitlint-config-olad"

export const STYLE_LINT_PACKAGE_NAME = "stylelint-config-olad"

export const safeDependencies = ["eslint", "commitlint", "stylelint"]

export const VERSION_ENUM = {
  UNINSTALLED: Symbol(),
  NEW: Symbol(),
  OLD: Symbol()
}