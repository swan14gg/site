<script setup lang="ts">
defineProps<{
  sub: {
    link?: string;
  } & (
    | { iconUrl: string; alt: string; text?: undefined }
    | { iconUrl?: undefined; alt?: undefined; text: string }
  );
}>();
</script>

<template>
  <img
    v-if="sub.iconUrl !== undefined"
    :src="sub.iconUrl"
    :alt="sub.alt"
    width="20"
    height="20"
  />
  <span v-else>{{ sub.text }}</span>
</template>
