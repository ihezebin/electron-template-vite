export type GameFlowStatus = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10

export const GameFlowType2StatusMap: Record<GameFlowType, GameFlowStatus> = {
  None: 0,
  Lobby: 1,
  Matchmaking: 2,
  ReadyCheck: 3,
  ChampSelect: 4,
  GameStart: 5,
  InProgress: 6,
  Reconnecting: 7,
  Reconnect: 7,
  WaitingForStats: 8,
  PreEndOfGame: 9,
  EndOfGame: 10
}

export const GameFlowStatus2TypeMap: Record<GameFlowStatus, GameFlowType> = {
  0: 'None',
  1: 'Lobby',
  2: 'Matchmaking',
  3: 'ReadyCheck',
  4: 'ChampSelect',
  5: 'GameStart',
  6: 'InProgress',
  7: 'Reconnecting',
  8: 'WaitingForStats',
  9: 'PreEndOfGame',
  10: 'EndOfGame'
}

export interface GameFlowSession {
  gameData?: GameData
  phase: GameFlowType
}

interface PlayerChampionSelection {
  championId: number
  selectedSkinIndex: number
  spell1Id: number
  spell2Id: number
  summonerInternalName: string
}

export interface GameFlowQueue {
  areFreeChampionsAllowed: boolean
  assetMutator: string
  category: string
  championsRequiredToPlay: number
  description: string
  detailedDescription: string
  gameMode: string
  id: number
  isRanked: boolean
  isTeamBuilderManaged: boolean
  lastToggledOffTime: number
  lastToggledOnTime: number
  mapId: number
  maximumParticipantListSize: number
  minLevel: number
  minimumParticipantListSize: number
  name: string
  numPlayersPerTeam: number
  queueAvailability: string
  removalFromGameAllowed: boolean
  removalFromGameDelayMinutes: number
  shortName: string
  showPositionSelector: boolean
  spectatorEnabled: boolean
  type: string
}

export interface TeamParticipant {
  championId: number
  lastSelectedSkinIndex: number
  profileIconId: number
  puuid: string
  selectedPosition: string
  selectedRole: string
  summonerId: number
  summonerInternalName: string
  summonerName: string
  teamOwner: boolean
  teamParticipantId: number
}

export interface GameData {
  gameId: number
  gameName: string
  isCustomGame: boolean
  password: string
  playerChampionSelections: PlayerChampionSelection[]
  queue: GameFlowQueue
  spectatorsAllowed: boolean
  teamOne: TeamParticipant[]
  teamTwo: TeamParticipant[]
}

export type GameFlowType =
  | 'None'
  | 'Lobby'
  | 'Matchmaking'
  | 'ReadyCheck'
  | 'ChampSelect'
  | 'GameStart'
  | 'InProgress'
  | 'Reconnecting'
  | 'Reconnect'
  | 'WaitingForStats'
  | 'PreEndOfGame'
  | 'EndOfGame'
