<script setup lang="ts">
import qiitaIcon from "@/assets/img/favicon.png";

const { fetchArticles } = useArticle();

const { data, pending, error } = await fetchArticles(1);

const links =
  data.value === null
    ? []
    : data.value.map((article) => ({
        iconUrl: qiitaIcon,
        title: article.title,
        pageUrl: `https://qiita.com/${article.user.id}/items/${article.id}`,
      }));

const alternative = computed(() => {
  if (error.value !== null) {
    return "Failed to fetch articles. 😢";
  } else if (data.value?.length === 0) {
    return "No articles. 🤣";
  } else {
    return "";
  }
});
</script>

<template>
  <LinksCard
    id="articles"
    title="Articles"
    icon="file-pen"
    :links="links"
    :pending="pending"
    :alternative="alternative"
  />
</template>
