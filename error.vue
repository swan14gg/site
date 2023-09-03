<script setup lang="ts">
const error = useError();

const statusCode = computed(() => {
  if (!error.value) {
    return "";
  }
  if (error.value instanceof Error) {
    return "500";
  }
  return String(error.value.statusCode);
});
</script>

<template>
  <div>
    <NuxtLayout>
      <Card id="error" icon="circle-exclamation" :title="statusCode">
        <p>{{ error!.message }}</p>
      </Card>
    </NuxtLayout>
  </div>
</template>
