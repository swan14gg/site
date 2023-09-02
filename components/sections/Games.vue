<script setup lang="ts">
const pages = [
  {
    favicon: "https://swan14gg.github.io/minesweeper/favicon.ico",
    title: "minesweeper",
    link: "https://swan14gg.github.io/minesweeper",
    githubLink: "https://github.com/swan14gg/minesweeper",
  },
];
</script>

<template>
  <LinksCard id="games" title="Games" icon="gamepad" :pages="pages" />
</template>
