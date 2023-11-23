<template>
  <div class="bg-gray-100 min-h-screen">
    <header
      class="p-3 lg:p-4 font-bold text-xl lg:text-2xl bg-white flex justify-between"
    >
      <h1>swan14gg.dev</h1>
      <ToggleTheme />
    </header>
    <main class="p-3 lg:p-4 max-w-4xl w-100 m-auto">
      <slot />
    </main>
  </div>
</template>
