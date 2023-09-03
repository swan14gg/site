<template>
  <NuxtLayout>
    <div class="flex flex-col gap-4">
      <SectionsAboutMe />
      <div class="grid md:grid-cols-2 gap-4">
        <SectionsApplications />
        <SectionsGames />
      </div>
      <div class="grid md:grid-cols-2 gap-4">
        <SectionsArticles />
        <SectionsScraps />
      </div>
      <div class="grid md:grid-cols-2 gap-4">
        <SectionsFavoriteArtists />
      </div>
    </div>
  </NuxtLayout>
</template>
