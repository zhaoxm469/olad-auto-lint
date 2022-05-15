import { customCommand, installCommand, unInstallCommand } from "."
import { writeFileSync, existsSync } from "node:fs"
import { USER_PCK_PATH } from "../config/const"
import type { PackageJson } from "pkg-types"
import { readFileSync } from "fs-extra"
import { loading } from "./loading"
import { errorLog } from "./logger"
import chalk from "chalk"

class UserPackage {
  userPackPath: string

  constructor(userPackPath: string) {
    this.userPackPath = userPackPath
  }

  get packageContent() {
    const packContent = readFileSync(this.userPackPath, "utf8")

    const pckResult: PackageJson = JSON.parse(packContent)
    return pckResult
  }

  get isHasPackageJson() {
    return existsSync(this.userPackPath)
  }

  get dependenciesAndDevDependencies() {
    const deps = []; const { packageContent } = this

    if (packageContent.hasOwnProperty("dependencies")) {
      deps.push(...Object.keys(packageContent.dependencies))
    }

    if (packageContent.hasOwnProperty("devDependencies")) {
      deps.push(...Object.keys(packageContent.devDependencies))
    }

    return deps
  }

  write(pckContent: Recordable) {
    writeFileSync(this.userPackPath, JSON.stringify(pckContent, null, 2), "utf8")
  }

  appendScript(scriptName: string, scriptContent: string) {

    loading.start(`向用户 package.json 写入 Script 命令 ：${scriptName}`)

    const packageJSon = JSON.parse(JSON.stringify(this.packageContent))

    if (packageJSon.scripts) {
      packageJSon.scripts[scriptName] = scriptContent
    } else {
      packageJSon.scripts = {
        [scriptName]: scriptContent,
      }
    }

    this.write(packageJSon)

    loading.succeed(`向用户 package.json 写入 Script 命令 ${chalk.cyan(scriptName)}`)

    return this
  }

  appendLintStaged(keyName: string, stagedContent: string[]) {

    loading.start(`向用户 package.json 写入 lint-staged ${keyName}`)

    const packageJSon = JSON.parse(JSON.stringify(this.packageContent))

    if (packageJSon["lint-staged"]) {
      packageJSon["lint-staged"][keyName] = stagedContent
    } else {
      packageJSon["lint-staged"] = {
        [keyName]: stagedContent,
      }
    }

    this.write(packageJSon)

    loading.addFinishedStep().succeed(`向用户 package.json 写入 lint-staged ${chalk.cyan(keyName)}`)
    return this
  }

  async install(packageName: string, isDevelopmentDependencies = true) {

    loading.start(`正在安装最新版本 ${packageName} 依赖包`)

    await customCommand(`${installCommand} ${packageName} ${isDevelopmentDependencies ? "-D" : "-S"}`).catch((error) => {
      loading.fail(`安装失败 ${packageName}`)
      errorLog(error.message)
      process.exit(error.exitCode)
    })

    loading.succeed(`安装最新版本 ${packageName} `)

  }

  async uninstall(packageName: RegExp | string | string[]) {

    const removePackName = this.dependenciesAndDevDependencies.filter(pckName => {
      if (packageName instanceof RegExp) {
        return packageName.test(pckName)
      }
      if (typeof packageName === "string") {
        return pckName === packageName
      }
      if (Array.isArray(packageName)) {
        return packageName.includes(pckName)
      }

      return false
    })

    if (!removePackName.length) return this

    for (const pckName of removePackName) {
      loading.start(`正在尝试移除 ${pckName} 依赖包`)

      await customCommand(`${unInstallCommand} ${pckName}`).catch((error) => {
        loading.fail(`移除失败 ${pckName}`)
        errorLog(error.message)
        process.exit(error.exitCode)
      })

      loading.succeed(`移除 ${pckName} 依赖包`)
    }

  }
}

export const userPackage = new UserPackage(USER_PCK_PATH)