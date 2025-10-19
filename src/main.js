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
app.mount("#app");
