import { execSync } from "node:child_process"
import { sync } from "globby"
import { join } from "node:path/posix"

export const getCommandPaths = () => {
  return sync("../commands/*.js", { cwd: __dirname, deep: 1 }).map(path => join(__dirname, path))
}

// 是否有yarn
export const hasYarn = () => {
  try {
    execSync("yarn --version", { stdio: "ignore" })
    return true
  }
  catch {
    return false
  }
}

export const installCommand = hasYarn() ? "yarn add " : "npm install "

export const unInstallCommand = hasYarn() ? "yarn remove " : "npm uninstall "

export const currentProjectRoot = join(__dirname, "../../")
