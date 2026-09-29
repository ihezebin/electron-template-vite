import { DownloadOutlined, ReloadOutlined } from '@ant-design/icons'
import { Alert, Button, Modal, Progress, Space, Typography } from 'antd'
import type { UpdateInfo } from '../../../shared/types'

interface Props {
  open: boolean
  checking: boolean
  downloading: boolean
  downloaded: boolean
  progress: number
  info?: UpdateInfo
  error?: string
  onClose: () => void
  onCheck: () => void
  onDownload: () => void
  onInstall: () => void
}

export function UpdateModal(props: Props) {
  return (
    <Modal title="应用更新" open={props.open} onCancel={props.onClose} footer={null}>
      <div className="update-panel">
        <Typography.Text type="secondary">
          当前版本 {props.info?.currentVersion || '0.1.0'}
        </Typography.Text>
        {props.error && <Alert type="error" showIcon message={props.error} />}
        {props.info && !props.info.available && !props.error && (
          <Alert type="success" showIcon message="当前已是最新版本" />
        )}
        {props.info?.available && (
          <Alert
            type="info"
            showIcon
            message={`发现新版本 ${props.info.version}`}
            description={props.info.releaseName || props.info.releaseNotes}
          />
        )}
        {props.downloading && <Progress percent={props.progress} />}
        <Space>
          <Button
            icon={<ReloadOutlined />}
            loading={props.checking}
            disabled={props.downloading}
            onClick={props.onCheck}
          >
            检查更新
          </Button>
          {props.info?.available && !props.downloaded && (
            <Button
              type="primary"
              icon={<DownloadOutlined />}
              loading={props.downloading}
              onClick={props.onDownload}
            >
              下载更新
            </Button>
          )}
          {props.downloaded && (
            <Button type="primary" onClick={props.onInstall}>
              退出并安装
            </Button>
          )}
        </Space>
      </div>
    </Modal>
  )
}
