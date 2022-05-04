"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.failSpinner = exports.succeedSpinier = exports.startSpinner = void 0;
const chalk = require("chalk");
const ora = require("ora");
const spinner = ora();
const startSpinner = (text) => {
    const message = `${text}...\n`;
    spinner.start(message);
    spinner.stopAndPersist({
        symbol: "✨",
        text: message,
    });
};
exports.startSpinner = startSpinner;
const succeedSpinier = (text) => {
    spinner.stopAndPersist({
        symbol: "🎉",
        text: `${text}\n`,
    });
};
exports.succeedSpinier = succeedSpinier;
const failSpinner = (text) => {
    spinner.fail(chalk.red(text));
};
exports.failSpinner = failSpinner;
