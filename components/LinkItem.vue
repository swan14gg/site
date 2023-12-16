<script setup lang="ts">
export type LinkProps = {
  title: string;
  pageUrl: string;
  sub?: {
    link?: string;
  } & (
    | { iconUrl: string; alt: string; text?: undefined }
    | { iconUrl?: undefined; alt?: undefined; text: string }
  );
} & (
  | { iconUrl?: undefined; emoji: string }
  | { iconUrl: string; emoji?: undefined }
);

defineProps<LinkProps>();
</script>

<template>
  <li
    class="grid grid-cols-[20px_1fr_72px] sm:grid-cols-[20px_1fr_100px] gap-2 items-center p-2"
  >
    <span v-if="emoji !== undefined">{{ emoji }}</span>
    <img v-else :src="iconUrl" :alt="title" width="20" height="20" />
    <NuxtLink :to="pageUrl" class="link text-sm sm:text-base">
      {{ title }}
    </NuxtLink>
    <div v-if="sub" class="ms-auto">
      <NuxtLink v-if="sub.link" :to="sub.link">
        <SubInfo :sub="sub" />
      </NuxtLink>
      <template v-else>
        <SubInfo :sub="sub" />
      </template>
    </div>
  </li>
</template>
