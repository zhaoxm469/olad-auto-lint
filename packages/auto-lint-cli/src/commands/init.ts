import { ESLINT_ALL, ESLINT_VUE2, STYLE_LINT_PACKAGE_NAME, COMMIT_LINT_PACKAGE_NAME } from "../config/const"
import { succeedSpinier } from "../utils/spinner"
import { BaseCommand } from "../utils/baseCommand"
import { userPackage } from "../utils/userPackage"
import { userProject } from "../utils/userProject"
import { loading } from "../utils/loading"
import { customCommand } from "../utils"
import { log, succeedLog } from "../utils/logger"
import { prompt } from "inquirer"
import chalk from "chalk"

export default class Init extends BaseCommand implements ACommands {
  readonly command = "init"

  readonly description = "初始化规范依赖"

  readonly choices = [
    {
      name: "EsLint",
      description: "是否安装 eslint",
      checked: true,
    },
    {
      name: "StyleLint",
      description: "是否安装 stylelint",
      checked: false,
    },
    {
      name: "CommitLint",
      description: "是否安装 commitlint",
      checked: false,
    },
  ]

  readonly eslintChoices = [
    {
      name: `${ESLINT_ALL}（集合包，内置Vue3,TypeScript,React规则）`,
      value: ESLINT_ALL,
    },
    {
      name: `${ESLINT_VUE2}（适用于Vue2项目）`,
      value: ESLINT_VUE2,
    },
  ]

  action = async () => {

    await this.checkNpmEnv()
    log("\n")

    const { lints } = await prompt<{ lints: string[] }>([
      {
        type: "checkbox",
        name: "lints",
        message: "请选择要初始化的规范 (默认全选，空格键切换选中态，回车确认):",
        choices: this.choices,
        validate: async (value) => {
          if (!value.length) throw new Error("至少选择一项哦")
          return true
        },
        filter(value) {
          return value.map((item: string) => item.toLocaleLowerCase())
        },
      },
    ])

    for (const item of lints) await (this as any)[item]()

  }

  async eslint() {

    const { eslintPackName } = await prompt([
      {
        type: "rawlist",
        name: "eslintPackName",
        message: "请选择eslint规范类型:",
        choices: this.eslintChoices,
      },
    ])

    // 卸载相关依赖
    await userPackage.uninstall(/eslint|prettier/)

    // 安装依赖
    await userPackage.install(eslintPackName)

    // 添加用户目录添加相关模板配置文件
    userProject
      .addTemplateFile(".", "templates/.eslintrc.js.hbs", {
        packageName: eslintPackName,
      })
      .addTemplateFile(".", "templates/.eslintignore.hbs")

    userPackage
      // 添加Script命令
      .appendScript("lint:eslint", "eslint --cache --max-warnings 0  \"{src,mock}/**/*.{vue,js,ts,tsx}\" --fix")
      // 添加LintStaged
      .appendLintStaged("*.{js,jsx,ts,tsx,vue}", [
        "npm run lint:eslint",
      ])

    succeedLog("EslLint 初始化成功!")

  }

  async stylelint() {

    // 卸载相关依赖
    await userPackage.uninstall(/stylelint/)
    // 安装依赖
    await userPackage.install(STYLE_LINT_PACKAGE_NAME)

    // 添加用户目录添加相关模板配置文件
    userProject
      .addTemplateFile(".", "templates/stylelint.config.js.hbs", {
        packageName: STYLE_LINT_PACKAGE_NAME,
      })
      .addTemplateFile(".", "templates/.stylelintignore.hbs")

    // 注入Script命令
    userPackage
      .appendScript("lint:style", "stylelint --cache --fix 'src/**/*.{vue,htm,html,css,scss,less}'")
      .appendLintStaged("*.{scss,css,less,styl,html,less,vue}", [
        "npm run lint:style",
      ])

    succeedLog("StyleLint 初始化成功!")

  }

  async commitlint() {

    // 卸载相关依赖
    userPackage.uninstall(/husky|commitlint/g)

    // 安装依赖
    userPackage.install("husky")

    // 一系列husky + lint-staged 初始化操作
    loading.start("初始化 husky + int-staged")

    sync("npm", ["set-script", "prepare", "husky install"])
    sync("npx", ["husky", "install"])
    customCommand("npm run prepare")

    console.log("\n")
    succeedSpinier(chalk.green("husky + lint-staged ， 初始化成功!"))

    // 写入Script脚本
    await userPackage.install(COMMIT_LINT_PACKAGE_NAME)

    userPackage.appendScript("lint:lint-staged", "lint-staged")

    userProject
      .addTemplateFile("./.husky", "templates/husky/commit-msg.hbs")
      .addTemplateFile("./.husky", "templates/husky/common.sh.hbs")
      .addTemplateFile("./.husky", "templates/husky/pre-commit.hbs")
      .addTemplateFile(".", "templates/commitlint.config.js.hbs", {
        packageName: COMMIT_LINT_PACKAGE_NAME,
      })

    succeedSpinier(chalk.green("CommitLint ， 初始化成功!\n"))
  }

}