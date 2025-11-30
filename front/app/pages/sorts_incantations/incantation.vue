<template>
    <div v-if="store.character" class="page">
        <UCard variant="subtle">
            <template #header>
                <h3 class="text-xl font-semibold">
                    <UIcon name="game-icons:tongue" class="size-5" /> Caractéristiques d'incantation
                </h3>
            </template>

            <div class="grid grid-cols-2 gap-2 text-sm">
                <div>Modificateur de sort: {{ store.character.spellMod }}</div>
                <div>Sort DC: {{ store.character.spellDC }}</div>
                <div>Bonus aux sorts: {{ store.character.spellBonus }}</div>
            </div>
        </UCard>
    </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from '~/stores/character'

const store = useCharacterStore()
</script>

<style scoped></style>