import { startSpinner, succeedSpinier } from "./spinner"
import { installCommand, unInstallCommand } from "."
import { USER_PCK_PATH } from "../config/const"
import { PackageJson } from "../types/shared"
import { readFileSync } from "fs-extra"
import { commandSync } from "execa"
import { writeFileSync } from "fs"


class UserPackage {
    userPackPath: string

    constructor(userPackPath) {
        this.userPackPath = userPackPath
    }

    get packageContent() {
        const packContent = readFileSync(this.userPackPath, "utf-8")

        const pckResult: PackageJson = JSON.parse(packContent)
        return pckResult
    }

    get dependenciesAndDevDependencies() {
        let deps = [], packageContent = this.packageContent

        if (packageContent.hasOwnProperty("dependencies")) {
            deps.push(...Object.keys(packageContent.dependencies))
        }

        if (packageContent.hasOwnProperty("devDependencies")) {
            deps.push(...Object.keys(packageContent.devDependencies))
        }

        return deps
    }

    write(pckContent) {
        writeFileSync(this.userPackPath, JSON.stringify(pckContent, null, 2), "utf8")
    }

    appendScript(scriptName, scriptContent) {

        startSpinner(`向用户 package.json 写入 Script 命令 ：${scriptName}`)

        const packageJSon = JSON.parse(JSON.stringify(this.packageContent))

        if (packageJSon.scripts) {
            packageJSon.scripts[scriptName] = scriptContent
        } else {
            packageJSon.scripts = {
                [scriptName]: scriptContent
            }
        }

        this.write(packageJSon)
        return this
    }

    appendLintStaged(keyName: string, stagedContent: string[]) {

        startSpinner(`向用户 package.json 写入 lint-staged  ：${keyName}`)

        const packageJSon = JSON.parse(JSON.stringify(this.packageContent))

        if (packageJSon["lint-staged"]) {
            packageJSon[keyName] = stagedContent
        } else {
            packageJSon["lint-staged"] = {
                [keyName]: stagedContent
            }
        }

        this.write(packageJSon)
        return this
    }

    append() {

    }

    install(packageName: string, isDevDependencies: boolean = true) {
        console.log('\n');
        startSpinner(`正在安装 ${packageName} 依赖包`)

        commandSync(`${installCommand} ${packageName} ${isDevDependencies ? '-D' : '-S'}`, { stdio: "inherit" })

        console.log('\n');
        succeedSpinier(`${packageName} 安装成功`)

    }

    uninstall(packageName: RegExp | string | string[]) {

        const removePackName = this.dependenciesAndDevDependencies.filter(pckName => {
            if (packageName instanceof RegExp) {
                return packageName.test(pckName)
            }
            if (typeof packageName === 'string') {
                return pckName === packageName
            }
            if (Array.isArray(packageName)) {
                return packageName.includes(pckName)
            }
        })

        if (!removePackName.length) return this

        for (let pckName of removePackName) {
            console.log('\n');
            startSpinner(`正在尝试移除 ${pckName} 依赖包`)
            commandSync(`${unInstallCommand} ${pckName}`, { stdio: "inherit" })
        }

        return this
    }
}



export const userPackage = new UserPackage(USER_PCK_PATH)