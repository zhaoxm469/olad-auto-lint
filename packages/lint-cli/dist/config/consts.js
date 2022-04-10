"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.choices = exports.PACKAGE_NAMES = exports.PACKNAME_ESLINT_NAME = exports.ESLINT_TYPE = exports.STYLE_LINT_PACKAGE_NAME = exports.COMMIT_LINT_PACKAGE_NAME = exports.ESLINT_TYPESCRIPT = exports.ESLINT_VUE3 = exports.ESLINT_VUE2 = exports.targetFile = exports.ROOT_PATH = void 0;
/*
 * @Date: 2022-02-21 16:09:24
 * @LastEditors: zhaoxm
 * @LastEditTime: 2022-04-10 23:28:01
 */
exports.ROOT_PATH = process.cwd();
exports.targetFile = "private";
// ESLINT
exports.ESLINT_VUE2 = "@olad/eslint-config-vue2";
exports.ESLINT_VUE3 = "@olad/eslint-config-vue3";
exports.ESLINT_TYPESCRIPT = "@olad/eslint-config-typescript";
// COMMITLINT
exports.COMMIT_LINT_PACKAGE_NAME = "@olad/commitlint-config";
// STYLELINT
exports.STYLE_LINT_PACKAGE_NAME = "@olad/stylelint-config-olad";
exports.ESLINT_TYPE = ["vue2", "vue3", "typescript"];
exports.PACKNAME_ESLINT_NAME = {
    vue2: exports.ESLINT_VUE2,
    vue3: exports.ESLINT_VUE3,
    typescript: exports.ESLINT_VUE3,
};
exports.PACKAGE_NAMES = {
    eslint: exports.PACKNAME_ESLINT_NAME,
    stylelint: exports.STYLE_LINT_PACKAGE_NAME,
    commitlint: exports.COMMIT_LINT_PACKAGE_NAME,
};
exports.choices = [{
        name: "eslint",
        checked: true
    }, {
        name: "stylelint",
        checked: false
    }, {
        name: "commitlint",
        checked: false
    }];
