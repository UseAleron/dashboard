// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@vueuse/nuxt"],
  app: {
    head: {
      title: "Aleron",
      link: [
        { rel: "icon", href: "/favicon.png" },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Inter:300,400,500,600,700",
        },
      ],
    },
  },
});
