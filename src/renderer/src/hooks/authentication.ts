import { useEffect } from 'react'
import { message } from 'antd'
import dayjs from 'dayjs'

import { useStore } from '../store'
import { IPC_TOKEN, IPC_WINDOW_FOCUS } from '../../../constant'
import { api } from '../api'

export const useAuthentication = () => {
  const { token, setToken, clearToken, setUser, clearUser, tokenTime, setTokenTime, setAuthDone } =
    useStore()

  useEffect(() => {
    if (!token) {
      setAuthDone(true)
      return
    }
    api
      .get('/user-center/user/check_token', { token })
      .then(({ code, message: msg, data, status }) => {
        if (status == 401) {
          clearUser()
          clearToken()
          message.error(msg).then()
          return
        }
        if (status !== 200 || code !== 0) {
          console.error('Authorization Failed:', msg)
          return
        }
        if (code === 0 && data?.user) {
          setUser(data.user)
        }
      })
      .finally(() => {
        setAuthDone(true)
        window.electron?.ipcRenderer.send(IPC_WINDOW_FOCUS)
      })
  }, [token, tokenTime])

  useEffect(() => {
    window.electron?.ipcRenderer.on(IPC_TOKEN, (_, newToken: string) => {
      setAuthDone(false)
      setToken(newToken)
      setTokenTime(dayjs().format())
    })

    return () => {
      window.electron?.ipcRenderer.removeAllListeners(IPC_TOKEN)
    }
  }, [])
}
