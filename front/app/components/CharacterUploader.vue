<template>
  <!-- Upload PDF -->
  <UFileUpload layout="list" :dropzone="true" :interactive="true" accept="application/pdf"
    label="Fiche de personnage D&D 5e" description="PDF" class="w-96 min-h-96" @update:modelValue="upload" />

</template>

<script setup lang="ts">
import { PDFDocument } from 'pdf-lib'
import type { CharacterSheet } from '~/types/CharacterSheet'
import { useCharacterStore } from '~/stores/character'

const store = useCharacterStore()

function mapPdfFieldsToCharacter(fields: Record<string, string>): CharacterSheet {
  const toNum = (v: any) => {
    const n = Number(v)
    return Number.isNaN(n) ? 0 : n
  }

  // helper to try multiple possible field names
  const pick = (...names: string[]) => {
    for (const n of names) {
      if (fields[n] !== undefined && fields[n] !== '') return fields[n]
    }
    return ''
  }

  return {
    charactername: pick('charactername', 'nom du personnage', 'name') || '',
    background: pick('background', 'historique') || '',
    species: pick('species', 'espèce') || '',
    class: pick('class', 'classe') || '',
    subclass: pick('subclass') || '',
    level: toNum(pick('level', 'niveau')),
    alignment: pick('alignment', 'alignement') || '',
    xp: pick('xp', 'xp') || '',

    ac: pick('ac', 'classe d’armure', 'CA') || '',
    pb: pick('pb', 'bonus de maîtrise') || '',
    init: pick('init', 'initiative') || '',
    speed: pick('speed', 'vitesse') || '',
    size: pick('size', 'taille') || '',
    passive: pick('passive', 'perception passive') || '',

    // ---------------------------
    // ABILITIES
    // ---------------------------
    abilities: {
      str: toNum(pick('str', 'FOR', 'force')),
      dex: toNum(pick('dex', 'DEX', 'dexterity')),
      con: toNum(pick('con', 'CON', 'constitution')),
      int: toNum(pick('int', 'INT', 'intelligence')),
      wis: toNum(pick('wis', 'SAG', 'wisdom')),
      cha: toNum(pick('cha', 'CHA', 'charisma')),

      modstr: toNum(pick('modstr')),
      moddex: toNum(pick('moddex')),
      modcon: toNum(pick('modcon')),
      modint: toNum(pick('modint')),
      modwis: toNum(pick('modwis')),
      modcha: toNum(pick('modcha')),
    },

    // ---------------------------
    // SAVES
    // ---------------------------
    saves: {
      save1: toNum(pick('save1', 'save_for')),
      save2: toNum(pick('save2', 'save_dex')),
      save3: toNum(pick('save3', 'save_con')),
      save4: toNum(pick('save4', 'save_int')),
      save5: toNum(pick('save5', 'save_wis')),
      save6: toNum(pick('save6', 'save_cha')),
    },

    // ---------------------------
    // SKILLS
    // ---------------------------
    skills: {
      skill1: toNum(pick('skill1', 'skill_ath', 'Athlétisme')),
      skill2: toNum(pick('skill2', 'skill_acro', 'Acrobaties')),
      skill3: toNum(pick('skill3', 'skill_disc', 'Discrétion')),
      skill4: toNum(pick('skill4', 'skill_esc', 'Escamotage')),
      skill5: toNum(pick('skill5', 'skill_arc', 'Arcanes')),
      skill6: toNum(pick('skill6', 'skill_hist', 'Histoire')),
      skill7: toNum(pick('skill7', 'skill_inv', 'Investigation')),
      skill8: toNum(pick('skill8', 'skill_nat', 'Nature')),
      skill9: toNum(pick('skill9', 'skill_rel', 'Religion')),
      skill10: toNum(pick('skill10', 'skill_dre', 'Dressage')),
      skill11: toNum(pick('skill11', 'skill_ins', 'Intuition')),
      skill12: toNum(pick('skill12', 'skill_med', 'Médecine')),
      skill13: toNum(pick('skill13', 'skill_per', 'Perception')),
      skill14: toNum(pick('skill14', 'skill_sur', 'Survie')),
      skill15: toNum(pick('skill15', 'skill_inti', 'Intimidation')),
      skill16: toNum(pick('skill16', 'skill_perc', 'Persuasion')),
      skill17: toNum(pick('skill17', 'skill_repr', 'Représentation')),
      skill18: toNum(pick('skill18', 'skill_trom', 'Tromperie')),


    },

    traits: pick('traits', 'traits raciaux') || '',
    features1: pick('features1', 'features de classe') || '',
    features2: pick('features2', 'features sous-classe') || '',
    feats: pick('feats', 'dons') || '',

    hpMax: toNum(pick('hp-max', 'hpmax', 'hp_max')),
    hpCurrent: toNum(pick('hp-current')),
    hpTemp: toNum(pick('hp-temp')),

    hitDiceMax: pick('hd-max', 'hd_max') || '',
    hitDiceSpent: pick('hd-spent', 'hd_spent') || '',

    cp: toNum(pick('cp', 'pc', 'CP')),
    sp: toNum(pick('sp', 'PA')),
    ep: toNum(pick('ep', 'PE')),
    gp: toNum(pick('gp', 'PO')),
    pp: toNum(pick('pp', 'PP')),

    appearance: pick('appearance', 'apparence') || '',
    equipment: pick('equipment', 'equipement') || '',
    backstory: pick('backstory', 'Histoire') || '',
    languages: pick('languages', 'langues') || '',

    // ---------------------------
    // WEAPONS
    // ---------------------------
    weapons: Array.from({ length: 6 }).map((_, i) => {
      const base = (i + 1).toString()
      return {
        name: pick(`weapons${base}1`) || '',
        bonus: pick(`weapons${base}2`) || '',
        damage: pick(`weapons${base}3`) || '',
        notes: pick(`weapons${base}4`) || '',
      }
    }).filter(w => w.name.trim() !== ''),

    // ---------------------------
    // SPELLS
    // ---------------------------
    spells: Array.from({ length: 30 }).map((_, i) => {
      const idx = i + 1

      const isChecked = (v: any) => {
        if (!v) return false
        return ['yes', 'on', 'oui', '1', 'true'].includes(String(v).toLowerCase())
      }

      const rawRange = fields[`spell${idx}r`] || ''
      const parts = rawRange.split('/')

      return {
        name: fields[`spell${idx}`] || '',
        level: fields[`spell${idx}l`] ? toNum(fields[`spell${idx}l`]) : null,
        effect: fields[`spell${idx}c`] || '',
        incantationTime: parts[0]?.trim() ?? '',
        range: parts[1]?.trim() ?? '',
        concentration: isChecked(fields[`c${idx}`]),
        rituel: isChecked(fields[`r${idx}`]),
        materiel: isChecked(fields[`m${idx}`])
      }
    }).filter(s => s.name && s.name.trim() !== ''),

    // Spell slots (spell levels per class)
    slot1: pick('slot1') || '',
    slot2: pick('slot2') || '',
    slot3: pick('slot3') || '',
    slot4: pick('slot4') || '',
    slot5: pick('slot5') || '',
    slot6: pick('slot6') || '',
    slot7: pick('slot7') || '',
    slot8: pick('slot8') || '',
    slot9: pick('slot9') || '',

    spellMod: pick('spell-mod') || '',
    spellDC: pick('spell-dc') || '',
    spellBonus: pick('spell-bonus') || '',

    // ---------------------------
    // ATTUNEMENTS (PROPER FIX)
    // ---------------------------
    attunements: [
      pick('attun1'),
      pick('attun2'),
      pick('attun3'),
    ].filter(Boolean)
  }

}

async function upload(file: File | null | undefined) {
  if (!file) return

  const buffer = await file.arrayBuffer()
  const pdfDoc = await PDFDocument.load(buffer)

  const form = pdfDoc.getForm()
  const fields = form.getFields()

  const raw = {} as Record<string, string>

  for (const f of fields) {
    try {
      const name = f.getName()
      // try to read common field types (TextField, etc.)
      let value = ''
      try {
        value = (f as any).getText() ?? ''

      } catch {
        try {
          value = (f as any).getValue() ?? ''
        } catch {
          try {
            if (typeof (f as any).isChecked === 'function') {
              console.log(name)
              // Checkbox détectée
              value = (f as any).isChecked() ? 'Yes' : 'Off'
              console.log(value)
            } else if (typeof (f as any).getOnValue === 'function') {
              // Autre méthode possible
              value = (f as any).getOnValue()
            } else {
              value = ''
            }
          } catch {
            value = ''
          }
        }
      }
      raw[name] = String(value)
    } catch (e) {
      // ignore individual field errors
    }
  }

  store.setCharacter(mapPdfFieldsToCharacter(raw))
}
</script>

<style scoped></style>
