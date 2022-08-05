<script setup lang="ts">
import type { RouteLocationRaw } from "vue-router";

defineProps<{
  name: string;
  route: RouteLocationRaw;
}>();
</script>

<template>
  <li class="nav-item mb-2">
    <RouterLink :to="route" v-slot="{ href, navigate, isActive }">
      <NavigationBarLink
        :route="href"
        :name="name"
        :active="isActive"
        @click="navigate"
      >
        <slot />
      </NavigationBarLink>
    </RouterLink>
  </li>
</template>
