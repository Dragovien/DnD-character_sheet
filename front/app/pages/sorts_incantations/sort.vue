<template>
    <div v-if="store.character" class="page">
        <!-- SORTS -->
        <h3 class="text-xl font-semibold">
            <UIcon name="game-icons:bolt-spell-cast" class="size-5" /> Sorts
        </h3>
        <div class="container">
            <UCard v-for="(s, i) in store.character.spells" :key="i" variant="subtle" class="spell_card">
                <template #header>
                    <div class="header">

                        <strong>{{ s.name }}</strong>
                        (Niveau {{ s.level }})
                    </div>
                </template>

                <ul class="list-disc ml-6">
                    <li class="text-sm"><strong>Temps d'incantation :</strong> {{ s.incantationTime }}</li>
                    <li class="text-sm"><strong>Portée :</strong> {{ s.range }}</li>
                    <li class="text-sm"><strong>Effet :</strong> {{ s.effect }}</li>
                    <li class="text-sm"><strong>Concentration:</strong> {{ s.concentration === true ? 'Oui' : 'Non' }}
                    </li>
                    <li class="text-sm"><strong>Rituel:</strong> {{ s.rituel === true ? 'Oui' : 'Non' }}</li>
                    <li class="text-sm"><strong>Matériel:</strong> {{ s.materiel === true ? 'Oui' : 'Non' }}</li>
                </ul>

            </UCard>
        </div>


        <!-- EMPLACEMENTS DE SORTS -->
        <h4 class="font-semibold mt-4">Emplacements de sorts</h4>
        <UCard variant="subtle">
            <div class="grid grid-cols-3 gap-2 text-sm">
                <div v-for="(slot, i) in store.character.spellSlots">
                    <p>Sorts niveau {{ i }}:
                        <span><b>{{ slot.used }}</b> utilisé(s) / <b>{{ slot.total }}</b></span>
                    </p>
                </div>
            </div>
        </UCard>
    </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from '~/stores/character'

const store = useCharacterStore()
</script>

<style scoped>
.container {
    flex-wrap: wrap;
    row-gap: 2rem;
    column-gap: 2rem;
}

.header {
    text-align: center;
}

.spell_card {
    min-width: 45%;
}
</style>