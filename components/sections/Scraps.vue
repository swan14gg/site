<script setup lang="ts">
import zenn from "@/assets/img/logo-only.svg";

const { fetchScraps } = useArticle();

const { data, pending, error } = await fetchScraps();

const links =
  data.value === null
    ? []
    : data.value.scraps.map((scrap) => ({
        iconUrl: zenn,
        title: scrap.title,
        pageUrl: `https://zenn.dev/${scrap.user.username}/scraps/${scrap.slug}`,
      }));

const alternative = computed(() => {
  if (error.value !== null) {
    return "Failed to fetch scraps. 😢";
  } else if (data.value?.scraps.length === 0) {
    return "No scraps. 🤣";
  } else {
    return "";
  }
});
</script>

<template>
  <LinksCard
    id="scraps"
    title="Scraps"
    icon="note-sticky"
    :links="links"
    :pending="pending"
    :alternative="alternative"
  />
</template>
