<template>
    <div v-if="store.character" class="page">
        <!-- INVENTAIRE -->
        <h3 class="text-xl font-semibold">🎒 Équipement</h3>
        <p class="whitespace-pre-line">{{ store.character.equipment }}</p>
    </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from '~/stores/character'

const store = useCharacterStore()
</script>