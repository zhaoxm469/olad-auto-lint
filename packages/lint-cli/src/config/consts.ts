/*
 * @Date: 2022-02-21 16:09:24
 * @LastEditors: zhaoxm
 * @LastEditTime: 2022-04-10 23:28:01
 */
export const ROOT_PATH = process.cwd()

export const targetFile = "private"

// ESLINT
export const ESLINT_VUE2 = "@olad/eslint-config-vue2"
export const ESLINT_VUE3 = "@olad/eslint-config-vue3"
export const ESLINT_TYPESCRIPT = "@olad/eslint-config-typescript"

// COMMITLINT
export const COMMIT_LINT_PACKAGE_NAME = "@olad/commitlint-config"

// STYLELINT
export const STYLE_LINT_PACKAGE_NAME = "@olad/stylelint-config-olad"

export const ESLINT_TYPE = ["vue2", "vue3", "typescript"]

export const PACKNAME_ESLINT_NAME = {
  vue2: ESLINT_VUE2,
  vue3: ESLINT_VUE3,
  typescript: ESLINT_VUE3,
}

export const PACKAGE_NAMES = {
  eslint:PACKNAME_ESLINT_NAME,
  stylelint: STYLE_LINT_PACKAGE_NAME,
  commitlint: COMMIT_LINT_PACKAGE_NAME,
}

export const choices = [{
  name: "eslint",
  checked: true
}, {
  name: "stylelint",
  checked: false
}, {
  name: "commitlint",
  checked: false
}]
