import { Queue } from './queue'

/**
 * {
 *     "endOfGameResult": "GameComplete",
 *     "gameCreation": 1727471365406,
 *     "gameCreationDate": "2024-09-27T21:09:25.406Z",
 *     "gameDuration": 1570,
 *     "gameId": 472251951,
 *     "gameMode": "CLASSIC",
 *     "gameType": "MATCHED_GAME",
 *     "gameVersion": "14.19.621.6353",
 *     "mapId": 11,
 *     "participantIdentities": [
 *         {
 *             "participantId": 5,
 *             "player": {
 *                 "accountId": 0,
 *                 "currentAccountId": 0,
 *                 "currentPlatformId": "JP1",
 *                 "gameName": "hezebin",
 *                 "matchHistoryUri": "",
 *                 "platformId": "JP1",
 *                 "profileIcon": 7,
 *                 "puuid": "f96085cd-44c5-5c13-916a-89a2fc28ae70",
 *                 "summonerId": 3591704796480672,
 *                 "summonerName": "",
 *                 "tagLine": "code"
 *             }
 *         }
 *     ],
 *     "participants": [
 *         {
 *             "championId": 350,
 *             "highestAchievedSeasonTier": "",
 *             "participantId": 5,
 *             "spell1Id": 7,
 *             "spell2Id": 6,
 *             "stats": {
 *                 "assists": 8,
 *                 "causedEarlySurrender": false,
 *                 "champLevel": 11,
 *                 "combatPlayerScore": 0,
 *                 "damageDealtToObjectives": 1792,
 *                 "damageDealtToTurrets": 1792,
 *                 "damageSelfMitigated": 2870,
 *                 "deaths": 4,
 *                 "doubleKills": 0,
 *                 "earlySurrenderAccomplice": false,
 *                 "firstBloodAssist": false,
 *                 "firstBloodKill": false,
 *                 "firstInhibitorAssist": false,
 *                 "firstInhibitorKill": false,
 *                 "firstTowerAssist": false,
 *                 "firstTowerKill": false,
 *                 "gameEndedInEarlySurrender": false,
 *                 "gameEndedInSurrender": false,
 *                 "goldEarned": 5608,
 *                 "goldSpent": 4475,
 *                 "inhibitorKills": 0,
 *                 "item0": 3877,
 *                 "item1": 1058,
 *                 "item2": 3070,
 *                 "item3": 1058,
 *                 "item4": 2055,
 *                 "item5": 3020,
 *                 "item6": 3340,
 *                 "killingSprees": 0,
 *                 "kills": 0,
 *                 "largestCriticalStrike": 0,
 *                 "largestKillingSpree": 0,
 *                 "largestMultiKill": 0,
 *                 "longestTimeSpentLiving": 954,
 *                 "magicDamageDealt": 5232,
 *                 "magicDamageDealtToChampions": 1682,
 *                 "magicalDamageTaken": 1492,
 *                 "neutralMinionsKilled": 0,
 *                 "neutralMinionsKilledEnemyJungle": 0,
 *                 "neutralMinionsKilledTeamJungle": 0,
 *                 "objectivePlayerScore": 0,
 *                 "participantId": 5,
 *                 "pentaKills": 0,
 *                 "perk0": 8229,
 *                 "perk0Var1": 491,
 *                 "perk0Var2": 0,
 *                 "perk0Var3": 0,
 *                 "perk1": 8226,
 *                 "perk1Var1": 200,
 *                 "perk1Var2": 0,
 *                 "perk1Var3": 0,
 *                 "perk2": 8210,
 *                 "perk2Var1": 0,
 *                 "perk2Var2": 0,
 *                 "perk2Var3": 0,
 *                 "perk3": 8236,
 *                 "perk3Var1": 24,
 *                 "perk3Var2": 0,
 *                 "perk3Var3": 0,
 *                 "perk4": 8138,
 *                 "perk4Var1": 16,
 *                 "perk4Var2": 0,
 *                 "perk4Var3": 0,
 *                 "perk5": 8105,
 *                 "perk5Var1": 7,
 *                 "perk5Var2": 3,
 *                 "perk5Var3": 0,
 *                 "perkPrimaryStyle": 8200,
 *                 "perkSubStyle": 8100,
 *                 "physicalDamageDealt": 817,
 *                 "physicalDamageDealtToChampions": 322,
 *                 "physicalDamageTaken": 4382,
 *                 "playerAugment1": 0,
 *                 "playerAugment2": 0,
 *                 "playerAugment3": 0,
 *                 "playerAugment4": 0,
 *                 "playerAugment5": 0,
 *                 "playerAugment6": 0,
 *                 "playerScore0": 0,
 *                 "playerScore1": 0,
 *                 "playerScore2": 0,
 *                 "playerScore3": 0,
 *                 "playerScore4": 0,
 *                 "playerScore5": 0,
 *                 "playerScore6": 0,
 *                 "playerScore7": 0,
 *                 "playerScore8": 0,
 *                 "playerScore9": 0,
 *                 "playerSubteamId": 0,
 *                 "quadraKills": 0,
 *                 "sightWardsBoughtInGame": 0,
 *                 "subteamPlacement": 0,
 *                 "teamEarlySurrendered": false,
 *                 "timeCCingOthers": 3,
 *                 "totalDamageDealt": 6049,
 *                 "totalDamageDealtToChampions": 2005,
 *                 "totalDamageTaken": 5951,
 *                 "totalHeal": 1862,
 *                 "totalMinionsKilled": 1,
 *                 "totalPlayerScore": 0,
 *                 "totalScoreRank": 0,
 *                 "totalTimeCrowdControlDealt": 26,
 *                 "totalUnitsHealed": 5,
 *                 "tripleKills": 0,
 *                 "trueDamageDealt": 0,
 *                 "trueDamageDealtToChampions": 0,
 *                 "trueDamageTaken": 76,
 *                 "turretKills": 1,
 *                 "unrealKills": 0,
 *                 "visionScore": 0,
 *                 "visionWardsBoughtInGame": 1,
 *                 "wardsKilled": 0,
 *                 "wardsPlaced": 0,
 *                 "win": true
 *             },
 *             "teamId": 100,
 *             "timeline": {
 *                 "creepsPerMinDeltas": {},
 *                 "csDiffPerMinDeltas": {},
 *                 "damageTakenDiffPerMinDeltas": {},
 *                 "damageTakenPerMinDeltas": {},
 *                 "goldPerMinDeltas": {},
 *                 "lane": "BOTTOM",
 *                 "participantId": 5,
 *                 "role": "SUPPORT",
 *                 "xpDiffPerMinDeltas": {},
 *                 "xpPerMinDeltas": {}
 *             }
 *         }
 *     ],
 *     "platformId": "JP1",
 *     "queueId": 870,
 *     "seasonId": 0,
 *     "teams": [
 *         {
 *             "bans": [],
 *             "baronKills": 0,
 *             "dominionVictoryScore": 0,
 *             "dragonKills": 0,
 *             "firstBaron": false,
 *             "firstBlood": true,
 *             "firstDargon": false,
 *             "firstInhibitor": true,
 *             "firstTower": true,
 *             "hordeKills": 0,
 *             "inhibitorKills": 1,
 *             "riftHeraldKills": 0,
 *             "teamId": 100,
 *             "towerKills": 8,
 *             "vilemawKills": 0,
 *             "win": "Win"
 *         },
 *         {
 *             "bans": [],
 *             "baronKills": 0,
 *             "dominionVictoryScore": 0,
 *             "dragonKills": 0,
 *             "firstBaron": false,
 *             "firstBlood": false,
 *             "firstDargon": false,
 *             "firstInhibitor": false,
 *             "firstTower": false,
 *             "hordeKills": 0,
 *             "inhibitorKills": 0,
 *             "riftHeraldKills": 0,
 *             "teamId": 200,
 *             "towerKills": 3,
 *             "vilemawKills": 0,
 *             "win": "Fail"
 *         }
 *     ]
 * }
 */
export interface Game {
  endOfGameResult: string
  gameCreation: number // 时间戳，表示游戏创建时间
  gameCreationDate: string // ISO 格式的游戏创建时间
  gameDuration: number // 游戏持续时间（秒）
  gameId: number // 游戏 ID
  gameMode: string // 游戏模式
  gameType: string // 游戏类型
  gameVersion: string // 游戏版本
  mapId: number // 地图 ID
  participantIdentities: ParticipantIdentity[] // 参与者身份信息
  participants: Participant[] // 参与者数据
  platformId: string // 平台 ID
  queueId: number // 排队 ID
  seasonId: number // 赛季 ID
  teams: Team[] // 队伍信息
}

export interface ParticipantIdentity {
  participantId: number // 参与者 ID
  player: GamePlayer // 玩家信息
}

export interface GamePlayer {
  accountId: number // 账户 ID
  currentAccountId: number // 当前账户 ID
  currentPlatformId: string // 当前平台 ID
  gameName: string // 游戏名
  matchHistoryUri: string // 匹配历史 URI
  platformId: string // 平台 ID
  profileIcon: number // 头像 ID
  puuid: string // PUUID
  summonerId: number // 召唤师 ID
  summonerName: string // 召唤师名字
  tagLine: string // 标签行
}

export interface Participant {
  championId: number // 英雄 ID
  highestAchievedSeasonTier: string // 最高赛季段位
  participantId: number // 参与者 ID
  spell1Id: number // 技能 1 ID
  spell2Id: number // 技能 2 ID
  teamId: number // 队伍 ID
  stats: Stats // 参与者统计数据
  timeline: Timeline // 时间线数据
}

export interface Stats {
  assists: number // 助攻
  causedEarlySurrender: boolean // 是否造成提前投降
  champLevel: number // 英雄等级
  combatPlayerScore: number // 战斗玩家分数
  damageDealtToObjectives: number // 对目标造成的伤害
  damageDealtToTurrets: number // 对塔造成的伤害
  damageSelfMitigated: number // 自我抵抗的伤害
  deaths: number // 死亡次数
  doubleKills: number // 双杀次数
  earlySurrenderAccomplice: boolean // 是否参与早期投降
  firstBloodAssist: boolean // 是否助攻第一滴血
  firstBloodKill: boolean // 是否获得第一滴血
  firstInhibitorAssist: boolean // 是否助攻第一座水晶塔
  firstInhibitorKill: boolean // 是否击杀第一座水晶塔
  firstTowerAssist: boolean // 是否助攻第一座塔
  firstTowerKill: boolean // 是否击杀第一座塔
  gameEndedInEarlySurrender: boolean // 游戏是否提前结束
  gameEndedInSurrender: boolean // 游戏是否投降结束
  goldEarned: number // 获得的金币
  goldSpent: number // 花费的金币
  turretKills: number // 击杀的塔数量
  inhibitorKills: number // 击杀水晶塔次数
  item0: number // 物品 0 ID
  item1: number // 物品 1 ID
  item2: number // 物品 2 ID
  item3: number // 物品 3 ID
  item4: number // 物品 4 ID
  item5: number // 物品 5 ID
  item6: number // 物品 6 ID
  killingSprees: number // 连杀次数
  kills: number // 击杀次数
  largestCriticalStrike: number // 最大暴击
  largestKillingSpree: number // 最大连杀次数
  largestMultiKill: number // 最大多重击杀
  longestTimeSpentLiving: number // 最长生存时间
  magicDamageDealt: number // 造成的魔法伤害
  magicDamageDealtToChampions: number // 对英雄造成的魔法伤害
  magicalDamageTaken: number // 承受的魔法伤害
  neutralMinionsKilled: number // 击杀的中立小兵数
  neutralMinionsKilledEnemyJungle: number // 击杀敌方丛林小兵数
  neutralMinionsKilledTeamJungle: number // 击杀友方丛林小兵数
  objectivePlayerScore: number // 目标玩家分数
  participantId: number // 参与者 ID
  pentaKills: number // 五杀次数
  perk0: number // 主符文 ID 0
  perk0Var1: number // 主符文变体 1
  perk0Var2: number // 主符文变体 2
  perk0Var3: number // 主符文变体 3
  perk1: number // 主符文 ID 1
  perk1Var1: number // 主符文变体 1
  perk1Var2: number // 主符文变体 2
  perk1Var3: number // 主符文变体 3
  perk2: number // 主符文 ID 2
  perk2Var1: number // 主符文变体 1
  perk2Var2: number // 主符文变体 2
  perk2Var3: number // 主符文变体 3
  perk3: number // 主符文 ID 3
  perk3Var1: number // 主符文变体 1
  perk3Var2: number // 主符文变体 2
  perk3Var3: number // 主符文变体 3
  perk4: number // 主符文 ID 4
  perk4Var1: number // 主符文变体 1
  perk4Var2: number // 主符文变体 2
  perk4Var3: number // 主符文变体 3
  perk5: number // 主符文 ID 5
  perk5Var1: number // 主符文变体 1
  perk5Var2: number // 主符文变体 2
  perk5Var3: number // 主符文变体 3
  perkPrimaryStyle: number // 主符文风格 ID
  perkSubStyle: number // 副符文风格 ID
  physicalDamageDealt: number // 造成的物理伤害
  physicalDamageDealtToChampions: number // 对英雄造成的物理伤害
  physicalDamageTaken: number // 承受的物理伤害
  playerAugment1: number // 玩家增益 1
  playerAugment2: number // 玩家增益 2
  playerAugment3: number // 玩家增益 3
  playerAugment4: number // 玩家增益 4
  playerAugment5: number // 玩家增益 5
  playerAugment6: number // 玩家增益 6
  playerScore0: number // 玩家分数 0
  playerScore1: number // 玩家分数 1
  playerScore2: number // 玩家分数 2
  playerScore3: number // 玩家分数 3
  playerScore4: number // 玩家分数 4
  playerScore5: number // 玩家分数 5
  playerScore6: number // 玩家分数 6
  playerScore7: number // 玩家分数 7
  playerScore8: number // 玩家分数 8
  playerScore9: number // 玩家分数 9
  playerSubteamId: number // 子队 ID
  quadraKills: number // 四杀次数
  sightWardsBoughtInGame: number // 购买的视野守卫数量
  subteamPlacement: number // 子队位置
  teamEarlySurrendered: boolean // 队伍是否提前投降
  timeCCingOthers: number // 控制其他单位的时间
  totalDamageDealt: number // 总伤害
  totalDamageDealtToChampions: number // 对英雄造成的总伤害
  totalDamageTaken: number // 总承受伤害
  totalHeal: number // 总治疗量
  totalMinionsKilled: number // 击杀的小兵数量
  totalTimeCCDealt: number // 总控制时间
  totalUnitsHealed: number // 总治疗单位数量
  visionScore: number // 视野分数
  visionWardsBoughtInGame: number // 购买的视野守卫数量
  wardsKilled: number // 击杀的守卫数量
  wardsPlaced: number // 放置的守卫数量
  win: boolean // 是否胜利
}

export interface Timeline {
  role: string // 角色
  lane: string // 所在路径
}

export interface Team {
  bans: Ban[] // 禁用英雄
  baronKills: number // 击杀大龙次数
  dragonKills: number // 击杀小龙次数
  firstBaron: boolean // 是否第一击杀大龙
  firstDragon: boolean // 是否第一击杀小龙
  firstInhibitor: boolean // 是否第一击杀水晶塔
  firstRiftHerald: boolean // 是否第一击杀先锋
  firstTower: boolean // 是否第一击杀塔
  inhibitors: number // 击杀水晶塔数量
  riftHeraldKills: number // 击杀先锋次数
  teamId: number // 队伍 ID
  towerKills: number // 击杀塔数量
  vilemawKills: number // 击杀恶心蜘蛛次数
  win: boolean // 是否胜利
}

export interface Ban {
  championId: number // 禁用英雄 ID
  pickTurn: number // 禁用回合
}

export interface GameWrapper extends Game {
  queue: Queue
  queueName: string
}
