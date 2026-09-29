import { contextBridge, ipcRenderer } from 'electron'
import type { AppSettings, TemplateAPI, UpdateProgress } from '../shared/types'

const api: TemplateAPI = {
  platform: process.platform,
  getSettings: () => ipcRenderer.invoke('settings:get'),
  updateSettings: (patch: Partial<AppSettings>) => ipcRenderer.invoke('settings:update', patch),
  checkForUpdates: () => ipcRenderer.invoke('update:check'),
  downloadUpdate: () => ipcRenderer.invoke('update:download'),
  installUpdate: () => ipcRenderer.invoke('update:install'),
  onUpdateProgress: (listener: (progress: UpdateProgress) => void) => {
    const handler = (_event: Electron.IpcRendererEvent, progress: UpdateProgress) =>
      listener(progress)
    ipcRenderer.on('update:progress', handler)
    return () => ipcRenderer.removeListener('update:progress', handler)
  }
}

contextBridge.exposeInMainWorld('templateAPI', api)
