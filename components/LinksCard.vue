<script setup lang="ts">
import { LinkProps } from "./LinkItem.vue";

type Props = {
  id: string;
  icon: string;
  title: string;
  links: LinkProps[];
};

defineProps<Props>();
</script>

<template>
  <Card :id="id" :icon="icon" :title="title">
    <ul>
      <LinkItem
        v-for="link in links"
        :key="link.title"
        :icon-url="link.iconUrl"
        :title="link.title"
        :page-url="link.pageUrl"
        :sub="link.sub"
      />
    </ul>
  </Card>
</template>
