import { version } from "../package.json"
import { getCommandPaths } from "./utils/index"
import { error } from "./utils/logger"
import { program } from "commander"

function init() {
  const commandPaths = getCommandPaths()

  commandPaths.forEach((commandPath) => {
    const CommandModule = require(commandPath).default
    const commandModule = new CommandModule()
    const { command, description, action } = commandModule
    program.command(command).description(description).action(action.bind(commandModule))
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
