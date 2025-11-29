
export interface AbilityScores {
  str: number
  dex: number
  con: number
  int: number
  wis: number
  cha: number

  modstr: number
  moddex: number
  modcon: number
  modint: number
  modwis: number
  modcha: number
}

export interface SavingThrows {
  save1: number
  save2: number
  save3: number
  save4: number
  save5: number
  save6: number
}

export interface DeathSavingThrows {
  success1: boolean
  success2: boolean
  success3: boolean
  fail1: boolean
  fail2: boolean
  fail3: boolean
}

export interface MasteryTraining {
  armors: ArmorMastery
  weapons: string,
  tools: string
}

export interface ArmorMastery {
  light: boolean
  intermediate: boolean
  heavy: boolean
  shield: boolean
}

export interface Skills {
  skill1: number
  skill2: number
  skill3: number
  skill4: number
  skill5: number
  skill6: number
  skill7: number
  skill8: number
  skill9: number
  skill10: number
  skill11: number
  skill12: number
  skill13: number
  skill14: number
  skill15: number
  skill16: number
  skill17: number
  skill18: number
}

export interface WeaponEntry {
  name: string
  bonus?: string
  damage?: string
  notes?: string
}

export interface SpellEntry {
  name: string
  level?: number | null
  effect?: string
  incantationTime?: string
  range?: string
  concentration: boolean
  rituel: boolean
  materiel: boolean
}

export interface CharacterSheet {
  charactername: string
  background: string
  species: string
  class: string
  subclass: string
  level: number
  alignment: string
  xp?: string

  ac: string
  pb: string
  init: string
  speed: string
  size: string
  passive: string

  abilities: AbilityScores
  saves: SavingThrows
  deathSaving: DeathSavingThrows
  skills: Skills
  inspiration: boolean

  traits: string
  features1: string
  features2: string
  feats: string

  hpMax: number
  hpCurrent: number
  hpFormula: string
  hpTemp: number
  hitDiceMax: string
  hitDiceSpent: string

  cp: number
  sp: number
  ep: number
  gp: number
  pp: number

  equipment: string
  weapons: WeaponEntry[]
  spells: SpellEntry[]

  backstory: string
  appearance: string

  languages: string

  // spell slots & meta
  spellSlots: Record<number, { total: number; used: number }>
  masteryTraining: MasteryTraining


  spellMod?: string
  spellDC?: string
  spellBonus?: string

  attunements?: string[]
}
