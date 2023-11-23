<script lang="ts" setup>
const colorMode = useColorMode();

const isDark = ref(colorMode.value === "dark");

function handleThemeChange(event: Event) {
  const inputElement = event.target as HTMLInputElement;
  colorMode.preference = inputElement.checked ? "dark" : "light";
}
</script>

<template>
  <div class="flex items-center gap-2">
    <ClientOnly>
      <font-awesome-icon icon="fa-solid fa-sun" class="w-5" />
    </ClientOnly>
    <label for="toggleTwo" class="flex items-center cursor-pointer select-none">
      <div class="relative">
        <input
          v-model="isDark"
          type="checkbox"
          id="toggleTwo"
          class="peer sr-only"
          @change="handleThemeChange"
        />
        <div class="w-12 h-7 rounded-full bg-gray-400"></div>
        <div
          class="absolute w-5 h-5 transition bg-white rounded-full left-1 top-1 peer-checked:translate-x-full peer-checked:bg-primary"
        ></div>
      </div>
    </label>
    <ClientOnly>
      <font-awesome-icon icon="fa-solid fa-moon" class="w-4" />
    </ClientOnly>
  </div>
</template>
