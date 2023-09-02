<script setup lang="ts">
import { LinkProps } from "./LinkItem.vue";

type Props = {
  id: string;
  icon: string;
  title: string;
  links: LinkProps[];
  pending?: boolean;
  alternative?: string;
};

defineProps<Props>();
</script>

<template>
  <Card :id="id" :icon="icon" :title="title">
    <template v-if="alternative">
      <div>{{ alternative }}</div>
    </template>
    <template v-else>
      <div v-if="pending !== undefined && pending" class="flex justify-center">
        <Spinner />
      </div>
      <ul v-else>
        <LinkItem
          v-for="link in links"
          :key="link.title"
          :emoji="link.emoji"
          :icon-url="link.iconUrl"
          :title="link.title"
          :page-url="link.pageUrl"
          :sub="link.sub"
        />
      </ul>
    </template>
  </Card>
</template>
