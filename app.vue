<script setup lang="ts">
import "@/assets/styles.scss";

useHead({
  title: "Aleron",
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700",
    },
    {
      rel: "icon",
      href: "/favicon.png",
    },
  ],
});
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
