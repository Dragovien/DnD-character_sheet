<template>
    <UHeader title="Fiche perso DnD">
        <UNavigationMenu :items="items" class="w-full justify-center" />
    </UHeader>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const items = ref<NavigationMenuItem[]>([
    {
        label: 'Personnage',
        icon: 'arcticons:dndrulebook',
        children: [
            {
                label: 'Général',
                icon: 'game-icons:character',
                to: '/personnage/general'
            },
            {
                label: 'Caractéristiques',
                icon: 'game-icons:histogram',
                to: '/personnage/caracteristiques'
            },
            {
                label: 'Entrainements et maîtrises',
                icon: 'game-icons:master-of-arms',
                to: '/personnage/entrainements_maitrises'
            },
        ]
    },
    {
        label: 'Traits/Capacités',
        icon: 'game-icons:skills',
        to: '/traits_capacites',
    },
    {
        label: 'Armes/Armures',
        icon: 'game-icons:swords-emblem',
        children: [
            {
                label: 'Armes',
                icon: 'game-icons:switch-weapon',
                to: '/armes_armures/armes'
            },
            {
                label: 'Armures',
                icon: 'game-icons:leg-armor',
                to: '/armes_armures/armures'
            },
            {
                label: 'Objets magiques',
                icon: 'game-icons:magic-axe',
                to: '/armes_armures/linked'
            },
        ]
    },
    {
        label: 'Inventaire',
        icon: 'game-icons:backpack',
        children: [
            {
                label: 'Équipement',
                icon: 'game-icons:grapple',
                to: '/inventaire/equipement',
            },
            {
                label: 'Loot',
                icon: 'game-icons:open-treasure-chest',
                to: '/inventaire/loot',
            },
            {
                label: 'Rituel',
                icon: 'game-icons:smoke-bomb',
                to: '/inventaire/rituel',
            },
            {
                label: 'Monnaie',
                icon: 'game-icons:coins',
                to: '/inventaire/monnaie'
            },
        ]
    },
    {
        label: 'Sorts/Incantation',
        icon: 'game-icons:spell-book',
        children: [
            {
                label: 'Sorts',
                icon: 'game-icons:bolt-spell-cast',
                to: '/sorts_incantations/sort'
            },
            {
                label: 'Incantation',
                icon: 'game-icons:tongue',
                to: '/sorts_incantations/incantation'
            },
        ]
    },
    {
        label: 'Jets',
        icon: 'arcticons:dnd-5e-character-keep',
        children: [
            {
                label: 'Jets de compétence',
                icon: 'arcticons:dnd-5e-character-keep',
                to: '/jets/competence'
            },
            {
                label: 'Jets de sauvegarde',
                icon: 'arcticons:dnd-5e-character-keep',
                to: '/jets/sauvegarde'
            },
        ]
    },
])
</script>