import { useEffect, useState } from 'react'
import { BorderOutlined, CloseOutlined, CopyOutlined, MinusOutlined } from '@ant-design/icons'

export function WindowTitleBar() {
  const isWindows = window.templateAPI.platform === 'win32'
  const [maximized, setMaximized] = useState(false)

  useEffect(() => {
    if (!isWindows) return
    let active = true
    let changed = false
    const unsubscribe = window.templateAPI.onWindowMaximizedChanged((value) => {
      changed = true
      setMaximized(value)
    })
    void window.templateAPI.isWindowMaximized().then((value) => {
      if (active && !changed) setMaximized(value)
    })
    return () => {
      active = false
      unsubscribe()
    }
  }, [isWindows])

  return (
    <header className="window-dragbar">
      <span className="window-title">Electron Vite Template</span>
      {isWindows && (
        <div className="window-controls" role="group" aria-label="窗口控制">
          <button
            type="button"
            className="window-control"
            aria-label="最小化"
            title="最小化"
            onClick={() => window.templateAPI.minimizeWindow()}
          >
            <MinusOutlined />
          </button>
          <button
            type="button"
            className="window-control"
            aria-label={maximized ? '还原' : '最大化'}
            title={maximized ? '还原' : '最大化'}
            onClick={() => window.templateAPI.toggleMaximizeWindow()}
          >
            {maximized ? <CopyOutlined /> : <BorderOutlined />}
          </button>
          <button
            type="button"
            className="window-control window-control-close"
            aria-label="关闭窗口"
            title="关闭窗口"
            onClick={() => window.templateAPI.closeWindow()}
          >
            <CloseOutlined />
          </button>
        </div>
      )}
    </header>
  )
}
