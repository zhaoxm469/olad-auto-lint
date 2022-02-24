"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const spinner_1 = require("./../utils/spinner");
const action = async (projectName, cmdArgs) => {
    try {
        (0, spinner_1.startSpinner)(`正在安装git-hooks依赖`);
        (0, spinner_1.succeedSpiner)(chalk_1.default.green('git-hooks初始化完成!'));
    }
    catch (err) {
        (0, spinner_1.failSpinner)(err);
        return;
    }
};
exports.default = {
    command: 'init-git-hooks',
    description: '初始化git-hooks规范',
    action,
};
