<script setup lang="ts">
defineProps<{ title?: string }>();
</script>

<template>
  <NavigationBar />

  <main class="d-flex flex-column flex-grow-1 overflow-auto">
    <div class="container-xxl">
      <PageHeading :title="title">
        <template #title>
          <slot name="title" />
        </template>

        <slot name="header" />
      </PageHeading>

      <slot />

      <NavigationBarMobile />
    </div>
  </main>
</template>
