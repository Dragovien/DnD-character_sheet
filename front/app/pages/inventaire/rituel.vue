<template>
    <div v-if="store.character" class="page">
        <!-- Rituel -->
        <UCard variant="subtle">
            <template #header>
                <h3 class="text-xl font-semibold">
                    <UIcon name="game-icons:smoke-bomb" class="size-5" /> Rituel
                </h3>
            </template>

            <p class="whitespace-pre-line">{{store.character.equipment.find((item) => item.title ===
                'Rituel')?.content}}</p>

        </UCard>
    </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from '~/stores/character'

const store = useCharacterStore()
</script>