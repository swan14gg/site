<script setup lang="ts">
import profile from "@/assets/img/profile.jpeg";
import x from "@/assets/img/logo.svg";
import github from "@/assets/img/github-mark.svg";
import zenn from "@/assets/img/logo-only.svg";
import qiita from "@/assets/img/favicon.png";

const account = "swan14gg";
</script>

<template>
  <Card id="about-me" icon="user" title="About Me">
    <div class="flex items-start">
      <img
        :src="profile"
        alt="Profile image"
        class="rounded-full me-4 aspect-square"
        width="100"
        height="100"
      />
      <div class="text-sm sm:text-base">
        <p class="font-bold text-lg sm:text-2xl sm:mb-2">Daiki</p>

        <p>I'm currently working as a web developer in Fukuoka.</p>
        <p>
          I'm interested in frontend development, particularly using
          <strong>TypeScript</strong>, <strong>Nuxt.js</strong>, and
          <strong>Vue.js</strong>.
        </p>
        <div class="flex mt-4 gap-4">
          <NuxtLink :to="`https://x.com/${account}`">
            <img :src="x" alt="X logo" width="20" height="20" />
          </NuxtLink>
          <NuxtLink :to="`https://github.com/${account}`">
            <img :src="github" alt="GitHub logo" width="20" height="20" />
          </NuxtLink>
          <NuxtLink :to="`https://qiita.com/${account}`">
            <img :src="qiita" alt="Qiita logo" width="20" height="20" />
          </NuxtLink>
          <NuxtLink :to="`https://zenn.dev/${account}`">
            <img :src="zenn" alt="Zenn logo" width="20" height="20" />
          </NuxtLink>
        </div>
      </div>
    </div>
  </Card>
</template>
