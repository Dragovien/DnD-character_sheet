<template>
    <div v-if="store.character" class="p-6 border rounded bg-gray-50 space-y-6">
        <!-- IDENTITÉ -->
        <h2 class="text-2xl font-bold">📘 Fiche de personnage</h2>
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

        <!-- APPARENCE & HISTOIRE -->
        <h3 class="text-xl font-semibold">🧍 Apparence</h3>
        <p class="whitespace-pre-line">{{ store.character.appearance }}</p>

        <h3 class="text-xl font-semibold">📜 Histoire</h3>
        <p class="whitespace-pre-line">{{ store.character.backstory }}</p>
    </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from '~/stores/character'

const store = useCharacterStore()
</script>