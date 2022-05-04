"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class InitGitHook {
    command = "init-git-hooks";
    description = "初始化git hooks";
    action = async () => {
        // 初始化husky
        // await initHusky()
        // // 初始化commitlint
        // await initCommitlint()
    };
}
exports.default = InitGitHook;
