#!/usr/bin/env node
import { version } from "../package.json"
import { getCommandPaths } from "./utils/index"
import { errorLog } from "./utils/logger"
import { program } from "commander"
import { userPackage } from "./utils/userPackage"
import { failSpinner } from "./utils/spinner"

function init() {

  const commandPaths = getCommandPaths()

  for (const commandPath of commandPaths) {
    const CommandModule = require(commandPath).default
    const commandModule = new CommandModule()
    const { command, description, action } = commandModule
    program.command(command).description(description).action(() => {
      if (!userPackage.isHasPackageJson) {
        return failSpinner("请确保在项目根目录下存在 package.json 文件")
      }
      return action(commandModule).catch((error_: any) => {
        errorLog(error_)
        process.exit(1)
      })
    })
  }

  program.version(version)

  program.arguments("[command]").action((cmd) => {
    if (!cmd) return program.outputHelp()
    errorLog(`未知的命令${cmd}`)
    program.outputHelp()
  })

  program.parseAsync(process.argv)
}

init()
