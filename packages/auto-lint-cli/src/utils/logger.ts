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

export const successLog = (text = "") => {
  log(`\n ${chalk.green.bold("✔")} ${chalk.green(text)}\n`)
}

export const updateLog = () => {
  log(
    boxen(`
      Update available! ${chalk.yellow("v0.0.0")} → ${chalk.green.bold("v0.0.0")}\n
      Changelog: https://github.com/zhaoxm469/olad-auto-lint.git\n
      Run ${chalk.bold("npm i -g @olad/auto-lint")}.
      `, {
      padding: 1,
      title: chalk.bold.green("Found the latest version！"),
      borderStyle: "doubleSingle",
      titleAlignment: "center",
    }),
  )
}