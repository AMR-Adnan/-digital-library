import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import "./tailwind.css";
import App from "./App.vue";
import observe from "./directives/observe";

const app = createApp(App);
app.use(router);
app.use(createPinia());
app.directive("observe", observe);

// init UI store (dark mode)
import { useUIStore } from "./stores/ui";
const pinia = app._context.provides.pinia || null;
try {
  const ui = useUIStore();
  ui.init();
} catch (e) {}

app.mount("#app");
