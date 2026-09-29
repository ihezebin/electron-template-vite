import { ArrowRightOutlined, CheckCircleFilled, ThunderboltOutlined } from '@ant-design/icons'
import { Button, Card, Col, Progress, Row, Space, Tag, Typography } from 'antd'

const { Paragraph, Text, Title } = Typography

export function ExampleContent({ layoutName }: { layoutName: string }) {
  return (
    <div className="content-stack">
      <section className="hero-card">
        <Tag color="blue">{layoutName}</Tag>
        <Title level={2}>从一个清爽的桌面应用开始</Title>
        <Paragraph>
          这里全部是模板示例内容。你可以替换卡片、操作和数据，而无需改动窗口、主题或升级能力。
        </Paragraph>
        <Space wrap>
          <Button type="primary" icon={<ThunderboltOutlined />}>
            主要操作
          </Button>
          <Button icon={<ArrowRightOutlined />}>次要操作</Button>
        </Space>
      </section>

      <Row gutter={[16, 16]}>
        {[
          ['待处理项目', '12', '用于展示一项关键数据'],
          ['本周进度', '68%', '示例统计信息'],
          ['运行状态', '正常', '所有示例服务均可用']
        ].map(([label, value, help]) => (
          <Col xs={24} md={8} key={label}>
            <Card className="metric-card">
              <Text type="secondary">{label}</Text>
              <strong>{value}</strong>
              <Text type="secondary">{help}</Text>
            </Card>
          </Col>
        ))}
      </Row>

      <Card title="示例任务" extra={<Button type="link">查看全部</Button>}>
        <div className="task-row">
          <span className="task-icon">
            <CheckCircleFilled />
          </span>
          <div className="task-copy">
            <Text strong>准备模板结构</Text>
            <Text type="secondary">这是可直接替换的演示条目</Text>
          </div>
          <Progress percent={82} size="small" className="task-progress" />
        </div>
      </Card>
    </div>
  )
}
