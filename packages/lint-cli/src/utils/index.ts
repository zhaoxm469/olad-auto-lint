import { sync } from "globby"
import { join } from "path/posix"

export const getCommandPaths = () => {
    return sync('../commands/*.js', { cwd: __dirname, deep: 1 }).map(path => join(__dirname, path))
}
