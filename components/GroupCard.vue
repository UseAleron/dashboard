<script setup lang="ts">
import type { Group, Server } from "@/types";

defineProps<{ group: Group }>();

const servers = ref<Server[]>([
  {
    id: 1,
    name: "Example's Survival",
    group: 1,
    game: "minecraft_java",
    address: "survival.aleron.game",
  },
  {
    id: 2,
    name: "TF2",
    group: 1,
    game: "team_fortress_2",
    address: "tf2.aleron.game",
  },
  {
    id: 3,
    name: "CS:GO",
    group: 1,
    game: "counter_strike_global_offence",
    address: "dust2.aleron.game",
  },
  {
    id: 4,
    name: "CrazyCraft",
    group: 1,
    game: "minecraft_bedrock",
    address: "bedrock-friends.aleron.game",
  },
  {
    id: 5,
    name: "Lobby",
    group: 2,
    game: "minecraft_java",
    address: "-",
  },
  {
    id: 6,
    name: "Factions",
    group: 2,
    game: "minecraft_java",
    address: "-",
  },
  {
    id: 7,
    name: "Survival",
    group: 2,
    game: "minecraft_java",
    address: "-",
  },
  {
    id: 8,
    name: "Proxy",
    group: 2,
    game: "minecraft_java",
    address: "blockgamecraft.aleron.game",
  },
  {
    id: 9,
    name: "Creative",
    group: 2,
    game: "minecraft_java",
    address: "-",
  },
]);

const serversByGroup = (group: number) =>
  servers.value.filter((server) => server.group === group);
</script>

<template>
  <div class="card card-xxl-stretch shadow-none">
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fs-2 mb-1">{{ group.name }}</span>
      </h3>

      <div class="card-toolbar">
        <MembersGlance :members="group.members" class="d-none d-sm-block" />
        <RouterLink
          :to="{ name: 'home' }"
          class="btn btn-sm btn-icon btn-outline btn-outline-secondary ms-2 btn-icon-gray-600 btn-active-icon-dark"
        >
          <span class="svg-icon svg-icon-2x"><IconCod001 /></span>
          <span class="d-none">Manage</span>
        </RouterLink>
      </div>
    </div>

    <div class="card-body py-3">
      <div v-if="serversByGroup(group.id).length" class="row">
        <div
          class="col-sm-6 col-xl-4"
          v-for="server in serversByGroup(group.id)"
          :key="server.id"
        >
          <GroupServer :server="server" />
        </div>
      </div>

      <div
        v-else
        class="card bg-light border mb-5"
        style="--bs-border-opacity: 0.2"
      >
        <div class="card-body">
          <h2 class="mb-0 h3 fw-normal">No servers</h2>
        </div>
      </div>
    </div>
  </div>
</template>
