import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import { ConfigProvider, message, notification } from 'antd'
import zhCN from 'antd/locale/zh_CN'

import Router from './router'
import './assets/css/index.scss'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

const content = `
 _                      _     _
| |                    | |   (_)
| | _   ____ _____ ____| | _  _ ____
| || \\ / _  |___  ) _  ) || \\| |  _ \\
| | | ( (/ / / __( (/ /| |_) ) | | | |
|_| |_|\\____|_____)____)____/|_|_| |_|
        `
console.log(content)

message.config({
  getContainer: () => document.getElementById('layoutRight') as HTMLElement,
  maxCount: 1,
  top: 50
})
notification.config({
  getContainer: () => document.getElementById('layoutRight') as HTMLElement,
  top: 50
})

root.render(
  <ConfigProvider locale={zhCN}>
    <HashRouter>
      <Router />
    </HashRouter>
  </ConfigProvider>
)
