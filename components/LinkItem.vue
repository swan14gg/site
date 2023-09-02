<script setup lang="ts">
import unknown from "@/assets/img/unknown.png";

export type LinkProps = {
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
    <img
      :src="iconUrl ? iconUrl : unknown"
      :alt="title"
      class="w-4 md:w-5 me-3"
      width="20"
      height="20"
    />
    <NuxtLink :to="pageUrl" class="link">
      {{ title }}
    </NuxtLink>
    <NuxtLink v-if="sub" :to="sub.link" class="ms-auto">
      <img :src="sub.iconUrl" :alt="sub.alt" width="20" height="20" />
    </NuxtLink>
  </li>
</template>
