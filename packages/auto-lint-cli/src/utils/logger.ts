import boxen from "boxen"
import * as chalk from "chalk"
const { log } = console

export const warn = (text:String) => {
  log(chalk.yellow(`\n${text}\n`))
}

export const info = (text: string) => {
  log(chalk.cyan(`\n${text}\n`))
}

export const error = (text: string) => {
  log(chalk.bgRed(`\n${text}\n`))
}

var a= 123

export const updateLog = ()=>{
log(
    boxen(`
      Update available! ${chalk.yellow("v0.0.0")} → ${chalk.green.bold("v0.0.0")}\n
      Changelog: https://github.com/zhaoxm469/olad-auto-lint.git\n
      Run npm add -g @olad/auto-lint.
      `, {
      padding:1,
      title:chalk.bold.green("Found the latest version！"),
      borderStyle:"doubleSingle",
      titleAlignment:"center",
    }),
  )
}