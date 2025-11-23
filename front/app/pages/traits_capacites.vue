<template>
    <div v-if="store.character" class="page">
        <!-- TRAITS -->
        <UCard>
            <template #header>
                <h3 class="text-xl font-semibold">🧬 Traits</h3>
            </template>

            <p><strong>Traits raciaux :</strong></p>
            <p class="whitespace-pre-line">{{ store.character.traits }}</p>

        </UCard>

        <!-- CAPACITÉS -->
        <UCard>
            <template #header>
                <h3 class="text-xl font-semibold">⭐ Capacités & Dons</h3>
            </template>

            <div>
                <p class="font-semibold">Capacités de classe :</p>
                <p class="whitespace-pre-line">{{ store.character.features1 }}</p>

                <p class="font-semibold mt-3">Capacités de sous-classe :</p>
                <p class="whitespace-pre-line">{{ store.character.features2 }}</p>

                <p class="font-semibold mt-3">Dons :</p>
                <p class="whitespace-pre-line">{{ store.character.feats }}</p>
            </div>

        </UCard>
    </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from '~/stores/character'

const store = useCharacterStore()
</script>

<style scoped></style>