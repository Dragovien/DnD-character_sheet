<template>
    <UContainer class="container">
        <UCard variant="subtle" class="container card">
            <UContainer class="container">
                <CharacterUploader />
            </UContainer>

        </UCard>
    </UContainer>

    <!-- finir partie armure -->
    <!-- Réorganiser partie combat -->
    <!-- finir partie inventaire/loot/rituel -->
</template>

<style scoped>
.card {
    height: 80lvh;
}

:deep(.card > div) {
    display: flex;
    align-self: center;
    justify-content: center;
    cursor: pointer;
}
</style>