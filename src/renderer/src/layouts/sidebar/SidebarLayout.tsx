import {
  AppstoreOutlined,
  HomeOutlined,
  SettingOutlined,
  SwapOutlined,
  UnorderedListOutlined
} from '@ant-design/icons'
import { Button, Layout, Menu } from 'antd'
import { useNavigate } from 'react-router-dom'
import { ExampleContent } from '../../components/ExampleContent'

const { Sider, Content } = Layout

export function SidebarLayout({ onOpenSettings }: { onOpenSettings: () => void }) {
  const navigate = useNavigate()
  return (
    <div className="app-shell sidebar-shell">
      <div className="window-dragbar" aria-hidden="true" />
      <Layout className="sidebar-layout">
        <Sider width={244} className="sidebar">
          <div className="sidebar-brand">
            <span className="brand-mark">
              <AppstoreOutlined />
            </span>
            <span>桌面应用模板</span>
          </div>
          <Menu
            mode="inline"
            selectedKeys={['overview']}
            items={[
              { key: 'overview', icon: <HomeOutlined />, label: '概览' },
              { key: 'items', icon: <UnorderedListOutlined />, label: '项目列表' }
            ]}
          />
          <div className="sidebar-footer">
            <Button block icon={<SwapOutlined />} onClick={() => navigate('/topbar')}>
              切换顶部布局
            </Button>
            <Button block type="text" icon={<SettingOutlined />} onClick={onOpenSettings}>
              外观设置
            </Button>
            <small>可独立删除：layouts/sidebar</small>
          </div>
        </Sider>
        <Content className="sidebar-content">
          <div className="content-titlebar">
            <span>概览</span>
            <span className="window-title">Electron Vite Template</span>
          </div>
          <ExampleContent layoutName="左右侧边栏布局" />
        </Content>
      </Layout>
    </div>
  )
}
