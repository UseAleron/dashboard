<script setup lang="ts">
defineProps<{
  name: string;
  route: string;
}>();
</script>

<template>
  <div class="d-flex align-items-center">
    <NavigationBarLink :route="route" :name="name" :external="true">
      <slot />
    </NavigationBarLink>
  </div>
</template>
