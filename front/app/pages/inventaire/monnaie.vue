<template>
    <div v-if="store.character" class="page">
        <!-- MONNAIE -->
        <h4 class="font-semibold mt-4">💰 Monnaie</h4>
        <div class="grid grid-cols-5 gap-2">
            <p>PC : {{ store.character.cp }}</p>
            <p>PA : {{ store.character.sp }}</p>
            <p>PE : {{ store.character.ep }}</p>
            <p>PO : {{ store.character.gp }}</p>
            <p>PP : {{ store.character.pp }}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from '~/stores/character'

const store = useCharacterStore()
</script>