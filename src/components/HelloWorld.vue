<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img :src="require('../assets/logo.svg')" class="my-3" contain height="200" />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">Steve Website</h1>
      </v-col>

      <v-col class="mb-5" cols="12">
        <v-row class="text-center" v-for="(next, i) in btns" :key="i">
          <v-col cols="12" offset-md="3" md="6">
            <v-btn :to="next.href" class="subheading">{{ next.text }}</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",
  data: () => ({
    btns: [
      {
        text: "LinkTree",
        href: "/linkTree"
      }
    ]
  })
};
</script>
