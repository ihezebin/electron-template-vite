import { app, BrowserWindow, ipcMain, Menu, nativeImage, nativeTheme, Tray } from 'electron'
import { join } from 'node:path'
import Store from 'electron-store'
import updater from 'electron-updater'
import type { AppSettings, FontKey, ThemeMode, UpdateInfo } from '../shared/types'

const { autoUpdater } = updater

const validThemes: ThemeMode[] = ['system', 'light', 'dark']
const validFonts: FontKey[] = ['zhuque_fangsong', 'lxgw_wenkai', 'xiaolai']
const store = new Store<AppSettings>({ defaults: { theme: 'system', font: 'xiaolai' } })

let mainWindow: BrowserWindow | null = null
let tray: Tray | null = null
let isQuitting = false

function settings(): AppSettings {
  const theme = store.get('theme')
  const font = store.get('font')
  return {
    theme: validThemes.includes(theme) ? theme : 'system',
    font: validFonts.includes(font) ? font : 'xiaolai'
  }
}

function createAppIcon(size = 512) {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 64 64"><rect width="64" height="64" rx="17" fill="#1677ff"/><path d="M18 20h28v24H18z" fill="none" stroke="white" stroke-width="4"/><path d="M18 28h28M28 28v16" stroke="white" stroke-width="4"/></svg>`
  return nativeImage.createFromDataURL(
    `data:image/svg+xml;base64,${Buffer.from(svg).toString('base64')}`
  )
}

function createTrayIcon() {
  const image = createAppIcon(process.platform === 'darwin' ? 18 : 32).resize({
    width: process.platform === 'darwin' ? 18 : 32,
    height: process.platform === 'darwin' ? 18 : 32
  })
  if (process.platform === 'darwin') image.setTemplateImage(true)
  return image
}

function showMainWindow() {
  if (!mainWindow || mainWindow.isDestroyed()) createWindow()
  if (mainWindow?.isMinimized()) mainWindow.restore()
  mainWindow?.show()
  mainWindow?.focus()
}

function createTray() {
  tray = new Tray(createTrayIcon())
  tray.setToolTip('Electron Vite Template')
  tray.setContextMenu(
    Menu.buildFromTemplate([
      { label: '打开主窗口', click: showMainWindow },
      { type: 'separator' },
      {
        label: '示例操作',
        submenu: [
          { label: '显示示例一', click: () => mainWindow?.webContents.send('tray:example', 'one') },
          { label: '显示示例二', click: () => mainWindow?.webContents.send('tray:example', 'two') }
        ]
      },
      { type: 'separator' },
      {
        label: '退出',
        click: () => {
          isQuitting = true
          app.quit()
        }
      }
    ])
  )
  tray.on('click', showMainWindow)
}

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1120,
    height: 760,
    minWidth: 900,
    minHeight: 620,
    show: false,
    title: 'Electron Vite Template',
    titleBarStyle: process.platform === 'darwin' ? 'hiddenInset' : 'hidden',
    trafficLightPosition: { x: 18, y: 18 },
    backgroundColor: nativeTheme.shouldUseDarkColors ? '#0f172a' : '#f5f7fb',
    icon: createAppIcon(),
    webPreferences: {
      preload: join(__dirname, '../preload/index.cjs'),
      sandbox: true,
      contextIsolation: true,
      nodeIntegration: false
    }
  })

  mainWindow.once('ready-to-show', () => mainWindow?.show())
  mainWindow.on('close', (event) => {
    if (tray && !isQuitting) {
      event.preventDefault()
      mainWindow?.hide()
    }
  })
  mainWindow.webContents.setWindowOpenHandler(() => ({ action: 'deny' }))
  if (process.env.ELECTRON_RENDERER_URL) mainWindow.loadURL(process.env.ELECTRON_RENDERER_URL)
  else mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
}

function updateResult(info?: {
  version?: string
  releaseName?: string | null
  releaseNotes?: unknown
}): UpdateInfo {
  return {
    currentVersion: app.getVersion(),
    version: info?.version,
    releaseName: info?.releaseName || undefined,
    releaseNotes: typeof info?.releaseNotes === 'string' ? info.releaseNotes : undefined,
    available: Boolean(info?.version && info.version !== app.getVersion())
  }
}

app.whenReady().then(() => {
  Menu.setApplicationMenu(null)
  nativeTheme.themeSource = settings().theme
  autoUpdater.autoDownload = false
  autoUpdater.autoInstallOnAppQuit = true
  autoUpdater.on('download-progress', (progress) => {
    mainWindow?.webContents.send('update:progress', progress)
  })
  createWindow()
  createTray()
  app.on('activate', showMainWindow)
})

app.on('before-quit', () => {
  isQuitting = true
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin' && !tray) app.quit()
})

ipcMain.handle('settings:get', () => settings())
ipcMain.handle('settings:update', (_event, patch: Partial<AppSettings>) => {
  if (patch.theme && validThemes.includes(patch.theme)) {
    store.set('theme', patch.theme)
    nativeTheme.themeSource = patch.theme
  }
  if (patch.font && validFonts.includes(patch.font)) store.set('font', patch.font)
  return settings()
})

ipcMain.handle('update:check', async () => {
  if (!app.isPackaged) return updateResult()
  const result = await autoUpdater.checkForUpdates()
  return updateResult(result?.updateInfo)
})
ipcMain.handle('update:download', async () => {
  if (!app.isPackaged) throw new Error('开发环境不下载更新，请在打包应用中测试。')
  await autoUpdater.downloadUpdate()
})
ipcMain.handle('update:install', () => {
  if (!app.isPackaged) throw new Error('开发环境不能安装更新。')
  isQuitting = true
  autoUpdater.quitAndInstall(false, true)
})
