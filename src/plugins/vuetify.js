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
          primary: "#9854cb",
          primaryVariant: "#64379f",
          secondary: "#75e8e7",
          accent: "#27104e",
          light: "#ddacf5",
          background: "#f2f2f2",
          text: "#000000",
        },
      },
      dark: {
        colors: {
          primary: "#9854cb",
          primaryVariant: "#64379f",
          secondary: "#75e8e7",
          accent: "#27104e",
          light: "#ddacf5",
          background: "#222222",
          text: "#ffffff",
        },
      },
    },
  },
});
