<script setup lang="ts">
import unknown from "@/assets/img/unknown.png";

export type LinkProps = {
  emoji?: string;
  iconUrl?: string;
  title: string;
  pageUrl: string;
  sub?: {
    iconUrl: string;
    alt: string;
    link: string;
  };
};
defineProps<LinkProps>();
</script>

<template>
  <li class="flex items-center p-2">
    <div class="me-2">
      <span v-if="emoji">{{ emoji }}</span>
      <img
        v-else
        :src="iconUrl ? iconUrl : unknown"
        :alt="title"
        width="20"
        height="20"
      />
    </div>
    <NuxtLink :to="pageUrl" class="link">
      {{ title }}
    </NuxtLink>
    <NuxtLink v-if="sub" :to="sub.link" class="ms-auto">
      <img :src="sub.iconUrl" :alt="sub.alt" width="20" height="20" />
    </NuxtLink>
  </li>
</template>
