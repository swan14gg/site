<script setup lang="ts">
type Props = {
  id: string;
  icon: string;
  title: string;
};

defineProps<Props>();
</script>

<template>
  <section :aria-labelledby="`${id}-heading`" class="p-5 bg-white rounded-xl">
    <header class="flex items-center mb-3">
      <ClientOnly>
        <font-awesome-icon
          :icon="`fa-solid fa-${icon}`"
          class="w-4 md:w-5 me-3"
        />
      </ClientOnly>
      <h2 :id="`${id}-heading`" class="lg:text-lg font-bold">{{ title }}</h2>
    </header>
    <slot />
  </section>
</template>
