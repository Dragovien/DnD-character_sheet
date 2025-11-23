<template>
    <UContainer class="container min-h-[calc(100vh-var(--ui-header-height))]">
        <UCard variant="subtle" class="container card">
            <UContainer class="container">
                <CharacterUploader />
            </UContainer>

        </UCard>
    </UContainer>
</template>

<style scoped>
.container {
    display: flex;
    align-self: center;
    justify-content: center;
    width: 100%;
    height: 100%;
}

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