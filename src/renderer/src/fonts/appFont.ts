import type { FontKey } from '../../../shared/types'

export interface AppFontOption {
  key: FontKey
  label: string
  description: string
  preview: string
  family: string
  load: () => Promise<unknown>
}

export const APP_FONT_OPTIONS: AppFontOption[] = [
  {
    key: 'zhuque_fangsong',
    label: '朱雀仿宋',
    description: '端正雅致，适合阅读型界面',
    preview: '清风明月，万物可期',
    family: '"Zhuque Fangsong", "STFangsong", "FangSong", serif',
    load: () => import('@free-fonts/zhuque-fangsong/zhuque-fangsong.css')
  },
  {
    key: 'lxgw_wenkai',
    label: '霞鹜文楷',
    description: '清晰自然，适合轻松的长文本',
    preview: '清风明月，万物可期',
    family: '"LXGW WenKai", "Kaiti SC", "KaiTi", serif',
    load: () =>
      Promise.all([
        import('@hanzi.pro/webfonts-lxgw-wenkai/swap/400.css'),
        import('@hanzi.pro/webfonts-lxgw-wenkai/swap/500.css')
      ])
  },
  {
    key: 'xiaolai',
    label: '小赖字体',
    description: '亲切活泼，适合轻量桌面工具',
    preview: '清风明月，万物可期',
    family: '"Xiaolai SC", "PingFang SC", "Microsoft YaHei", sans-serif',
    load: () => import('@chinese-fonts/xiaolai/dist/Xiaolai/result.css')
  }
]

const loaded = new Set<FontKey>()

export function setAppFontFamily(key: FontKey) {
  const option = APP_FONT_OPTIONS.find((item) => item.key === key) || APP_FONT_OPTIONS[2]
  document.documentElement.style.setProperty('--app-font-family', option.family)
}

export async function applyAppFont(key: FontKey) {
  const option = APP_FONT_OPTIONS.find((item) => item.key === key) || APP_FONT_OPTIONS[2]
  setAppFontFamily(option.key)
  if (loaded.has(option.key)) return
  await option.load()
  loaded.add(option.key)
}
