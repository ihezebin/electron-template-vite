import { BgColorsOutlined, FontSizeOutlined } from '@ant-design/icons'
import { Drawer, Segmented, Typography } from 'antd'
import type { AppSettings, FontKey, ThemeMode } from '../../../shared/types'
import { APP_FONT_OPTIONS } from '../fonts/appFont'

interface Props {
  open: boolean
  settings: AppSettings
  onClose: () => void
  onUpdate: (patch: Partial<AppSettings>) => Promise<void>
}

export function SettingsDrawer({ open, settings, onClose, onUpdate }: Props) {
  return (
    <Drawer
      rootClassName="settings-drawer"
      title="外观设置"
      open={open}
      width="100%"
      mask={false}
      destroyOnHidden
      onClose={onClose}
    >
      <div className="settings-section">
        <div className="settings-heading">
          <BgColorsOutlined />
          <span>
            <Typography.Text strong>主题</Typography.Text>
            <small>跟随系统或固定明暗外观</small>
          </span>
        </div>
        <Segmented
          block
          value={settings.theme}
          options={[
            { label: '跟随系统', value: 'system' },
            { label: '浅色', value: 'light' },
            { label: '深色', value: 'dark' }
          ]}
          onChange={(theme) => onUpdate({ theme: theme as ThemeMode })}
        />
      </div>
      <div className="settings-section">
        <div className="settings-heading">
          <FontSizeOutlined />
          <span>
            <Typography.Text strong>字体</Typography.Text>
            <small>三种内置中文字体按需加载</small>
          </span>
        </div>
        <div className="font-options">
          {APP_FONT_OPTIONS.map((option) => (
            <button
              type="button"
              key={option.key}
              className={`font-option ${settings.font === option.key ? 'selected' : ''}`}
              onClick={() => onUpdate({ font: option.key as FontKey })}
              style={{ fontFamily: option.family }}
            >
              <span>
                <strong>{option.label}</strong>
                <small>{option.description}</small>
              </span>
              <b>{option.preview}</b>
            </button>
          ))}
        </div>
      </div>
    </Drawer>
  )
}
