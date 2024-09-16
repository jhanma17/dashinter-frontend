<template>
  <v-row>
    <v-col cols="12" class="text-center text-h5">
      <span> Receptor de Paquetes </span>
    </v-col>
  </v-row>
  <v-row justify="center">
    <v-col cols="8">
      <v-row align="center">
        <v-text-field
          v-model="guideId"
          outlined
          label="Numero de Guia"
          color="primary"
          class="mx-2"
          @keyup.enter="getGuidesLocal"
        >
        </v-text-field>
        <v-btn color="primary" class="mx-2 text-text" @click="getGuidesLocal">
          Agregar
          <v-icon right color="text">mdi-plus</v-icon>
        </v-btn>
        <v-btn
          color="primary"
          class="mx-2 text-text"
          @click="downloadSpreadsheet"
        >
          Descargar Excel
          <v-icon right color="text">mdi-download</v-icon>
        </v-btn>
        <v-btn color="primary" class="mx-2 text-text">
          Guardar
          <v-icon right color="text">mdi-content-save</v-icon>
        </v-btn>
      </v-row>
    </v-col>
  </v-row>

  <v-row justify="center">
    <GuidesTable :guides="guides" @deleteGuide="deleteGuide"></GuidesTable>
  </v-row>
</template>

<script>
import GuidesTable from "../components/HistoryDay/GuidesTable.vue";
import * as XLSX from "xlsx";

export default {
  name: "HistoryDay",
  components: {
    GuidesTable,
  },
  data() {
    return {
      guideId: "",
      guides: [],
    };
  },
  methods: {
    async addGuide(id) {
      this.guideId = "";
      try {
        let response = await this.axios({
          method: "GET",
          url: `/packages/${id}`,
        });

        for (let guide of this.guides) {
          if (guide.id === id) {
            guide.destinatario = response.data.destinatario;
            guide.direccion = response.data.direccion;
            guide.telefono = response.data.telefono;
            guide.metodo = response.data.metodo;
            guide.valorComercial = response.data.valorComercial;
            guide.total = response.data.total;
            guide.valorACobrar = response.data.valorACobrar;
          }
        }
      } catch (error) {
        console.log(error);
      }
    },

    async getGuidesLocal() {
      this.guides.unshift({
        id: this.guideId,
        destinatario: "",
        direccion: "",
        telefono: "",
        metodo: "",
        valorComercial: "",
        total: "",
        valorACobrar: "",
      });
      this.addGuide(this.guideId);
    },

    deleteGuide(id) {
      for (let i = 0; i < this.guides.length; i++) {
        if (this.guides[i].id === id) {
          this.guides.splice(i, 1);
        }
      }
    },

    downloadSpreadsheet() {
      const worksheet = XLSX.utils.json_to_sheet(this.guides);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
      XLSX.writeFile(workbook, "Guias.xlsx");
    },
  },
};
</script>

<style>
</style>