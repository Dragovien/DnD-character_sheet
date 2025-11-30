<template>
    <div v-if="store.character" class="page">
        <UCard variant="subtle">
            <template #header>
                <h3 class="text-xl font-semibold">
                    <UIcon name="game-icons:swords-emblem" class="size-5" /> Armes
                </h3>
            </template>

            <ul class="list-disc ml-6">
                <li v-for="(w, i) in store.character.weapons" :key="i" class="text-sm">
                    <strong>{{ w.name }}</strong>
                    — Bonus {{ w.bonus }}, Dégâts {{ w.damage }}
                    <span v-if="w.notes">({{ w.notes }})</span>
                </li>
            </ul>
        </UCard>
    </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from '~/stores/character'

const store = useCharacterStore()
</script>

<style scoped></style>