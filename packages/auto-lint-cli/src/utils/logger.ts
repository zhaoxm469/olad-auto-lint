import boxen from "boxen"
import chalk from "chalk"
import { get } from "./fetch"

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

export const successLog = (text = "") => {
  log(`\n ${chalk.green.bold("✔")} ${chalk.green(text)}\n`)
}

export const upgradeLog = async (oladVersion: string) => {
  const data = await get("https://registry.npmmirror.com/@olad/eslint-config-vue3")
  console.log({ data })
  log(
    `${boxen(`
Update available! ${chalk.yellow(`v${oladVersion}`)} → ${chalk.green.bold("v0.0.0")}\n
Changelog: https://github.com/zhaoxm469/olad-auto-lint.git\n
Run ${chalk.bold.cyan("npm i -g @olad/auto-lint")}.
    `, {
      padding: 1,
      borderStyle: "doubleSingle",
      titleAlignment: "center",
    })}\n`,
  )
}