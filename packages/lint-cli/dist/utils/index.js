"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCommandPaths = void 0;
const globby_1 = require("globby");
const posix_1 = require("path/posix");
const getCommandPaths = () => {
    return (0, globby_1.sync)('../commands/*.js', { cwd: __dirname, deep: 1 }).map(path => (0, posix_1.join)(__dirname, path));
};
exports.getCommandPaths = getCommandPaths;
