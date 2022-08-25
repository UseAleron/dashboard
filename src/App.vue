<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <NavigationBar />

  <main class="d-flex flex-column flex-row-fluid">
    <div class="container-xxl">
      <RouterView />

      <NavigationBarMobile />
    </div>
  </main>
</template>
