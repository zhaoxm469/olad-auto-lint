import chalk from "chalk"
import ora from "ora"

const spinner = ora()

export const startSpinner = (text?: string) => {
  const message = `${text}...\n`
  spinner.start(message)
  spinner.stopAndPersist({
    symbol: "✨",
    text: message,
  })
}

export const succeedSpinier = (text?: string) => {
  spinner.stopAndPersist({
    symbol: chalk.green.bold("✔"),
    text: `${text}\n`,
  })
}

export const failSpinner = (text?: string) => {
  spinner.prefixText = "\n "
  spinner.fail(`${chalk.red(text)} \n`)
}
