import { getRegistry, packageManager } from "."
import { loading } from "./loading"
import chalk from "chalk"

export class BaseCommand {
  async checkNpmEnv() {
    loading.start("检测环境")
    const register = await getRegistry()
    loading.succeed(`检测环境: Command: ${chalk.yellow(packageManager)} , default ${chalk.cyan(register)}`)
  }
}