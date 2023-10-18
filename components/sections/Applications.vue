<script setup lang="ts">
import github from "@/assets/img/github-mark.svg";

const links = [
  {
    iconUrl: "https://book-search.app.swan14gg.dev/favicon.ico",
    title: "Book Search",
    pageUrl: "https://book-search.app.swan14gg.dev",
    sub: {
      iconUrl: github,
      alt: "GitHub Icon",
      link: "https://github.com/swan14gg/book-search",
    },
  },
  {
    iconUrl: "https://training-timer.app.swan14gg.dev/favicon.ico",
    title: "Training Timer",
    pageUrl: "https://training-timer.app.swan14gg.dev",
    sub: {
      iconUrl: github,
      alt: "GitHub Icon",
      link: "https://github.com/swan14gg/training-timer",
    },
  },
];
</script>

<template>
  <LinksCard
    id="applications"
    title="Applications"
    icon="star"
    :links="links"
  />
</template>
