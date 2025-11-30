<template>
    <div v-if="store.character" class="page">
        <!-- Loot -->
        <UCard variant="subtle">
            <template #header>
                <h3 class="text-xl font-semibold">
                    <UIcon name="game-icons:open-treasure-chest" class="size-5" /> Loot
                </h3>
            </template>

            <p class="whitespace-pre-line">{{store.character.equipment.find((item) => item.title ===
                'Loot')?.content}}</p>

        </UCard>
    </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from '~/stores/character'

const store = useCharacterStore()
</script>