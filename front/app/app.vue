<template>
  <UApp>
    <AppHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage class="min-h-[calc(100vh-var(--ui-header-height))]" />
      </NuxtLayout>
    </UMain>

    <AppFooter />
  </UApp>
</template>
