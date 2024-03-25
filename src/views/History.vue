<template>
  <v-row>
    <v-col cols="12">
      <h1>Historial</h1>
    </v-col>
  </v-row>

  <v-row justify="center" align="center">
    <v-btn
      @click="previousMonth()"
      color="primary"
      icon="mdi-chevron-left"
      size="small"
    >
    </v-btn>
    <v-btn variant="text" size="large" flat>
      {{ monthNames[month] }} {{ year }}
    </v-btn>
    <v-btn
      @click="nextMonth()"
      color="primary"
      icon="mdi-chevron-right"
      size="small"
    >
    </v-btn>
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
      month: 0,
      year: 0,
      monthNames: [
        "Enero",
        "Febrero",
        "Marzo",
        "Abril",
        "Mayo",
        "Junio",
        "Julio",
        "Agosto",
        "Septiembre",
        "Octubre",
        "Noviembre",
        "Diciembre",
      ],
    };
  },
  computed: {
    numberOfDays() {
      return new Date(this.year, this.month + 1, 0).getDate();
    },
  },
  methods: {
    goToDay(n) {
      this.$router.push(`/history/${n}${this.month}${this.year}`);
    },
    nextMonth() {
      if (this.month === 11) {
        this.month = 0;
        this.year++;
      } else {
        this.month++;
      }
    },
    previousMonth() {
      if (this.month === 0) {
        this.month = 11;
        this.year--;
      } else {
        this.month--;
      }
    },
  },
  created() {
    const today = new Date();
    this.month = today.getMonth();
    this.year = today.getFullYear();
  },
};
</script>

<style>
</style>