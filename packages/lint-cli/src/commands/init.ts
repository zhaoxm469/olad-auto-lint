import { ESLINT_PACKAGE_NAME, STYLE_LINT_PACKAGE_NAME, COMMIT_LINT_PACKAGE_NAME, ROOT_PATH } from '../config/consts';
import { NpmInstallConfig, PackageJson, Lints, LintItem } from './../types/shared';
import { eslintType } from './../config/eslintType';
// import * as allDeps from '../lib/safeDeps'
import Handlebars from 'handlebars'
import { readFileSync, writeFileSync, existsSync, removeSync } from 'fs-extra';
import { commandSync } from 'execa'
import { prompt } from 'inquirer'
import { green } from 'chalk'
import { join } from 'path'
import { failSpinner, startSpinner, succeedSpiner } from '../utils/spinner';
import { info } from '../utils/logger';

const USER_PCK_PATH = `${ROOT_PATH}/package.json`;

// 获取用户package.json文件内容
const getUserPackage = () => {
    const packContent = readFileSync(USER_PCK_PATH, 'utf-8')

    const pckResult: PackageJson = JSON.parse(packContent)
    return pckResult
}

const writeUserPck = (content) => {
    writeFileSync(USER_PCK_PATH, JSON.stringify(content, null, 2), 'utf8')
}

const addLintStaged = (config: Object) => {
    const userPackage = getUserPackage();
    userPackage['lint-staged'] = Object.assign(userPackage['lint-staged'] || {}, config)
    writeUserPck(userPackage);
}

const getTemplate = (templateName) => {
    const templatePath = join(__dirname, `../../templates/${templateName}`);
    const content = readFileSync(templatePath, 'utf-8')
    return content;
}

// 往用户目录写入文件
const addFile = (filename: string, content: string) => {
    writeFileSync(`${ROOT_PATH}/${filename}`, content, 'utf8')
}


// 尝试移除当前项目内属于安全依赖列表的包
const tryToRemovePackage = (safeDepList: string[] = []) => {
    let deps = []

    const userPackage = getUserPackage();

    if (userPackage.hasOwnProperty('dependencies')) {
        deps = deps.concat(Object.keys(userPackage.dependencies))
    }

    if (userPackage.hasOwnProperty('devDependencies')) {
        deps = deps.concat(Object.keys(userPackage.devDependencies))
    }

    deps.filter((dep) => {
        return safeDepList.includes(dep)
    }).forEach((dep) => {
        commandSync(`npm uninstall ${dep}`, { stdio: 'inherit' })
    })
}

// 检查并移除旧的lint包
const checkAndRemoveOldPackage = async (packageName: string) => {

    const userPackage = getUserPackage();

    if (JSON.stringify(userPackage).includes(packageName)) {
        commandSync(`npm uninstall ${packageName}`, { stdio: 'inherit' })
    }
}


// 添加规则询问
const getLintOptionsPrompt = async (): Promise<Lints> => {
    const { lints } = await prompt([
        {
            type: 'checkbox',
            name: 'lints',
            message: `请选择要初始化的规范 (默认全选，空格键切换选中态，回车确认):`,
            choices: [
                {
                    name: 'eslint',
                    checked: true
                },
                //  {
                //     name: 'stylelint',
                //     checked: true
                // }, {
                //     name: 'commitlint',
                //     checked: true
                // }
            ]
        }
    ])

    return lints.map(item => {
        return {
            lintName: item
        }
    })
}

// 设置eslint类型
const setEslintTypePrompt = async (lints: Lints) => {
    for (let lint of lints) {

        if (lint.lintName.includes('eslint')) {
            const { type } = await prompt([
                {
                    type: 'list',
                    name: 'type',
                    message: `请选择eslint规范类型:`,
                    choices: eslintType
                }
            ])

            lint.eslintType = type;

            return;
        }
    }
}

// 根据用户选择的lint 去执行对应的策略方法
const installLint = async (lints: Lints) => {
    const strategy = installStrategy();
    lints.forEach(lint => strategy[lint.lintName] && strategy[lint.lintName](lint))
}

const installStrategy = () => {

    return {
        async eslint(lint: LintItem) {

            startSpinner('开始初始化eslint')

            addLintStaged({
                "*.{js,jsx,json,ts,tsx,vue}": [
                    "eslint --fix",
                    "git add"
                ]
            })

            // 解决.eslintrc.js报错
            addFile('.eslintignore', '.eslintrc.js')

            npmInstall({
                targetFileName: 'eslintrc.js',
                packageName: ESLINT_PACKAGE_NAME,
                templateName: '.eslintrc.js',
                eslintType: lint.eslintType!
            });

            succeedSpiner(green('eslint初始化成功!'))
        },
        async stylelint(lint: LintItem) {
            startSpinner(`开始初始化stylelint`)

            addLintStaged({
                "src/**/*.less": [
                    "stylelint --config  ./.stylelintrc --fix",
                    "git add"
                ]
            })

            npmInstall({
                targetFileName: 'stylelintrc.js',
                packageName: STYLE_LINT_PACKAGE_NAME,
                templateName: '.stylelintrc.js',
                eslintType: lint.eslintType!
            });

            succeedSpiner(green('stylelint初始化成功!'))
        },
        async commitlint(lint: LintItem) {
            startSpinner(`开始初始化commitlint`)
            installHusky(ROOT_PATH)

            npmInstall({
                targetFileName: 'commitlintrc.js',
                packageName: COMMIT_LINT_PACKAGE_NAME,
                templateName: '.commitlintrc.js',
                eslintType: lint.eslintType!
            });

            succeedSpiner(green('commitlint初始化成功!'))
        }
    }
}

// 安装依赖
const npmInstall = (confg: NpmInstallConfig) => {

    const { packageName, templateName, targetFileName, eslintType } = confg;
    const content = getTemplate(templateName)

    checkAndRemoveOldPackage(packageName);

    if (existsSync(`${ROOT_PATH}/${targetFileName}`)) removeSync(`${ROOT_PATH}/${targetFileName}`);

    startSpinner(`正在安装依赖: ${packageName}`)

    commandSync(`npm i ${packageName} -D`, { stdio: 'inherit' })

    succeedSpiner(`${packageName}安装完成`)

    if (eslintType) {
        const contentResult = Handlebars.compile(content)({ eslintType })
        writeFileSync(targetFileName, contentResult)
    } else {
        writeFileSync(content, join(ROOT_PATH, targetFileName))
    }
}

const installHusky = (targetDir: string) => {
    // startSpinner(`installing husky`)
    commandSync(`npm install husky --save-dev`, { stdio: 'inherit' });

    const userPackage = getUserPackage();

    userPackage.husky = {
        "hooks": {
            "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
        }
    }

    writeUserPck(userPackage);
}


const action = async () => {
    // 获取规则询问
    const lints = await getLintOptionsPrompt();

    // 设置eslint类型的规则
    await setEslintTypePrompt(lints);

    try {
        // 安装规则对应的文件依赖等
        await installLint(lints);
        info(green('初始化成功!'))
    } catch (err) {
        failSpinner(err)
        return
    }
}

export default {
    command: 'init',
    description: '初始化lint规范',
    action,
}