import { version } from "../package.json"
import { getCommandPaths } from "./utils/index"
import { error } from "./utils/logger"
import { program } from "commander"

function init() {
  const commandPaths = getCommandPaths()
  
  commandPaths.forEach((commandPath) => {
    const CommandModule = require(commandPath).default
    const { command, description, action } = new CommandModule()
    console.log({ command, description, action })
    program.command(command).description(description).action(action)
  })

  program.version(version)

  program.arguments("[command]").action((cmd) => {
    if (!cmd) return program.outputHelp()
    error(`未知的命令${cmd}`)
    program.outputHelp()
  })

  program.parseAsync(process.argv)
}

init()
