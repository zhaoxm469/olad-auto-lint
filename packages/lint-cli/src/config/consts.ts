export const ROOT_PATH = process.cwd()

export const targetFile = 'private'

export const ESLINT_PACKAGE_NAME = '@olad/eslint-config-lint'

export const COMMIT_LINT_PACKAGE_NAME = '@olad/commitlint-config'

export const STYLE_LINT_PACKAGE_NAME = '@olad/stylelint-config'

export const safeDependencies = ['eslint', 'commitlint', 'stylelint']

export const VERSION_ENUM = {
    UNINSTALLED: Symbol(),
    NEW: Symbol(),
    OLD: Symbol()
}