"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const spinner_1 = require("./../utils/spinner");
const action = async (projectName, cmdArgs) => {
    try {
        (0, spinner_1.startSpinner)(`正在更新。。。`);
        (0, spinner_1.succeedSpiner)(chalk_1.default.green('更新成功!'));
    }
    catch (err) {
        (0, spinner_1.failSpinner)(err);
        return;
    }
};
exports.default = {
    command: 'upgrade',
    description: '升级lint规范',
    action,
};
