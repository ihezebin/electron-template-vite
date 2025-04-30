import { CloseCircleFilled, MinusCircleFilled } from '@ant-design/icons'
import { Button } from 'antd'

import { IPC_WINDOW_CLOSE, IPC_WINDOW_MIN } from '../../../../constant'

import styles from './index.module.scss'

const WindowOperate = () => {
  // const {} = useStore()

  return (
    <div className={styles.windowOperate}>
      {window?.dev && (
        <Button type={'link'} onClick={() => {}}>
          测试
        </Button>
      )}
      <MinusCircleFilled
        className={styles.minimize}
        onClick={() => window.electron.ipcRenderer.send(IPC_WINDOW_MIN)}
      />
      <CloseCircleFilled
        className={styles.close}
        onClick={() => window.electron.ipcRenderer.send(IPC_WINDOW_CLOSE)}
      />
    </div>
  )
}

export default WindowOperate
