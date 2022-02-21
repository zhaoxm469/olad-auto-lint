"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { version } = require('../package.json');
const index_1 = require("./utils/index");
const logger_1 = require("./utils/logger");
const commander_1 = require("commander");
function init() {
    const commandPaths = (0, index_1.getCommandPaths)();
    commandPaths.forEach((commandPath) => {
        const { command, description, action } = require(commandPath).default;
        commander_1.program
            .command(command)
            .description(description)
            .action(action);
    });
    commander_1.program.version(version);
    commander_1.program.arguments('[command]').action((cmd) => {
        if (!cmd)
            return commander_1.program.outputHelp();
        (0, logger_1.error)(`未知的命令${cmd}`);
        commander_1.program.outputHelp();
    });
    commander_1.program.parseAsync(process.argv);
}
init();
