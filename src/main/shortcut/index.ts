import { globalShortcut } from 'electron'

export const registerShortcut = () => {}

export const unregisterShortcut = () => {
  globalShortcut.unregisterAll()
}
