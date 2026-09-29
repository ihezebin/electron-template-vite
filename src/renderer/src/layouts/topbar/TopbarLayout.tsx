import { AppstoreOutlined, MenuOutlined, SettingOutlined, SwapOutlined } from '@ant-design/icons'
import { Button, Segmented, Space } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ExampleContent } from '../../components/ExampleContent'

export function TopbarLayout({ onOpenSettings }: { onOpenSettings: () => void }) {
  const navigate = useNavigate()
  return (
    <div className="app-shell topbar-shell">
      <div className="window-dragbar" aria-hidden="true" />
      <header className="topbar">
        <div className="brand">
          <span className="brand-mark">
            <AppstoreOutlined />
          </span>
          <span>桌面应用模板</span>
        </div>
        <Segmented
          className="topbar-nav"
          value="overview"
          options={[
            { label: '概览', value: 'overview' },
            { label: '项目', value: 'items' },
            { label: '记录', value: 'history' }
          ]}
        />
        <Space className="top-actions">
          <Button icon={<SwapOutlined />} onClick={() => navigate('/sidebar')}>
            切换侧边栏布局
          </Button>
          <Button
            type="text"
            shape="circle"
            icon={<SettingOutlined />}
            aria-label="打开设置"
            onClick={onOpenSettings}
          />
        </Space>
      </header>
      <main className="layout-content">
        <ExampleContent layoutName="上下导航布局" />
      </main>
      <div className="layout-hint">
        <MenuOutlined /> 此目录可独立删除：layouts/topbar
      </div>
    </div>
  )
}
