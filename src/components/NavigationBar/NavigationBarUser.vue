<script setup lang="ts">
defineProps<{ image: URL }>();
</script>

<template>
  <div class="cursor-pointer symbol symbol-40px">
    <img :src="image.toString()" alt="User's profile picture" />
  </div>
</template>
