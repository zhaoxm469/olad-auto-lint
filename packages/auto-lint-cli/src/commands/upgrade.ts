/*
 * @Date: 2022-02-21 08:48:11
 * @LastEditors: zhaoxm
 * @LastEditTime: 2022-05-14 23:14:47
 * @Description: 更新版本
 */
import { COMMIT_LINT_PACKAGE_NAME, ESLINT_ALL, ESLINT_VUE2, STYLE_LINT_PACKAGE_NAME } from "../config/const"
import { failSpinner } from "./../utils/spinner"
import { userPackage } from "../utils/userPackage"
import { loading } from "../utils/loading"
import { BaseCommand } from "../utils/baseCommand"

export default class Upgrade extends BaseCommand implements ACommands {

  public readonly command = "upgrade"

  public readonly description = "升级规范包相关依赖"

  constructor() {
    super()
  }

  action = async () => {
    try {

      await this.checkNpmEnv()

      loading.start("正在查找依赖包")

      const packages = new Set([ESLINT_VUE2, ESLINT_ALL, COMMIT_LINT_PACKAGE_NAME, STYLE_LINT_PACKAGE_NAME])
      const { dependenciesAndDevDependencies } = userPackage

      const upgradePackages = dependenciesAndDevDependencies.filter(packageName => {
        return packages.has(packageName)
      })

      if (upgradePackages.length === 0) {
        return loading.warn("没有找到要升级的相关依赖包！请检查您的package.json文件 \n")
      }

      loading.succeed(`找到依赖包 ${upgradePackages.join(",")}`)

      for (const pckName of upgradePackages) {
        await userPackage.uninstall(pckName)
        await userPackage.install(pckName)
      }

      loading.addFinishedStep().succeed("恭喜您！依赖升级成功！ \n")

    } catch (error) {
      failSpinner(error as string)
      return
    }
  }
}