<template>
    <div v-if="store.character" class="page">
        <UCard>
            <template #header>
                <h3 class="text-xl font-semibold">🛡️ Liens aux objets magiques</h3>
            </template>

            <ul class="list-disc ml-6">
                <li v-for="(w, i) in store.character.attunements" :key="i" class="text-sm">
                    <p><strong>{{ splitItem(w).name }}:</strong> {{ splitItem(w).description }}</p>

                </li>
            </ul>
        </UCard>
    </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from '~/stores/character'

const store = useCharacterStore()

function splitItem(line: string) {
    const index = line.indexOf(':')

    return {
        name: line.slice(0, index).trim(),
        description: line.slice(index + 1).trim()
    }
}

</script>

<style scoped></style>