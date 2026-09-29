import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import App from './App'
import { applyAppFont, setAppFontFamily } from './fonts/appFont'
import type { FontKey } from '../../shared/types'
import './styles.css'

const bootLoader = document.getElementById('boot-loader')
const bootStatus = document.getElementById('boot-status')
const storedFont = localStorage.getItem('electron-template-font') as FontKey | null
const bootFont: FontKey = ['zhuque_fangsong', 'lxgw_wenkai', 'xiaolai'].includes(storedFont || '')
  ? storedFont!
  : 'xiaolai'
let appReady = false
let fontReady = false

setAppFontFamily(bootFont)

function finishBoot() {
  if (appReady && fontReady) bootLoader?.remove()
}

window.addEventListener('electron-template:app-ready', () => {
  appReady = true
  finishBoot()
})

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)

requestAnimationFrame(() => {
  if (bootStatus) bootStatus.textContent = '正在加载界面字体…'
  const loadFont = () => {
    void applyAppFont(bootFont)
      .then(() => {
        if (bootStatus) bootStatus.textContent = '即将完成…'
      })
      .catch(() => {
        if (bootStatus) bootStatus.textContent = '已使用系统字体…'
      })
      .finally(() => {
        fontReady = true
        finishBoot()
      })
  }
  if ('requestIdleCallback' in window) window.requestIdleCallback(loadFont, { timeout: 1500 })
  else setTimeout(loadFont, 0)
})
