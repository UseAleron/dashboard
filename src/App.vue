<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <NavigationBar />

  <div class="wrapper d-flex flex-column flex-row-fluid">
    <RouterView />
  </div>
</template>
