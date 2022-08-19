<script setup lang="ts">
defineProps<{ title: string }>();
</script>

<template>
  <header class="header h-lg-100px mb-3">
    <div class="w-100 d-flex align-items-center justify-content-between">
      <h1 class="mb-0 display-6">{{ title }}</h1>

      <div class="d-flex flex-shrink-0">
        <slot />
      </div>
    </div>
  </header>
</template>
