import { choices, PACKNAME_ESLINT_NAME } from "./../config/consts"
import { ESLINT_PACKAGE_NAME, STYLE_LINT_PACKAGE_NAME, COMMIT_LINT_PACKAGE_NAME, ROOT_PATH, ESLINT_TYPE } from "../config/consts"
import type { NpmInstallConfig, PackageJson, Lints, LintItem } from "./../types/shared"
import Handlebars from "handlebars"
import { readFileSync, writeFileSync, existsSync, removeSync } from "fs-extra"
import { commandSync, sync } from "execa"
import { prompt } from "inquirer"
import { green } from "chalk"
import { join } from "path"
import { failSpinner, startSpinner, succeedSpiner } from "../utils/spinner"
import { info } from "../utils/logger"

const USER_PCK_PATH = `${ROOT_PATH}/package.json`

// 获取用户package.json文件内容
const getUserPackage = () => {
  const packContent = readFileSync(USER_PCK_PATH, "utf-8")

  const pckResult: PackageJson = JSON.parse(packContent)
  return pckResult
}

const writeUserPck = (content) => {
  writeFileSync(USER_PCK_PATH, JSON.stringify(content, null, 2), "utf8")
}

const addLintStaged = (config: Object) => {
  const userPackage = getUserPackage()
  userPackage["lint-staged"] = Object.assign(userPackage["lint-staged"] || {}, config)
  writeUserPck(userPackage)
}

const getTemplateContent = (options) => {
  const templatePath = join(__dirname, `../../templates/${options.templateName}`)
  const content = readFileSync(templatePath, "utf-8")
  const contentResult = Handlebars.compile(content)(options)
  return contentResult
}

// 往用户目录写入文件
const addFile = (filename: string, content: string) => {
  writeFileSync(`${ROOT_PATH}/${filename}`, content, "utf8")
}

// 检查并移除旧的lint包
const checkAndRemoveOldPackage = async (packName: string) => {


  const userPackage = getUserPackage()

  if (JSON.stringify(userPackage).includes(packName)) {

    console.log("\n")
    startSpinner("移除旧的lint包")

    commandSync(`npm uninstall ${packName}`, { stdio: "inherit" })
  }
}

// 安装依赖
const npmInstall = (confg: NpmInstallConfig) => {

  const packName = PACKNAME_ESLINT_NAME[confg.packName]

  // 移除旧包
  checkAndRemoveOldPackage(packName)

  //  安装新包
  console.log("\n")

  startSpinner(`正在安装依赖: ${packName}`)

  // 执行shell 命令
  commandSync(`npm i ${packName} -D`, { stdio: "inherit" })

}

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
const removeUserPackage = (safeDepList: string[]) => {
  let deps = []

  const userPackage = getUserPackage()

  if (userPackage.hasOwnProperty("dependencies")) {
    deps = deps.concat(Object.keys(userPackage.dependencies))
  }

  if (userPackage.hasOwnProperty("devDependencies")) {
    deps = deps.concat(Object.keys(userPackage.devDependencies))
  }

  deps.filter((dep) => {
    return safeDepList.some(safeDep => dep.includes(safeDep))
  }).forEach((dep) => {
    console.log(`removeUserPackage 移除依赖${dep}`)
    commandSync(`npm uninstall ${dep}`, { stdio: "inherit" })
  })
}

// 添加规则询问
const getLintOptionsPrompt = async (): Promise<Lints> => {
  const { lints } = await prompt([
    {
      type: "checkbox",
      name: "lints",
      message: "请选择要初始化的规范 (默认全选，空格键切换选中态，回车确认):",
      choices,
    },
  ])

  return lints.map(item => {
    return {
      lintName: item,
    }
  })
}

// 设置eslint类型
const setEslintTypePrompt = async (lint: LintItem) => {


  const { type } = await prompt([
    {
      type: "list",
      name: "type",
      message: "请选择eslint规范类型:",
      choices: ESLINT_TYPE,
    },
  ])

  lint.eslintType = type
}

const installHusky = () => {

  console.log("\n")
  startSpinner("installing husky + lint-staged")

  commandSync("npm install husky --save-dev", { stdio: "inherit" })
  sync("npm", ["set-script", "prepare", "husky install"], { stdio: "inherit" })
  sync("npx", ["husky", "install"], { stdio: "inherit" })
  commandSync("npm run prepare", { stdio: "inherit" })
  sync("npx", ["husky", "add", ".husky/pre-commit", "npx lint-staged"], { stdio: "inherit" })

  succeedSpiner(green("husky + lint-staged ， 初始化成功!"))

}


const installStrategy = {
  async eslint(lint: LintItem) {

    startSpinner("开始初始化eslint")

    // 移除相关依赖
    removeUserPackage(["eslint", "prettier"])

    // 安装依赖
    npmInstall({
      packName: lint.eslintType,
    })

    succeedSpiner(`\n${green("eslint初始化成功!")}`)

    // 获取eslint 配置模板
    const eslintrcJsContent = getTemplateContent({
      templateName: "eslintrc.js",
      eslintType: lint.eslintType,
    })

    // 添加.eslintrc.js 文件
    addFile(".eslintrc.js", eslintrcJsContent)

    // 获取.preettierrc.js 模板
    const prettierrcContent = getTemplateContent({
      templateName: ".prettierrc",
    })

    // 添加.prettierrc 文件
    addFile(".prettierrc", prettierrcContent)

    const userPackage = getUserPackage()
    // 删除eslintConfig 字段
    delete userPackage.eslintConfig
    // 新增lint修复命令
    userPackage.scripts.lint = "eslint --ext .js,.vue src"
    // 添加script 命令
    writeUserPck(userPackage)

    // 添加husky配置
    addLintStaged({
      "*.{js,jsx,json,ts,tsx,vue}": [
        "eslint --cache --fix",
        "git add",
      ],
    })

  },
  async stylelint(lint: LintItem) {
    startSpinner("开始初始化stylelint")

    removeUserPackage(["stylelint"])

    addLintStaged({
      "src/**/*.sass": [
        "stylelint --config  ./.stylelintrc --fix",
        "git add",
      ],
    })

    npmInstall({
      targetFileName: ".stylelintrc.js",
      packageName: STYLE_LINT_PACKAGE_NAME,
      templateName: ".stylelintrc.js",
      eslintType: lint.eslintType!,
    })

    succeedSpiner(green("stylelint初始化成功!"))
  },
  async commitlint(lint: LintItem) {
    // 移除eslint相关安装包
    removeUserPackage(["commitlint"])

    startSpinner("开始初始化commitlint")
    installHusky(ROOT_PATH)

    npmInstall({
      targetFileName: ".commitlintrc.js",
      packageName: COMMIT_LINT_PACKAGE_NAME,
      templateName: ".commitlintrc.js",
      eslintType: lint.eslintType!,
    })

    succeedSpiner(green("commitlint初始化成功!"))
  },
  // husk() {

  //   commandSync("npm i husky -D", { stdio: "inherit" })
  //   commandSync("npm set-script prepare \"husky install\"", { stdio: "inherit" })
  //   commandSync("npx husky add .husky/pre-commit \"npx lint-staged\"", { stdio: "inherit" })
  //   commandSync("git add .husky/pre-commit", { stdio: "inherit" })
  //   console.log("12313")
  // }
}


// 根据用户选择的lint 去执行对应的策略方法
const installLint = async (lints: Lints) => {
  lints.forEach(lintItem => {
    const { lintName } = lintItem
    installStrategy[lintName]?.(lintItem)
  })
}


const action = async () => {

  // installHusky()
  // return
  const lints = await getLintOptionsPrompt()

  // 如果用户选择 Eslint ， 询问用户 安装哪种 Eslint 相对应的 依赖包
  if (lints.some(item => item.lintName === "eslint")) await setEslintTypePrompt(lints[0])

  if (!lints.length) return info(green("退出命令，您没有选择要安装的规则工具包哦!"))

  try {
    await installLint(lints)
    info(green("规范依赖安装完成!"))

  }
  catch (err) {
    failSpinner(err)
    return
  }
}

export default class Init implements ACommands {
  public readonly command =  "init"

  public readonly description = "初始化规范依赖"

  public readonly options = [
    {
      name: "eslint",
      description: "是否安装 eslint",
      type: "boolean",
      default: true,
    },
    {
      name: "stylelint",
      description: "是否安装 stylelint",
      type: "boolean",
      default: true,
    },
    {
      name: "commitlint",
      description: "是否安装 commitlint",
      type: "boolean",
      default: true,
    },
  ]

  public async action() {
    await action()
  }
}