<script setup lang="ts">
import github from "@/assets/img/github-mark.svg";
import unknown from "@/assets/img/unknown.png";

type Props = {
  id: string;
  icon: string;
  title: string;
  pages: {
    icon?: string;
    title: string;
    link: string;
    githubLink?: string;
  }[];
};

defineProps<Props>();
</script>

<template>
  <Card :id="id" :icon="icon" :title="title">
    <ul>
      <li v-for="page in pages" :key="page.title" class="flex items-center p-2">
        <img
          :src="page.icon ? page.icon : unknown"
          class="w-4 md:w-5 me-3"
          width="20"
          height="20"
        />
        <NuxtLink :to="page.link" class="link">
          {{ page.title }}
        </NuxtLink>
        <NuxtLink v-if="page.githubLink" :to="page.githubLink" class="ms-auto">
          <img :src="github" :alt="`GitHub Icon`" width="20" height="20" />
        </NuxtLink>
      </li>
    </ul>
  </Card>
</template>
