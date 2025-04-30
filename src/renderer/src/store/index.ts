import { create } from 'zustand'
import { mountStoreDevtool } from 'simple-zustand-devtools'
import { ENV_DEV, getLocalItem, setLocalItem } from '@hezebin/doraemon'

import { IUser } from '../model'

export type TabKey = 'test' | 'about' | 'setting' | string

export interface IStore {
  // 是否处于初始化状态
  initLoading: boolean
  setInitLoading: (loading: boolean) => void
  // 用户数据
  user?: IUser
  setUser: (user: IUser) => void
  clearUser: () => void
  token: string
  setToken: (token: string) => void
  tokenTime: string
  setTokenTime: (tokenTime: string) => void
  clearToken: () => void
  // 主题
  themeDark: boolean
  setThemeDark: (dark: boolean) => void
  // 菜单 tab
  tabKey: TabKey
  setTabKey: (key: TabKey) => void
  // 是否处于高分辨率屏幕下，控制缩放
  zoom: boolean
  setZoom: (zoom: boolean) => void
  // 当前版本是否可用
  versionNotAllowed?: boolean
  setVersionNotAllowed: (allowed?: boolean) => void
  feedbackDrawerOpen?: boolean
  setFeedbackDrawerOpen: (open: boolean) => void
  authDone?: boolean
  setAuthDone: (done?: boolean) => void
  searchKey?: string
  setSearchKey: (key?: string) => void
}

const KEY_THEME = 'theme'
const THEME_LIGHT = 'light'
const THEME_DARK = 'dark'
const THEME_DEFAULT = THEME_LIGHT

const KEY_USER = 'user'
const KEY_TOKEN = 'token'
const KEY_TOKEN_TIME = 'token_time'

export const useStore = create<IStore>((set) => ({
  initLoading: true,
  setInitLoading: (loading: boolean) => set((state) => ({ ...state, initLoading: loading })),
  user: getLocalItem(KEY_USER),
  setUser: (user) => {
    set((state) => {
      const data = { ...state, user: { ...state.user, ...user } }
      setLocalItem(KEY_USER, data.user)
      return data
    })
  },
  clearUser: () =>
    set((state) => {
      setLocalItem(KEY_USER)
      return { ...state, user: undefined }
    }),
  token: getLocalItem(KEY_TOKEN),
  setToken: (token) =>
    set((state) => {
      setLocalItem(KEY_TOKEN, token)
      return { ...state, token }
    }),
  clearToken: () =>
    set((state) => {
      setLocalItem(KEY_TOKEN)
      return { ...state, token: '' }
    }),
  tokenTime: getLocalItem(KEY_TOKEN_TIME),
  setTokenTime: (tokenTime) =>
    set((state) => {
      setLocalItem(KEY_TOKEN_TIME, tokenTime)
      return { ...state, tokenTime }
    }),
  themeDark: (() => {
    document.documentElement.setAttribute(KEY_THEME, THEME_DEFAULT)
    return false
  })(),
  setThemeDark: (dark: boolean) => {
    set((state) => ({ ...state, themeDark: dark }))
    document.documentElement.setAttribute(KEY_THEME, dark ? THEME_DARK : THEME_LIGHT)
  },
  setVersionNotAllowed: (allowed) => set((state) => ({ ...state, versionNotAllowed: allowed })),
  zoom: false,
  setZoom: (zoom) => set((state) => ({ ...state, zoom })),
  tabKey: 'champion_history',
  setTabKey: (key) => set((state) => ({ ...state, tabKey: key })),
  setFeedbackDrawerOpen: (open: boolean) =>
    set((state) => ({ ...state, feedbackDrawerOpen: open })),
  setAuthDone: (done) => set((state) => ({ ...state, authDone: !!done })),
  setSearchKey: (key?: string) => set((state) => ({ ...state, searchKey: key }))
}))

// export const unsubscribeStore = useStore.subscribe((_: IStore) => {})

if (process.env.NODE_ENV === ENV_DEV) {
  mountStoreDevtool('Store', useStore)
}
