import { BrowserWindow, ipcMain } from 'electron'

import {
  IPC_WINDOW_CLOSE,
  IPC_WINDOW_FOCUS,
  IPC_PING,
  IPC_WINDOW_FULLSCREEN,
  IPC_WINDOW_MIN,
  IPC_WINDOW_ZOOM
} from '../../constant'

export const registerIpc = (mainWindow: BrowserWindow, zoom: boolean) => {
  ipcMain.on(IPC_PING, () => console.log('pong'))

  ipcMain.on(IPC_WINDOW_MIN, () => mainWindow.minimize())
  ipcMain.on(IPC_WINDOW_FULLSCREEN, () => {
    if (mainWindow.isMaximized()) {
      mainWindow.unmaximize()
    } else {
      mainWindow.maximize()
    }
  })
  ipcMain.on(IPC_WINDOW_CLOSE, () => mainWindow.close())

  ipcMain.on(IPC_WINDOW_FOCUS, () => {
    if (mainWindow.isMinimized()) mainWindow.restore()
    mainWindow.focus()
  })

  ipcMain.handle(IPC_WINDOW_ZOOM, () => {
    return zoom
  })
}
export default registerIpc
