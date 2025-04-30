export interface Friend {
  availability: string // 在线状态，例： "offline"
  displayGroupId: number // 显示分组 ID
  displayGroupName: string // 显示分组名称
  gameName: string // 游戏昵称
  gameTag: string // 游戏标签
  groupId: number // 分组 ID
  groupName: string // 分组名称
  icon: number // 图标 ID
  id: string // 唯一 ID
  isP2PConversationMuted: boolean // 是否静音点对点会话
  lastSeenOnlineTimestamp: number | null // 上次在线时间戳
  lol: Record<string, unknown> // 英雄联盟相关信息
  name: string // 名称
  note: string // 备注
  patchline: string // 补丁信息
  pid: string // 唯一 PID
  platformId: string // 平台 ID
  product: string // 产品信息
  productName: string // 产品名称
  puuid: string // 唯一 UUID
  statusMessage: string // 状态信息
  summary: string // 摘要
  summonerId: number // 召唤师 ID
  time: number // 时间戳
}
