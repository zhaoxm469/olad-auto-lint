"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VERSION_ENUM = exports.safeDependencies = exports.STYLE_LINT_PACKAGE_NAME = exports.COMMIT_LINT_PACKAGE_NAME = exports.ESLINT_PACKAGE_NAME = exports.targetFile = exports.ROOT_PATH = void 0;
exports.ROOT_PATH = process.cwd();
exports.targetFile = 'private';
exports.ESLINT_PACKAGE_NAME = '@olad/eslint-config-lint';
exports.COMMIT_LINT_PACKAGE_NAME = '@olad/commitlint-config';
exports.STYLE_LINT_PACKAGE_NAME = '@olad/stylelint-config';
exports.safeDependencies = ['eslint', 'commitlint', 'stylelint'];
exports.VERSION_ENUM = {
    UNINSTALLED: Symbol(),
    NEW: Symbol(),
    OLD: Symbol()
};