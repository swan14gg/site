<script setup lang="ts">
type Props = {
  id: string;
  icon: string;
  title: string;
  headingLevel?: number;
};

const props = withDefaults(defineProps<Props>(), {
  headingLevel: 2,
});
</script>

<template>
  <section
    :aria-labelledby="`${props.id}-heading`"
    class="p-3 sm:p-5 bg-white dark:bg-gray-600 rounded-xl"
  >
    <header class="flex items-center mb-2 sm:mb-3">
      <ClientOnly>
        <font-awesome-icon
          :icon="`fa-solid fa-${props.icon}`"
          class="w-4 md:w-5 me-3"
        />
      </ClientOnly>
      <component
        :is="`h${props.headingLevel}`"
        :id="`${props.id}-heading`"
        class="lg:text-lg font-bold"
      >
        {{ props.title }}
      </component>
    </header>
    <slot />
  </section>
</template>
