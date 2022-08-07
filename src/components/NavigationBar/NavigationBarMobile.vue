<script setup lang="ts">
import { useSwipe } from "@vueuse/core";
const isToggled = ref(false);

const isTouchDevice = () => window.matchMedia("(pointer: coarse)").matches;

const el = ref(null);
useSwipe(el, {
  onSwipeEnd: (_, direction) => {
    if (direction !== "LEFT" && direction !== "RIGHT") return;

    isToggled.value = direction === "LEFT";
  },
});

const share = async () => {
  const shareData = {
    title: "Aleron",
    text: "Easily create your own game server in seconds with Aleron",
    url: "https://aleron.io",
  };

  await navigator.share(shareData);
};
</script>

<template>
  <div
    class="w-100 bg-dark text-light py-5 fixed-bottom d-md-none d-flex justify-content-evenly"
    ref="el"
  >
    <div class="mt-1" style="width: 24px">
      <span
        v-if="!isToggled && isTouchDevice()"
        class="svg-icon svg-icon-2x svg-icon-muted"
      >
        <IconGen0190 />
      </span>
      <span
        v-if="isToggled && isTouchDevice()"
        class="svg-icon svg-icon-2x svg-icon-muted"
      >
        <IconGen0191 />
      </span>
    </div>

    <Transition name="fade">
      <ul class="nav justify-content-center">
        <template v-if="!isToggled">
          <NavigationBarMobileItem :route="{ name: 'home' }">
            <IconGen025 />
          </NavigationBarMobileItem>

          <NavigationBarMobileItem route="/billing">
            <IconFin002 />
          </NavigationBarMobileItem>

          <NavigationBarMobileItem route="/support">
            <IconAbs035 />
          </NavigationBarMobileItem>

          <NavigationBarMobileItem route="/account">
            <IconCom013 />
          </NavigationBarMobileItem>
        </template>

        <template v-else>
          <NavigationBarMobileItemSocial route="https://tiktok.com">
            <IconSoc008 />
          </NavigationBarMobileItemSocial>

          <NavigationBarMobileItemSocial route="https://twitter.com/UseAleron">
            <IconSoc006 />
          </NavigationBarMobileItemSocial>

          <NavigationBarMobileItemSocial route="https://discord.gg">
            <IconDiscord />
          </NavigationBarMobileItemSocial>

          <NavigationBarMobileItemSocial route="/" @click.prevent="share()">
            <IconArr095 />
          </NavigationBarMobileItemSocial>
        </template>
      </ul>
    </Transition>

    <div style="width: 24px" />
  </div>
</template>
