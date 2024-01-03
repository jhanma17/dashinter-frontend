<template>
  <v-data-table
    :headers="headers"
    :items="guides"
    :items-per-page="10"
    dark
    class="elevation-1"
  >
    <template v-slot:[`item.acciones`]="{ item }">
      <v-icon @click="deleteGuide(item.id)"> mdi-delete </v-icon>
    </template>
  </v-data-table>
</template>

<script>
export default {
  props: {
    guides: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      headers: [
        { title: "Numero de Guia", value: "id" },
        { title: "Destinatario", value: "destinatario" },
        { title: "Direccion", value: "direccion" },
        { title: "Telefono", value: "telefono" },
        { title: "Metodo de Pago", value: "metodo" },
        { title: "Valor Envio", value: "envio" },
        { title: "Valor Total", value: "total" },
        { title: "Total A Cobrar", value: "totalACobrar" },
        { title: "Acciones", value: "acciones" },
      ],
    };
  },
  methods: {
    deleteGuide(id) {
      this.$emit("deleteGuide", id);
    },
  },
};
</script>

<style>
</style>