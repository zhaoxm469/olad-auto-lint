import { writeFileSync, readFileSync } from "fs-extra"
import { ROOT_PATH } from "../config/const"
import { currentProjectRoot } from "."
import Handlebars from "handlebars"
import { join, resolve } from "path"

class UserProject {
    userRootPath: string

    constructor(userPackPath) {
        this.userRootPath = userPackPath
    }

    /**
     * @description: 向用户根目录追加文件
     * @param { String } templateFile 模板路径
     * @param { Recordable } data 模板中替换的数据
     * @return { UserProject }
     */
    addTemplateFile(output: string = '', templateFile: string, data: Recordable = {}) {
        const templateContent = readFileSync(resolve(currentProjectRoot, templateFile), "utf-8")
        const contentResult = Handlebars.compile(templateContent)(data)
        const templateFileName = templateFile.slice(templateFile.lastIndexOf('/') + 1, -4)
        const outputUserPath = join(this.userRootPath, output, templateFileName)
        writeFileSync(outputUserPath, contentResult, "utf8")
        return this
    }
}



export const userProject = new UserProject(ROOT_PATH)