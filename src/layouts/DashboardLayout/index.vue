<template>
  <v-layout>
    <v-app-bar flat>
      <v-app-bar-title>
        <div class="py-4 pl-2 pr-6 title-img">
          <v-img
            height="64px"
            src="../../assets/dashinter-logo-dark.png"
            cover
          />
        </div>
      </v-app-bar-title>

      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer color="background" permanent floating width="240">
      <v-list density="compact" nav slim>
        <v-list-item
          class="text-text"
          title="Inicio"
          value="home"
          prepend-icon="mdi-home-outline"
        ></v-list-item>
        <v-list-item
          class="text-text"
          title="Historial"
          value="history"
          prepend-icon="mdi-calendar-clock"
        ></v-list-item>
        <v-list-item
          class="text-text"
          title="Reparto"
          value="delivery"
          prepend-icon="mdi-truck-delivery-outline"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-layout>
</template>

<script>
export default {};
</script>

<style scoped>
.title-img {
  box-sizing: border-box;
  width: 240px;
  height: 64px;
  border-right: 0.5px solid #d9bfff;
}

.v-toolbar {
  border-bottom: 0.5px solid #d9bfff;
}

.v-navigation-drawer--floating {
  border-right: 0.5px solid #d9bfff;
}

.v-toolbar-title{
  margin-inline-start: 0px !important;
}
</style>