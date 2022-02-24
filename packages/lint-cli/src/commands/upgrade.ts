import chalk from 'chalk';
import { failSpinner, startSpinner, succeedSpiner } from './../utils/spinner';
const action = async (projectName, cmdArgs) => {
    try {
        startSpinner(`正在更新。。。`)

        succeedSpiner(chalk.green('更新成功!'))

    } catch (err) {
        failSpinner(err)
        return
    }
}

export default {
    command: 'upgrade',
    description: '升级lint规范',
    action,
}