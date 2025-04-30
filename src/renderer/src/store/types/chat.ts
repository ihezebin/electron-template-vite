interface MucJwtDto {
  channelClaim: string
  domain: string
  jwt: string
  targetRegion: string
}

export interface Conversation {
  gameName: string
  gameTag: string
  id: string // "477159614-team1@lol-champ-select.jp1.pvp.net"
  inviterId: string
  isMuted: boolean
  lastMessage: any // 如果有具体类型，可以替换 any
  mucJwtDto: MucJwtDto
  name: string
  password: string
  pid: string // "477159614-team1@lol-champ-select.jp1.pvp.net"
  targetRegion: string // "jp1"
  type: string // "championSelect"
  unreadMessageCount: number
}
