<template>
    <div v-if="store.character" class="page">
        <UCard variant="subtle">
            <template #header>
                <h3 class="text-xl font-semibold">🎯 Compétences</h3>
            </template>

            <div class="container skill_roll_container">
                <div class="roll_container">
                    <div>
                        <p>Résultat du lancer de dé:</p>
                        <UInputNumber v-model="value" :min="0" :max="20" />
                    </div>

                    <div>
                        <p>Compétence:</p>
                        <UInputMenu v-model="skill_value" value-key="value" :items="items"
                            placeholder="Choisir une compétence" />
                    </div>
                </div>

                <div v-if="selectedSkill" class="mt-4 text-lg font-semibold">
                    {{ selectedSkill.label }} : {{ selectedSkill.value }}
                </div>

                <div v-else class="mt-4 text-sm text-gray-500">
                    Sélectionnez une compétence pour afficher le résultat.
                </div>
            </div>
        </UCard>
    </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from '~/stores/character'

const store = useCharacterStore()

const value = ref(0)
const skill_value = ref('')   // ✅ Doit être une string

const skillsMap = [
    { key: 'skill1', label: 'Athlétisme' },
    { key: 'skill2', label: 'Acrobaties' },
    { key: 'skill3', label: 'Discrétion' },
    { key: 'skill4', label: 'Escamotage' },
    { key: 'skill5', label: 'Arcanes' },
    { key: 'skill6', label: 'Histoire' },
    { key: 'skill7', label: 'Investigation' },
    { key: 'skill8', label: 'Nature' },
    { key: 'skill9', label: 'Religion' },
    { key: 'skill10', label: 'Dressage' },
    { key: 'skill11', label: 'Intuition' },
    { key: 'skill12', label: 'Médecine' },
    { key: 'skill13', label: 'Perception' },
    { key: 'skill14', label: 'Survie' },
    { key: 'skill15', label: 'Intimidation' },
    { key: 'skill16', label: 'Persuasion' },
    { key: 'skill17', label: 'Représentation' },
    { key: 'skill18', label: 'Tromperie' }
]


const items = skillsMap.map(s => ({
    label: s.label,
    value: s.key        // UInputMenu renvoie cette value
}))

const selectedSkill = computed(() => {
    if (!skill_value.value) return null

    const skill = skillsMap.find(s => s.key === skill_value.value)
    if (!skill) return null

    if (store.character) {

        return {
            label: skill.label,
            value: store.character.skills[skill.key as keyof typeof store.character.skills] + value.value
        }
    }
})
</script>

<style scoped>
.roll_container {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
}
</style>