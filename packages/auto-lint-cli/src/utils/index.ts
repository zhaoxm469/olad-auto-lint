import { execSync } from "node:child_process"
import { sync } from "globby"
import { resolve, join } from "node:path/posix"
import { pathExistsSync } from "fs-extra"
import { ROOT_PATH } from "../config/const"
import { command } from "execa"

export const getCommandPaths = () => {
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
  const { stdout } = await command("npm config get registry")
  return stdout.trim()
}
