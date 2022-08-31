<script setup lang="ts">
// component originally called CatastropheBar because we didn't know what to call it

const image = new URL(
  "https://www.libravatar.org/avatar/x23463b99b62a72f26ed677cc556c44e8?s=80&default=retro"
);
</script>

<template>
  <nav class="d-none d-md-flex flex-column flex-shrink-0 align-items-lg-center">
    <NavigationBarLogo />

    <div
      class="aside-nav d-flex flex-column align-items-center flex-column-fluid w-100"
    >
      <div class="hover-scroll-overlay-y mb-5 px-5">
        <ul class="nav flex-column w-100">
          <NavigationBarItem name="Services" :route="{ name: 'home' }">
            <IconGen025 />
          </NavigationBarItem>

          <NavigationBarItem name="Billing" route="/billing">
            <IconFin002 />
          </NavigationBarItem>

          <NavigationBarItem name="Support" route="/support">
            <IconAbs035 />
          </NavigationBarItem>
        </ul>
      </div>
    </div>
    <div
      class="aside-footer d-flex flex-column align-items-center flex-column-auto"
    >
      <NavigationBarItemSocial
        name="TikTok"
        route="https://tiktok.com"
        class="mb-2"
      >
        <IconSoc008 />
      </NavigationBarItemSocial>

      <NavigationBarItemSocial
        name="Twitter"
        route="https://twitter.com/UseAleron"
        class="mb-2"
      >
        <IconSoc006 />
      </NavigationBarItemSocial>

      <NavigationBarItemSocial
        name="Discord"
        route="https://discord.gg"
        class="mb-5"
      >
        <IconDiscord />
      </NavigationBarItemSocial>

      <div class="d-flex align-items-center mb-10">
        <NavigationBarUser :image="image" />
      </div>
    </div>
  </nav>
</template>

<style scoped>
nav {
  min-width: 100px;
  height: 100%;
}
</style>
