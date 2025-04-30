/**
 * {
 * "id": 1,
 * "name": "安妮",
 * "alias": "Annie",
 * "squarePortraitPath": "/lol-game-data/assets/v1/champion-icons/1.png",
 * "roles": [
 * "mage",
 * "support"
 * ]
 * }
 */
export interface Hero {
  id: number
  name: string
  alias: string
  squarePortraitPath: string
  roles: string[]
}

export interface HeroSkin {
  id: number
  isBase: boolean
  name: string
  splashPath: string
  uncenteredSplashPath: string
  tilePath: string
  loadScreenPath: string
  loadScreenVintagePath: string
  skinType: string
  rarity: string
  isLegacy: boolean
  splashVideoPath: string | null
  collectionSplashVideoPath: string | null
  collectionCardHoverVideoPath: string | null
  featuresText: string | null
  chromaPath: string
  chromas: Chroma[]
  emblems: any // Not enough data to specify the type
  regionRarityId: number
  rarityGemPath: string | null
  skinLines: SkinLine[]
  description: string
}

interface Chroma {
  id: number
  name: string
  chromaPath: string
  colors: string[]
  descriptions: ChromaDescription[]
  rarities: ChromaRarity[]
}

interface ChromaDescription {
  region: string
  description: string
}

interface ChromaRarity {
  region: string
  rarity: number
}

interface SkinLine {
  id: number
}

export interface OwnedHero {
  active: boolean
  alias: string
  banVoPath: string
  baseLoadScreenPath: string
  baseSplashPath: string
  botEnabled: boolean
  chooseVoPath: string
  disabledQueues: any[] // 如果你知道具体类型，可以替换 `any`
  freeToPlay: boolean
  id: number
  name: string
  ownership: Ownership
  purchased: number
  rankedPlayEnabled: boolean
  roles: string[]
  squarePortraitPath: string
  stingerSfxPath: string
  title: string
}

interface Rental {
  endDate: number
  purchaseDate: number
  rented: boolean
  winCountRemaining: number
}

export interface PickHeroSkin {
  championId: number
  chromaPath: string | null
  chromas: any[] // 根据 chromas 的内容更改类型
  collectionSplashVideoPath: string | null
  disabled: boolean
  emblems: any[] // 根据 emblems 的内容更改类型
  featuresText: string | null
  id: number
  isBase: boolean
  lastSelected: boolean
  loadScreenPath: string
  name: string
  ownership: Ownership
  questSkinInfo: QuestSkinInfo
  rarityGemPath: string
  skinAugments: SkinAugments
  skinType: string
  splashPath: string
  splashVideoPath: string | null
  stillObtainable: boolean
  tilePath: string
  uncenteredSplashPath: string
}

interface Ownership {
  loyaltyReward: boolean
  owned: boolean
  rental: Rental
  xboxGPReward: boolean
}

interface Rental {
  endDate: number
  purchaseDate: number
  rented: boolean
  winCountRemaining: number
}

interface QuestSkinInfo {
  collectionCardPath: string
  collectionDescription: string
  descriptionInfo: any[] // 根据 descriptionInfo 的内容更改类型
  name: string
  productType: string | null
  splashPath: string
  tiers: any[] // 根据 tiers 的内容更改类型
  tilePath: string
  uncenteredSplashPath: string
}

interface SkinAugments {
  augments: any[] // 根据 augments 的内容更改类型
}
