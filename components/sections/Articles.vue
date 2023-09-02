<script setup lang="ts">
const { fetchArticles } = useZenn();

const { data, pending, error } = await fetchArticles();

const links =
  data.value === null
    ? []
    : data.value.articles.map((article) => ({
        emoji: article.emoji,
        title: article.title,
        pageUrl: `https://zenn.dev/${article.user.username}/articles/${article.slug}`,
      }));

const alternative = computed(() => {
  if (error.value !== null) {
    return "Failed to fetch articles. 😢";
  } else if (data.value?.articles.length === 0) {
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
