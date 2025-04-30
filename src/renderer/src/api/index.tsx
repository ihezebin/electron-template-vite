import { ENV_PROD, getLocalItem, KEY_TOKEN, newApi, setLocalItem } from '@hezebin/doraemon'
import { message, notification } from 'antd'

const baseURL = 'http://api.hezebin.com'
const timeout = process.env.NODE_ENV === ENV_PROD ? 10000 : 0

export const api = newApi({
  baseURL: baseURL,
  timeout: timeout,
  withToken: () => {
    return getLocalItem(KEY_TOKEN)
  },
  onRequest: (req) => {
    return req
  },
  onResponse: (res) => {
    return res
  },
  onError: (res) => {
    console.log('onError')
    if (res.status === 401) {
      setLocalItem(KEY_TOKEN)
    } else {
      message.error(res?.message).then()
    }
    return res
  },
  onAbnormal: (err, code, message) => {
    console.error('onAbnormal', err, code, message)
    // 无响应错误处理
    notification.error({
      message: message,
      description: <span style={{ color: 'gray', fontSize: '13px' }}>{`错误码: ${code}`}</span>
    })
    return err
  }
})
