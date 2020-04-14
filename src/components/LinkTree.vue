<template>
  <v-container>
    <v-col cols="12" offset-md="3" md="6">
      <v-card>
        <v-toolbar color="teal" dark>
          <v-app-bar-nav-icon></v-app-bar-nav-icon>
          <v-toolbar-title>{{ msg }}</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </v-toolbar>
        <template v-for="(next, i) in linkTree">
          <v-list-item v-if="next.action" :key="i">
            <v-list-item-action>
              <v-icon>{{ next.action }}</v-icon>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title>{{ next.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
        <v-list>
          <v-row class="text-center" v-for="(next, i) in linkTree" :key="i">
            <v-col cols="12" offset-md="3" md="6">
              <v-btn :href="next.href" class="subheading" target="_blank">{{ next.text }}</v-btn>
            </v-col>
          </v-row>
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
        action: "label",
        href: "https://www.facebook.com/profile.php?id=100000189117019"
      },
      {
        text: "Instagram",
        action: "label",
        href: "https://www.instagram.com/chenhan20/"
      },
      {
        text: "Youtube",
        action: "label",
        href: "https://www.youtube.com/user/chenhan20"
      },
      {
        text: "Resume",
        action: "label",
        href: "https://calm-woodland-74729.herokuapp.com/SteveCard"
      },
      {
        text: "Linkedin",
        action: "label",
        href:
          "https://www.linkedin.com/in/%E6%89%BF%E7%BF%B0-%E8%8E%8A-4159b7139/"
      },
      {
        text: "Github",
        action: "label",
        href: "https://github.com/chenhan20"
      }
    ],
    items: [
      {
        action: "label",
        title: "List item 1"
      },
      {
        divider: true
      },
      {
        action: "label",
        title: "List item 2"
      },
      {
        divider: true
      },
      {
        action: "label",
        title: "List item 3"
      }
    ]
  })
};
</script>
