<template>
    <div v-if="store.character" class="page">
        <!-- CARACTÉRISTIQUES -->
        <UCard>
            <template #header>
                <h3 class="text-xl font-semibold mt-4">💠 Caractéristiques</h3>
            </template>

            <div class="grid grid-cols-3 gap-4">
                <div><strong>FOR :</strong> {{ store.character.abilities.str }} ({{
                    formatMod(store.character.abilities.modstr)
                    }})</div>
                <div><strong>DEX :</strong> {{ store.character.abilities.dex }} ({{
                    formatMod(store.character.abilities.moddex)
                    }})</div>
                <div><strong>CON :</strong> {{ store.character.abilities.con }} ({{
                    formatMod(store.character.abilities.modcon)
                    }})</div>
                <div><strong>INT :</strong> {{ store.character.abilities.int }} ({{
                    formatMod(store.character.abilities.modint)
                    }})</div>
                <div><strong>SAG :</strong> {{ store.character.abilities.wis }} ({{
                    formatMod(store.character.abilities.modwis)
                    }})</div>
                <div><strong>CHA :</strong> {{ store.character.abilities.cha }} ({{
                    formatMod(store.character.abilities.modcha)
                    }})</div>
            </div>

            <div><strong>Bonus de maitrise :</strong> {{ store.character.pb }}</div>
            <div><strong>CA:</strong> {{ store.character.ac }}</div>
            <div><strong>Initiative :</strong> {{ store.character.init }}</div>
            <div><strong>Vitesse :</strong> {{ store.character.speed }}</div>
            <div><strong>Taille :</strong> {{ store.character.size }}</div>
            <div><strong>Perception passive :</strong> {{ store.character.passive }}</div>
            <div><strong>Inspiration :</strong>{{ store.character.inspiration ? 'Oui' : 'Non' }}</div>

            <div><strong>HP par level:</strong> {{ store.character.hpFormula }}</div>
            <div><strong>HP actuels:</strong> {{ store.character.hpCurrent }}</div>
            <div><strong>HP temp :</strong> {{ store.character.hpTemp }}</div>
            <div><strong>HP max :</strong> {{ store.character.hpMax }}</div>
        </UCard>
    </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from '~/stores/character'

const store = useCharacterStore()

const formatMod = (v: number | undefined) => {
    if (v === undefined || v === null) return ''
    return v >= 0 ? `+${v}` : `-${v}`
}

</script>

<style scoped></style>