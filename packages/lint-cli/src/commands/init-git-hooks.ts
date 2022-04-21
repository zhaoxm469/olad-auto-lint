export default class InitGitHook implements ACommands {
  command = "init-git-hooks"

  description = "初始化git hooks"

  action = async () => {
    // 初始化husky
    await initHusky()
    // 初始化commitlint
    await initCommitlint()
  }
}