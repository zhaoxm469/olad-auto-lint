const { version } = require('../package.json')
import { getCommandPaths } from './utils/index';
import { error } from './utils/logger';
import { program } from 'commander'

function init() {

    const commandPaths = getCommandPaths();

    commandPaths.forEach((commandPath) => {
        const { command, description, action } = require(commandPath).default;
        program
            .command(command)
            .description(description)
            .action(action);
    })

    program.version(version)

    program.arguments('[command]').action((cmd) => {
        if (!cmd) return program.outputHelp();
        error(`未知的命令${cmd}`)
        program.outputHelp()
    })

    program.parseAsync(process.argv)

}

init();