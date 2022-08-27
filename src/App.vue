<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <NavigationBar />

  <main class="d-flex flex-column flex-row-fluid pb-20 pb-md-0">
    <div class="container-xxl pb-3 pb-md-0">
      <RouterView />

      <NavigationBarMobile />
    </div>
  </main>
</template>
