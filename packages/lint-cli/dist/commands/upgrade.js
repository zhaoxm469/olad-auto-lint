"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * @Date: 2022-02-21 08:48:11
 * @LastEditors: zhaoxm
 * @LastEditTime: 2022-05-05 09:11:26
 * @Description: 更新版本
 */
const const_1 = require("../config/const");
const spinner_1 = require("./../utils/spinner");
const userPackage_1 = require("../utils/userPackage");
const chalk_1 = require("chalk");
class Upgrade {
    command = "upgrade";
    description = "升级规范包相关依赖";
    action = async () => {
        try {
            (0, spinner_1.startSpinner)("正在更新。。。");
            const packages = [const_1.ESLINT_VUE2, const_1.ESLINT_ALL, const_1.COMMIT_LINT_PACKAGE_NAME, const_1.STYLE_LINT_PACKAGE_NAME];
            for (let pckName of packages) {
                if (userPackage_1.userPackage.dependenciesAndDevDependencies.includes(pckName)) {
                    userPackage_1.userPackage
                        .uninstall(pckName)
                        .install(pckName);
                }
            }
            (0, spinner_1.succeedSpinier)(chalk_1.default.green("更新成功!"));
        }
        catch (err) {
            (0, spinner_1.failSpinner)(err);
            return;
        }
    };
}
exports.default = Upgrade;
