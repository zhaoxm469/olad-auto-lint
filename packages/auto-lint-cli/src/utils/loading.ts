import { promptConfig } from "../config/const"
import { log } from "./logger"
import chalk from "chalk"
import ora from "ora"

export class Loading {
  finishedStep = 0

  spinner = ora({ spinner: "material", text: "", color: "yellow" })

  totalStep = 0

  start(text = "", doingPostFix = "...") {
    this.spinner.prefixText = chalk.yellow(`\n → ${++this.finishedStep}. ${text}${doingPostFix}`)
    if (promptConfig.debug) {
      log(chalk.yellow(`\n → ${this.finishedStep}. ${text}${doingPostFix}`))
    } else {
      this.spinner.start()
    }
  }

  addFinishedStep() {
    this.finishedStep++
    return this
  }

  done() {
    this.spinner.prefixText = "\n"
    this.spinner.clear().stop()
  }

  fail(text = "") {
    this.done()
    this.spinner.fail(`${chalk.red(`${this.finishedStep}.${text}`)}\b`)
  }

  succeed(text = "") {
    this.done()
    this.spinner.succeed(`${chalk.green(`${this.finishedStep}.${text}`)}`)
  }

  warn(text = "") {
    this.done()
    this.spinner.warn(`${chalk.yellow(`${this.finishedStep}.${text}`)}`)
  }

}

export const loading = new Loading()
