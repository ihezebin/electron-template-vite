export interface Action {
  actorCellId: number
  championId: number
  completed: boolean
  id: number
  isAllyAction: boolean
  isInProgress: boolean
  type: 'ban' | 'pick' | 'ten_bans_reveal'
}

export interface ChampionSelectPlayer {
  assignedPosition: string
  cellId: number
  championId: number
  championPickIntent: number
  nameVisibilityType: string
  obfuscatedPuuid: string
  obfuscatedSummonerId: number
  puuid: string
  selectedSkinId: number
  spell1Id: number
  spell2Id: number
  summonerId: number
  team: number
  wardSkinId: number
}

interface Timer {
  adjustedTimeLeftInPhase: number
  internalNowInEpochMs: number
  isInfinite: boolean
  phase: 'BAN_PICK' | 'PLANNING'
  totalTimeInPhase: number
}

interface ChatDetails {
  mucJwtDto: {
    channelClaim: string
    domain: string
    jwt: string
    targetRegion: string
  }
  multiUserChatId: string
  multiUserChatPassword: string
}

export interface ChampionSelectSession {
  actions: Action[][]
  allowBattleBoost: boolean
  allowDuplicatePicks: boolean
  allowLockedEvents: boolean
  allowRerolling: boolean
  allowSkinSelection: boolean
  bans: {
    myTeamBans: number[]
    numBans: number
    theirTeamBans: number[]
  }
  benchChampions: any[]
  benchEnabled: boolean
  boostableSkinCount: number
  chatDetails: ChatDetails
  counter: number
  gameId: number
  hasSimultaneousBans: boolean
  hasSimultaneousPicks: boolean
  isCustomGame: boolean
  isSpectating: boolean
  localPlayerCellId: number
  lockedEventIndex: number
  myTeam: ChampionSelectPlayer[]
  pickOrderSwaps: {
    cellId: number
    id: number
    state: string
  }[]
  recoveryCounter: number
  rerollsRemaining: number
  skipChampionSelect: boolean
  theirTeam: ChampionSelectPlayer[]
  timer: Timer
  trades: any[]
}
