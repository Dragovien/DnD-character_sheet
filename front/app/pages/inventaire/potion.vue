<template>
    <div v-if="store.character" class="page">
        <!-- Potions -->
        <UCard variant="subtle">
            <template #header>
                <h3 class="text-xl font-semibold">
                    <UIcon name="game-icons:potion-ball" class="size-5" /> Potions
                </h3>
            </template>

            <p class="whitespace-pre-line">{{store.character.equipment.find((item) => item.title ===
                'Potions')?.content}}</p>

        </UCard>
    </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from '~/stores/character'

const store = useCharacterStore()
</script>