<script setup lang="ts">
defineProps<{
  name: string;
  picture?: string;
}>();
</script>

<template>
  <div class="symbol symbol-35px symbol-circle">
    <span
      v-if="!picture"
      class="symbol-label bg-warning text-inverse-warning fw-bold"
    >
      {{ name[0] }}
    </span>
    <img
      v-else
      :alt="`${name}'s profile picture`"
      :src="picture"
      referrerpolicy="no-referrer"
    />
  </div>
</template>
