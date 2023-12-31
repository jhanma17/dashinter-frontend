<template>
  <v-row>
    <v-col cols="12">
      <h1>Historial</h1>
    </v-col>
  </v-row>

  <v-row justify="center" align="center">
    <v-btn color="primary" icon="mdi-chevron-left" size="small"> </v-btn>
    <v-btn variant="text" size="large" flat> Diciembre 2023 </v-btn>
    <v-btn color="primary" icon="mdi-chevron-right" size="small"> </v-btn>
  </v-row>

  <v-row class="mt-8">
    <v-col v-for="n in numberOfDays" :key="n" cols="2">
      <v-card height="160" @click="goToDay(n)">
        <v-card-title>
          <h3>{{ n }}</h3>
        </v-card-title>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "History",
  data() {
    return {
      numberOfDays: 31,
    }
  },
  methods: {
    goToDay(n) {
      this.$router.push(`/history/${n}`);
    },
  },
};
</script>

<style>
</style>