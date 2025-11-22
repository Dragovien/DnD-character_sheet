<template>
    <div v-if="store.character" class="p-6 border rounded bg-gray-50 space-y-6">
        <!-- COMBAT -->
        <h3 class="text-xl font-semibold mt-4">⚔️ Combat</h3>

        <div class="grid grid-cols-3 gap-4">
            <p><strong>CA :</strong> {{ store.character.ac }}</p>
            <p><strong>Bonus de maîtrise :</strong> {{ store.character.pb }}</p>
            <p><strong>Initiative :</strong> {{ store.character.init }}</p>

            <p><strong>Vitesse :</strong> {{ store.character.speed }}</p>
            <p><strong>Taille :</strong> {{ store.character.size }}</p>
            <p><strong>Perception passive :</strong> {{ store.character.passive }}</p>
        </div>

        <!-- HP -->
        <div class="grid grid-cols-3 gap-4">
            <p><strong>PV max :</strong> {{ store.character.hpMax }}</p>
            <p><strong>PV actuels :</strong> {{ store.character.hpCurrent }}</p>
            <p><strong>PV temporaires :</strong> {{ store.character.hpTemp }}</p>
        </div>

        <!-- Hit Dice -->
        <div class="grid grid-cols-2 gap-4">
            <p><strong>Dés de vie :</strong> {{ store.character.hitDiceMax }}</p>
            <p><strong>Dés de vie dépensés :</strong> {{ store.character.hitDiceSpent }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from '~/stores/character'

const store = useCharacterStore()
</script>