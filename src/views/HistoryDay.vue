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
        <v-btn color="primary" class="mx-2 text-text" @click="downloadSpreadsheet">
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
      const url =
        "https://www3.interrapidisimo.com/ApiservInter/api/Mensajeria/ObtenerRastreoGuias?guias=" +
        id;
      try {
        let response = await this.axios({
          method: "GET",
          url: url,
        });
        return response.data[0].Guia;
      } catch (error) {
        console.log(error);
      }
    },

    async getGuidesLocal() {
      const data = await this.addGuide(this.guideId);
      this.guideId = "";
      const id = data.NumeroGuia;
      const destinatario = data.Destinatario.Nombre;
      const direccion = data.Destinatario.Direccion;
      const telefono = data.Destinatario.Telefono;
      const metodo = data.FormasPagoDescripcion;
      const envio = data.ValorTotal;
      let totalACobrar = 0;
      let total = data.ValorTotal;
      if (metodo === "Crédito") {
        total = data.ValorDeclarado;
        if (data.ValorAdicionales == 0) {
          totalACobrar = 0;
        } else {
          totalACobrar = data.ValorDeclarado;
        }
      }
      if (metodo === "Contado" && data.ValorAdicionales != 0) {
        totalACobrar = data.ValorDeclarado;
      }
      if(data.EsAlCobro == true){
        totalACobrar = data.ValorTotal;
        if(data.EstaPagada == false){
          totalACobrar += data.ValorDeclarado;
        }
      }
      this.guides.unshift({
        id,
        destinatario,
        direccion,
        telefono,
        metodo,
        envio,
        total,
        totalACobrar,
      });
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