import chalk from 'chalk';
import { failSpinner, succeedSpiner, startSpinner } from './../utils/spinner';
const action = async (projectName, cmdArgs) => {
    try {
        startSpinner(`正在安装git-hooks依赖`)
        
        succeedSpiner(chalk.green('git-hooks初始化完成!'))
    } catch (err) {
        failSpinner(err)
        return
    }
}

export default {
    command: 'init-git-hooks',
    description: '初始化git-hooks规范',
    action,
}