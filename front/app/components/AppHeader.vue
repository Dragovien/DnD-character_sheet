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
        icon: 'i-lucide-book-open',
        to: '/personnage',
        children: [
            {
                label: 'Introduction',
                description: 'Fully styled and customizable components for Nuxt.',
                icon: 'i-lucide-house'
            },
            {
                label: 'Installation',
                description: 'Learn how to install and configure Nuxt UI in your application.',
                icon: 'i-lucide-cloud-download'
            },
            {
                label: 'Icons',
                icon: 'i-lucide-smile',
                description: 'You have nothing to do, @nuxt/icon will handle it automatically.'
            },
            {
                label: 'Colors',
                icon: 'i-lucide-swatch-book',
                description: 'Choose a primary and a neutral color from your Tailwind CSS theme.'
            },
            {
                label: 'Theme',
                icon: 'i-lucide-cog',
                description: 'You can customize components by using the `class` / `ui` props or in your app.config.ts.'
            }
        ]
    },
    {
        label: 'Inventaire',
        icon: 'i-lucide-database',
        to: '/inventaire',
        children: [
            {
                label: 'Monnaie',
                icon: 'i-lucide-file-text',
                to: '/inventaire/monnaie'
            },
            {
                label: 'useOverlay',
                icon: 'i-lucide-file-text',
                description: 'Display a modal/slideover within your application.',
            },
            {
                label: 'useToast',
                icon: 'i-lucide-file-text',
                description: 'Display a toast within your application.',
            }
        ]
    },
    {
        label: 'Jets',
        icon: 'i-lucide-database',
        to: '/jets',
        children: [
            {
                label: 'Jets de compétence',
                icon: 'i-lucide-file-text',
                to: '/jets/compétence'
            },
            {
                label: 'Jets de sauvegarde',
                icon: 'i-lucide-file-text',
                to: '/jets/sauvegarde'
            },
        ]
    },
])
</script>