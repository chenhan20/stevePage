<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12" class="display-2">{{ msg }}</v-col>
    </v-row>
    <v-row class="text-center" v-for="(next, i) in linkTree" :key="i">
      <v-col cols="12" offset-md="3" md="6">
        <v-btn :href="next.href" class="subheading" target="_blank">{{ next.text }}</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LinkTree",
  props: {
    msg: String
  },
  data: () => ({
    linkTree: [
      {
        text: "Facebook",
        href: "https://www.facebook.com/profile.php?id=100000189117019"
      },
      {
        text: "Instagram",
        href: "https://www.instagram.com/chenhan20/"
      },
      {
        text: "Youtube",
        href: "https://www.youtube.com/user/chenhan20"
      },
      {
        text: "Resume",
        href: "https://calm-woodland-74729.herokuapp.com/SteveCard"
      },
      {
        text: "Linkedin",
        href:
          "https://www.linkedin.com/in/%E6%89%BF%E7%BF%B0-%E8%8E%8A-4159b7139/"
      },
      {
        text: "Github",
        href: "https://github.com/chenhan20"
      }
    ]
  })
};
</script>
