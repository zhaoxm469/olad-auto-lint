"use strict";
/*
 * @Date: 2022-02-21 08:48:11
 * @LastEditors: zhaoxm
 * @LastEditTime: 2022-04-20 16:34:44
 * @Description: 更新版本
 */
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const spinner_1 = require("./../utils/spinner");
class Upgrade {
    command = "upgrade";
    description = "升级规范包相关依赖";
    action = async () => {
        try {
            (0, spinner_1.startSpinner)("正在更新。。。");
            (0, spinner_1.succeedSpiner)(chalk_1.default.green("更新成功!"));
        }
        catch (err) {
            (0, spinner_1.failSpinner)(err);
            return;
        }
    };
}
exports.default = Upgrade;
