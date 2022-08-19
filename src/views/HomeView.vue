<script setup lang="ts">
import { ref } from "vue";

type GameTypes =
  | "minecraft_java"
  | "team_fortress_2"
  | "counter_strike_global_offence"
  | "minecraft_bedrock";

interface Group {
  id: number;
  name: string;
}

interface Server {
  id: number;
  name: string;
  group: number;
  game: GameTypes;
}

const groups = ref<Group[]>([
  { id: 1, name: "Example's Servers" },
  { id: 2, name: "BlockGameCraft" },
  { id: 3, name: "CraftNetwork" },
]);

const servers = ref<Server[]>([
  { id: 1, name: "Example's Survival", group: 1, game: "minecraft_java" },
  { id: 2, name: "TF2", group: 1, game: "team_fortress_2" },
  { id: 3, name: "CS:GO", group: 1, game: "counter_strike_global_offence" },
  { id: 4, name: "CrazyCraft", group: 1, game: "minecraft_bedrock" },
  { id: 5, name: "Lobby", group: 2, game: "minecraft_java" },
  { id: 6, name: "Factions", group: 2, game: "minecraft_java" },
  { id: 7, name: "Survival", group: 2, game: "minecraft_java" },
  { id: 8, name: "Proxy", group: 2, game: "minecraft_java" },
  { id: 9, name: "Proxy", group: 2, game: "minecraft_java" },
]);

const serversByGroup = (group: number) =>
  servers.value.filter((server) => server.group === group);

const iconForGame = (game: GameTypes): URL => {
  switch (game) {
    case "minecraft_java":
      return new URL("https://i.imgur.com/08bNwlo.webp", import.meta.url);
    case "minecraft_bedrock":
      return new URL("https://i.imgur.com/Pae6fsF.webp");
    case "team_fortress_2":
      return new URL("https://i.imgur.com/vtINeD2.webp");
    case "counter_strike_global_offence":
      return new URL("https://i.imgur.com/k2dvph3.webp");
  }
};
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

  <div
    class="card card-xxl-stretch mb-5 mb-xl-8"
    v-for="group in groups"
    :key="group.id"
  >
    <div class="card-header border-0 pt-5">
      <h3 class="card-title align-items-start flex-column">
        <span class="card-label fs-2 mb-1">{{ group.name }}</span>
      </h3>

      <div class="card-toolbar">
        <a href="#" class="btn btn-sm btn-light btn-active-primary">Create</a>
      </div>
    </div>

    <div class="card-body py-3">
      <div v-if="serversByGroup(group.id).length" class="row">
        <div
          class="col-md-6 col-lg-4"
          v-for="server in serversByGroup(group.id)"
          :key="server.id"
        >
          <div class="card mb-5 bg-dark bg-opacity-5">
            <div class="card-body p-3">
              <div class="d-flex align-items-center">
                <div class="symbol symbol-50px me-3">
                  <span class="symbol-label bg-dark bg-opacity-5">
                    <img
                      :src="iconForGame(server.game).toString()"
                      class="h-75 align-self-center"
                      :alt="`${server.game} logo`"
                      referrerpolicy="no-referrer"
                    />
                  </span>
                </div>
                <div class="d-flex justify-content-start flex-column">
                  <a href="#" class="text-dark fw-bold text-hover-primary fs-2">
                    {{ server.name }}
                  </a>
                  <span class="text-muted fw-semibold text-muted d-block fs-7">
                    {{ server.game }}
                  </span>
                </div>
              </div>
            </div>
          </div>
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
