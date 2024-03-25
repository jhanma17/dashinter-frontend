<template>
  <v-navigation-drawer
    color="black"
    permanent
    floating
    width="240"
    app
    fixed
  >
    <v-list density="compact" nav slim>
      <v-list-item
        class="text-text"
        title="Inicio"
        to="/"
        prepend-icon="mdi-home-outline"
        exact
      ></v-list-item>
      <v-list-item
        class="text-text"
        title="Historial"
        to="/history"
        prepend-icon="mdi-calendar-clock"
      ></v-list-item>
      <v-list-item
        class="text-text"
        title="Reparto"
        prepend-icon="mdi-truck-delivery-outline"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {};
</script>

<style scoped>
.v-navigation-drawer--floating {
  border-right: 0.5px solid #d9bfff;
}
</style>