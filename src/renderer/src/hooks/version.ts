import { useEffect } from 'react'
import axios from 'axios'
import { notification } from 'antd'

import { useStore } from '../store'
import packageJson from '../../../../package.json'

export const useVersionCheck = () => {
  const { setVersionNotAllowed } = useStore()

  useEffect(() => {
    axios
      .get('http://electron-template-vite.hezebin.com/api/config/info')
      .then(({ data: { data } }) => {
        if (data?.min_version) {
          try {
            const currentVersions = packageJson.version.split('.').map(Number)
            const allowedVersions = data.min_version.split('.').map(Number)
            const maxLength = Math.max(currentVersions.length, allowedVersions.length)
            for (let i = 0; i < maxLength; i++) {
              const currentVersion = currentVersions[i] || 0 // 如果当前版本号部分不存在，默认为 0
              const allowedVersion = allowedVersions[i] || 0 // 如果允许版本号部分不存在，默认为 0

              console.log(currentVersion, allowedVersion)

              if (currentVersion > allowedVersion) {
                setVersionNotAllowed(false)
                break
              } else if (currentVersion === allowedVersion) {
                console.log('continue')
                continue
              } else {
                console.log('版本过低，强制更新')
                setVersionNotAllowed(true)
                return
              }
            }
          } catch (err) {
            console.error(err)
          }
        }

        console.log(data.notifications)
        // 是否是数组
        if (Array.isArray(data.notifications)) {
          data.notifications.forEach((item: string, index: number) => {
            notification.open({
              key: `notification_${index}`,
              className: 'no-drag',
              message: '通知',
              type: 'info',
              description: item,
              showProgress: true,
              pauseOnHover: true,
              duration: 60
            })
          })
        }
      })
      .catch()
  }, [])
}
