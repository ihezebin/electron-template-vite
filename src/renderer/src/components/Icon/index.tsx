import { createFromIconfontCN } from '@ant-design/icons'
import React from 'react'

/**
 * Example: <IconFont type="http" />
 */
interface IProps extends React.ComponentProps<any> {
  className?: string
  type: string
}

const IconFont = ({ type, ...restProps }: IProps) => {
  const typePrefix = 'icon-hlolt'

  const IconFontCN = createFromIconfontCN({
    scriptUrl:
      process.env.NODE_ENV === 'development'
        ? '/iconfont.js'
        : `${window.__rendererDir}/iconfont.js`
  })

  return <IconFontCN type={`${typePrefix}-${type}`} {...restProps} />
}

export default IconFont
