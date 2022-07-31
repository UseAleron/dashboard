<script setup lang="ts">
defineProps<{
  name: string;
  route: string;
  active?: boolean;
  external?: boolean;
}>();

defineEmits<{ click: () => void }>();
</script>

<template>
  <a
    :href="route"
    class="nav-link btn btn-icon btn-active-color-primary btn-color-gray-400 btn-active-light"
    :class="{ active }"
    :target="external ? '_blank' : ''"
    @click="$emit('click')"
  >
    <span class="svg-icon svg-icon-2x">
      <slot />
    </span>
  </a>
</template>
