interface GameModeAssets {
  champSelectBackgroundSound: string
  champSelectFlyoutBackground: string
  gameSelectIconActive: string
  gameSelectIconActiveVideo: string
  gameSelectIconDefault: string
  gameSelectIconDisabled: string
  gameSelectIconHover: string
  gameSelectIconIntroVideo: string
  gameflowBackground: string
  gameflowBackgroundDark: string
  gameselectButtonHoverSound: string
  iconDefeat: string
  iconDefeatV2: string
  iconDefeatVideo: string
  iconEmpty: string
  iconHover: string
  iconLeaver: string
  iconLeaverV2: string
  iconLossForgivenV2: string
  iconV2: string
  iconVictory: string
  iconVictoryVideo: string
  musicInqueueLoopSound: string
  notificationBackground: string
  notificationIcon: string
  partiesBackground: string
  postgameAmbienceLoopSound: string
  readyCheckBackground: string
  readyCheckBackgroundSound: string
  sfxAmbiencePregameLoopSound: string
  socialIconLeaver: string
  socialIconVictory: string
  tutorialBg: string
}

interface TutorialCard {
  description: string
  footer: string
  header: string
  imagePath: string
}

export interface LolMap {
  assets: GameModeAssets
  categorizedContentBundles: object
  description: string
  gameMode: string
  gameModeDescription: string
  gameModeName: string
  gameModeShortName: string
  gameMutator: string
  id: number
  isDefault: boolean
  isRGM: boolean
  locStrings: {
    tutorial_subheader: string
    tutorial_title: string
  }
  mapStringId: string
  name: string
  perPositionDisallowedSummonerSpells: object
  perPositionRequiredSummonerSpells: {
    any: {
      spells: number[]
    }
  }
  platformId: string
  platformName: string
  properties: {
    suppressRunesMasteriesPerks: boolean
  }
  tftSetOverride: string
  tutorialCards: TutorialCard[]
}
