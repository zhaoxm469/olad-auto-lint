import { ESLINT_ALL, ESLINT_VUE2, STYLE_LINT_PACKAGE_NAME, COMMIT_LINT_PACKAGE_NAME } from "../config/const"
import { startSpinner, succeedSpinier } from "../utils/spinner"
import { userPackage } from "../utils/userPackage"
import { userProject } from "../utils/userProject"
import { commandSync, sync } from "execa"
import { prompt } from "inquirer"
import { green } from "chalk"

export default class Init implements ACommands {
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
      checked: true,
    },
    {
      name: "CommitLint",
      description: "是否安装 commitlint",
      checked: true,
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

  async action() {
    const { lints } = await prompt([
      {
        type: "checkbox",
        name: "lints",
        message: "请选择要初始化的规范 (默认全选，空格键切换选中态，回车确认):",
        choices: this.choices,
        validate: async (value) => {
          if (!value.length) throw Error("至少选择一项哦")
          return true
        },
        filter(value) {
          return value.map(item => item.toLocaleLowerCase())
        },
      },
    ])

    for (const item of lints) await this[item]()

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
    userPackage.uninstall(/eslint/).uninstall(/prettier/)

    // 安装依赖
    userPackage.install(eslintPackName)

    // 添加用户目录添加相关模板配置文件
    userProject
      .addTemplateFile('.', 'templates/.eslintrc.js.hbs', {
        packageName: eslintPackName,
      })
      .addTemplateFile('.', 'templates/.eslintignore.hbs')

    userPackage
      // 添加Script命令
      .appendScript("lint:eslint", `eslint --cache --max-warnings 0  \"{src,mock}/**/*.{vue,js,ts,tsx}\" --fix`)
      // 添加LintStaged
      .appendLintStaged('*.{js,jsx,ts,tsx}', [
        "eslint --fix"
      ])
      .appendLintStaged("*.vue", [
        "eslint --fix"
      ])

    succeedSpinier(green("EslLint ， 初始化成功!\n"))

  }

  stylelint() {

    userPackage
      // 卸载相关依赖
      .uninstall(/stylelint/)
      // 安装依赖
      .install(STYLE_LINT_PACKAGE_NAME)


    // 添加用户目录添加相关模板配置文件
    userProject
      .addTemplateFile('.', 'templates/stylelint.config.js.hbs', {
        packageName: STYLE_LINT_PACKAGE_NAME,
      })
      .addTemplateFile('.', 'templates/.stylelintignore.hbs')

    // 注入Script命令
    userPackage
      .appendScript("lint:stylelint", `stylelint --cache --fix \"**/*.{vue,less,postcss,css,scss}\" --cache --cache-location node_modules/.cache/stylelint/`)
      .appendLintStaged("*.vue", [
        "eslint --fix"
      ])
      .appendLintStaged("*.{scss,css,less,styl,html}", [
        "stylelint --fix"
      ])

    succeedSpinier(green("StyleLint ， 初始化成功!\n"))

  }

  commitlint() {

    userPackage
      // 卸载相关依赖
      .uninstall(/husky/)
      .uninstall(/commitlint/)
      // 安装依赖
      .install('husky')

    // 一系列husky + lint-staged 初始化操作
    startSpinner("installing husky + lint-staged")
    sync("npm", ["set-script", "prepare", "husky install"], { stdio: "inherit" })
    sync("npx", ["husky", "install"], { stdio: "inherit" })
    commandSync("npm run prepare", { stdio: "inherit" })

    console.log('\n');
    succeedSpinier(green("husky + lint-staged ， 初始化成功!"))

    userPackage.install(COMMIT_LINT_PACKAGE_NAME)

    userProject
      .addTemplateFile('./.husky', 'templates/husky/commit-msg.hbs')
      .addTemplateFile('./.husky', 'templates/husky/common.sh.hbs')
      .addTemplateFile('./.husky', 'templates/husky/pre-commit.hbs')
      .addTemplateFile('.', 'templates/commitlint.config.js.hbs', {
        packageName: COMMIT_LINT_PACKAGE_NAME,
      })
  }

}