<script setup lang="ts">
export type LinkProps = {
  title: string;
  pageUrl: string;
  sub?: {
    iconUrl: string;
    alt: string;
    link: string;
  };
} & (
  | { iconUrl: undefined; emoji: string }
  | { iconUrl: string; emoji: undefined }
);

defineProps<LinkProps>();
</script>

<template>
  <li class="flex items-center p-2">
    <div class="me-2">
      <span v-if="emoji !== undefined">{{ emoji }}</span>
      <img v-else :src="iconUrl" :alt="title" width="20" height="20" />
    </div>
    <NuxtLink :to="pageUrl" class="link">
      {{ title }}
    </NuxtLink>
    <NuxtLink v-if="sub" :to="sub.link" class="ms-auto">
      <img :src="sub.iconUrl" :alt="sub.alt" width="20" height="20" />
    </NuxtLink>
  </li>
</template>
