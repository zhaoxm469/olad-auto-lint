/*
 * @Date: 2022-02-21 08:48:11
 * @LastEditors: zhaoxm
 * @LastEditTime: 2022-04-20 16:34:44
 * @Description: 更新版本
 */

import chalk from "chalk"
import { failSpinner, startSpinner, succeedSpiner } from "./../utils/spinner"

export default class Upgrade implements ACommands {

  public readonly  command = "upgrade"

  public readonly description = "升级规范包相关依赖"

  action = async() => {
    try {
      startSpinner("正在更新。。。")
    
      succeedSpiner(chalk.green("更新成功!"))
    
    }
    catch (err) {
      failSpinner(err)
      return
    }
  }

}