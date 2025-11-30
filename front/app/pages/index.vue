<template>
    <UContainer class="container">
        <UCard variant="subtle" class="container card">
            <UContainer class="container">
                <CharacterUploader />
            </UContainer>

        </UCard>
    </UContainer>
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