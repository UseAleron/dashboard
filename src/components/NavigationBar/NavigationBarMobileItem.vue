<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";

defineProps<{
  route: RouteLocationRaw;
}>();
</script>

<template>
  <li class="nav-item mx-4">
    <RouterLink :to="route" v-slot="{ href, navigate, isActive }">
      <NavigationBarLink :route="href" :active="isActive" @click="navigate">
        <slot />
      </NavigationBarLink>
    </RouterLink>
  </li>
</template>
