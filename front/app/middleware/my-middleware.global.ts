import { useCharacterStore } from '~/stores/character'

export default defineNuxtRouteMiddleware((to, from) => {
    const store = useCharacterStore()

    if (to.path !== '/' && !store.character) {
        alert('Aucune fiche perso ajoutée !')
        return navigateTo('/')
    }
})
