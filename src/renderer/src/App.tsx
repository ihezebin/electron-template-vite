import { useCallback, useEffect, useMemo, useState } from 'react'
import { App as AntdApp, ConfigProvider, theme as antdTheme } from 'antd'
import zhCN from 'antd/locale/zh_CN'
import { Navigate, Route, Routes } from 'react-router-dom'
import type { AppSettings, UpdateInfo } from '../../shared/types'
import { SettingsDrawer } from './components/SettingsDrawer'
import { UpdateModal } from './components/UpdateModal'
import { applyAppFont } from './fonts/appFont'
import { SidebarLayout } from './layouts/sidebar/SidebarLayout'
import { TopbarLayout } from './layouts/topbar/TopbarLayout'

const initialSettings: AppSettings = { theme: 'system', font: 'xiaolai' }

export default function App() {
  const [settings, setSettings] = useState<AppSettings>(initialSettings)
  const [preferencesReady, setPreferencesReady] = useState(false)
  const [systemDark, setSystemDark] = useState(matchMedia('(prefers-color-scheme: dark)').matches)
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [updateOpen, setUpdateOpen] = useState(false)
  const [updateInfo, setUpdateInfo] = useState<UpdateInfo>()
  const [updateError, setUpdateError] = useState<string>()
  const [checking, setChecking] = useState(false)
  const [downloading, setDownloading] = useState(false)
  const [downloaded, setDownloaded] = useState(false)
  const [progress, setProgress] = useState(0)

  const dark = settings.theme === 'dark' || (settings.theme === 'system' && systemDark)

  useEffect(() => {
    const query = matchMedia('(prefers-color-scheme: dark)')
    const onChange = (event: MediaQueryListEvent) => setSystemDark(event.matches)
    query.addEventListener('change', onChange)
    window.templateAPI.getSettings().then(async (value) => {
      setSettings(value)
      localStorage.setItem('electron-template-theme', value.theme)
      localStorage.setItem('electron-template-font', value.font)
      await applyAppFont(value.font).catch(() => undefined)
      setPreferencesReady(true)
    })
    const removeProgress = window.templateAPI.onUpdateProgress((value) =>
      setProgress(Math.round(value.percent))
    )
    return () => {
      query.removeEventListener('change', onChange)
      removeProgress()
    }
  }, [])

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light'
  }, [dark])

  useEffect(() => {
    if (!preferencesReady) return
    requestAnimationFrame(() => window.dispatchEvent(new Event('electron-template:app-ready')))
  }, [preferencesReady])

  const updateSettings = useCallback(async (patch: Partial<AppSettings>) => {
    const next = await window.templateAPI.updateSettings(patch)
    setSettings(next)
    localStorage.setItem('electron-template-theme', next.theme)
    localStorage.setItem('electron-template-font', next.font)
    if (patch.font) await applyAppFont(next.font)
  }, [])

  const checkForUpdates = useCallback(async () => {
    setChecking(true)
    setUpdateError(undefined)
    try {
      setUpdateInfo(await window.templateAPI.checkForUpdates())
    } catch (error) {
      setUpdateError((error as Error).message)
    } finally {
      setChecking(false)
    }
  }, [])

  const openUpdates = useCallback(() => {
    setUpdateOpen(true)
    void checkForUpdates()
  }, [checkForUpdates])

  const contextValue = useMemo(() => ({ dark }), [dark])

  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        algorithm: dark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
        token: { colorPrimary: '#1677ff', borderRadius: 10, fontFamily: 'var(--app-font-family)' }
      }}
    >
      <AntdApp>
        <div
          className={settingsOpen ? 'settings-open' : undefined}
          data-color-mode={contextValue.dark ? 'dark' : 'light'}
        >
          <Routes>
            <Route
              path="/topbar"
              element={<TopbarLayout onOpenSettings={() => setSettingsOpen(true)} />}
            />
            <Route
              path="/sidebar"
              element={<SidebarLayout onOpenSettings={() => setSettingsOpen(true)} />}
            />
            <Route path="*" element={<Navigate to="/topbar" replace />} />
          </Routes>
          <button className="update-entry" type="button" onClick={openUpdates}>
            检查更新
          </button>
          <SettingsDrawer
            open={settingsOpen}
            settings={settings}
            onClose={() => setSettingsOpen(false)}
            onUpdate={updateSettings}
          />
          <UpdateModal
            open={updateOpen}
            checking={checking}
            downloading={downloading}
            downloaded={downloaded}
            progress={progress}
            info={updateInfo}
            error={updateError}
            onClose={() => setUpdateOpen(false)}
            onCheck={() => void checkForUpdates()}
            onDownload={() => {
              setDownloading(true)
              setUpdateError(undefined)
              window.templateAPI
                .downloadUpdate()
                .then(() => setDownloaded(true))
                .catch((error: Error) => setUpdateError(error.message))
                .finally(() => setDownloading(false))
            }}
            onInstall={() => void window.templateAPI.installUpdate()}
          />
        </div>
      </AntdApp>
    </ConfigProvider>
  )
}
