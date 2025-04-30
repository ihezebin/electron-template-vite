import { join } from 'path'

import { app, shell, BrowserWindow, ipcMain, screen } from 'electron'
import { autoUpdater, UpdateInfo } from 'electron-updater'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
/**
 * Windows:C:\Users\<Your User Name>\AppData\Roaming\<Your App Name>\logs\
 * macOS:/Users/<Your User Name>/Library/Logs/<Your App Name>/
 * Linux:~/.config/<Your App Name>/logs/
 */
import log from 'electron-log'

import icon from '../../resources/icon.png?asset'
import {
  IPC_UPDATE_DOWNLOAD_FINISH,
  IPC_UPDATE_DOWNLOAD_PROGRESS,
  IPC_UPDATE_ERROR,
  IPC_UPDATE_INSTALL,
  IPC_UPDATE_START,
  IPC_UPDATE_AVAILABLE,
  IPC_TOKEN
} from '../constant'

import { registerIpc } from './ipc'
import { registerShortcut, unregisterShortcut } from './shortcut'

autoUpdater.logger = log
autoUpdater.fullChangelog = true
autoUpdater.autoDownload = false
autoUpdater.autoInstallOnAppQuit = false
autoUpdater.forceDevUpdateConfig = true

autoUpdater.on('update-not-available', (_info) => {
  log.info('You are using the latest version.')
})

const MIN_WIDTH = 900
const MIN_HEIGHT = 670
const MIN_ZOOM_WIDTH = 1400
const MIN_ZOOM_HEIGHT = 940

function createWindow(): BrowserWindow {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: MIN_WIDTH,
    height: MIN_HEIGHT,
    minWidth: MIN_WIDTH,
    minHeight: MIN_HEIGHT,
    show: false,
    autoHideMenuBar: true,
    titleBarStyle: 'hidden',
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false,
      contextIsolation: false,
      nodeIntegration: true,
      webSecurity: false,
      devTools: is.dev // 开发环境可用，生产不可用
    }
  })
  is.dev && mainWindow.webContents.openDevTools()

  const { bounds } = screen.getPrimaryDisplay()
  let zoom = false
  if (bounds.width > 1660) {
    mainWindow.setMinimumSize(MIN_ZOOM_WIDTH, MIN_ZOOM_HEIGHT)
    mainWindow.setSize(MIN_ZOOM_WIDTH, MIN_ZOOM_HEIGHT)
    zoom = true
  }
  registerIpc(mainWindow, zoom)
  registerShortcut()

  if (process.platform == 'darwin') {
    // mainWindow.setWindowButtonPosition({
    //   x: 14,
    //   y: 4
    // })
    mainWindow.setWindowButtonVisibility(false)
  }

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()

    autoUpdater.on('error', (err) => {
      log.error('Update error:', err)
      mainWindow.webContents.send(IPC_UPDATE_ERROR, err?.message)
    })

    autoUpdater.on('update-available', (info: UpdateInfo) => {
      log.info('A new version is available. The application will update now！', info)
      // 接收渲染进程确认更新后开始下载
      ipcMain.on(IPC_UPDATE_START, () => {
        autoUpdater.downloadUpdate().then()
      })
      // 通知渲染进程可以更新, releaseNotes
      mainWindow.webContents.send(IPC_UPDATE_AVAILABLE, info)

      // 通过渲染进程下载进度
      autoUpdater.on('download-progress', (progressObj) => {
        const { percent } = progressObj
        mainWindow.webContents.send(IPC_UPDATE_DOWNLOAD_PROGRESS, percent)
      })

      autoUpdater.on('update-downloaded', (e) => {
        log.info(`Download finished:`, e)
        ipcMain.on(IPC_UPDATE_INSTALL, () => {
          autoUpdater.quitAndInstall()
        })
        mainWindow.webContents.send(IPC_UPDATE_DOWNLOAD_FINISH)
      })
    })

    // 自动更新检查
    autoUpdater.checkForUpdates()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }

  return mainWindow
}

const handleUrl = (url: string, mainWindow: BrowserWindow) => {
  const urlObj = new URL(url)
  console.log(urlObj)
  switch (urlObj.pathname) {
    case '/login/callback': {
      const token = urlObj.searchParams.get('token')
      mainWindow.webContents.send(IPC_TOKEN, token)
      break
    }
  }
}

// 获取单实例锁
const gotTheLock = app.requestSingleInstanceLock()
if (!gotTheLock) {
  // 如果无法获取锁（说明已经有实例在运行），退出应用
  app.quit()
} else {
  app.whenReady().then(() => {
    app.setAsDefaultProtocolClient('electron-template-vite')
    electronApp.setAppUserModelId('electron-template-vite.hezebin.com')
    app.on('browser-window-created', (_, window) => {
      optimizer.watchWindowShortcuts(window)
    })

    const mainWindow = createWindow()
    app.on('second-instance', (_, commandLine) => {
      if (mainWindow) {
        if (mainWindow.isMinimized()) mainWindow.restore()
        mainWindow.focus()
      }

      // 从其他实例接收到的命令行参数中提取协议 URL
      const url = commandLine.find((arg) => arg.startsWith('electron-template-vite://'))
      if (url) {
        handleUrl(url, mainWindow)
      }
    })

    app.on('open-url', (event, url) => {
      event.preventDefault()
      // 从 URL 中提取 token 参数
      handleUrl(url, mainWindow)
    })

    app.on('activate', function () {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })

  app.on('window-all-closed', () => {
    app.quit()
    // if (process.platform !== 'darwin') {
    //   app.quit()
    // }
  })
}

app.on('will-quit', () => {
  unregisterShortcut()
})
