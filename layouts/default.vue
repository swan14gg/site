<script lang="ts" setup>
const route = useRoute();
</script>

<template>
  <div class="bg-gray-100 dark:bg-gray-500 dark:text-white min-h-screen">
    <header
      class="p-3 lg:p-4 font-bold text-xl lg:text-2xl bg-white dark:bg-gray-700 flex justify-between"
    >
      <NuxtLink to="/">swan14gg.dev</NuxtLink>
      <ToggleTheme />
    </header>
    <main class="p-3 lg:p-4 max-w-4xl w-100 m-auto">
      <slot />
    </main>
    <footer class="text-center pb-4">
      <NuxtLink
        v-if="route.name !== 'privacy-policy'"
        to="/privacy-policy"
        class="link text-xs"
        >プライバシーポリシー
      </NuxtLink>
    </footer>
  </div>
</template>
