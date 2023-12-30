/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: "dark",
    themes: {
      light: {
        colors: {
          primary: "#1c0047",
          secondary: "#b280ff",
          accent: "#140032",
          light: "#d9bfff",
          background: "#f2f2f2",
          text: "#000000",
        },
      },
      dark: {
        colors: {
          primary: "#1c0047",
          secondary: "#b280ff",
          accent: "#140032",
          light: "#d9bfff",
          background: "#222222",
          text: "#ffffff",
        },
      },
    },
  },
});
