"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currentProjectRoot = exports.unInstallCommand = exports.installCommand = exports.hasYarn = exports.getCommandPaths = void 0;
const child_process_1 = require("child_process");
const globby_1 = require("globby");
const posix_1 = require("path/posix");
const getCommandPaths = () => {
    return (0, globby_1.sync)("../commands/*.js", { cwd: __dirname, deep: 1 }).map(path => (0, posix_1.join)(__dirname, path));
};
exports.getCommandPaths = getCommandPaths;
// 是否有yarn
const hasYarn = () => {
    try {
        (0, child_process_1.execSync)('yarn --version', { stdio: 'ignore' });
        return true;
    }
    catch (e) {
        return false;
    }
};
exports.hasYarn = hasYarn;
exports.installCommand = (0, exports.hasYarn)() ? 'yarn add ' : 'npm install ';
exports.unInstallCommand = (0, exports.hasYarn)() ? 'yarn remove ' : 'npm uninstall ';
exports.currentProjectRoot = (0, posix_1.join)(__dirname, '../../');
