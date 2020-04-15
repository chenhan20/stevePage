<template>
  <v-app>
    <v-content>
      <LinkTree msg="Steve LinkTree"/>
    </v-content>
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