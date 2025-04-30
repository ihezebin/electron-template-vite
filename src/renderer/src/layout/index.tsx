import { Outlet, useNavigate } from 'react-router-dom'
import { Button, message, Modal, notification, Spin } from 'antd'
import classNames from 'classnames'
import { useEffect } from 'react'

import { TabKey, useStore } from '../store'
import Logo from '../assets/logo/ezreal.png'
import IconFont from '../components/Icon'
import { useInit } from '../hooks/init'
import { useUpdate } from '../hooks/update'
import { useVersionCheck } from '../hooks/version'
import { useTracking } from '../hooks/tracking'
import { useAuthentication } from '../hooks/authentication'

import styles from './index.module.scss'
import Search from './Search'
import WindowOperate from './WindowOperate'
import { tabList } from './menu.config'

const GlobalLayout = () => {
  const {
    tabKey,
    setTabKey,
    themeDark,
    setThemeDark,
    zoom,
    versionNotAllowed,
    setFeedbackDrawerOpen,
    user,
    initLoading
  } = useStore()

  useTracking()
  // useVersionCheck()
  useInit()
  useUpdate()
  useAuthentication()

  const navigate = useNavigate()
  const [modal, contextHolder] = Modal.useModal()
  const handleTabClick = (key: TabKey) => {
    if (key === 'test') {
      modal
        .confirm({
          title: '注意',
          content: '即将切换到测试tab，是否继续？'
        })
        .then(
          (confirmed) => {
            confirmed && setTabKey(key)
          },
          () => {}
        )
      return
    }
    setTabKey(key)
  }

  useEffect(() => {
    const path = `/${tabKey}`.replaceAll('//', '/')
    console.log(tabKey, path)
    navigate(path)
  }, [tabKey])

  const handleLogoClick = () => {
    notification.open({
      type: 'success',
      message: 'electron-template-vite',
      description: 'electron-template-vite',
      duration: 2,
      closable: true,
      className: 'no-drag'
    })
  }

  return (
    <div className={styles.layout}>
      <div className={styles.menuWrapper} style={{ zoom: zoom ? 1.3 : 1 }}>
        {/*logo*/}
        <img src={Logo} alt="ez" className={styles.logo} onClick={handleLogoClick} />
        <div className={styles.menuTop}>
          {/*tab*/}
          {tabList.map((tab) => (
            <div
              onClick={() => handleTabClick(tab.key)}
              key={tab.key}
              className={classNames(styles.menuItem, {
                [styles.menuItemActive]: tabKey.replace('/', '').startsWith(tab.key)
              })}>
              {tab.icon}
              {tab.title}
            </div>
          ))}
          {/*feedback*/}
          <div
            className={classNames(styles.menuItem)}
            onClick={() => {
              console.log(user)
              if (user) {
                setFeedbackDrawerOpen(true)
              } else {
                message.warning('请先登录账号！').then()
              }
              setTabKey('setting')
            }}>
            <IconFont type={'feedback1'} />
            反馈
          </div>
          {/*theme*/}
          <div
            className={classNames(styles.menuItem, styles.menuItemTheme)}
            onClick={() => setThemeDark(!themeDark)}>
            {themeDark ? <IconFont type={'moon'} /> : <IconFont type={'sun'} />}
          </div>
        </div>
        <div className={styles.menuBottom}>
          {/*Setting*/}
          <div
            className={classNames(styles.menuItem, styles.menuItemSettings)}
            onClick={() => setTabKey('setting')}>
            <IconFont type={'setting4'} />
          </div>
        </div>
      </div>
      <div className={styles.rightWrapper} id={'layoutRight'} style={{ zoom: zoom ? 1.2 : 1 }}>
        <div className={styles.headerWrapper}>
          <Search />
          <WindowOperate />
        </div>
        <div className={styles.contentWrapper}>
          {versionNotAllowed && tabKey != 'about' && (
            <div className={styles.err}>当前版本过低，不再允许使用，请升级至最新版本！</div>
          )}
          {contextHolder}
          {!versionNotAllowed &&
            (tabKey == 'about' || tabKey == 'setting' || !initLoading ? (
              <Outlet />
            ) : (
              <div className={'loading'}>
                <Spin />
                {'加载中...'}
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default GlobalLayout
