<script setup lang="ts">
import github from "@/assets/img/github-mark.svg";

const links = [
  {
    iconUrl: "https://swan14gg.github.io/minesweeper/favicon.ico",
    title: "minesweeper",
    pageUrl: "https://swan14gg.github.io/minesweeper",
    sub: {
      iconUrl: github,
      alt: "GitHub Icon",
      link: "https://github.com/swan14gg/minesweeper",
    },
  },
];
</script>

<template>
  <LinksCard id="games" title="Games" icon="gamepad" :links="links" />
</template>
