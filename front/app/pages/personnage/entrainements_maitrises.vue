<template>
    <div v-if="store.character" class="page">
        <!-- Training Mastery -->
        <UCard>
            <template #header>
                <h3 class="text-xl font-semibold mt-4">Entrainements et maitrises</h3>
            </template>

            <div class="grid grid-cols-3 gap-4">

                <div>
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
            </div>
        </UCard>
    </div>
</template>

<script setup lang="ts">
import { useCharacterStore } from '~/stores/character'

const store = useCharacterStore()

</script>

<style scoped></style>