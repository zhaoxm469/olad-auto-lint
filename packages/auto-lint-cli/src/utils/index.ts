import { promptConfig, ROOT_PATH } from "../config/const"
import { resolve, join } from "node:path/posix"
import { execSync } from "node:child_process"
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { execaCommand, Options } from "execa"
import { pathExistsSync } from "fs-extra"
import { sync } from "globby"

export const customCommand = (_command: string, options = {}) => {

  const options_: Options = {
    stdio: promptConfig.debug ? "inherit" : "ignore",
    ...options,
  }

  return execaCommand(_command, options_)
}

export const getCommandFilePaths = () => {
  return sync("../commands/*.ts", {
    cwd: __dirname,
  }).map(path => join(__dirname, path))
}

export const hasYarn = (() => {
  try {
    execSync("yarn --version", { stdio: "ignore" })
    return pathExistsSync(resolve(ROOT_PATH, "yarn.lock"))
  }
  catch {
    return false
  }
})()

export const hasPnpm = (() => {
  try {
    execSync("pnpm --version", { stdio: "ignore" })
    return pathExistsSync(resolve(ROOT_PATH, "pnpm-lock.yaml"))
  }
  catch {
    return false
  }
})()

export const packageManager = hasPnpm ? "pnpm" : (hasYarn ? "yarn" : "npm")

export const installCommand = `${packageManager} ${packageManager === "pnpm" || packageManager === "yarn" ? "add" : "install"}`

export const unInstallCommand = `${packageManager} ${packageManager === "pnpm" || packageManager === "yarn" ? "remove" : "uninstall"}`

export const currentProjectRoot = join(__dirname, "../../")

export const getRegistry = async () => {
  const { stdout } = await customCommand("npm config get registry", {
    stdio: "pipe",
  })
  return stdout.trim()
}
