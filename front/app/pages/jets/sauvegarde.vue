<template>
    <div v-if="store.character" class="page">
        <UCard>
            <template #header>
                <h3 class="text-xl font-semibold">🛡️ Jets de sauvegarde</h3>
            </template>

            <div class="container skill_roll_container">
                <div class="roll_container">
                    <p>Résultat du lancer de dé:</p>
                    <UInputNumber v-model="value" :min="0" :max="20" />
                </div>

                <ul class="grid grid-cols-3 gap-2">
                    <li>FOR : {{ store.character.saves.save1 + value }}</li>
                    <li>DEX : {{ store.character.saves.save2 + value }}</li>
                    <li>CON : {{ store.character.saves.save3 + value }}</li>
                    <li>INT : {{ store.character.saves.save4 + value }}</li>
                    <li>SAG : {{ store.character.saves.save5 + value }}</li>
                    <li>CHA : {{ store.character.saves.save6 + value }}</li>
                </ul>
            </div>


        </UCard>
    </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from '~/stores/character'

const store = useCharacterStore()
const value = ref(0)
</script>

<style scoped></style>