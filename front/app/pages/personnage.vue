<template>
    <div v-if="store.character" class="page">
        <!-- IDENTITÉ -->
        <UCard>
            <template #header>
                <h2 class="text-2xl font-bold">📘 Fiche de personnage</h2>
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
        </UCard>


        <UCard>
            <template #header>
                <h3 class="text-xl font-semibold mt-4">💠 Combat</h3>
            </template>

            <div class="grid grid-cols-3 gap-4">
                <div><strong>Bonus de maitrise :</strong> {{ store.character.pb }}</div>
                <div><strong>CA:</strong> {{ store.character.ac }}</div>
                <div><strong>Initiative :</strong> {{ store.character.init }}</div>
                <div><strong>Vitesse :</strong> {{ store.character.speed }}</div>
                <div><strong>Taille :</strong> {{ store.character.size }}</div>
                <div><strong>Perception passive :</strong> {{ store.character.passive }}</div>

                <div><strong>HP par level:</strong> {{ store.character.hpFormula }}</div>
                <div><strong>HP actuels:</strong> {{ store.character.hpCurrent }}</div>
                <div><strong>HP temp :</strong> {{ store.character.hpTemp }}</div>
                <div><strong>HP max :</strong> {{ store.character.hpMax }}</div>
                <div>
                    Dés de vie
                    <div><strong>Dépensés :</strong> {{ store.character.hitDiceSpent }}</div>
                    <div><strong>Max :</strong> {{ store.character.hitDiceMax }}</div>
                </div>

                <div>
                    Training Mastery
                    <div>
                        Armure
                        <div><strong>Légère :</strong> {{ store.character.masteryTraining.armors.light ? 'Oui' : 'Non'
                            }}</div>
                        <div><strong>Intermédiaire :</strong> {{ store.character.masteryTraining.armors.intermediate ?
                            'Oui' :
                            'Non' }}</div>
                        <div><strong>Lourde :</strong> {{ store.character.masteryTraining.armors.heavy ? 'Oui' : 'Non'
                            }}</div>
                        <div><strong>Bouclier :</strong> {{ store.character.masteryTraining.armors.shield ? 'Oui' :
                            'Non' }}
                        </div>
                    </div>
                    <div>
                        Armes
                        <div>{{ store.character.masteryTraining.weapons }}</div>
                    </div>
                    <div>
                        Outils
                        <p class="whitespace-pre-line">{{ store.character.masteryTraining.tools }}</p>
                    </div>
                </div>

                <div>
                    Jets contre la mort
                    <p>Succès: <span>{{ addDeathSavings(successThrows) }}</span>/3</p>
                    <p>Echecs: <span>{{ addDeathSavings(failThrows) }}</span>/3</p>
                </div>

                <div>Inspiration {{ store.character.inspiration ? 'Oui' : 'Non' }}</div>
            </div>
        </UCard>

        <!-- APPARENCE & HISTOIRE -->
        <UCard>
            <template #header>
                <h3 class="text-xl font-semibold">🧍 Apparence</h3>
            </template>

            <p class="whitespace-pre-line">{{ store.character.appearance }}</p>

        </UCard>


        <UCard>
            <template #header>
                <h3 class="text-xl font-semibold">📜 Histoire</h3>
            </template>

            <p class="whitespace-pre-line">{{ store.character.backstory }}</p>

        </UCard>


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

const formatMod = (v: number | undefined) => {
    if (v === undefined || v === null) return ''
    return v >= 0 ? `+${v}` : `-${v}`
}

const successThrows = computed(() => [
    Boolean(store.character?.deathSaving.success1),
    Boolean(store.character?.deathSaving.success2),
    Boolean(store.character?.deathSaving.success3)
])

const failThrows = computed(() => [
    Boolean(store.character?.deathSaving.fail1),
    Boolean(store.character?.deathSaving.fail2),
    Boolean(store.character?.deathSaving.fail3)
])

const addDeathSavings = (array: boolean[]): number => {
    return array.filter(v => v).length
}

</script>

<style scoped></style>