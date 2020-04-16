<template>
  <v-container>
    <v-col cols="12" offset-md="4" md="4">
      <v-card>
        <v-toolbar color="teal" dark>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <v-toolbar-title>{{ msg }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list rounded>
          <v-list-item-group v-model="item" color="primary">
            <v-list-item v-for="(item, i) in linkTree" :key="i" :href="item.href" target="_blank">
              <v-list-item-icon>
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title v-text="item.text"></v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-col>
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
        icon: "fab fa-facebook",
        href: "https://www.facebook.com/profile.php?id=100000189117019"
      },
      {
        text: "Instagram",
        icon: "fab fa-instagram",
        href: "https://www.instagram.com/chenhan20/"
      },
      {
        text: "Youtube",
        icon: "fab fa-youtube",
        href: "https://www.youtube.com/user/chenhan20"
      },
      {
        text: "Resume",
        icon: "far fa-address-card",
        href: "https://calm-woodland-74729.herokuapp.com/SteveCard"
      },
      {
        text: "Linkedin",
        icon: "fab fa-linkedin",
        href:
          "https://www.linkedin.com/in/%E6%89%BF%E7%BF%B0-%E8%8E%8A-4159b7139/"
      },
      {
        text: "Github",
        icon: "fab fa-github",
        href: "https://github.com/chenhan20"
      }
    ]
  })
};
</script>
