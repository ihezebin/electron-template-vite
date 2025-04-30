/**
 * {
 *     "allowablePremadeSizes": [
 *         1,
 *         2,
 *         3,
 *         4,
 *         5
 *     ],
 *     "areFreeChampionsAllowed": true,
 *     "assetMutator": "ARURF",
 *     "category": "PvP",
 *     "championsRequiredToPlay": 16,
 *     "description": "阿福快打",
 *     "detailedDescription": "",
 *     "gameMode": "URF",
 *     "gameSelectCategory": "kPvP",
 *     "gameSelectModeGroup": "kAlternativeLeagueGameModes",
 *     "gameSelectPriority": 0,
 *     "gameTypeConfig": {
 *         "advancedLearningQuests": false,
 *         "allowTrades": true,
 *         "banMode": "SkipBanStrategy",
 *         "banTimerDuration": 0,
 *         "battleBoost": true,
 *         "crossTeamChampionPool": false,
 *         "deathMatch": false,
 *         "doNotRemove": false,
 *         "duplicatePick": false,
 *         "exclusivePick": true,
 *         "gameModeOverride": null,
 *         "id": 21,
 *         "learningQuests": false,
 *         "mainPickTimerDuration": 0,
 *         "maxAllowableBans": 0,
 *         "name": "GAME_CFG_TEAM_BUILDER_RANDOM",
 *         "numPlayersPerTeamOverride": null,
 *         "onboardCoopBeginner": false,
 *         "pickMode": "AllRandomPickStrategy",
 *         "postPickTimerDuration": 33,
 *         "reroll": false,
 *         "teamChampionPool": false
 *     },
 *     "id": 900,
 *     "isRanked": false,
 *     "isSkillTreeQueue": false,
 *     "isTeamBuilderManaged": true,
 *     "isVisible": true,
 *     "lastToggledOffTime": 0,
 *     "lastToggledOnTime": 0,
 *     "mapId": 11,
 *     "maxDivisionForPremadeSize2": "",
 *     "maxTierForPremadeSize2": "",
 *     "maximumParticipantListSize": 5,
 *     "minLevel": 0,
 *     "minimumParticipantListSize": 1,
 *     "name": "阿福快打",
 *     "numPlayersPerTeam": 5,
 *     "queueAvailability": "PlatformDisabled",
 *     "queueRewards": {
 *         "isChampionPointsEnabled": true,
 *         "isIpEnabled": true,
 *         "isXpEnabled": true,
 *         "partySizeIpRewards": []
 *     },
 *     "removalFromGameAllowed": false,
 *     "removalFromGameDelayMinutes": 0,
 *     "shortName": "阿福快打",
 *     "showPositionSelector": false,
 *     "showQuickPlaySlotSelection": false,
 *     "spectatorEnabled": true,
 *     "type": "URF"
 * }
 */
export interface Queue {
  allowablePremadeSizes: number[]
  areFreeChampionsAllowed: boolean
  assetMutator: string
  category: string
  championsRequiredToPlay: number
  description: string
  detailedDescription: string
  gameMode: string
  gameSelectCategory: string
  gameSelectModeGroup: string
  gameSelectPriority: number
  gameTypeConfig: {
    advancedLearningQuests: boolean
    allowTrades: boolean
    banMode: string
    banTimerDuration: number
    battleBoost: boolean
    crossTeamChampionPool: boolean
    deathMatch: boolean
    doNotRemove: boolean
    duplicatePick: boolean
    exclusivePick: boolean
    gameModeOverride: string | null
    id: number
    learningQuests: boolean
    mainPickTimerDuration: number
    maxAllowableBans: number
    name: string
    numPlayersPerTeamOverride: number | null
    onboardCoopBeginner: boolean
    pickMode: string
    postPickTimerDuration: number
    reroll: boolean
    teamChampionPool: boolean
  }
  id: number
  isRanked: boolean
  isSkillTreeQueue: boolean
  isTeamBuilderManaged: boolean
  isVisible: boolean
  lastToggledOffTime: number
  lastToggledOnTime: number
  mapId: number
  maxDivisionForPremadeSize2: string
  maxTierForPremadeSize2: string
  maximumParticipantListSize: number
  minLevel: number
  minimumParticipantListSize: number
  name: string
  numPlayersPerTeam: number
  queueAvailability: string
  queueRewards: {
    isChampionPointsEnabled: boolean
    isIpEnabled: boolean
    isXpEnabled: boolean
    partySizeIpRewards: any[] // 如果有具体结构请替换
  }
  removalFromGameAllowed: boolean
  removalFromGameDelayMinutes: number
  shortName: string
  showPositionSelector: boolean
  showQuickPlaySlotSelection: boolean
  spectatorEnabled: boolean
  type: string
}
