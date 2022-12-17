<script setup lang="ts">
defineProps<{
  additional: number;
}>();
</script>

<template>
  <div class="symbol symbol-35px symbol-circle">
    <span class="symbol-label bg-dark text-gray-300 fs-8 fw-bold">
      +{{ additional }}
    </span>
  </div>
</template>
