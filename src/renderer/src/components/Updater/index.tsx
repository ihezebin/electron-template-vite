import { CheckCircleFilled, CloseCircleFilled, ExclamationCircleFilled } from '@ant-design/icons'
import { Button, Progress } from 'antd'
import { useState } from 'react'

import styles from './index.module.scss'

export const NeedUpdateTitle = ({ version }: any) => {
  return (
    <div className={styles.title}>
      <ExclamationCircleFilled style={{ color: 'orange', fontSize: 20 }} />
      发现新版本 {version}
    </div>
  )
}
export const NeedUpdateContent = ({ releaseNotes, onClick }: any) => {
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <div className={styles.newVersion}>
      <div className={styles.releaseNotes}>
        {releaseNotes?.map((releaseNote) => <p key={releaseNote}>{releaseNote}</p>)}
      </div>
      <Button
        loading={loading}
        type={'primary'}
        onClick={() => {
          setLoading(true)
          onClick && onClick()
        }}>
        {loading ? '准备下载...' : '立即更新'}
      </Button>
    </div>
  )
}

export const DownloadProgressTitle = () => {
  return <div className={styles.title}>下载安装包中...</div>
}
export const DownloadProgress = ({ percent }: { percent: number }) => {
  return (
    <div className={styles.progress}>
      <Progress
        percent={parseFloat(percent.toFixed(2))}
        type="line"
        strokeColor={{
          '0%': '#87d068',
          '50%': '#ffe58f',
          '100%': '#ffccc7'
        }}
      />
    </div>
  )
}

export const DownloadFinishTitle = () => {
  return (
    <div className={styles.title}>
      <CheckCircleFilled style={{ color: '#45a218', fontSize: 20 }} />
      下载完成！
    </div>
  )
}

export const DownloadFinish = ({ onClick }: any) => {
  const [loading, setLoading] = useState<boolean>(false)

  return (
    <div className={styles.quitAndInstall}>
      <Progress
        percent={100}
        type="line"
        strokeColor={{
          '0%': '#87d068',
          '50%': '#ffe58f',
          '100%': '#ffccc7'
        }}
      />
      <Button
        type={'primary'}
        onClick={() => {
          setLoading(true)
          onClick && onClick()
        }}
        loading={loading}>
        安装更新
      </Button>
    </div>
  )
}

export const UpdateErrTitle = () => {
  return (
    <div className={styles.title}>
      <CloseCircleFilled style={{ color: '#f14f4f', fontSize: 20 }} />
      更新失败
    </div>
  )
}

export const UpdateErrMessage = ({ err }: any) => {
  return <div className={styles.err}>{err}</div>
}
