<script setup lang="ts">
defineProps<{ title?: string }>();
</script>

<template>
  <NavigationBar />

  <main class="d-flex flex-column flex-row-fluid pb-20 pb-md-0">
    <div class="container-xxl pb-3 pb-md-0">
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
