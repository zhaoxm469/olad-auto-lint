import type { TAutoLintPackageInfo } from "./fetch"
import { get } from "./fetch"
import boxen from "boxen"
import chalk from "chalk"

export const { log } = console

export const warnLog = (text: String) => {
  log(chalk.yellow(`\n${text}\n`))
}

export const info = (text: string) => {
  log(chalk.cyan(`\n${text}\n`))
}

export const errorLog = (text: any) => {
  log(chalk.bgRed(`\n${text.toString()}\n`))
}

export const succeedLog = (text: any) => {
  log(`\n 🎉🎉🎉 ${chalk.yellow(`${text.toString()}\n`)}`)
}

export const upgradeLog = async (oladVersion: string) => {
  const data = await get<TAutoLintPackageInfo>("https://registry.npmmirror.com/@olad/eslint-config-vue3")
  const latestVersion = data["dist-tags"].latest

  if (latestVersion === oladVersion) return

  log(
    `${boxen(`
Update available! ${chalk.yellow(`v${oladVersion}`)} → ${chalk.green.bold(`v${latestVersion}`)}\n
Changelog: https://github.com/zhaoxm469/olad-auto-lint.git\n
Run ${chalk.bold.cyan("npm i -g @olad/auto-lint")}.
    `, {
      padding: 1,
      borderStyle: "doubleSingle",
      titleAlignment: "center",
    })}\n`,
  )
}