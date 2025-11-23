<template>
    <div v-if="store.character" class="page">
        <UCard>
            <template #header>
                <h3 class="text-xl font-semibold"> Langues</h3>
            </template>

            <p><strong>Langues :</strong> {{ store.character.languages }}</p>
        </UCard>
    </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from '~/stores/character'

const store = useCharacterStore()
</script>

<style scoped></style>