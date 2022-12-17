<script setup lang="ts">
import type { Group } from "@/types";

const groups = ref<Group[]>([
  {
    id: 1,
    name: "Example's Servers",
    members: [
      { id: 1, name: "Dipper", picture: "https://i.imgur.com/t6iTefZ.webp" },
    ],
  },
  {
    id: 2,
    name: "BlockGameCraft",
    members: [
      {
        id: 2,
        name: "Mabel",
        picture: "https://i.imgur.com/6OTTYEU.png",
      },
      {
        id: 1,
        name: "Dipper",
        picture: "https://i.imgur.com/t6iTefZ.webp",
      },
      { id: 3, name: "Clyde" },
      {
        id: 4,
        name: "Uncle Stan",
        picture: "https://i.imgur.com/JRGkWY1.webp",
      },
      {
        id: 5,
        name: "Waddles",
        picture: "https://i.imgur.com/mXjJSM1.webp",
      },
      {
        id: 6,
        name: "Wendy",
        picture: "https://i.imgur.com/beFwf4d.webp",
      },
    ],
  },
  {
    id: 3,
    name: "CraftNetwork",
    members: [
      {
        id: 4,
        name: "Uncle Stan",
        picture: "https://i.imgur.com/JRGkWY1.webp",
      },
      {
        id: 1,
        name: "Dipper",
        picture: "https://i.imgur.com/t6iTefZ.webp",
      },
    ],
  },
]);
</script>

<template>
  <PageHeading title="Servers">
    <div class="d-flex align-items-center ms-3">
      <div class="btn-group h-40px">
        <button type="button" class="btn btn-primary">
          <span>Create Server</span>
        </button>
        <button
          type="button"
          class="btn btn-primary dropdown-toggle dropdown-toggle-split px-5 border-start border-dark"
          style="--bs-border-opacity: 0.2"
          aria-expanded="false"
        >
          <span class="visually-hidden">Toggle Dropdown</span>
        </button>
        <ul class="dropdown-menu">
          <li><a class="dropdown-item" href="#">Create Group</a></li>
          <li><a class="dropdown-item" href="#">Create Database</a></li>
        </ul>
      </div>
    </div>
  </PageHeading>

  <GroupCard
    v-for="group in groups"
    :key="group.id"
    :group="group"
    class="mb-5 mb-xl-8"
  />
</template>
