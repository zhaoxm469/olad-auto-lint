export const ROOT_PATH = process.cwd()

export const targetFile = 'private'

export const ESLINT_PACKAGE_NAME = 'eslint-config-selling'

export const COMMIT_LINT_PACKAGE_NAME = 'commitlint-config-selling'

export const STYLE_LINT_PACKAGE_NAME = 'stylelint-config-selling'

export const packageMap = {
    folderName: {
        '@jd/eslint-config-selling': 'eslint-config-selling',
        '@jd/commitlint-config-selling': 'commitlint-config-selling',
        '@jd/stylelint-config-selling': 'stylelint-config-selling'
    },
    lintType: {
        '@jd/eslint-config-selling': 'eslint',
        '@jd/commitlint-config-selling': 'commitlint',
        '@jd/stylelint-config-selling': 'stylelint'
    },
    depsName: {
        '@jd/eslint-config-selling': 'eslintDeps',
        '@jd/commitlint-config-selling': 'commitlintDeps',
        '@jd/stylelint-config-selling': 'stylelintDeps'
    }
}

export const safeDependencies = ['eslint', 'commitlint', 'stylelint']

export const VERSION_ENUM = {
    UNINSTALLED: Symbol(),
    NEW: Symbol(),
    OLD: Symbol()
}