<template>
    <div v-if="store.character" class="page">
        <!-- SORTS -->
        <h3 class="text-xl font-semibold">✨ Sorts</h3>
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
        <div class="grid grid-cols-5 gap-2 text-sm">
            <div>Slot1: {{ store.character.slot1 }}</div>
            <div>Slot2: {{ store.character.slot2 }}</div>
            <div>Slot3: {{ store.character.slot3 }}</div>
            <div>Slot4: {{ store.character.slot4 }}</div>
            <div>Slot5: {{ store.character.slot5 }}</div>
            <div>Slot6: {{ store.character.slot6 }}</div>
            <div>Slot7: {{ store.character.slot7 }}</div>
            <div>Slot8: {{ store.character.slot8 }}</div>
            <div>Slot9: {{ store.character.slot9 }}</div>

            <!-- pour chaque slot/niveau, récupérer le nombre de sort utilisé grâce à checkbox (cbslot) -->
            <!-- Récupérer les infos de la partie ENTRAÎNEMENTS & MAÎTRISES -->
            <!-- Diviser la partie équipement pour avoir équipement/rituel/loot-->
            <!-- Récupérer et afficher la CA + équipement bouclier-->
            <!-- Récupérer et afficher points de vie/dés de vie/jets contre la mort-->
            <!-- Récupérer et afficher initiative/vitesse/taille/perception passive-->
            <!-- Récupérer et afficher bonus de maitrise-->
        </div>
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