import { useEffect } from 'react'
import { UpdateInfo } from 'electron-updater'
import { notification } from 'antd'

import {
  IPC_UPDATE_AVAILABLE,
  IPC_UPDATE_DOWNLOAD_FINISH,
  IPC_UPDATE_DOWNLOAD_PROGRESS,
  IPC_UPDATE_ERROR,
  IPC_UPDATE_INSTALL,
  IPC_UPDATE_START
} from '../../../constant'
import {
  DownloadFinish,
  DownloadFinishTitle,
  DownloadProgress,
  DownloadProgressTitle,
  NeedUpdateContent,
  NeedUpdateTitle,
  UpdateErrMessage,
  UpdateErrTitle
} from '../components/Updater'

export const useUpdate = () => {
  const notificationKey = 'notification_updater_key'

  const handleDoUpdate = () => {
    window.electron?.ipcRenderer.send(IPC_UPDATE_START)
  }

  const handleQuitAndInstall = () => {
    window.electron?.ipcRenderer.send(IPC_UPDATE_INSTALL)
  }

  useEffect(() => {
    window.electron?.ipcRenderer.on(IPC_UPDATE_AVAILABLE, (_, info: UpdateInfo) => {
      console.log('update info:', info)

      const releaseNoteStr = (info?.releaseNotes as string) || ''
      const releaseNotes = releaseNoteStr.split('\n')

      notification.open({
        key: notificationKey,
        className: 'no-drag',
        message: <NeedUpdateTitle version={info?.version} />,
        description: <NeedUpdateContent releaseNotes={releaseNotes} onClick={handleDoUpdate} />,
        showProgress: true,
        pauseOnHover: true,
        closable: false,
        duration: 60
      })
    })

    window.electron?.ipcRenderer.on(IPC_UPDATE_DOWNLOAD_PROGRESS, (_, percent: number) => {
      notification.open({
        key: notificationKey,
        className: 'no-drag',
        message: <DownloadProgressTitle />,
        description: <DownloadProgress percent={percent} />,
        showProgress: true,
        pauseOnHover: true,
        duration: 0,
        closable: false
      })
    })

    window.electron?.ipcRenderer.on(IPC_UPDATE_DOWNLOAD_FINISH, () => {
      notification.open({
        key: notificationKey,
        className: 'no-drag',
        message: <DownloadFinishTitle />,
        description: <DownloadFinish onClick={handleQuitAndInstall} />,
        showProgress: true,
        pauseOnHover: true,
        duration: 0,
        closable: false
      })
    })

    window.electron?.ipcRenderer.on(IPC_UPDATE_ERROR, (_, err: string) => {
      notification.open({
        key: notificationKey,
        className: 'no-drag',
        message: <UpdateErrTitle />,
        description: <UpdateErrMessage err={err} />,
        showProgress: true,
        pauseOnHover: true,
        duration: 0
      })
    })

    return () => {
      window.electron?.ipcRenderer.removeAllListeners(IPC_UPDATE_AVAILABLE)
      window.electron?.ipcRenderer.removeAllListeners(IPC_UPDATE_DOWNLOAD_PROGRESS)
      window.electron?.ipcRenderer.removeAllListeners(IPC_UPDATE_DOWNLOAD_FINISH)
      window.electron?.ipcRenderer.removeAllListeners(IPC_UPDATE_ERROR)
    }
  }, [])
}
