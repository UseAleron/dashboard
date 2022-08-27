<script setup lang="ts">
import type { GameTypes, Server } from "@/types";

defineProps<{ server: Server }>();

const iconForGame = (game: GameTypes): URL => {
  switch (game) {
    case "minecraft_java":
      return new URL("https://i.imgur.com/08bNwlo.webp");
    case "minecraft_bedrock":
      return new URL("https://i.imgur.com/Pae6fsF.webp");
    case "team_fortress_2":
      return new URL("https://i.imgur.com/vtINeD2.webp");
    case "counter_strike_global_offence":
      return new URL("https://i.imgur.com/k2dvph3.webp");
  }
};

const uriForGame = (game: GameTypes, address: string): URL => {
  switch (game) {
    case "minecraft_bedrock":
      return new URL(`minecraft://connect?type=server&ip=${address}`);
    case "team_fortress_2":
      return new URL(`steam://connect/${address}`);
    case "counter_strike_global_offence":
      return new URL(`steam://connect/${address}`);
    default:
      return new URL(`https://connect.aleron.io/${game}#${address}`);
  }
};
</script>

<template>
  <div class="card mb-5 bg-secondary bg-opacity-50 bg-hover-secondary">
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
          <h3 class="text-dark fw-bold fs-2">
            {{ server.name }}
          </h3>
          <a
            :href="uriForGame(server.game, server.address).toString()"
            class="fw-semibold text-muted text-hover-primary d-block fs-7"
          >
            {{ server.address }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
