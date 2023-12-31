<template>
  <v-layout>
    <AppBar />

    <SideBar />
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-layout>
</template>

<script>
import AppBar from "./AppBar.vue";
import SideBar from "./SideBar.vue";

export default {
  name: "DashboardLayout",
  components: {
    AppBar,
    SideBar,
  },
};
</script>

<style scoped>
</style>