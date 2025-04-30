export interface RankQueueMapVal {
  division: string // 当前段位
  highestDivision: string // 历史最高段位
  highestTier: string // 历史最高阶级
  isProvisional: boolean // 是否处于定级赛
  leaguePoints: number // 当前段位的胜点
  losses: number // 失败场次
  miniSeriesProgress: string // 定级赛进度
  previousSeasonEndDivision: string // 上赛季结束时的段位
  previousSeasonEndTier: string // 上赛季结束时的阶级
  previousSeasonHighestDivision: string // 上赛季最高段位
  previousSeasonHighestTier: string // 上赛季最高阶级
  provisionalGameThreshold: number // 定级赛总局数
  provisionalGamesRemaining: number // 定级赛剩余局数
  queueType: string // 队列类型
  ratedRating: number // 排名积分
  ratedTier: string // 当前评分的阶级
  tier: string // 当前等级
  warnings: string | null // 警告信息
  wins: number // 胜利场次
}
