import { useEffect } from 'react'

import { useStore } from '../store'
import { IPC_WINDOW_ZOOM } from '../../../constant'

export const useInit = () => {
  const { setZoom, setInitLoading } = useStore()

  useEffect(() => {
    if (!window.electron || !window.electron.ipcRenderer) {
      return
    }
    window.electron?.ipcRenderer?.invoke(IPC_WINDOW_ZOOM).then((zoom) => {
      setZoom(zoom)
    })

    setTimeout(() => {
      setInitLoading(false)
    }, 2000)

    return () => {
      window.electron?.ipcRenderer?.removeAllListeners(IPC_WINDOW_ZOOM)
    }
  }, [])
}
