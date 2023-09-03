<script setup lang="ts">
const links = [
  {
    emoji: "🐋",
    title: "Galileo Galilei",
    pageUrl: "https://www.galileogalilei.jp/",
  },
  {
    emoji: "🌕",
    title: "BBHF",
    pageUrl: "https://birdbearhareandfish.com/",
  },
  {
    emoji: "🧸",
    title: "warbear",
    pageUrl: "https://birdbearhareandfish.com/",
  },
];
</script>

<template>
  <LinksCard
    id="favorite-artists"
    title="Favorite Artists"
    icon="music"
    :links="links"
  />
</template>
