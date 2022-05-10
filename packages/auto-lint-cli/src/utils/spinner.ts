import * as chalk from "chalk"
import * as ora from "ora"

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
    symbol: "🎉",
    text: `${text}\n`,
  })
}

export const failSpinner = (text?: string) => {
  spinner.fail(chalk.red(text))
}
