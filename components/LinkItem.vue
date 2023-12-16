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
    <div v-if="sub" class="ms-auto">
      <NuxtLink v-if="sub.link" :to="sub.link">
        <img
          v-if="sub.iconUrl !== undefined"
          :src="sub.iconUrl"
          :alt="sub.alt"
          width="20"
          height="20"
        />
        <span v-else>{{ sub.text }}</span>
      </NuxtLink>
      <template v-else>
        <img
          v-if="sub.iconUrl !== undefined"
          :src="sub.iconUrl"
          :alt="sub.alt"
          width="20"
          height="20"
        />
        <span v-else>{{ sub.text }}</span>
      </template>
    </div>
  </li>
</template>
