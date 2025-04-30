import { ENV_DEV, getLocalItem, setLocalItem } from '@hezebin/doraemon'
import { create } from 'zustand'
import { mountStoreDevtool } from 'simple-zustand-devtools'

export interface Storage {
  [key: string]: any
}

const defaultStorage: Storage = {
  test: 'test'
}

export const useStorage: () => [Storage, (key: string, value: any) => void, () => void] = () => {
  const { setKv: setStorage, clearAll, ...storage } = useStorageState()

  return [storage, setStorage, clearAll]
}

interface IStorage extends Storage {
  setKv: (key: string, value: any) => void
  clearAll: () => void
}

const KEY_STORAGE = 'storage'

const useStorageState = create<IStorage>((set) => ({
  ...defaultStorage,
  ...(getLocalItem(KEY_STORAGE) || {}),
  setKv: (key, value) => {
    set((state) => {
      setLocalItem(KEY_STORAGE, { ...state, [key]: value })
      return { ...state, [key]: value }
    })
  },
  clearAll: () => {
    set(() => {
      setLocalItem(KEY_STORAGE, defaultStorage)
      return defaultStorage
    })
  }
}))

if (process.env.NODE_ENV === ENV_DEV) {
  mountStoreDevtool('Storage', useStorageState)
}
