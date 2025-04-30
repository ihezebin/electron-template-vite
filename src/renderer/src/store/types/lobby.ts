interface GameConfig {
  allowablePremadeSizes: any[]
  customLobbyName: string
  customMutatorName: string
  customRewardsDisabledReasons: any[]
  customSpectatorPolicy: string
  customSpectators: any[]
  customTeam100: TeamMember[]
  customTeam200: any[]
  gameMode: string
  isCustom: boolean
  isLobbyFull: boolean
  isTeamBuilderManaged: boolean
  mapId: number
  maxHumanPlayers: number
  maxLobbySize: number
  maxTeamSize: number
  pickType: string
  premadeSizeAllowed: boolean
  queueId: number
  shouldForceScarcePositionSelection: boolean
  showPositionSelector: boolean
  showQuickPlaySlotSelection: boolean
}

export interface TeamMember {
  allowedChangeActivity: boolean
  allowedInviteOthers: boolean
  allowedKickOthers: boolean
  allowedStartActivity: boolean
  allowedToggleInvite: boolean
  autoFillEligible: boolean
  autoFillProtectedForPromos: boolean
  autoFillProtectedForRemedy: boolean
  autoFillProtectedForSoloing: boolean
  autoFillProtectedForStreaking: boolean
  botChampionId: number
  botDifficulty: string
  botId: string
  botPosition: string
  botUuid: string
  firstPositionPreference: string
  intraSubteamPosition: any
  isBot: boolean
  isLeader: boolean
  isSpectator: boolean
  playerSlots: any[]
  puuid: string
  quickplayPlayerState: any
  ready: boolean
  secondPositionPreference: string
  showGhostedBanner: boolean
  strawberryMapId: any
  subteamIndex: any
  summonerIconId: number
  summonerId: number
  summonerInternalName: string
  summonerLevel: number
  summonerName: string
  teamId: number
  tftNPEQueueBypass: any
}

interface LocalMember extends TeamMember {}

interface MucJwtDto {
  channelClaim: string
  domain: string
  jwt: string
  targetRegion: string
}

export interface Lobby {
  canStartActivity: boolean
  gameConfig: GameConfig
  invitations: any[]
  localMember: LocalMember
  members: TeamMember[]
  mucJwtDto: MucJwtDto
  multiUserChatId: string
  multiUserChatPassword: string
  partyId: string
  partyType: string
  restrictions: any
  scarcePositions: any[]
  warnings: any
}
