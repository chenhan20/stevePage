<template>
  <v-container>
        <v-row class="text-center">
          <h1>{{ msg }}</h1>
        </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LinkTree",

  data: () => ({
    whatsNext: [
      {
        text: "Facebook",
        href: "https://vuetifyjs.com/components/api-explorer"
      },
      {
        text: "Facebook",
        href: "https://vuetifyjs.com/components/api-explorer"
      },
      {
        text: "Facebook",
        href: "https://vuetifyjs.com/components/api-explorer"
      },
      {
        text: "Facebook",
        href: "https://vuetifyjs.com/components/api-explorer"
      },
    ]
  })
};
</script>
