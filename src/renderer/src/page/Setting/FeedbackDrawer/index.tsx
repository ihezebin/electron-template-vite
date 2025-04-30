import { Button, Drawer, Form, Input, message, Select, Space } from 'antd'

import { useStore } from '../../../store'
import packageJson from '../../../../../../package.json'
import { api } from '../../../api'

const FeedbackDrawer = () => {
  const { setFeedbackDrawerOpen, feedbackDrawerOpen, user } = useStore()

  const handleCancelFeedbackDrawer = () => {
    setFeedbackDrawerOpen(false)
  }

  const [form] = Form.useForm()

  const handleSubmitFeedback = () => {
    form
      .validateFields()
      .then((values) => {
        api.post('/electron-template-vite/feedback/submit', values).then(({ code }) => {
          if (code == 0) {
            message.success('反馈成功，将尽快处理您的问题！').then()
            handleCancelFeedbackDrawer()
          }
        })
      })
      .catch(() => {})
  }

  return (
    <Drawer
      getContainer={false}
      title="问题反馈"
      placement={'right'}
      width={500}
      onClose={handleCancelFeedbackDrawer}
      open={feedbackDrawerOpen && !!user}
      extra={
        <Space>
          <Button type="primary" onClick={handleSubmitFeedback}>
            提交
          </Button>
        </Space>
      }>
      <Form
        form={form}
        initialValues={{
          version: packageJson.version,
          username: user?.username
        }}>
        <Form.Item
          label={'当前版本'}
          name={'version'}
          rules={[{ required: true, message: '版本是必填的！' }]}>
          <Input disabled />
        </Form.Item>
        <Form.Item
          label={'反馈账号'}
          name={'username'}
          rules={[{ required: true, message: '账号是必填的！' }]}>
          <Input disabled />
        </Form.Item>
        <Form.Item
          label={'反馈类型'}
          name={'type'}
          rules={[{ required: true, message: '请选择反馈类型！' }]}>
          <Select
            getPopupContainer={() => document.getElementById('settingCardList') as HTMLElement}
            placeholder={'请选择反馈类型'}
            options={[
              { label: 'BUG', value: 'bug' },
              {
                label: '需求',
                value: 'demand'
              },
              { label: '建议', value: 'suggestion' },
              { label: '其他', value: 'other' }
            ]}
          />
        </Form.Item>
        <Form.Item
          label={'反馈内容'}
          name={'content'}
          rules={[{ required: true, message: '请描述反馈的内容！' }]}>
          <Input.TextArea
            rows={6}
            autoSize={{ minRows: 6, maxRows: 6 }}
            placeholder={'请描述反馈的内容...'}
          />
        </Form.Item>
      </Form>
    </Drawer>
  )
}

export default FeedbackDrawer
