import { useRef, useState } from 'react'
import { Button, message, notification, Popconfirm } from 'antd'
import { base64urlEncode } from '@hezebin/doraemon'

import { useStorage } from '../../storage'
import { useStore } from '../../store'

import styles from './index.module.scss'
import FeedbackDrawer from './FeedbackDrawer'
import { Card } from './Card'

const Setting = () => {
  const [storage, _, clearAll] = useStorage()
  const { user, clearUser, clearToken, setFeedbackDrawerOpen } = useStore()

  const [lolStartLoading, setLolStartLoading] = useState<boolean>(false)

  const handleToLogin = () => {
    const callback = 'electron-template-vite://electron-template-vite.hezebin.com/login/callback'
    window.shell.openExternal(
      `https://sso.hezebin.com/login?app=${base64urlEncode(
        JSON.stringify({
          callback,
          name: 'electron-template-vite'
        })
      )}`
    )
  }

  const handleLogout = () => {
    clearUser()
    clearToken()
  }

  const ref = useRef<HTMLDivElement>(null)

  return (
    <div className={styles.setting} ref={ref}>
      <div className={styles.title}>
        <span>设置 - electron-template-vite</span>
      </div>
      <div className={styles.cardList} id={'settingCardList'}>
        <Card title={'账号'} tips={user?.username}>
          {user ? (
            <Popconfirm
              getPopupContainer={(node) => node}
              placement={'leftTop'}
              title="确认退出登录？"
              onConfirm={() => {
                handleLogout()
                message.info('已退出登录！').then()
              }}
              okText="确定"
              cancelText="取消">
              <Button type={'link'}>退出登录</Button>
            </Popconfirm>
          ) : (
            <Button type={'link'} onClick={handleToLogin}>
              立即登录
            </Button>
          )}
        </Card>
        <Card title={'问题反馈'}>
          <Button disabled={!user} type={'link'} onClick={() => setFeedbackDrawerOpen(true)}>
            {user ? '反馈' : '账号未登录'}
          </Button>
        </Card>
        <Card title={'清空缓存'}>
          <Popconfirm
            getPopupContainer={(node) => node}
            placement={'leftTop'}
            title="是否清空缓存？"
            description="清空后所有程序设置将恢复为默认!"
            onConfirm={() => {
              clearAll()
              message.success('已清空所有缓存数据！').then()
            }}
            okText="清空"
            cancelText="取消">
            <Button type={'link'}>清空</Button>
          </Popconfirm>
        </Card>
      </div>
      <FeedbackDrawer />
    </div>
  )
}

export default Setting
