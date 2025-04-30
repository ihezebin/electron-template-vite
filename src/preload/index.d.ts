import { ElectronAPI } from '@electron-toolkit/preload'

declare global {
  interface Window {
    electron: ElectronAPI
    api: unknown
    platform: 'darwin' | 'linux' | 'win32'
    __rendererDir: string
    shell: Electron.Shell
    dev: boolean
  }
}
