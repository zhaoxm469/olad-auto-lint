"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const consts_1 = require("./../config/consts");
const consts_2 = require("../config/consts");
const handlebars_1 = require("handlebars");
const fs_extra_1 = require("fs-extra");
const execa_1 = require("execa");
const inquirer_1 = require("inquirer");
const chalk_1 = require("chalk");
const path_1 = require("path");
const spinner_1 = require("../utils/spinner");
const logger_1 = require("../utils/logger");
const USER_PCK_PATH = `${consts_2.ROOT_PATH}/package.json`;
// 获取用户package.json文件内容
const getUserPackage = () => {
    const packContent = (0, fs_extra_1.readFileSync)(USER_PCK_PATH, "utf-8");
    const pckResult = JSON.parse(packContent);
    return pckResult;
};
const writeUserPck = (content) => {
    (0, fs_extra_1.writeFileSync)(USER_PCK_PATH, JSON.stringify(content, null, 2), "utf8");
};
const addLintStaged = (config) => {
    const userPackage = getUserPackage();
    userPackage["lint-staged"] = Object.assign(userPackage["lint-staged"] || {}, config);
    writeUserPck(userPackage);
};
const getTemplateContent = (options) => {
    const templatePath = (0, path_1.join)(__dirname, `../../templates/${options.templateName}`);
    const content = (0, fs_extra_1.readFileSync)(templatePath, "utf-8");
    const contentResult = handlebars_1.default.compile(content)(options);
    return contentResult;
};
// 往用户目录写入文件
const addFile = (filename, content) => {
    (0, fs_extra_1.writeFileSync)(`${consts_2.ROOT_PATH}/${filename}`, content, "utf8");
};
// 检查并移除旧的lint包
const checkAndRemoveOldPackage = async (packName) => {
    const userPackage = getUserPackage();
    if (JSON.stringify(userPackage).includes(packName)) {
        console.log("\n");
        (0, spinner_1.startSpinner)("移除旧的lint包");
        (0, execa_1.commandSync)(`npm uninstall ${packName}`, { stdio: "inherit" });
    }
};
// 安装依赖
const npmInstall = (confg) => {
    const packName = consts_1.PACKNAME_ESLINT_NAME[confg.packName];
    // 移除旧包
    checkAndRemoveOldPackage(packName);
    //  安装新包
    console.log("\n");
    (0, spinner_1.startSpinner)(`正在安装依赖: ${packName}`);
    // 执行shell 命令
    (0, execa_1.commandSync)(`npm i ${packName} -D`, { stdio: "inherit" });
};
// const npmInstall = (confg: NpmInstallConfig) => {
//     const { packageName, templateName, targetFileName, eslintType } = confg
//     const content = getTemplate(templateName)
//     checkAndRemoveOldPackage(packageName)
//     if (existsSync(`${ROOT_PATH}/${targetFileName}`)) removeSync(`${ROOT_PATH}/${targetFileName}`)
//     startSpinner(`正在安装依赖: ${packageName}`)
//     commandSync(`npm i ${packageName} -D`, { stdio: "inherit" })
//     succeedSpiner(`${packageName}安装完成`)
//     if (eslintType) {
//       const contentResult = Handlebars.compile(content)({ eslintType })
//       writeFileSync(targetFileName, contentResult)
//     } else {
//       console.log(join(ROOT_PATH, targetFileName))
//       writeFileSync(targetFileName, content)
//     }
//   }
// 尝试移除当前项目内属于安全依赖列表的包
const removeUserPackage = (safeDepList) => {
    let deps = [];
    const userPackage = getUserPackage();
    if (userPackage.hasOwnProperty("dependencies")) {
        deps = deps.concat(Object.keys(userPackage.dependencies));
    }
    if (userPackage.hasOwnProperty("devDependencies")) {
        deps = deps.concat(Object.keys(userPackage.devDependencies));
    }
    deps.filter((dep) => {
        return safeDepList.includes(dep);
    }).forEach((dep) => {
        console.log(`removeUserPackage 移除依赖${dep}`);
        (0, execa_1.commandSync)(`npm uninstall ${dep}`, { stdio: "inherit" });
    });
};
// 添加规则询问
const getLintOptionsPrompt = async () => {
    const { lints } = await (0, inquirer_1.prompt)([
        {
            type: "checkbox",
            name: "lints",
            message: "请选择要初始化的规范 (默认全选，空格键切换选中态，回车确认):",
            choices: consts_1.choices
        }
    ]);
    return lints.map(item => {
        return {
            lintName: item
        };
    });
};
// 设置eslint类型
const setEslintTypePrompt = async (lint) => {
    const { type } = await (0, inquirer_1.prompt)([
        {
            type: "list",
            name: "type",
            message: "请选择eslint规范类型:",
            choices: consts_2.ESLINT_TYPE
        }
    ]);
    lint.eslintType = type;
};
const installHusky = (targetDir) => {
    // startSpinner(`installing husky`)
    (0, execa_1.commandSync)("npm install husky --save-dev", { stdio: "inherit" });
    const userPackage = getUserPackage();
    userPackage.husky = {
        "hooks": {
            "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
        }
    };
    writeUserPck(userPackage);
};
const installStrategy = {
    async eslint(lint) {
        console.log("\n");
        (0, spinner_1.startSpinner)("开始初始化eslint");
        removeUserPackage(["eslint", "prettier"]);
        npmInstall({
            packName: lint.eslintType
        });
        const eslintrcJsContent = getTemplateContent({
            templateName: "eslintrc.js",
            eslintType: lint.eslintType
        });
        addFile(".eslintrc.js", eslintrcJsContent);
        const prettierrcContent = getTemplateContent({
            templateName: ".prettierrc"
        });
        addFile(".prettierrc", prettierrcContent);
        (0, spinner_1.succeedSpiner)((0, chalk_1.green)("eslint初始化成功!"));
    },
    async stylelint(lint) {
        (0, spinner_1.startSpinner)("开始初始化stylelint");
        removeUserPackage(["stylelint"]);
        addLintStaged({
            "src/**/*.sass": [
                "stylelint --config  ./.stylelintrc --fix",
                "git add"
            ]
        });
        npmInstall({
            targetFileName: ".stylelintrc.js",
            packageName: consts_2.STYLE_LINT_PACKAGE_NAME,
            templateName: ".stylelintrc.js",
            eslintType: lint.eslintType
        });
        (0, spinner_1.succeedSpiner)((0, chalk_1.green)("stylelint初始化成功!"));
    },
    async commitlint(lint) {
        // 移除eslint相关安装包
        removeUserPackage(["commitlint"]);
        (0, spinner_1.startSpinner)("开始初始化commitlint");
        installHusky(consts_2.ROOT_PATH);
        npmInstall({
            targetFileName: ".commitlintrc.js",
            packageName: consts_2.COMMIT_LINT_PACKAGE_NAME,
            templateName: ".commitlintrc.js",
            eslintType: lint.eslintType
        });
        (0, spinner_1.succeedSpiner)((0, chalk_1.green)("commitlint初始化成功!"));
    }
};
// 根据用户选择的lint 去执行对应的策略方法
const installLint = async (lints) => {
    lints.forEach(lintItem => {
        const { lintName } = lintItem;
        installStrategy[lintName]?.(lintItem);
    });
};
const action = async () => {
    const lints = await getLintOptionsPrompt();
    // 如果用户选择 Eslint ， 询问用户 安装哪种 Eslint 相对应的 依赖包
    if (lints.some(item => item.lintName === "eslint"))
        await setEslintTypePrompt(lints[0]);
    if (!lints.length)
        return (0, logger_1.info)((0, chalk_1.green)("退出命令，您没有选择要安装的规则工具包哦!"));
    try {
        await installLint(lints);
        (0, logger_1.info)((0, chalk_1.green)("规则安装成功!"));
    }
    catch (err) {
        (0, spinner_1.failSpinner)(err);
        return;
    }
};
exports.default = {
    command: "init",
    description: "初始化lint规范",
    action,
};
