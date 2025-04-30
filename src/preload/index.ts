import * as path from 'node:path'

import { contextBridge, shell } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {}

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
    contextBridge.exposeInMainWorld('platform', process.platform)
    contextBridge.exposeInMainWorld('__dirname', __dirname)
    contextBridge.exposeInMainWorld('shell', shell)
    contextBridge.exposeInMainWorld('dev', process.env.NODE_ENV === 'development')
  } catch (error) {
    console.error(error)
  }
} else {
  // @ts-ignore (define in dts)
  window.electron = electronAPI
  // @ts-ignore (define in dts)
  window.api = api
  // @ts-ignore (define in dts)
  window.platform = process.platform
  // @ts-ignore (define in dts)
  window.__rendererDir = path.join(__dirname, '../renderer')
  // @ts-ignore (define in dts)
  window.shell = shell
  // @ts-ignore (define in dts)
  window.dev = process.env.NODE_ENV === 'development'
}
