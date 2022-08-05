<template>
  <div class="w-100 bg-dark text-light py-5 fixed-bottom d-md-none">
    <ul class="nav justify-content-center">
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
    </ul>
  </div>
</template>
