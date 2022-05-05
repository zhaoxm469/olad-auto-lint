/*
 * @Date: 2022-02-21 08:48:11
 * @LastEditors: zhaoxm
 * @LastEditTime: 2022-05-05 09:11:26
 * @Description: 更新版本
 */
import { COMMIT_LINT_PACKAGE_NAME, ESLINT_ALL, ESLINT_VUE2, STYLE_LINT_PACKAGE_NAME } from "../config/const"
import { failSpinner, startSpinner, succeedSpinier } from "./../utils/spinner"
import { userPackage } from "../utils/userPackage"
import chalk from "chalk"

export default class Upgrade implements ACommands {

  public readonly command = "upgrade"

  public readonly description = "升级规范包相关依赖"

  action = async () => {
    try {
      startSpinner("正在更新。。。")

      const packages = [ESLINT_VUE2,ESLINT_ALL,COMMIT_LINT_PACKAGE_NAME,STYLE_LINT_PACKAGE_NAME]

      for(let pckName of packages) {
        if(userPackage.dependenciesAndDevDependencies.includes(pckName)){
          userPackage
            .uninstall(pckName)
            .install(pckName)
        }
      }

      succeedSpinier(chalk.green("更新成功!"))

    }
    catch (err) {
      failSpinner(err)
      return
    }
  }
}