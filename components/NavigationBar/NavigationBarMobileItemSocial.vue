<script setup lang="ts">
defineProps<{
  route: string;
}>();
</script>

<template>
  <li class="nav-item mx-4">
    <NavigationBarLink :route="route">
      <slot />
    </NavigationBarLink>
  </li>
</template>
