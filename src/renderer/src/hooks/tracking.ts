import { useEffect } from 'react'

import { api } from '../api'
import { useStore } from '../store'

export const useTracking = () => {
  const { user, authDone } = useStore()

  useEffect(() => {
    // axios.get('https://api.ipify.org?format=json').then(({ data: ipData }) => {
    // })
    if (!authDone || window?.dev) return

    const data = {
      type: 'ELECTRON_TEMPLATE_VITE_OPEN',
      ip_address: '', // 自动填充
      time: new Date().getTime(),
      device: window.platform,
      user_id: user?.id,
      custom_params: {
        username: user?.username
      }
    }

    const base64Encoded = btoa(JSON.stringify(data))

    api
      .post('/tracking/report', {
        data: base64Encoded
      })
      .then(() => {
        console.log('tracking success:', data)
      })
      .catch((err) => {
        console.warn('tracking err:', err)
      })
  }, [JSON.stringify(user), authDone])
}
