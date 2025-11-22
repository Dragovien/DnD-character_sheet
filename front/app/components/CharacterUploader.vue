<template>
  <div class="space-y-8">

    <!-- Upload PDF -->
    <UFileUpload layout="list" :dropzone="true" :interactive="true" accept="application/pdf"
      label="Fiche de personnage D&D 5e" description="PDF" class="w-96 min-h-48" @update:modelValue="upload" />

    <!-- Full Character Sheet -->
    <div v-if="store.character" class="p-6 border rounded bg-gray-50 space-y-6">

      <!-- CARACTÉRISTIQUES -->
      <h3 class="text-xl font-semibold mt-4">💠 Caractéristiques</h3>

      <div class="grid grid-cols-3 gap-4">
        <div><strong>FOR :</strong> {{ store.character.abilities.str }} ({{ formatMod(store.character.abilities.modstr)
          }})</div>
        <div><strong>DEX :</strong> {{ store.character.abilities.dex }} ({{ formatMod(store.character.abilities.moddex)
          }})</div>
        <div><strong>CON :</strong> {{ store.character.abilities.con }} ({{ formatMod(store.character.abilities.modcon)
          }})</div>
        <div><strong>INT :</strong> {{ store.character.abilities.int }} ({{ formatMod(store.character.abilities.modint)
          }})</div>
        <div><strong>SAG :</strong> {{ store.character.abilities.wis }} ({{ formatMod(store.character.abilities.modwis)
          }})</div>
        <div><strong>CHA :</strong> {{ store.character.abilities.cha }} ({{ formatMod(store.character.abilities.modcha)
          }})</div>
      </div>

      <!-- SAUVEGARDES -->
      <h3 class="text-xl font-semibold">🛡️ Jets de sauvegarde</h3>

      <ul class="grid grid-cols-3 gap-2">
        <li>FOR : {{ store.character.saves.save1 }}</li>
        <li>DEX : {{ store.character.saves.save2 }}</li>
        <li>CON : {{ store.character.saves.save3 }}</li>
        <li>INT : {{ store.character.saves.save4 }}</li>
        <li>SAG : {{ store.character.saves.save5 }}</li>
        <li>CHA : {{ store.character.saves.save6 }}</li>
      </ul>

      <!-- COMPÉTENCES -->
      <h3 class="text-xl font-semibold">🎯 Compétences</h3>

      <div class="grid grid-cols-2 gap-1 text-sm">
        <p>Athlétisme : {{ store.character.skills.skill1 }}</p>
        <p>Acrobaties : {{ store.character.skills.skill10 }}</p>
        <p>Discrétion : {{ store.character.skills.skill11 }}</p>
        <p>Escamotage : {{ store.character.skills.skill12 }}</p>
        <p>Arcanes : {{ store.character.skills.skill13 }}</p>
        <p>Histoire : {{ store.character.skills.skill14 }}</p>
        <p>Investigation : {{ store.character.skills.skill15 }}</p>
        <p>Nature : {{ store.character.skills.skill16 }}</p>
        <p>Religion : {{ store.character.skills.skill17 }}</p>
        <p>Intuition : {{ store.character.skills.skill2 }}</p>
        <p>Médecine : {{ store.character.skills.skill3 }}</p>
        <p>Perception : {{ store.character.skills.skill4 }}</p>
        <p>Survie : {{ store.character.skills.skill5 }}</p>
        <p>Intimidation : {{ store.character.skills.skill6 }}</p>
        <p>Persuasion : {{ store.character.skills.skill7 }}</p>
        <p>Représentation : {{ store.character.skills.skill8 }}</p>
        <p>Tromperie : {{ store.character.skills.skill9 }}</p>
      </div>

      <!-- LANGUES / TRAITS -->
      <h3 class="text-xl font-semibold">🧬 Race / Traits</h3>

      <p><strong>Traits raciaux :</strong></p>
      <p class="whitespace-pre-line">{{ store.character.traits }}</p>

      <p><strong>Langues :</strong> {{ store.character.languages }}</p>

      <!-- CAPACITÉS -->
      <h3 class="text-xl font-semibold">⭐ Capacités & Dons</h3>

      <div>
        <p class="font-semibold">Capacités de classe :</p>
        <p class="whitespace-pre-line">{{ store.character.features1 }}</p>

        <p class="font-semibold mt-3">Capacités de sous-classe :</p>
        <p class="whitespace-pre-line">{{ store.character.features2 }}</p>

        <p class="font-semibold mt-3">Dons :</p>
        <p class="whitespace-pre-line">{{ store.character.feats }}</p>
      </div>

      <!-- ARMES -->
      <h3 class="text-xl font-semibold">🗡️ Armes</h3>

      <ul class="list-disc ml-6">
        <li v-for="(w, i) in store.character.weapons" :key="i" class="text-sm">
          <strong>{{ w.name }}</strong>
          — Bonus {{ w.bonus }}, Dégâts {{ w.damage }}
          <span v-if="w.notes">({{ w.notes }})</span>
        </li>
      </ul>

      <!-- MÉTADONNÉES -->
      <h4 class="mt-4 font-semibold">Méta</h4>
      <div class="grid grid-cols-2 gap-2 text-sm">
        <div>Spell modifier: {{ store.character.spellMod }}</div>
        <div>Spell DC: {{ store.character.spellDC }}</div>
        <div>Spell bonus: {{ store.character.spellBonus }}</div>
        <div>Attunements: {{ store.character.attunements?.join(', ') }}</div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { PDFDocument } from 'pdf-lib'
import type { CharacterSheet } from '~/types/CharacterSheet'
import { useCharacterStore } from '~/stores/character'

const store = useCharacterStore()

const formatMod = (v: number | undefined) => {
  if (v === undefined || v === null) return ''
  return v >= 0 ? `+${v}` : `${v}`
}

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
      skill2: toNum(pick('skill2', 'skill_ins', 'Intuition')),
      skill3: toNum(pick('skill3', 'skill_med', 'Médecine')),
      skill4: toNum(pick('skill4', 'skill_per', 'Perception')),
      skill5: toNum(pick('skill5', 'skill_sur', 'Survie')),
      skill6: toNum(pick('skill6', 'skill_inti', 'Intimidation')),
      skill7: toNum(pick('skill7', 'skill_perc', 'Persuasion')),
      skill8: toNum(pick('skill8', 'skill_repr', 'Représentation')),
      skill9: toNum(pick('skill9', 'skill_trom', 'Tromperie')),
      skill10: toNum(pick('skill10', 'skill_acro', 'Acrobaties')),
      skill11: toNum(pick('skill11', 'skill_disc', 'Discrétion')),
      skill12: toNum(pick('skill12', 'skill_esc', 'Escamotage')),
      skill13: toNum(pick('skill13', 'skill_arc', 'Arcanes')),
      skill14: toNum(pick('skill14', 'skill_hist', 'Histoire')),
      skill15: toNum(pick('skill15', 'skill_inv', 'Investigation')),
      skill16: toNum(pick('skill16', 'skill_nat', 'Nature')),
      skill17: toNum(pick('skill17', 'skill_rel', 'Religion')),
      skill18: toNum(pick('skill18')),
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
      return {
        name: fields[`spell${idx}`] || '',
        level: fields[`spell${idx}l`] ? toNum(fields[`spell${idx}l`]) : null,
        effect: fields[`spell${idx}c`] || '',
        range: fields[`spell${idx}r`] || '',
      }
    }).filter(s => s.name && s.name.trim() !== ''),

    // Spell slots (spell levels per class)
    slot1: pick('slot1') || '',
    slot2: pick('slot2') || '',
    slot3: pick('slot3') || '',
    slot4: pick('slot4') || '',
    slot5: pick('slot5') || '',

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
          value = ''
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

<style scoped>
/* minimal styling, the project may use Tailwind — adjust as needed */
</style>
