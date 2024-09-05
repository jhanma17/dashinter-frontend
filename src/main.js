/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Plugins
import { registerPlugins } from "@/plugins";

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";

// axios
import axios from "axios";
import VueAxios from "vue-axios";

const app = createApp(App);

app.config.globalProperties.window = window;

const baseURL = import.meta.env.VITE_API_ENDPOINT;
axios.defaults.baseURL = baseURL;

app.use(VueAxios, axios);

registerPlugins(app);

app.mount("#app");
