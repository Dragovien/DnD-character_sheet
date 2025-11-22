// /stores/character.ts
import { defineStore } from 'pinia'
import type { CharacterSheet } from '~/types/CharacterSheet'

export const useCharacterStore = defineStore('character', {
    state: () => ({
        character: null as CharacterSheet | null
    }),

    actions: {
        setCharacter(data: CharacterSheet) {
            this.character = data
        },

        clearCharacter() {
            this.character = null
        }
    }
})
