<template>
    <div v-if="store.character" class="p-6 border rounded bg-gray-50 space-y-6">
        <!-- SORTS -->
        <h3 class="text-xl font-semibold">✨ Sorts</h3>

        <ul class="list-disc ml-6">
            <li v-for="(s, i) in store.character.spells" :key="i" class="text-sm">
                <strong>{{ s.name }}</strong>
                (Niveau {{ s.level }})
                — Portée : {{ s.range }}
                — Effet : {{ s.effect }}
            </li>
        </ul>

        <!-- EMPLACEMENTS DE SORTS -->
        <h4 class="font-semibold mt-4">Emplacements de sorts</h4>
        <div class="grid grid-cols-5 gap-2 text-sm">
            <div>Slot1: {{ store.character.slot1 }}</div>
            <div>Slot2: {{ store.character.slot2 }}</div>
            <div>Slot3: {{ store.character.slot3 }}</div>
            <div>Slot4: {{ store.character.slot4 }}</div>
            <div>Slot5: {{ store.character.slot5 }}</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from '~/stores/character'

const store = useCharacterStore()
</script>