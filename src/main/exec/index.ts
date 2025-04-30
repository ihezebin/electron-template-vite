import { ChildProcess, execFile } from 'node:child_process'

import log from 'electron-log'

import lolscmMac from '../../../resources/lolscm?asset&asarUnpack'
import lolscmWin from '../../../resources/lolscm.exe?asset&asarUnpack'

let lolscmChild: ChildProcess
export const execLolscmChild = (...args: string[]) => {
  // 执行程序
  if (process.platform == 'darwin') {
    log.log('程序路径:', lolscmMac)
    lolscmChild = execFile(`${lolscmMac}`, args, (_error, stdout, stderr) => {
      if (stderr) {
        log.error(`lolscmChild stderr: ${stderr}`)
        return
      }
      log.log(`lolscmChild stdout: ${stdout}`)
    })
  } else if (process.platform == 'win32') {
    log.log('程序路径:', lolscmWin)
    lolscmChild = execFile(`${lolscmWin}`, args, (_error, stdout, stderr) => {
      if (stderr) {
        log.error(`lolscmChild stderr: ${stderr}`)
        return
      }
      log.log(`lolscmChild stdout: ${stdout}`)
    })
  } else {
    log.error('不支持的平台')
  }
  log.info('子程序PID:', lolscmChild?.pid || '无')
}

export const killLolscmChild = (): boolean => {
  if (lolscmChild) {
    log.info('尝试杀死子进程 PID:', lolscmChild.pid)
    const killed = lolscmChild.kill()
    if (killed) {
      log.info('lolscm killed')
    } else {
      log.error('无法杀死 lolscm 进程')
    }

    return killed
  }

  return true
}

export const restartLolscmChild = (...args: string[]) => {
  killLolscmChild()
  execLolscmChild(...args)
}
