<template>
    <div v-if="store.character" class="page">
        <!-- IDENTITÉ -->
        <UCard class="identity">
            <template #header>
                <h2 class="text-2xl font-bold">
                    <UIcon name="game-icons:notebook" class="size-5" /> Fiche de personnage
                </h2>
            </template>

            <div class="grid grid-cols-2 gap-4">
                <p><strong>Nom :</strong> {{ store.character.charactername }}</p>
                <p><strong>Espèce :</strong> {{ store.character.species }}</p>
                <p><strong>Classe :</strong> {{ store.character.class }}</p>
                <p><strong>Sous-classe :</strong> {{ store.character.subclass }}</p>
                <p><strong>Niveau :</strong> {{ store.character.level }}</p>
                <p><strong>Background :</strong> {{ store.character.background }}</p>
                <p><strong>Alignement :</strong> {{ store.character.alignment }}</p>
                <p><strong>XP :</strong> {{ store.character.xp }}</p>
            </div>

        </UCard>

        <div class="flex-container">
            <!-- HISTOIRE -->
            <UCard class="histoire">
                <template #header>
                    <h3 class="text-xl font-semibold">
                        <UIcon name="game-icons:scroll-unfurled" class="size-5" /> Histoire
                    </h3>
                </template>

                <p class="whitespace-pre-line">{{ store.character.backstory }}</p>

            </UCard>

            <div class="appearance-lang">
                <!-- APPARENCE -->
                <UCard class="appearance">
                    <template #header>
                        <h3 class="text-xl font-semibold">
                            <UIcon name="game-icons:character" class="size-5" /> Apparence
                        </h3>
                    </template>

                    <p class="whitespace-pre-line">{{ store.character.appearance }}</p>

                </UCard>

                <!-- LANGUES -->
                <UCard class="lang">
                    <template #header>
                        <h3 class="text-xl font-semibold">
                            <UIcon name="ri:speak-fill" class="size-5" /> Langues
                        </h3>
                    </template>

                    <p><strong>Langues :</strong> {{ store.character.languages }}</p>
                </UCard>
            </div>
        </div>


    </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from '~/stores/character'

const store = useCharacterStore()
</script>

<style scoped>
.flex-container {
    display: flex;
    column-gap: 2rem;
}

.histoire,
.appearance-lang {
    max-width: 50%;
}

.appearance-lang {
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
}
</style>