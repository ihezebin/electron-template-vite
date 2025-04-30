import { Result } from 'antd'

import style from './index.module.scss'

const Nothing = () => {
  return (
    <div className={style.nothing}>
      <Result
        status="404"
        title="Nothing"
        // subTitle="Sorry, the page you visited does not exist."
        subTitle="这里什么都不存在！"
        extra={<></>}
      />
    </div>
  )
}

export default Nothing
