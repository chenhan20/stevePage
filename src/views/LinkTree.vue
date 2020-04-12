<template>
  <v-app>
    <v-container>
      <v-btn>asd</v-btn>
      <v-content>
        <LinkTree />
      </v-content>
    </v-container>
  </v-app>
</template>


<script>
// @ is an alias to /src
import LinkTree from "@/components/LinkTree.vue";

export default {
  name: "linkTree",
  components: {
    LinkTree
  }
};
</script>