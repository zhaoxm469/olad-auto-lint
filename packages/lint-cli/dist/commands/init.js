"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const const_1 = require("../config/const");
const spinner_1 = require("../utils/spinner");
const userPackage_1 = require("../utils/userPackage");
const userProject_1 = require("../utils/userProject");
const execa_1 = require("execa");
const inquirer_1 = require("inquirer");
const chalk_1 = require("chalk");
class Init {
    command = "init";
    description = "初始化规范依赖";
    choices = [
        {
            name: "EsLint",
            description: "是否安装 eslint",
            checked: true,
        },
        {
            name: "StyleLint",
            description: "是否安装 stylelint",
            checked: true,
        },
        {
            name: "CommitLint",
            description: "是否安装 commitlint",
            checked: true,
        },
    ];
    eslintChoices = [
        {
            name: `${const_1.ESLINT_ALL}（集合包，内置Vue3,TypeScript,React规则）`,
            value: const_1.ESLINT_ALL,
        },
        {
            name: `${const_1.ESLINT_VUE2}（适用于Vue2项目）`,
            value: const_1.ESLINT_VUE2,
        },
    ];
    async action() {
        const { lints } = await (0, inquirer_1.prompt)([
            {
                type: "checkbox",
                name: "lints",
                message: "请选择要初始化的规范 (默认全选，空格键切换选中态，回车确认):",
                choices: this.choices,
                validate: async (value) => {
                    if (!value.length)
                        throw Error("至少选择一项哦");
                    return true;
                },
                filter(value) {
                    return value.map(item => item.toLocaleLowerCase());
                },
            },
        ]);
        for (const item of lints)
            await this[item]();
    }
    async eslint() {
        const { eslintPackName } = await (0, inquirer_1.prompt)([
            {
                type: "rawlist",
                name: "eslintPackName",
                message: "请选择eslint规范类型:",
                choices: this.eslintChoices,
            },
        ]);
        // 卸载相关依赖
        userPackage_1.userPackage.uninstall(/eslint/).uninstall(/prettier/);
        // 安装依赖
        userPackage_1.userPackage.install(eslintPackName);
        // 添加用户目录添加相关模板配置文件
        userProject_1.userProject
            .addTemplateFile('templates/.eslintrc.js.hbs', {
            packageName: eslintPackName,
        })
            .addTemplateFile('templates/.eslintignore.hbs');
        userPackage_1.userPackage
            // 添加Script命令
            .appendScript("lint:eslint", `eslint --cache --max-warnings 0  \"{src,mock}/**/*.{vue,ts,tsx}\" --fix`)
            // 添加LintStaged
            .appendLintStaged('*.{js,jsx,ts,tsx}', [
            "eslint --fix",
            "prettier --write",
            "git add"
        ])
            .appendLintStaged("*.vue", [
            "eslint --fix",
            "prettier --write",
            "git add"
        ]);
        (0, spinner_1.succeedSpinier)((0, chalk_1.green)("EslLint ， 初始化成功!\n"));
    }
    stylelint() {
        userPackage_1.userPackage
            // 卸载相关依赖
            .uninstall(/stylelint/)
            // 安装依赖
            .install(const_1.STYLE_LINT_PACKAGE_NAME);
        // 添加用户目录添加相关模板配置文件
        userProject_1.userProject
            .addTemplateFile('templates/stylelint.config.js.hbs', {
            packageName: const_1.STYLE_LINT_PACKAGE_NAME,
        })
            .addTemplateFile('templates/.stylelintignore.hbs');
        // 注入Script命令
        userPackage_1.userPackage
            .appendScript("lint:stylelint", `stylelint --cache --fix \"**/*.{vue,less,postcss,css,scss}\" --cache --cache-location node_modules/.cache/stylelint/`)
            .appendLintStaged("*.vue", [
            "eslint --fix",
            "prettier --write",
            "git add"
        ])
            .appendLintStaged("*.{scss,less,styl,html}", [
            "stylelint --fix",
            "prettier --write",
            "git add"
        ]);
        (0, spinner_1.succeedSpinier)((0, chalk_1.green)("StyleLint ， 初始化成功!\n"));
    }
    commitlint() {
        userPackage_1.userPackage
            // 卸载相关依赖
            .uninstall(/husky/)
            .uninstall(/commitlint/)
            // 安装依赖
            .install('husky');
        // 一系列husky + lint-staged 初始化操作
        (0, spinner_1.startSpinner)("installing husky + lint-staged");
        (0, execa_1.sync)("npm", ["set-script", "prepare", "husky install"], { stdio: "inherit" });
        (0, execa_1.sync)("npx", ["husky", "install"], { stdio: "inherit" });
        (0, execa_1.commandSync)("npm run prepare", { stdio: "inherit" });
        (0, execa_1.sync)("npx", ["husky", "add", ".husky/pre-commit", "npx lint-staged"], { stdio: "inherit" });
        (0, spinner_1.succeedSpinier)((0, chalk_1.green)("husky + lint-staged ， 初始化成功!"));
        userPackage_1.userPackage.install(const_1.COMMIT_LINT_PACKAGE_NAME);
        userProject_1.userProject
            .addTemplateFile('templates/commitlint.config.js.hbs', {
            packageName: const_1.COMMIT_LINT_PACKAGE_NAME,
        });
    }
}
exports.default = Init;
