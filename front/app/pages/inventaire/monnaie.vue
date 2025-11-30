<template>
    <div v-if="store.character" class="page">
        <!-- MONNAIE -->
        <UCard variant="subtle">
            <template #header>
                <h3 class="text-xl font-semibold">
                    <UIcon name="game-icons:coins" class="size-5" /> Monnaie
                </h3>
            </template>

            <div class="grid grid-cols-5 gap-2">
                <p>PC : {{ store.character.cp }}</p>
                <p>PA : {{ store.character.sp }}</p>
                <p>PE : {{ store.character.ep }}</p>
                <p>PO : {{ store.character.gp }}</p>
                <p>PP : {{ store.character.pp }}</p>
            </div>

        </UCard>
    </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from '~/stores/character'

const store = useCharacterStore()
</script>