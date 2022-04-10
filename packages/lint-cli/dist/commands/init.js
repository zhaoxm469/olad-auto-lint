"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consts_1 = require("../config/consts");
const eslintType_1 = require("./../config/eslintType");
const handlebars_1 = require("handlebars");
const fs_extra_1 = require("fs-extra");
const execa_1 = require("execa");
const inquirer_1 = require("inquirer");
const chalk_1 = require("chalk");
const path_1 = require("path");
const spinner_1 = require("../utils/spinner");
const logger_1 = require("../utils/logger");
const USER_PCK_PATH = `${consts_1.ROOT_PATH}/package.json`;
// 获取用户package.json文件内容
const getUserPackage = () => {
    const packContent = (0, fs_extra_1.readFileSync)(USER_PCK_PATH, 'utf-8');
    const pckResult = JSON.parse(packContent);
    return pckResult;
};
const writeUserPck = (content) => {
    (0, fs_extra_1.writeFileSync)(USER_PCK_PATH, JSON.stringify(content, null, 2), 'utf8');
};
const addLintStaged = (config) => {
    const userPackage = getUserPackage();
    userPackage['lint-staged'] = Object.assign(userPackage['lint-staged'] || {}, config);
    writeUserPck(userPackage);
};
const getTemplate = (templateName) => {
    const templatePath = (0, path_1.join)(__dirname, `../../templates/${templateName}`);
    const content = (0, fs_extra_1.readFileSync)(templatePath, 'utf-8');
    return content;
};
// 往用户目录写入文件
const addFile = (filename, content) => {
    (0, fs_extra_1.writeFileSync)(`${consts_1.ROOT_PATH}/${filename}`, content, 'utf8');
};
// 检查并移除旧的lint包
const checkAndRemoveOldPackage = async (packageName) => {
    const userPackage = getUserPackage();
    if (JSON.stringify(userPackage).includes(packageName)) {
        (0, execa_1.commandSync)(`npm uninstall ${packageName}`, { stdio: 'inherit' });
    }
};
// 安装依赖
const npmInstall = (confg) => {
    const { packageName, templateName, targetFileName, eslintType } = confg;
    const content = getTemplate(templateName);
    checkAndRemoveOldPackage(packageName);
    if ((0, fs_extra_1.existsSync)(`${consts_1.ROOT_PATH}/${targetFileName}`))
        (0, fs_extra_1.removeSync)(`${consts_1.ROOT_PATH}/${targetFileName}`);
    (0, spinner_1.startSpinner)(`正在安装依赖: ${packageName}`);
    (0, execa_1.commandSync)(`npm i ${packageName} -D`, { stdio: 'inherit' });
    (0, spinner_1.succeedSpiner)(`${packageName}安装完成`);
    if (eslintType) {
        const contentResult = handlebars_1.default.compile(content)({ eslintType });
        (0, fs_extra_1.writeFileSync)(targetFileName, contentResult);
    }
    else {
        console.log((0, path_1.join)(consts_1.ROOT_PATH, targetFileName));
        (0, fs_extra_1.writeFileSync)(targetFileName, content);
    }
};
// 尝试移除当前项目内属于安全依赖列表的包
const tryToRemovePackage = (safeDepList) => {
    let deps = [];
    const userPackage = getUserPackage();
    if (userPackage.hasOwnProperty('dependencies')) {
        deps = deps.concat(Object.keys(userPackage.dependencies));
    }
    if (userPackage.hasOwnProperty('devDependencies')) {
        deps = deps.concat(Object.keys(userPackage.devDependencies));
    }
    deps.filter((dep) => {
        return dep.includes(safeDepList);
    }).forEach((dep) => {
        (0, execa_1.commandSync)(`npm uninstall ${dep}`, { stdio: 'inherit' });
    });
};
// 添加规则询问
const getLintOptionsPrompt = async () => {
    const { lints } = await (0, inquirer_1.prompt)([
        {
            type: 'checkbox',
            name: 'lints',
            message: `请选择要初始化的规范 (默认全选，空格键切换选中态，回车确认):`,
            choices: [
                {
                    name: 'eslint',
                    checked: true
                },
                {
                    name: 'stylelint',
                    checked: true
                }, {
                    name: 'commitlint',
                    checked: true
                }
            ]
        }
    ]);
    return lints.map(item => {
        return {
            lintName: item
        };
    });
};
// 设置eslint类型
const setEslintTypePrompt = async (lints) => {
    for (let lint of lints) {
        if (lint.lintName.includes('eslint')) {
            const { type } = await (0, inquirer_1.prompt)([
                {
                    type: 'list',
                    name: 'type',
                    message: `请选择eslint规范类型:`,
                    choices: eslintType_1.eslintType
                }
            ]);
            lint.eslintType = type;
            return;
        }
    }
};
const installHusky = (targetDir) => {
    // startSpinner(`installing husky`)
    (0, execa_1.commandSync)(`npm install husky --save-dev`, { stdio: 'inherit' });
    const userPackage = getUserPackage();
    userPackage.husky = {
        "hooks": {
            "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
        }
    };
    writeUserPck(userPackage);
};
const installStrategy = () => {
    return {
        async eslint(lint) {
            (0, spinner_1.startSpinner)('开始初始化eslint');
            // 移除eslint相关安装包
            tryToRemovePackage('eslint');
            addLintStaged({
                "*.{js,jsx,json,ts,tsx,vue}": [
                    "eslint --fix",
                    "git add"
                ]
            });
            // 解决.eslintrc.js报错
            addFile('.eslintignore', '.eslintrc.js');
            npmInstall({
                targetFileName: '.eslintrc.js',
                packageName: consts_1.ESLINT_PACKAGE_NAME,
                templateName: '.eslintrc.js',
                eslintType: lint.eslintType
            });
            (0, spinner_1.succeedSpiner)((0, chalk_1.green)('eslint初始化成功!'));
        },
        async stylelint(lint) {
            (0, spinner_1.startSpinner)(`开始初始化stylelint`);
            tryToRemovePackage('stylelint');
            addLintStaged({
                "src/**/*.sass": [
                    "stylelint --config  ./.stylelintrc --fix",
                    "git add"
                ]
            });
            npmInstall({
                targetFileName: '.stylelintrc.js',
                packageName: consts_1.STYLE_LINT_PACKAGE_NAME,
                templateName: '.stylelintrc.js',
                eslintType: lint.eslintType
            });
            (0, spinner_1.succeedSpiner)((0, chalk_1.green)('stylelint初始化成功!'));
        },
        async commitlint(lint) {
            // 移除eslint相关安装包
            tryToRemovePackage('commitlint');
            (0, spinner_1.startSpinner)(`开始初始化commitlint`);
            installHusky(consts_1.ROOT_PATH);
            npmInstall({
                targetFileName: '.commitlintrc.js',
                packageName: consts_1.COMMIT_LINT_PACKAGE_NAME,
                templateName: '.commitlintrc.js',
                eslintType: lint.eslintType
            });
            (0, spinner_1.succeedSpiner)((0, chalk_1.green)('commitlint初始化成功!'));
        }
    };
};
// 根据用户选择的lint 去执行对应的策略方法
const installLint = async (lints) => {
    const strategy = installStrategy();
    lints.forEach(lint => strategy[lint.lintName]?.(lint));
};
const action = async () => {
    // 获取规则询问
    const lints = await getLintOptionsPrompt();
    // 设置eslint类型的规则
    if (lints.some(item => item.lintName === 'eslint'))
        await setEslintTypePrompt(lints);
    if (!lints.length)
        return (0, logger_1.info)((0, chalk_1.green)('退出命令，您没有选择要安装的规则工具包哦!'));
    try {
        // 安装规则对应的文件依赖等
        await installLint(lints);
        (0, logger_1.info)((0, chalk_1.green)('规则安装成功!'));
    }
    catch (err) {
        (0, spinner_1.failSpinner)(err);
        return;
    }
};
exports.default = {
    command: 'init',
    description: '初始化lint规范',
    action,
};
