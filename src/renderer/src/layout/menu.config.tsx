import { ReactElement } from 'react'

import { TabKey } from '../store'
import IconFont from '../components/Icon'

export const tabList: { key: TabKey; title: string; icon: ReactElement }[] = [
  {
    key: 'test',
    title: '测试',
    icon: <span></span>
  },
  {
    key: 'about',
    title: '关于',
    icon: <IconFont type={'coffee3'} />
  }
]
