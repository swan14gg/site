<script setup lang="ts">
type Props = {
  icon: string;
  title: string;
};

defineProps<Props>();
</script>

<template>
  <section class="p-5 bg-white rounded-xl">
    <header class="flex items-center mb-3">
      <font-awesome-icon
        :icon="`fa-solid fa-${icon}`"
        class="w-4 md:w-5 me-3"
      />
      <h2 class="lg:text-lg font-bold">{{ title }}</h2>
    </header>
    <slot />
  </section>
</template>
