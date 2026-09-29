export type ThemeMode = 'system' | 'light' | 'dark'
export type FontKey = 'zhuque_fangsong' | 'lxgw_wenkai' | 'xiaolai'

export interface AppSettings {
  theme: ThemeMode
  font: FontKey
}

export interface UpdateInfo {
  currentVersion: string
  version?: string
  releaseName?: string
  releaseNotes?: string
  available: boolean
}

export interface UpdateProgress {
  percent: number
  transferred: number
  total: number
  bytesPerSecond: number
}

export interface TemplateAPI {
  platform: NodeJS.Platform
  getSettings(): Promise<AppSettings>
  updateSettings(patch: Partial<AppSettings>): Promise<AppSettings>
  checkForUpdates(): Promise<UpdateInfo>
  downloadUpdate(): Promise<void>
  installUpdate(): Promise<void>
  onUpdateProgress(listener: (progress: UpdateProgress) => void): () => void
}
