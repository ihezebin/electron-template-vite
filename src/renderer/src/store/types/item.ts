/**
 * {
 * "id": 1004,
 * "name": "仙女護符",
 * "description": "<mainText><stats><attention> 50%</attention> 基礎魔力回復</stats><br><br></mainText>",
 * "active": false,
 * "inStore": true,
 * "from": [],
 * "to": [
 * 3012,
 * 3114,
 * 4642
 * ],
 * "categories": [
 * "ManaRegen"
 * ],
 * "maxStacks": 1,
 * "requiredChampion": "",
 * "requiredAlly": "",
 * "requiredBuffCurrencyName": "",
 * "requiredBuffCurrencyCost": 0,
 * "specialRecipe": 0,
 * "isEnchantment": false,
 * "price": 200,
 * "priceTotal": 200,
 * "displayInItemSets": true,
 * "iconPath": "/lol-game-data/assets/ASSETS/Items/Icons2D/1004_Class_T1_FaerieCharm.png"
 * },
 */
export interface Item {
  id: number
  name: string
  description: string
  active: boolean
  inStore: boolean
  from: string[]
  to: number[]
  categories: string[]
  maxStacks: number
  requiredChampion: string
  requiredAlly: string
  requiredBuffCurrencyName: string
  requiredBuffCurrencyCost: number
  specialRecipe: number
  isEnchantment: boolean
  price: number
  priceTotal: number
  displayInItemSets: boolean
  iconPath: string
}
