/**
 * {
 * "id": 3,
 * "name": "虛弱",
 * "description": "緩速目標敵方英雄40%，並降低其造成傷害35%，持續3秒。",
 * "summonerLevel": 4,
 * "cooldown": 240,
 * "iconPath": "/lol-game-data/assets/DATA/Spells/Icons2D/Summoner_exhaust.png"
 * }
 */
export interface SummonerSpell {
  id: number
  name: string
  description: string
  summonerLevel: number
  cooldown: number
  gameModes: string[]
  iconPath: string
}

/**
 * {
 *     "accountId": 3591704796480672,
 *     "displayName": "",
 *     "gameName": "hezebin",
 *     "internalName": "",
 *     "nameChangeFlag": false,
 *     "privacy": "PUBLIC",
 *     "profileIconId": 7,
 *     "puuid": "f96085cd-44c5-5c13-916a-89a2fc28ae70",
 *     "summonerId": 3591704796480672,
 *     "summonerLevel": 2,
 *     "tagLine": "code",
 *     "unnamed": false,
 * }
 */
export interface Summoner {
  accountId: number
  displayName: string
  gameName: string
  internalName: string
  nameChangeFlag: boolean
  privacy: string
  profileIconId: number
  puuid: string
  summonerId: number
  summonerLevel: number
  tagLine: string
  unnamed: boolean
  xpSinceLastLevel: number
  xpUntilNextLevel: number
}

export interface SummonerProfile {
  backgroundSkinAugments: string
  backgroundSkinId: number
}

export interface ProfileIcon {
  id: number
  title: string
  yearReleased: number
  isLegacy: boolean
  imagePath: string
  esportsTeam: string
  esportsRegion: string
  esportsEvent: string
  disabledRegions: string[]
}

export interface LolChatMe {
  lol: LolDetails
  availability: 'chat' | 'away' | 'offline'
  gameName: string
  gameTag: string
  icon: number
  id: string
  lastSeenOnlineTimestamp: number | null
  name: string
  obfuscatedSummonerId: number
  patchline: string
  pid: string
  platformId: string
  product: string
  productName: string
  puuid: string
  statusMessage: string
  summary: string
  summonerId: number
  time: number
}

export interface LolDetails {
  bannerIdSelected: string
  challengeCrystalLevel: string
  challengePoints: string
  challengeTokensSelected: string
  championId: string
  companionId: string
  damageSkinId: string
  gameQueueType: string
  gameStatus: string
  iconOverride: string
  initSummoner: string
  legendaryMasteryScore: string
  level: string
  mapId: string
  mapSkinId: string
  playerTitleSelected: string
  puuid: string
  rankedPrevSeasonDivision: string
  rankedPrevSeasonTier: string
  regalia: string
  skinVariant: string
  skinname: string
  rankedLeagueDivision: string
  rankedLeagueQueue: string
  rankedLeagueTier: string
}
