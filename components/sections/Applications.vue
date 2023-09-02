<script setup lang="ts">
const pages = [
  {
    favicon: "https://book-search.app.swan14gg.dev/favicon.ico",
    title: "Book Search",
    link: "https://book-search.app.swan14gg.dev",
    githubLink: "https://github.com/swan14gg/book-search",
  },
  {
    favicon: "https://training-timer.app.swan14gg.dev/favicon.ico",
    title: "Training Timer",
    link: "https://training-timer.app.swan14gg.dev",
    githubLink: "https://github.com/swan14gg/training-timer",
  },
];
</script>

<template>
  <LinksCard
    id="applications"
    title="Applications"
    icon="star"
    :pages="pages"
  />
</template>
